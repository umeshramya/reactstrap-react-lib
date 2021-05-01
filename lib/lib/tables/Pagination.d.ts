import { ReactElement } from 'react';
declare type side = "Server" | "Client";
export interface PaginationProps {
    pageNo?: number;
    pageFrom?: side;
    firstPage?: (...arg: any[]) => Promise<any[]>;
    lastPage?: (...arg: any[]) => Promise<any[]>;
    nextPage?: (...arg: any[]) => Promise<any[]>;
    previousPage?: (...arg: any[]) => Promise<any[]>;
}
export declare function Pagination({ pageNo, pageFrom, firstPage, lastPage, nextPage, previousPage, }: PaginationProps): ReactElement;
export {};
//# sourceMappingURL=Pagination.d.ts.map