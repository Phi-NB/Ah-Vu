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
import Tooltip from "@mui/material/Tooltip";
import { DataTypeProvider } from "@devexpress/dx-react-grid";
import { useIntl } from "react-intl";
import { getDataTable } from "./convertDataIncome";
import { getDataColumns } from "./columnIncome";
import NoData from "./NoData";

export interface IIncomeStatementProps {
  data: {
    profile: { financial_currency: string };
    financials: {
      income: [];
      income_ttm: [];
      income_quarterly: [];
      income_quarterly_ttm: []
    };
  };
  titleTable: string;
  queryString: string;
}

export function IncomeStatement(props: IIncomeStatementProps) {
  const { data, titleTable, queryString } = props;
  const [expandedRowIds, setExpandenRowIds] = useState<any>([]);
  const intl = useIntl();

  const getChildRows = (row: any, rootRows: any) => {
    return row ? row.items : rootRows;
  };

  const [tableColumnExtensions] = useState([]);

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

  const TooltipFormatter = (value: any) => {
    console.log(value);
    return (
      <Tooltip title={value.value}>
        <span>{value}</span>
      </Tooltip>
    );
  };

  const CellTooltip = (props: any) => {
    console.log(props);
    return (
      <DataTypeProvider
        for={getDataColumns(data).map(({ name }: any) => name)}
        formatterComponent={TooltipFormatter}
        {...props}
      />
    );
  };

  if (queryString === "Annual") {
    if (
      data.financials.income.length === 0 &&
      data.financials.income_ttm.length === 0
    ) {
      return <NoData />;
    }
  } else {
    if (
      data.financials.income_quarterly.length === 0 &&
      data.financials.income_quarterly_ttm.length === 0
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
          {/* <CellTooltip /> */}
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
