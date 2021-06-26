import { ReactElement } from "react";
declare type side = "Server" | "Client";
export interface PaginationProps {
    pageFrom?: side;
    firstPage?: (pageNo: number, pageSize?: number, ...arg: any[]) => Promise<number>;
    lastPage?: (pageNo: number, pageSize?: number, ...arg: any[]) => Promise<number>;
    nextPage?: (pageNo?: number, pageSize?: number, ...arg: any[]) => Promise<boolean>;
    previousPage?: (pageNo?: number, pageSize?: number, ...arg: any[]) => Promise<boolean>;
}
export declare function Pagination({ pageFrom, firstPage, lastPage, nextPage, previousPage, }: PaginationProps): ReactElement;
export {};
//# sourceMappingURL=Pagination.d.ts.map