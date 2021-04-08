/// <reference types="react" />
import { AxiosError, AxiosResponse } from 'axios';
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
}
declare function Delete({ curUri: uri, id, onSuccess, onError, successCallBack, errorCallback }: Props): JSX.Element;
export default Delete;
//# sourceMappingURL=FormDelete.d.ts.map