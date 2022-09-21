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
import { getDataTable } from "./convertDataCashFlow";
import { getDataColumns } from "./columnIncome";

export interface ICashFlowProps {
  data: {
    profile: { financial_currency: string };
    financials: { income: []; income_ttm: [] };
  };
  titleTable: string;
}

export function CashFlow(props: ICashFlowProps) {
  const { data, titleTable } = props;
  const [expandedRowIds, setExpandenRowIds] = useState<any>([]);

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
  return (
    <div>
      <div className={style.profileInfoTable}>
        <div className={style.profileInfo}>
          <div className={style.profileInfoIncome}>{titleTable}</div>
          <div className={style.profileInfoFinancial}>
            Currency in {data?.profile.financial_currency}. All numbers in
            thousands
          </div>
        </div>
        {allOpen ? (
          <button
            className={style.profileInfoTableBtnEpCo}
            onClick={collapseAll}
          >
            <Image src="/collapse.svg" width={12} height={12} />
            <span style={{ marginLeft: 12 }}>Collapse All</span>
          </button>
        ) : (
          <button className={style.profileInfoTableBtnEpCo} onClick={expandAll}>
            <Image src="/expand.svg" width={12} height={12} />
            <span style={{ marginLeft: 12 }}>Expand All</span>
          </button>
        )}
      </div>
      <Paper>
        <Grid rows={getDataTable(data)} columns={getDataColumns(data)}>
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
