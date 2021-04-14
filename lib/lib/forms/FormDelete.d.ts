/// <reference types="react" />
import { propMaster } from "../Interfaces/interfaces";
interface Props extends propMaster {
    /**id is value by which the record has to be deleted  */
    id: any;
}
declare function Delete({ curUri, curObj, onSuccess, onError, successCallBack, errorCallback, validation, AxiosRequestConfig }: Props): JSX.Element;
export default Delete;
//# sourceMappingURL=FormDelete.d.ts.map