import { ReactElement } from 'react';
declare type dateString = string;
interface Props {
    setDateTime: dateString;
    getDateTime?: (fun: (val: dateString) => void) => dateString;
}
export default function Index(props: Props): ReactElement;
export {};
//# sourceMappingURL=Index.d.ts.map