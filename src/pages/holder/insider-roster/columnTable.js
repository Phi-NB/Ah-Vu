import lang from "../../../lang/en.json";
import style from './../holder.module.css'

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
  return value = parseInt(value).toLocaleString();
};

export const COLUMNS = [
  {
    Header: lang.lang_individual_or_entity,
    headerClassName: "",
    accessor: (props) => {
      return (
        <div className={style.columnFistTableInsider}>
          <p className="mw-paragrap limit-length">
            {props.individual_or_entity.toUpperCase()}
          </p>
          <p className="mw-paragrap limit-length">{props.title}</p>
        </div>
      );
    },
    Cell: (row) => {
      return (
        <div className="fullw100 mw-paragrap limit-length">
          {row.value ? row.value : "--"}
        </div>
      );
    },
  },
  {
    Header: lang.lang_most_recent_transaction,
    headerClassName: "",
    accessor: "most_recent_transaction",
    Cell: (row) => (
      <div className=" fullw100 mw-paragrap limit-length">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: lang.lang_date,
    headerClassName: "",
    accessor: "date",
    Cell: (row) => (
      <div className="fullw100 mw-paragrap limit-length">
        {row.value ? timeConverter(row.value) : "--"}
      </div>
    ),
  },
  {
    Header: lang.lang_shares_owned_as_of_transaction_date,
    headerClassName: "",
    accessor: "shares_owned_as_of_transaction_date",
    Cell: (row) => (
      <div className=" fullw100 mw-paragrap limit-length">
        {row.value ? convertValueNumber(row.value) : "--"}
      </div>
    ),
  },
];
