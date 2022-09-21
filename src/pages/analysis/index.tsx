import type { NextPage } from "next";
import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { getExampleDataUrl } from "api/api";
import { LooseObject } from "interfaces";
import Footer from "components/Footer/Footer";
import Something from "components/Something/Something";
import path from "path";
import fsPromises from "fs/promises";
import { getData, obj } from "api/api";
import AnalysisTable from "./AnalysisTable";
import style from "./analysis.module.css";

type AnalysisProps = {
  data: LooseObject;
};

// --- Test --- Fetching data from the JSON file to test
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/json/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  return {
    props: { data: objectData },
  };
}

const Analysis: NextPage<AnalysisProps> = ({ data = { text: "Analysis" } }) => {
  return (
    <React.Fragment>
      <main className={style.main}>
        <div className="lm_item_container medium fullw100">
          <div className="lm_content">
            <div className="wrapComponent">
              {/* ---- Profile ---- */}

              <div className="analysis">
                <div
                  className="text-right fullw100 limit-length notiBody "
                  style={{ marginBottom: 8 }}
                >
                  Currency in {data[obj]?.profile.currency}
                </div>
                <AnalysisTable props={data[obj]?.analysis.earnings_estimate} />
                <AnalysisTable props={data[obj]?.analysis.revenue_estimate} />
                <AnalysisTable props={data[obj]?.analysis.earnings_history} />
                <AnalysisTable props={data[obj]?.analysis.eps_trend} />
                <AnalysisTable props={data[obj]?.analysis.eps_revisions} />
                <AnalysisTable props={data[obj]?.analysis.growth_estimates} />
              </div>

              {/* ----End Profile ---- */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Analysis;
