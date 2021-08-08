import { ReactElement } from "react";
import { AxiosError, AxiosResponse } from "axios";
interface Props {
    fileName: string;
    uri: string;
    onSuccess: (res: AxiosResponse) => string;
    onError: (err: AxiosError) => string;
}
/**
 *
 *@props accept?: string;
 *@props fileName: string;
 *@props uri: string;
 *@props onSuccess: (res: AxiosResponse) => string;
 *@props onError: (err: AxiosError) => string;
 *@returns ReactElement
 */
export default function FormUpload(props: Props): ReactElement;
export {};
//# sourceMappingURL=ImageUplaod.d.ts.map