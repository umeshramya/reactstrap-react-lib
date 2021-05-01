import { ReactElement } from 'react';
import { PaginationProps } from "./Pagination";
/**
 * This column of table whoose array has to be passed as defination of table by user
 */
export interface column {
    /**
     * Column heading
     */
    Header: string;
    /**
     * key of object of data to be passed to table
     */
    accessor: string;
    /**
     * function component to be passed for display in the cell
     */
    Cell?: (value: any) => ReactElement;
    /** sort thr column
     * any and string treated as string
     * thids is function useful for sorting
    */
    dataType: "number" | "string" | "Date" | "boolean" | "any";
}
export interface Props {
    columns: column[];
    data: [];
    filter: "Global" | "Column" | "Both" | "None";
    sort: boolean;
    pagination?: PaginationProps;
}
export default function index({ columns, data, filter, sort, pagination }: Props): ReactElement;
//# sourceMappingURL=index.d.ts.map