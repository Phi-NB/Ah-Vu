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
import { getDataTable } from "./convertDataIncome";
import { getDataColumns } from "./columnIncome";
import style from "./financial.module.css";
import { IncomeStatement } from "./IncomeStatement";
import { CashFlow } from "./CashFlow";
import { BalanceSheet } from './BalanceSheet'

type FinancialProps = {
  data: LooseObject;
};

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
  const [displayIcome, setDisplayIcome] = useState<Boolean>(true);
  const [displayBalance, setDisplayBalance] = useState<Boolean>(false);
  const [displayCash, setDisplayCash] = useState<Boolean>(false);

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
                      INCOME STATEMENT
                    </button>
                    <button
                      onClick={showTabBalance}
                      className={`${style.profileGroupBtnButton} ${
                        displayBalance ? style.profileGroupBtnButtonActive : ""
                      }`}
                    >
                      BALANCE SHEET
                    </button>
                    <button
                      onClick={showTabCash}
                      className={`${style.profileGroupBtnButton} ${
                        displayCash ? style.profileGroupBtnButtonActive : ""
                      }`}
                    >
                      CASH FLOW
                    </button>
                  </div>
                  <div>
                    <Select defaultValue="Annual" displayEmpty>
                      <MenuItem value="Annual">Annual</MenuItem>
                      <MenuItem value="Quarterly">Quarterly</MenuItem>
                    </Select>
                  </div>
                </div>
                {displayIcome && (
                  <IncomeStatement
                    titleTable="INCOME STATEMENT"
                    data={data[obj]}
                  />
                )}
                {displayBalance && (
                  <BalanceSheet titleTable="BALANCE SHEET" data={data[obj]} />
                )}
                {displayCash && (
                  <CashFlow titleTable="CASH FLOW" data={data[obj]} />
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
