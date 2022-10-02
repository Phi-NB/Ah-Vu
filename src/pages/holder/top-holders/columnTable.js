import lang from "../../../lang/en.json";
import { Tooltip } from "@mui/material";
import { timeConverter, convertValueNumber, convertPercent } from "utility";

const COLUMNS = [
  {
    Header: lang.lang_text_holders,
    headerClassName: "",
    accessor: "holder",
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
        <div className=" mw-paragrap limit-length ">
          {row.value ? row.value : "--"}
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
        title={row.value ? convertValueNumber(row.value) : "--"}
      >
        <div className=" mw-paragrap limit-length">
          {row.value ? convertValueNumber(row.value) : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: lang.lang_text_date_reported,
    headerClassName: "",
    accessor: "date_reported",
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
        <div className=" mw-paragrap limit-length">
          {row.value ? timeConverter(row.value) : "--"}
        </div>
      </Tooltip>
    ),
  },
  {
    Header: lang.lang_text_out,
    headerClassName: "",
    accessor: "out",
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
        title={row.value ? convertPercent(row.value) : "--"}
      >
        <div className=" mw-paragrap limit-length">
          {row.value ? convertPercent(row.value) : "--"}
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
        title={row.value ? convertValueNumber(row.value) : "--"}
      >
        <div className=" mw-paragrap limit-length">
          {row.value ? convertValueNumber(row.value) : "--"}
        </div>
      </Tooltip>
    ),
  },
];

export default COLUMNS;
