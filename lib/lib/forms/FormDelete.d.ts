/// <reference types="react" />
import { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import { RequestMethods } from "./types";
interface Props {
    /**This API uri for deleteing Post request */
    curUri: string;
    /**id is value by which the record has to be deleted  */
    id: any;
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
   * This function is for validation before submitting  in the form
   * In case of failed validadtion return string which is not equal to ""
   * If validation did succeed then return ""
   */
    validation?: () => string;
    /**
     * THis is form submit method
     * value could be "GET" | "POST" | "PUT" | "DELETE"
     */
    method?: RequestMethods;
    /**
     * AxiosRequestConfig optional config to be passed in the api call
     */
    AxiosRequestConfig?: AxiosRequestConfig;
}
declare function Delete({ curUri, id, onSuccess, onError, successCallBack, errorCallback, validation, method, AxiosRequestConfig }: Props): JSX.Element;
export default Delete;
//# sourceMappingURL=FormDelete.d.ts.map