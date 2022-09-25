import type { NextPage } from "next";
import React, { useState } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { getExampleDataUrl, obj } from "api/api";
import { LooseObject } from "interfaces";
import Footer from "components/Footer/Footer";
import Something from "components/Something/Something";
import path from "path";
import fsPromises from "fs/promises";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import style from "./financial.module.css";
import { IncomeStatement } from "./IncomeStatement";
import { CashFlow } from "./CashFlow";
import { BalanceSheet } from "./BalanceSheet";
import { useIntl } from "react-intl";

type FinancialProps = {
  data: LooseObject;
  queryString: string;
};

interface IDataSelect {
  target: {
    value: string;
  };
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/json/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  return {
    props: { data: objectData },
  };
}

const Financial: NextPage<FinancialProps> = ({
  data = { text: "Financial" },
}) => {
  const intl = useIntl();
  const [displayIcome, setDisplayIcome] = useState<boolean>(true);
  const [displayBalance, setDisplayBalance] = useState<boolean>(false);
  const [displayCash, setDisplayCash] = useState<boolean>(false);
  const [dataSelect, setDataSelect] = useState<string>("Annual");

  const showTabIcome = () => {
    setDisplayIcome(true);
    setDisplayBalance(false);
    setDisplayCash(false);
  };
  const showTabBalance = () => {
    setDisplayIcome(false);
    setDisplayBalance(true);
    setDisplayCash(false);
  };
  const showTabCash = () => {
    setDisplayIcome(false);
    setDisplayBalance(false);
    setDisplayCash(true);
  };

  const getDataSelect = (value: IDataSelect) => {
    setDataSelect(value.target.value);
  };
  return (
    <React.Fragment>
      <main>
        <div className="lm_item_container medium fullw100">
          <div className="lm_content">
            <div className="wrapComponent">
              {/* ---- Financial ---- */}

              <div className="profile">
                <div className={style.profileTool}>
                  <div className={`${style.profileGroupBtn}`}>
                    <button
                      onClick={showTabIcome}
                      className={`${style.profileGroupBtnButton} ${
                        displayIcome ? style.profileGroupBtnButtonActive : ""
                      }`}
                    >
                      {intl.formatMessage({ id: "lang_title_icome" })}
                    </button>
                    <button
                      onClick={showTabBalance}
                      className={`${style.profileGroupBtnButton} ${
                        displayBalance ? style.profileGroupBtnButtonActive : ""
                      }`}
                    >
                      {intl.formatMessage({ id: "lang_title_balance" })}
                    </button>
                    <button
                      onClick={showTabCash}
                      className={`${style.profileGroupBtnButton} ${
                        displayCash ? style.profileGroupBtnButtonActive : ""
                      }`}
                    >
                      {intl.formatMessage({ id: "lang_title_cash_low" })}
                    </button>
                  </div>
                  <div>
                    <Select defaultValue="Annual" onChange={getDataSelect}>
                      <MenuItem value="Annual">
                        {intl.formatMessage({ id: "lang_select_annual" })}
                      </MenuItem>
                      <MenuItem value="Quarterly">
                        {intl.formatMessage({ id: "lang_select_quarterly" })}
                      </MenuItem>
                    </Select>
                  </div>
                </div>
                {displayIcome && (
                  <IncomeStatement
                    titleTable={intl.formatMessage({ id: "lang_title_icome" })}
                    data={data[obj]}
                    queryString={dataSelect}
                  />
                )}
                {displayBalance && (
                  <BalanceSheet
                    titleTable={intl.formatMessage({
                      id: "lang_title_balance",
                    })}
                    data={data[obj]}
                    queryString={dataSelect}
                  />
                )}
                {displayCash && (
                  <CashFlow
                    titleTable={intl.formatMessage({
                      id: "lang_title_cash_low",
                    })}
                    data={data[obj]}
                    queryString={dataSelect}
                  />
                )}
              </div>
              {/* ---- End Financial ---- */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Financial;
