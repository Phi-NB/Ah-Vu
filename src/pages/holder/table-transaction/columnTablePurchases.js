import lang from "../../../lang/en.json";
const COLUMNS = [
  {
    Header: lang.lang_insider_purchases_last_6_months,
    headerClassName: "border-none",
    accessor: "insider_purchases_last6_months",
    Cell: (row) => (
      <div className="mw-paragrap limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: lang.lang_text_shares,
    headerClassName: "border-none",
    accessor: "shares",
    Cell: (row) => (
      <div className="mw-paragrap limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: lang.lang_trans,
    headerClassName: "border-none",
    accessor: "trans",
    Cell: (row) => (
      <div className="mw-paragrap limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
];

export default COLUMNS;
