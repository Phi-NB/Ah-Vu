import lang from "../../../lang/en.json";
import style from "./../holder.module.css";
import { Tooltip } from "@mui/material";
import { timeConverter, convertValueNumber } from "utility";

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
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "14px",
              padding: "8px",
              bgcolor: "#363C4E",
              color: "#EEF0F1",
              border: "1px solid #363C4E",
            },
          },
        }}
        title={row.value ? row.value : "--"}
      >
        <div className="mw-paragrap limit-length">
          {row.value ? row.value : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: lang.lang_transaction,
    headerClassName: "",
    accessor: "transaction",
    Cell: (row) => (
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "14px",
              padding: "8px",
              bgcolor: "#363C4E",
              color: "#EEF0F1",
              border: "1px solid #363C4E",
            },
          },
        }}
        title={row.value ? row.value : "--"}
      >
        <div className="mw-paragrap limit-length">
          {row.value ? row.value : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: lang.lang_type,
    headerClassName: "",
    accessor: "type",
    Cell: (row) => (
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "14px",
              padding: "8px",
              bgcolor: "#363C4E",
              color: "#EEF0F1",
              border: "1px solid #363C4E",
            },
          },
        }}
        title={row.value ? row.value : "--"}
      >
        <div className="mw-paragrap limit-length">
          {row.value ? row.value : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: lang.lang_value,
    headerClassName: "",
    accessor: "value",
    Cell: (row) => (
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "14px",
              padding: "8px",
              bgcolor: "#363C4E",
              color: "#EEF0F1",
              border: "1px solid #363C4E",
            },
          },
        }}
        title={row.value ? row.value : "--"}
      >
        <div className="mw-paragrap limit-length">
          {row.value ? convertValueNumber(row.value) : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: lang.lang_date,
    headerClassName: "",
    accessor: "date",
    Cell: (row) => (
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "14px",
              padding: "8px",
              bgcolor: "#363C4E",
              color: "#EEF0F1",
              border: "1px solid #363C4E",
            },
          },
        }}
        title={row.value ? row.value : "--"}
      >
        <div className="mw-paragrap limit-length">
          {row.value ? timeConverter(row.value) : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: lang.lang_text_shares,
    headerClassName: "",
    accessor: "shares",
    Cell: (row) => (
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "14px",
              padding: "8px",
              bgcolor: "#363C4E",
              color: "#EEF0F1",
              border: "1px solid #363C4E",
            },
          },
        }}
        title={row.value ? row.value : "--"}
      >
        <div className="mw-paragrap limit-length">
          {row.value ? convertValueNumber(row.value) : "--"}
        </div>
      </Tooltip>
    ),
  },
];

export default COLUMNS;
