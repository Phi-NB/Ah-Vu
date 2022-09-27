import React, { Fragment, useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columnTableDescription";
import { obj } from "api/api";
import ReactTooltip from "react-tooltip";

export interface ITableDescriptionProps {
  props: Array<any>;
}

export default function TableDescription(props: ITableDescriptionProps) {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => props.props, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <Fragment>
      <div className="table-container">
        <ReactTooltip place="bottom" effect="solid" />
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
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
            {rows.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
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
