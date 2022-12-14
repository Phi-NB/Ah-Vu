import React from 'react';
import { useIntl } from "react-intl";
import Table from './Table'
import style from './holder.module.css'
import { COLUMNS } from './insider-roster/columnTable';

export interface IInsiderRosterProps {
  data: Array<any>
}

export default function InsiderRoster (props: IInsiderRosterProps) {
  const {data} = props;
  const intl = useIntl();
  return (
    <div>
      <div className={style.titleTable}>
        <p>{intl.formatMessage({ id: "lang_insider_roster" })}</p>
      </div>
      <Table data={data} columns={COLUMNS} classTable='insider_roster' />
    </div>
  );
}
