import lang from "../../../lang/en.json";
import { Tooltip } from "@mui/material";

const COLUMNS = [
  {
    Header: lang.lang_description,
    headerClassName: "border-none",
    accessor: "description",
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
    Header: lang.lang_value,
    headerClassName: "border-none",
    accessor: "percent_shares",
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
];

export default COLUMNS;
