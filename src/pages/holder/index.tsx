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
import { useIntl } from "react-intl";
import style from "./holder.module.css";
import InsiderRoster from "./InsiderRoster";
import MajorHolder from "./MajorHolder";
import InsiderTransaction from "./InsiderTransaction";

type HolderProps = {
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

const Holder: NextPage<HolderProps> = ({ data = { text: "Holder" } }) => {
  const intl = useIntl();
  const [displayMajorHolder, setDisplayMajorHolder] = useState<boolean>(true);
  const [displayInsiderRoster, setDisplayInsiderRoster] =
    useState<boolean>(false);
  const [displayInsiderTransaction, setDisplayInsiderTransaction] =
    useState<boolean>(false);

  const showTabMajorHolder = () => {
    setDisplayMajorHolder(true);
    setDisplayInsiderRoster(false);
    setDisplayInsiderTransaction(false);
  };
  const showTabInsiderRoster = () => {
    setDisplayMajorHolder(false);
    setDisplayInsiderRoster(true);
    setDisplayInsiderTransaction(false);
  };
  const showTabInsiderTransaction = () => {
    setDisplayMajorHolder(false);
    setDisplayInsiderRoster(false);
    setDisplayInsiderTransaction(true);
  };

  return (
    <React.Fragment>
      <main>
        <div className="lm_item_container medium fullw100">
          <div className="lm_content">
            <div className="wrapComponent">
              {/* ------ Holder ------ */}
              <div className="holder">
                <div className={style.holderTool}>
                  <div className={`${style.holderGroupBtn}`}>
                    <button
                      onClick={showTabMajorHolder}
                      className={`${style.holderGroupBtnButton} ${
                        displayMajorHolder
                          ? style.holderGroupBtnButtonActive
                          : ""
                      }`}
                    >
                      {intl.formatMessage({ id: "lang_majors_holdder" })}
                    </button>
                    <button
                      onClick={showTabInsiderRoster}
                      className={`${style.holderGroupBtnButton} ${
                        displayInsiderRoster
                          ? style.holderGroupBtnButtonActive
                          : ""
                      }`}
                    >
                      {intl.formatMessage({ id: "lang_insider_roster" })}
                    </button>
                    <button
                      onClick={showTabInsiderTransaction}
                      className={`${style.holderGroupBtnButton} ${
                        displayInsiderTransaction
                          ? style.holderGroupBtnButtonActive
                          : ""
                      }`}
                    >
                      {intl.formatMessage({ id: "lang_insider_transaction" })}
                    </button>
                  </div>
                </div>
                {displayMajorHolder && <MajorHolder data={data[obj].holders} />}
                {displayInsiderRoster && (
                  <InsiderRoster data={data[obj].holders.insider_roster} />
                )}
                {displayInsiderTransaction && (
                  <InsiderTransaction data={data[obj].holders} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Holder;
