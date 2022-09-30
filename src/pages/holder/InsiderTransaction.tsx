import React from "react";
import { useIntl } from "react-intl";
import Table from "./Table";
import style from "./holder.module.css";
import COLUMNS1 from "./table-transaction/columnTablePurchases";
import COLUMNS2 from "./table-transaction/columnTableReported";
import COLUMNS3 from "./table-transaction/columnTableInstitutional";

export interface IInsiderTransactionProps {
  data: {
    insider_tran_last_six: Array<any>;
    insider_tran_reported: Array<any>;
    insider_tran_purchases: Array<any>;
  };
}


export default function InsiderTransaction(props: IInsiderTransactionProps) {
  const { data } = props;
  const data1 = data.insider_tran_last_six;
  const data2 = data.insider_tran_reported;
  const data3 = data.insider_tran_purchases;
  const intl = useIntl();
  return (
    <div>
      <div className={style.titleTable}>
        <p>{intl.formatMessage({ id: "lang_insider_transaction" })}</p>
      </div>
      <Table data={data1} columns={COLUMNS1} />
      <Table data={data3} columns={COLUMNS3} />
      <Table data={data2} columns={COLUMNS2} classTable='insider_transaction' />
    </div>
  );
}
