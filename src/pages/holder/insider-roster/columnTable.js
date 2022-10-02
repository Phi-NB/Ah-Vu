import lang from "../../../lang/en.json";
import style from "./../holder.module.css";
import { Tooltip } from "@mui/material";
import { timeConverter, convertValueNumber } from "utility";

export const COLUMNS = [
  {
    Header: lang.lang_individual_or_entity,
    headerClassName: "",
    accessor: (props) => {
      return (
        <div className={style.columnFistTableInsider}>
          <p className="mw-paragrap limit-length">
            {props.individual_or_entity
              ? props.individual_or_entity.toUpperCase()
              : "--"}
          </p>
          <p className="mw-paragrap limit-length">{props.title}</p>
        </div>
      );
    },
    Cell: (row) => {
      return (
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
          <div className=" fullw100 mw-paragrap limit-length">
            {row.value ? row.value : "--"}
          </div>
        </Tooltip>
      );
    },
  },
  {
    Header: lang.lang_most_recent_transaction,
    headerClassName: "",
    accessor: "most_recent_transaction",
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
        <div className=" fullw100 mw-paragrap limit-length">
          {row.value ? row.value : "--"}
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
        title={row.value ? timeConverter(row.value) : "--"}
      >
        <div className="fullw100 mw-paragrap limit-length">
          {row.value ? timeConverter(row.value) : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: lang.lang_shares_owned_as_of_transaction_date,
    headerClassName: "",
    accessor: "shares_owned_as_of_transaction_date",
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
        title={row.value ? convertValueNumber(row.value) : "--"}
      >
        <div className=" fullw100 mw-paragrap limit-length">
          {row.value ? convertValueNumber(row.value) : "--"}
        </div>
      </Tooltip>
    ),
  },
];
