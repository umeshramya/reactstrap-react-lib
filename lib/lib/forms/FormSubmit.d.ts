import { AxiosError, AxiosResponse } from 'axios';
import { ReactFragment } from 'react';
interface Props {
    /** req.body for post request */
    curObj: {};
    /**API rroute uri for post request */
    curUri: string;
    /**This is Form input elements. do not add Form elemet thise get rendered inside the form itself */
    Inputs: ReactFragment;
    /** pass function with reseting the values i.e. curObj and etc */
    reset: () => void;
    /**
     * This function is call back on success from server HTTP response
     * @res This on success response from server
     */
    onSuccess: (res: AxiosResponse, successCallBack?: (...arg: any) => any) => string;
    /**
     * This is props as callback  function to passesed inside onSuccess function
     */
    successCallBack?: (...arg: any) => any;
    /**
     * This function is call back on error from server HTTP response
     * @error error eecived from server
     */
    onError: (error: AxiosError, errorCallback?: (...arg: any) => any) => string;
    /**
     * This is props as a callback  function to passesed inside onError function
     */
    errorCallback?: (...arg: any) => any;
    /**
     * This function is for validation before submitting  inthe front end itself
     * in case of failed validadtion return string
     * If validation did succeed return ""
     */
    validation?: () => string;
}
declare const FormSubmit: ({ curObj, curUri, Inputs, reset, onSuccess, onError, successCallBack, errorCallback, validation }: Props) => JSX.Element;
export default FormSubmit;
//# sourceMappingURL=FormSubmit.d.ts.map