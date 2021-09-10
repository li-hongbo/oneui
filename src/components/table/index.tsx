import React from "react";
import { FC } from "react";
import RcTable from "rc-table";
import { ColumnsType } from "rc-table/lib/interface";

export type sizeType = "large" | "small";

export interface RecordType {
  [key: string]: number | string;
}

export interface ITableProps {
  size?: sizeType;
  columns: ColumnsType<RecordType>;
  data: readonly RecordType[];
}
const Table: FC<ITableProps> = (props) => {
  const { columns, data } = props;
    return <RcTable columns={columns} data={data}></RcTable>;
};

Table.defaultProps = {
  size: "large",
};

export default Table;
