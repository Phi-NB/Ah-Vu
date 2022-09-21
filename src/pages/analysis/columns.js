export const COLUMNS = [
  {
    Header: "earnings_estimate",
    accessor: "earnings_estimate",
    Cell: (row) => (
      <div className="mw-paragrap limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: "no_of_analysts",
    accessor: "no_of_analysts",
    Cell: (row) => (
      <div className="mw-paragrap limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: "avg_estimate",
    headerClassName: "text-left",
    accessor: "avg_estimate",
    Cell: (row) => (
      <div className="text-right fullw100 mw-paragrap-50 limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: "low_estimate",
    headerClassName: "text-left",
    accessor: "low_estimate",
    Cell: (row) => (
      <div className="text-right fullw100 mw-paragrap-50 limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: "high_estimate",
    headerClassName: "text-left",
    accessor: "high_estimate",
    Cell: (row) => (
      <div className="text-right fullw100 mw-paragrap-50 limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
];
