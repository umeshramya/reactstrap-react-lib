import { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { axiosMethodObj } from "./types";
export interface propMaster {
    /**
     * This is type which is array
     * 0 th element is PUT | POST | GET | DELETE
     * 1 st element is data to sent by axios
     * for GET and DELTE there is no data of 1 st element
     * for POST and PUT data has to sent i.e 1 st element in array
     * typeical decleartion in your project is
     * curObj = {["GET"]} or curObj = {["POST", data]} or curObj = {["DELETE"]} or curObj = {["PUT", data]}
     */
    curObj: axiosMethodObj;
    /**API rroute uri for post request */
    curUri: string;
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
     * This function is for validation before submitting  in the form
     * In case of failed validadtion return string which is not equal to ""
     * If validation did succeed then return ""
     */
    validation?: () => string;
    /**
     * AxiosRequestConfig optional config to be passed in the api call
     */
    AxiosRequestConfig?: AxiosRequestConfig;
    /**
     * This iis used as toggle, whenever this prop chnages it calls the submit form function
     */
    triggerSubmit?: boolean;
    /**
     * This iis used as toggle, whenever this prop chenges it triggeers reset form fucntoins
     */
    triggerReset?: boolean;
}
export interface recpthaSetting {
    siteKey: string;
    callBack: string;
    action: string;
}
//# sourceMappingURL=interfaces.d.ts.map