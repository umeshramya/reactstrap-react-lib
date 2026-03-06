// hooks/useReCaptcha.ts
import { useState, useCallback, useEffect } from 'react';

export interface UseReCaptchaProps {
  siteKey: string;
  action: string;
  onTokenReceived?: (token: string) => void;
  onError?: (error: Error) => void;
  autoLoad?: boolean;
}

export const useReCaptcha = ({
  siteKey,
  action,
  onTokenReceived,
  onError,
  autoLoad = true
}: UseReCaptchaProps) => {
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const loadRecaptchaScript = useCallback(() => {
    if (typeof window === 'undefined' || isRecaptchaLoaded) return;

    // Check if script already exists
    if (document.querySelector('script[src*="recaptcha"]')) {
      setIsRecaptchaLoaded(true);
      return;
    }

    setIsLoading(true);
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      setIsRecaptchaLoaded(true);
      setIsLoading(false);
      setError(null);
    };
    
    script.onerror = () => {
      const errorMsg = 'Failed to load reCAPTCHA script';
      setError(errorMsg);
      setIsLoading(false);
      onError?.(new Error(errorMsg));
    };
    
    document.head.appendChild(script);
  }, [siteKey, isRecaptchaLoaded, onError]);

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
            const newToken = await grecaptcha.execute(siteKey, { action });
            setToken(newToken);
            onTokenReceived?.(newToken);
            resolve(newToken);
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
  }, [isRecaptchaLoaded, siteKey, action, onTokenReceived, onError]);

  const reset = useCallback(() => {
    setToken(null);
    setError(null);
  }, []);

  // Auto-load script if enabled
  useEffect(() => {
    if (autoLoad && siteKey) {
      loadRecaptchaScript();
    }
  }, [autoLoad, siteKey, loadRecaptchaScript]);

  return {
    executeRecaptcha,
    loadRecaptchaScript,
    reset,
    isRecaptchaLoaded,
    isLoading,
    error,
    token
  };
};