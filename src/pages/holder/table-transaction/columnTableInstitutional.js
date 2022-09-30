import lang from "../../../lang/en.json";
import style from "./../holder.module.css";

const COLUMNS = [
  {
    Header:
      lang.lang_net_institutional_purchases_prior_quarter_to_latest_quarter,
    headerClassName: "border-none",
    accessor: "net_institutional_purchases_prior_quarter_to_latest_quarter",
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
];


export default COLUMNS;