import { ReactElement } from "react";
declare type dateString = string;
interface Props {
    setDateTime: dateString;
    getDateTime: (val: dateString) => void;
    onLoad?: (val: dateString) => void;
}
export default function Index(props: Props): ReactElement;
export {};
//# sourceMappingURL=Index.d.ts.map