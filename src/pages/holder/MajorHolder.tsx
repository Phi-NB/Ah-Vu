import React from "react";
import { useIntl } from "react-intl";
import Table from "./Table";
import style from "./holder.module.css";
import COLUMNS1 from "./table-marjor/columnTable";
import COLUMNS2 from "./top-holders/columnTable";

export interface IMajorHolderProps {
  data: {
    major_holders: Array<any>;
    institutional_holders: Array<any>;
    mutualfund_holders: Array<any>;
  };
}

export default function MajorHolder(props: IMajorHolderProps) {
  const { data } = props;
  const data1 = data.major_holders;
  const data2 = data.institutional_holders;
  const data3 = data.mutualfund_holders;
  const intl = useIntl();
  return (
    <div>
      <div className={style.titleTable}>
        <p>{intl.formatMessage({ id: "lang_majors_holdder" })}</p>
      </div>
      <div className={style.firstTableEmpty}>
        <p>{intl.formatMessage({ id: "lang_breakDown" })}</p>
      </div>
      <Table data={data1} columns={COLUMNS1} classTable='table-description' />
      <div className={style.titleNameTable}>
        <p>
          {intl.formatMessage({
            id: "lang_top_institutional_holders",
          })}
        </p>
      </div>
      <Table data={data2} columns={COLUMNS2} classTable="top_holder" />
      <div className={style.titleNameTable}>
        <p>{intl.formatMessage({ id: "lang_top_mutual_fund_holders" })}</p>
      </div>
      <Table data={data3} columns={COLUMNS2} classTable="top_holder" />
    </div>
  );
}
