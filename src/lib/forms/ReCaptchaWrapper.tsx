
// components/ReCaptchaWrapper.tsx
import React, { useEffect, useState, useCallback } from 'react';

export interface ReCaptchaConfig {
  siteKey: string;
  action: string;
}

interface ReCaptchaWrapperProps {
  config: ReCaptchaConfig;
  onTokenReceived: (token: string) => void;
  onError?: (error: Error) => void;
  children: (props: {
    executeRecaptcha: () => Promise<string>;
    isRecaptchaLoaded: boolean;
    isLoading: boolean;
    error: string | null;
  }) => React.ReactNode;
}

const ReCaptchaWrapper: React.FC<ReCaptchaWrapperProps> = ({
  config,
  onTokenReceived,
  onError,
  children
}) => {
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load reCAPTCHA script
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadRecaptchaScript = () => {
      // Check if script already exists
      if (document.querySelector('script[src*="recaptcha"]')) {
        setIsRecaptchaLoaded(true);
        return;
      }

      setIsLoading(true);
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/enterprise.js?render=${config.siteKey}`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        console.log('reCAPTCHA Enterprise script loaded');
        setIsRecaptchaLoaded(true);
        setIsLoading(false);
        setError(null);
      };
      
      script.onerror = () => {
        const errorMsg = 'Failed to load reCAPTCHA script';
        console.error(errorMsg);
        setError(errorMsg);
        setIsLoading(false);
        setIsRecaptchaLoaded(false);
        onError?.(new Error(errorMsg));
      };
      
      document.head.appendChild(script);
    };

    loadRecaptchaScript();
  }, [config.siteKey, onError]);

  const executeRecaptcha = useCallback(async (): Promise<string> => {
    if (!isRecaptchaLoaded) {
      throw new Error('reCAPTCHA not loaded yet');
    }

    try {
      setIsLoading(true);
      setError(null);

      //@ts-ignore
      const grecaptcha = window.grecaptcha?.enterprise || window.grecaptcha;
      
      if (!grecaptcha) {
        throw new Error('reCAPTCHA not available');
      }

      return new Promise((resolve, reject) => {
        grecaptcha.ready(async () => {
          try {
            const token = await grecaptcha.execute(config.siteKey, {
              action: config.action
            });
            onTokenReceived(token);
            resolve(token);
          } catch (error) {
            const errorMsg = error instanceof Error ? error.message : 'reCAPTCHA execution failed';
            setError(errorMsg);
            onError?.(error instanceof Error ? error : new Error(errorMsg));
            reject(error);
          } finally {
            setIsLoading(false);
          }
        });
      });
    } catch (error) {
      setIsLoading(false);
      const errorMsg = error instanceof Error ? error.message : 'reCAPTCHA execution failed';
      setError(errorMsg);
      onError?.(error instanceof Error ? error : new Error(errorMsg));
      throw error;
    }
  }, [isRecaptchaLoaded, config.siteKey, config.action, onTokenReceived, onError]);

  return (
    <>
      {children({
        executeRecaptcha,
        isRecaptchaLoaded,
        isLoading,
        error
      })}
    </>
  );
};

export default ReCaptchaWrapper;