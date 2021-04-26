import { ReactElement } from 'react';
export interface column {
    Header: string;
    accessor: string;
    Cell?: ({}: {}) => ReactElement;
}
export interface Props {
    columns: column[];
    data: [];
}
export default function index({ columns, data }: Props): ReactElement;
//# sourceMappingURL=index.d.ts.map