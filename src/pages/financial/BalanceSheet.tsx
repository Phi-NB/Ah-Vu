import React, { useState } from "react";
import Image from "next/image";
import style from "./financial.module.css";
import Paper from "@mui/material/Paper";
import { TreeDataState, CustomTreeData } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableTreeColumn,
} from "@devexpress/dx-react-grid-material-ui";
import { useIntl } from "react-intl";
import { getDataTable } from "./convertDataBalance";
import { getDataColumns } from "./columnBalance";
import NoData from "./NoData"

export interface IBalanceSheetProps {
  data: {
    profile: { financial_currency: string };
    financials: { balance_sheet: []; balance_sheet_quarterly: [] };
  };
  titleTable: string;
  queryString: string;
}

export function BalanceSheet(props: IBalanceSheetProps) {
  const { data, titleTable, queryString } = props;
  const [expandedRowIds, setExpandenRowIds] = useState<any>([]);
  const intl = useIntl();

  const getChildRows = (row: any, rootRows: any) => {
    return row ? row.items : rootRows;
  };

  const [tableColumnExtensions] = useState([
    { columnName: "name", width: 800 },
  ]);

  const [allOpen, setAllOpen] = useState(false);
  const expandAll = () => {
    setAllOpen(true);
    let arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push(i);
    }
    setExpandenRowIds(arr);
  };
  const collapseAll = () => {
    setAllOpen(false);
    setExpandenRowIds([]);
  };

  if (queryString === "Annual") {
    if (data.financials.balance_sheet.length === 0) {
      return <NoData />;
    }
  } else {
    if (
      data.financials.balance_sheet_quarterly.length === 0
    ) {
      return <NoData />;
    }
  }
  return (
    <div>
      <div className={style.profileInfoTable}>
        <div className={style.profileInfo}>
          <div className={style.profileInfoIncome}>{titleTable}</div>
          <div className={style.profileInfoFinancial}>
            <span>{intl.formatMessage({ id: "lang_currency_in" })}</span>
            {data?.profile.financial_currency}
            <span>{intl.formatMessage({ id: "lang_all_numbers" })}</span>
          </div>
        </div>
        {allOpen ? (
          <button
            className={style.profileInfoTableBtnEpCo}
            onClick={collapseAll}
          >
            <Image src="/ic-collapse.png" width={12} height={12} />
            <span style={{ marginLeft: 12 }}>
              {intl.formatMessage({ id: "lang_collapse" })}
            </span>
          </button>
        ) : (
          <button className={style.profileInfoTableBtnEpCo} onClick={expandAll}>
            <Image src="/ic-expand.png" width={12} height={12} />
            <span style={{ marginLeft: 12 }}>
              {intl.formatMessage({ id: "lang_expand" })}
            </span>
          </button>
        )}
      </div>
      <Paper>
        <Grid
          rows={getDataTable(data, queryString)}
          columns={getDataColumns(data)}
        >
          <TreeDataState
            expandedRowIds={expandedRowIds}
            onExpandedRowIdsChange={setExpandenRowIds}
          />
          <CustomTreeData getChildRows={getChildRows} />
          <Table columnExtensions={tableColumnExtensions} />
          <TableHeaderRow />
          <TableTreeColumn for="breakDown" />
        </Grid>
      </Paper>
    </div>
  );
}
