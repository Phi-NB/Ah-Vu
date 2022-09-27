import lang from '../../lang/en.json'
export const COLUMNS = [
  {
    Header: "Excercised",
    headerClassName: "text-right",
    accessor: "exercised",
    Cell: (row) => (
      <div className="text-right fullw100 mw-paragrap-50 limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: "Year Born",
    headerClassName: "text-right",
    accessor: "year_born",
    Cell: (row) => (
      <div className="text-right fullw100 mw-paragrap-50 limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
];
