import React, { Fragment, useMemo } from "react";
import { useTable } from "react-table";
import ReactTooltip from "react-tooltip";

export interface ITableProps {
  data: Array<any>,
  columns: Array<any>
  classTable?: string
}

export default function Table (props: ITableProps) {
  const columns = useMemo(() => props.columns, [props.columns]);
  const data = useMemo(() => props.data, [props.data]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <Fragment>
      <div className={`table-container table-holder ${ props.classTable ? props.classTable: '' } `}>
        <ReactTooltip place="bottom" effect="solid" />
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    key={index}
                    {...column.getHeaderProps([
                      {
                        className: column.headerClassName,
                      },
                    ])}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);

              return (
                <tr key={index} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td
                        key={index}
                        {...cell.getCellProps([
                          { className: cell.cellClassName },
                        ])}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
