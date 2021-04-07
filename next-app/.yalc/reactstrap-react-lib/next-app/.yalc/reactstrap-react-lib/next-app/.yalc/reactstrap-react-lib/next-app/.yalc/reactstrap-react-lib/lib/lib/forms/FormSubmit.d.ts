import { AxiosError, AxiosResponse } from 'axios';
import { ReactFragment } from 'react';
interface Props {
    /** req.body for post request */
    curObj: {};
    /**API rroute uri for post request */
    curUri: string;
    /**This is Form input elements. do not add Form elemet thise get rendered inside the form itself */
    Inputs: ReactFragment;
    /**This prop is message to be set on Suucess api call */
    successMessage?: string;
    /**This prop is message to be displayed on alert on  API call error */
    errorMessage?: string;
    /** pass function with reseting the values i.e. curObj and etc */
    reset: () => void;
    /**
     * This function is call back on success from server HTTP response
     * @res This on success response from server
     */
    onSuccess?: (res: AxiosResponse, ...args: any) => any;
    /**
     * This function is call back on error from server HTTP response
     * @error error eecived from server
     */
    onError?: (error: AxiosError, ...args: any) => any;
}
declare const FormSubmit: ({ curObj, curUri, Inputs, successMessage, errorMessage, reset, onSuccess, onError }: Props) => JSX.Element;
export default FormSubmit;
//# sourceMappingURL=FormSubmit.d.ts.map