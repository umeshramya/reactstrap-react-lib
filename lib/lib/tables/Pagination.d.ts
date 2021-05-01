import { ReactElement } from 'react';
declare type side = "Server" | "Client";
export interface PaginationProps {
    pageNo?: number;
    pageFrom?: [side: side, Function: (...arg: any) => Promise<any[]>];
}
export declare function Pagination({ pageNo, pageFrom }: PaginationProps): ReactElement;
export {};
//# sourceMappingURL=Pagination.d.ts.map