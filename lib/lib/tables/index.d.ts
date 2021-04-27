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
export interface Props {
    columns: column[];
    data: [];
}
export default function index({ columns, data }: Props): ReactElement;
//# sourceMappingURL=index.d.ts.map