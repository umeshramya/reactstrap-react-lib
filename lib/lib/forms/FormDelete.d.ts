/// <reference types="react" />
import { propMaster } from "../Interfaces/interfaces";
declare type Props = Omit<propMaster, "reset">;
declare function Delete({ curUri, curObj, onSuccess, onError, successCallBack, errorCallback, validation, AxiosRequestConfig }: Props): JSX.Element;
export default Delete;
//# sourceMappingURL=FormDelete.d.ts.map