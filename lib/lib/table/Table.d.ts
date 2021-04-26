import { ReactElement } from 'react';
interface column {
    Header: string;
    accessor: string;
}
interface Props {
    columns: column[];
    data: [];
}
export default function TableCompenent({ columns, data }: Props): ReactElement;
export {};
//# sourceMappingURL=Table.d.ts.map