/// <reference types="react" />
import { AxiosError, AxiosResponse } from 'axios';
interface Props {
    /**This API uri for deleteing Post request */
    uri: string;
    /**id is value by which the record has to be deleted  */
    id: any;
    onSuccess?: (res: AxiosResponse, ...args: any) => any;
    /**This prop is message to be set on Suucess api call */
    successMessage?: string;
    /**
     * This function is call back on error from server HTTP response
     * @error error eecived from server
     */
    onError?: (error: AxiosError, ...args: any) => any;
    /**This prop is message to be displayed on alert on  API call error */
    errorMessage?: string;
}
declare function Delete({ uri, id, onSuccess, onError, successMessage, errorMessage }: Props): JSX.Element;
export default Delete;
//# sourceMappingURL=FormDelete.d.ts.map