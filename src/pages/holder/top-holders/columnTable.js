import lang from "../../../lang/en.json";

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

const convertPercent = (percent) => {
  return percent = (percent * 100).toFixed(2) + " %";
}


const convertValueNumber = (value) => {
  return value.toLocaleString();
};

const COLUMNS = [
  {
    Header: lang.lang_text_holders,
    headerClassName: "",
    accessor: "holder",
    Cell: (row) => (
      <div className=" mw-paragrap limit-length ">
        {row.value ? row.value : "--"}
      </div>
    ),
  },
  {
    Header: lang.lang_text_shares,
    headerClassName: "",
    accessor: "shares",
    Cell: (row) => (
      <div className=" mw-paragrap limit-length">
        {row.value ? convertValueNumber(row.value) : "--"}
      </div>
    ),
  },
  {
    Header: lang.lang_text_date_reported,
    headerClassName: "",
    accessor: "date_reported",
    Cell: (row) => (
      <div className=" mw-paragrap limit-length">
        {row.value ? timeConverter(row.value) : "--"}
      </div>
    ),
  },
  {
    Header: lang.lang_text_out,
    headerClassName: "",
    accessor: "out",
    Cell: (row) => (
      <div className=" mw-paragrap limit-length">
        {row.value ? convertPercent(row.value) : "--"}
      </div>
    ),
  },
  {
    Header: lang.lang_value,
    headerClassName: "",
    accessor: "value",
    Cell: (row) => (
      <div className=" mw-paragrap limit-length">
        {row.value ? convertValueNumber(row.value) : "--"}
      </div>
    ),
  },
];

export default COLUMNS
