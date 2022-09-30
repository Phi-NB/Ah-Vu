import lang from "../../../lang/en.json";
import style from "./../holder.module.css";
const timeConverter = (date) => {
  var a = new Date(date);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + " " + date + ", " + year + " ";
  return time;
};

const convertValueNumber = (value) => {
  return (value = parseInt(value).toLocaleString());
};

const COLUMNS = [
  {
    Header: lang.lang_insider,
    headerClassName: "",
    accessor: (props) => {
      return (
        <div className={style.columnFistTableInsider}>
          <p className="mw-paragrap limit-length">
            {props.insider.toUpperCase()}
          </p>
          <p className="mw-paragrap limit-length">{props.title}</p>
        </div>
      );
    },
    Cell: (row) => (
      <div className="mw-paragrap limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: lang.lang_transaction,
    headerClassName: "",
    accessor: "transaction",
    Cell: (row) => (
      <div className="mw-paragrap limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: lang.lang_type,
    headerClassName: "",
    accessor: "type",
    Cell: (row) => (
      <div className="mw-paragrap limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: lang.lang_value,
    headerClassName: "",
    accessor: "value",
    Cell: (row) => (
      <div className="mw-paragrap limit-length">
        {row.value ? convertValueNumber(row.value) : "--"}
      </div>
    ),
  },
  {
    Header: lang.lang_date,
    headerClassName: "",
    accessor: "date",
    Cell: (row) => (
      <div className="mw-paragrap limit-length">
        {row.value ? timeConverter(row.value) : "--"}
      </div>
    ),
  },
  {
    Header: lang.lang_text_shares,
    headerClassName: "",
    accessor: "shares",
    Cell: (row) => (
      <div className="mw-paragrap limit-length">
        {row.value ? convertValueNumber(row.value) : "--"}
      </div>
    ),
  },
];

export default COLUMNS;
