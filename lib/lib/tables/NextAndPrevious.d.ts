import { ReactElement } from 'react';
declare type side = "Server";
interface Props {
    pageNo: number;
    data: any[];
    pageFrom: [side: side, Function: (...arg: any) => any[]];
    nextPageApi: Function;
    preViousPageApi: Function;
    firstPageApi: Function;
    lastPageApi: Function;
}
export declare function NextAndPrevious(props: Props): ReactElement;
export {};
//# sourceMappingURL=NextAndPrevious.d.ts.map