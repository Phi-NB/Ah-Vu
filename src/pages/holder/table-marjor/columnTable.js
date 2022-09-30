import lang from "../../../lang/en.json";
const COLUMNS = [
  {
    Header: lang.lang_description,
    headerClassName: "border-none",
    accessor: "description",
    Cell: (row) => (
      <div className=" fullw100 mw-paragrap limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: lang.lang_value,
    headerClassName: "border-none",
    accessor: "percent_shares",
    Cell: (row) => (
      <div className=" fullw100 mw-paragrap limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
];

export default COLUMNS;
