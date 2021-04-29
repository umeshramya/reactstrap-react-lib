import { ReactElement } from 'react';
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
}
/**
 * type of request method
 */
declare type method = "POST" | "GET";
/**
 * this is data to passed on change of page in server side pagination
 */
declare type PageData = [];
/**
 * This is applicable to server side pagination
 * uri string for api call
 * querydata is data to passed
 */
declare type ApiRequest = [method: method, uri: string, queryData: {}];
/**
 * size of the page in client side pagination
 */
declare type PageSize = number;
export interface Props {
    columns: column[];
    data: [];
    filter: "Global" | "Column" | "Both" | "None";
    sort: boolean;
    pagination?: ["ServerSide", PageData | ApiRequest] | ["ClientSide", PageSize];
}
export default function index({ columns, data, filter, sort, pagination }: Props): ReactElement;
export {};
//# sourceMappingURL=index.d.ts.map