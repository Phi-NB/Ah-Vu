import { Collapse as CollapseMantine } from "@mantine/core";
import { getData, obj } from "api/api";
import Image from 'next/image'
import fsPromises from "fs/promises";
import { LooseObject } from "interfaces";
import type { GetServerSideProps, NextPage } from "next";
import path from "path";
import React, { useState } from "react";
import style from "./style.module.css";
import { useIntl } from "react-intl";

// const ic_expand = require('../../../public/asset/icon/expand.svg')
// const ic_collapse = require('../../../public/asset/icon/collapse.svg')
// const ic_arrow = require('../../../public/asset/icon/icon.svg')

type StatisticProps = {
  data: LooseObject;
};

// ---- Call API ----
export const getServerSideProps: GetServerSideProps = async (context) => {
  const filePath = path.join(process.cwd(), "src/json/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  const response = await getData();

  if (response) {
    return { props: { data: response?.data || {} } };
  } else {
    return { props: { data: objectData } };
  }
};

const Statistic: NextPage<StatisticProps> = ({
  data = { text: "Statistic" },
}) => {
  const [allOpen, setAllOpen] = useState(false);
  const dataStatistic = data[obj]?.key_statistics;
  const expandAll = () => {
    setAllOpen(current => !current);
    const drop1 = document.getElementById("openDrop1") as HTMLInputElement;
    const drop2 = document.getElementById("openDrop2") as HTMLInputElement;
    const drop21 = document.getElementById("openDrop21") as HTMLInputElement;
    const drop22 = document.getElementById("openDrop22") as HTMLInputElement;
    const drop23 = document.getElementById("openDrop23") as HTMLInputElement;
    const drop24 = document.getElementById("openDrop24") as HTMLInputElement;
    const drop25 = document.getElementById("openDrop25") as HTMLInputElement;
    const drop26 = document.getElementById("openDrop26") as HTMLInputElement;
    const drop3 = document.getElementById("openDrop3") as HTMLInputElement;
    const drop31 = document.getElementById("openDrop31") as HTMLInputElement;
    const drop32 = document.getElementById("openDrop32") as HTMLInputElement;
    const drop33 = document.getElementById("openDrop33") as HTMLInputElement;
    drop1.click();
    drop2.click();
    drop21.click();
    drop22.click();
    drop23.click();
    drop24.click();
    drop25.click();
    drop26.click();
    drop3.click();
    drop31.click();
    drop32.click();
    drop33.click();
  };
  const intl = useIntl();

  return (
    <React.Fragment>
      <main>
        <div className="lm_item_container medium fullw100">
          <div className='lm_content'>
            <div className='wrapComponent'>
              {/* Statistic */}
              <div className={`${style.statistic}`}>
                <div className={`${style.staticHeader}`}>
                  {/* Title Header  */}
                  <div className={`${style.statistic} ${style.lablel} size--3`}>Currency in {data[obj]?.profile.currency}</div>
                  {/* Group button expand  */}
                  {!allOpen && <div className={`${style.group_btn} ${style.cursor}`} onClick={expandAll}>
                    <div className={`${style.group_btn_action}`}>
                      {/* <Image
                        src={ic_collapse}
                        width={12}
                        height={12}
                      /> */}
                      <div className={`${style.title_ic}`}>Expand All</div>
                    </div>
                  </div>}

                  {allOpen && <div className={`${style.group_btn} ${style.cursor}`} onClick={expandAll} >
                    <div className={`${style.group_btn_action}`}>
                      {/* <Image
                        src={ic_expand}
                        width={12}
                        height={12}
                      /> */}
                      <div className={`${style.title_ic}`}>Collapse All</div>
                    </div>
                  </div>}

                </div>
                {/* Statistic Info  */}
                <div className={`${style.statisticInfo}`}>
                  <div>
                    {/* VALUATION MEASURES */}
                    <Collapse
                      title={intl.formatMessage({ id: 'lang_title_valuation_measures' })}
                      arrow={true}
                      style={`${style.statisticInfo} ${style.headerdrop}  `}
                      IdOpen="1"
                    >
                      <div className={`${style.rowdrop_detail}`}>
                        <div>{intl.formatMessage({ id: 'lang_title_market_cap' })}</div>
                        <div>{dataStatistic.valuation_measures.market_cap_intraday}</div>
                      </div>
                      <div className={`${style.rowdrop_detail}`}>
                        <div>{intl.formatMessage({ id: 'lang_title_enterprise' })}</div>
                        <div>{dataStatistic.valuation_measures.enterprise_value}</div>
                      </div>
                      <div className={`${style.rowdrop_detail}`}>
                        <div>{intl.formatMessage({ id: 'lang_title_trailing' })}</div>
                        <div>{dataStatistic.valuation_measures.trailing_pe}</div>
                      </div>
                      <div className={`${style.rowdrop_detail}`}>
                        <div>{intl.formatMessage({ id: 'lang_title_forward' })}</div>
                        <div>{dataStatistic.valuation_measures.forward_pe}</div>
                      </div>
                      <div className={`${style.rowdrop_detail}`}>
                        <div>{intl.formatMessage({ id: 'lang_title_peg_ratio' })}</div>
                        <div>{dataStatistic.valuation_measures.peg_ratio5_yr_expected}</div>
                      </div>
                      <div className={`${style.rowdrop_detail}`}>
                        <div>{intl.formatMessage({ id: 'lang_title_price_sale' })}</div>
                        <div>{dataStatistic.valuation_measures.price_sales_ttm}</div>
                      </div>
                      <div className={`${style.rowdrop_detail}`}>
                        <div>{intl.formatMessage({ id: 'lang_title_price_book' })}</div>
                        <div>{dataStatistic.valuation_measures.price_book_mrq}</div>
                      </div>
                      <div className={`${style.rowdrop_detail}`}>
                        <div>{intl.formatMessage({ id: 'lang_title_enter_value_reven' })}</div>
                        <div>{dataStatistic.valuation_measures.enterprise_value_revenue}</div>
                      </div>
                      <div className={`${style.rowdrop_detail}`}>
                        <div>{intl.formatMessage({ id: 'lang_title_enter_value_ebitda' })}</div>
                        <div>{dataStatistic.valuation_measures.enterprise_value_ebitda}</div>
                      </div>
                    </Collapse>
                  </div>
                  {/* FINANCIAL HIGHLIGHTS */}
                  <div>
                    <Collapse
                      title={intl.formatMessage({ id: 'lang_title_financial_hightlight' })}
                      arrow={true}
                      style={`${style.statisticInfo} ${style.headerdrop}  `}
                      IdOpen="2"
                    >
                      <div>
                        <Collapse
                          title={intl.formatMessage({ id: 'lang_title_fiscal_year' })}
                          arrow={true}
                          style={`${style.statisticInfo} ${style.headerdrop}  ${style.paddingLeft_32}`}
                          IdOpen="21"
                        >
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_fiscal_year_end' })}</div>
                            <div>{dataStatistic.fiscal_year.fiscal_year_ends}</div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_most_recent_quarter_mrq' })}</div>
                            <div>
                              {dataStatistic.fiscal_year.most_recent_quarter_mrq}
                            </div>
                          </div>
                        </Collapse>
                      </div>
                      <div>
                        <Collapse
                          title={intl.formatMessage({ id: 'lang_title_profitability' })}
                          arrow={true}
                          style={`${style.statisticInfo} ${style.headerdrop} ${style.paddingLeft_32}`}
                          IdOpen="22"
                        >
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_profit_margin' })}</div>
                            <div>{dataStatistic.profitability.profit_margin}</div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_operating_margin_ttm' })}</div>
                            <div>
                              {dataStatistic.profitability.operating_margin_ttm}
                            </div>
                          </div>
                        </Collapse>
                      </div>
                      <div>
                        <Collapse
                          title={intl.formatMessage({ id: 'lang_title_management_effec' })}
                          arrow={true}
                          style={`${style.statisticInfo} ${style.headerdrop}  `}
                          IdOpen="23"
                        >
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_return_on_assets_ttm' })}</div>
                            <div>{dataStatistic.management_effectiveness.return_on_assets_ttm}</div>
                          </div>
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_return_on_equity_ttm' })}</div>
                            <div>{dataStatistic.management_effectiveness.return_on_equity_ttm}</div>
                          </div>
                        </Collapse>
                      </div>
                      <div>
                        <Collapse
                          title={intl.formatMessage({ id: 'lang_title_income_state' })}
                          arrow={true}
                          style={`${style.statisticInfo} ${style.headerdrop}  `}
                          IdOpen="24"
                        >
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_income_statement.revenue_ttm' })}</div>
                            <div>{dataStatistic.income_statement.revenue_ttm}</div>
                          </div>
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_income_statement.revenue_per_share_ttm' })}</div>
                            <div>
                              {dataStatistic.income_statement.revenue_per_share_ttm}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_income_statement.quarterly_revenue_growth_yoy' })}</div>
                            <div>
                              {
                                dataStatistic.income_statement
                                  .quarterly_revenue_growth_yoy
                              }
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_income_statement.gross_profit_ttm' })}</div>
                            <div>
                              {dataStatistic.income_statement.gross_profit_ttm}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_income_statement.EBITDA' })}</div>
                            <div>{dataStatistic.income_statement.ebitda}</div>
                          </div>
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_income_statement.net_income_avi_to_common_ttm' })}</div>
                            <div>
                              {
                                dataStatistic.income_statement
                                  .net_income_avi_to_common_ttm
                              }
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_income_statement.diluted_eps_ttm' })}</div>
                            <div>
                              {dataStatistic.income_statement.diluted_eps_ttm}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_income_statement.quarterly_earnings_growth_yoy' })}</div>
                            <div>
                              {
                                dataStatistic.income_statement
                                  .quarterly_earnings_growth_yoy
                              }
                            </div>
                          </div>
                        </Collapse>
                      </div>
                      <div>
                        <Collapse
                          title={intl.formatMessage({ id: 'lang_title_balance_sheet' })}
                          arrow={true}
                          style={`${style.statisticInfo} ${style.headerdrop}  `}
                          IdOpen="25"
                        >
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_balance_sheet.total_cash_mrq' })}</div>
                            <div>{dataStatistic.balance_sheet.total_cash_mrq}</div>
                          </div>
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_balance_sheet.total_cash_per_share_mrq' })}</div>
                            <div>
                              {dataStatistic.balance_sheet.total_cash_per_share_mrq}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_balance_sheet.total_debt_mrq' })}</div>
                            <div>{dataStatistic.balance_sheet.total_debt_mrq}</div>
                          </div>
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_balance_sheet.total_debt_equity_mrq' })}</div>
                            <div>
                              {dataStatistic.balance_sheet.total_debt_equity_mrq}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_balance_sheet.current_ratio_mrq' })}</div>
                            <div>{dataStatistic.balance_sheet.current_ratio_mrq}</div>
                          </div>
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_balance_sheet.book_value_per_share_mrq' })}</div>
                            <div>
                              {dataStatistic.balance_sheet.book_value_per_share_mrq}
                            </div>
                          </div>
                        </Collapse>
                      </div>
                      <div>
                        <Collapse
                          title={intl.formatMessage({ id: 'lang_title_cash_flow_statement' })}
                          arrow={true}
                          style={`${style.statisticInfo} ${style.headerdrop}  `}
                          IdOpen="26"
                        >
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_cash_flow_statement.operating_cash_flow_ttm' })}</div>
                            <div>
                              {
                                dataStatistic.cash_flow_statement
                                  .operating_cash_flow_ttm
                              }
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_cash_flow_statement.levered_free_cash_flow_ttm' })}</div>
                            <div>
                              {
                                dataStatistic.cash_flow_statement
                                  .levered_free_cash_flow_ttm
                              }
                            </div>
                          </div>
                        </Collapse>
                      </div>
                    </Collapse>
                  </div>
                  {/* tradding_information */}
                  <div>
                    <Collapse
                      title={intl.formatMessage({ id: 'lang_title_tradding_infor' })}
                      arrow={true}
                      style={`${style.statisticInfo} ${style.headerdrop}  `}
                      IdOpen="3"
                    >
                      <div>
                        <Collapse
                          title={intl.formatMessage({ id: 'lang_title_stock_price_his' })}
                          arrow={true}
                          style={`${style.statisticInfo} ${style.headerdrop} ${style.paddingLeft_32} `}
                          IdOpen="31"
                        >
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_stock_price_his.beta5_y_monthly' })}</div>
                            <div>
                              {dataStatistic.stock_price_history.beta5_y_monthly}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_stock_price_his.week_change3' })}</div>
                            <div>
                              {dataStatistic.stock_price_history.week_change3}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_stock_price_his.sp500_52week_change3' })}</div>
                            <div>
                              {dataStatistic.stock_price_history.sp500_52week_change3}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_stock_price_his.week_high3' })}</div>
                            <div>{dataStatistic.stock_price_history.week_high3}</div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_stock_price_his.week_low3' })}</div>
                            <div>{dataStatistic.stock_price_history.week_low3}</div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_stock_price_his.day_moving_average3' })}</div>
                            <div>
                              {dataStatistic.stock_price_history.day_moving_average3}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_stock_price_his.day200_moving_average3' })}</div>
                            <div>
                              {
                                dataStatistic.stock_price_history
                                  .day200_moving_average3
                              }
                            </div>
                          </div>
                        </Collapse>
                      </div>
                      <div>
                        <Collapse
                          title={intl.formatMessage({ id: 'lang_title_share_statictis' })}
                          arrow={true}
                          style={`${style.statisticInfo} ${style.headerdrop} ${style.paddingLeft_32} `}
                          IdOpen="32"
                        >
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_share_statictis.avg_vol3_month3' })}</div>
                            <div>
                              {dataStatistic.share_statistics.avg_vol3_month3}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_share_statictis.avg_vol10_day3' })}</div>
                            <div>{dataStatistic.share_statistics.avg_vol10_day3}</div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_share_statictis.shares_outstanding5' })}</div>
                            <div>
                              {dataStatistic.share_statistics.shares_outstanding5}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_share_statictis.implied_shares_outstanding6' })}</div>
                            <div>
                              {
                                dataStatistic.share_statistics
                                  .implied_shares_outstanding6
                              }
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_share_statictis.float8' })}</div>
                            <div>{dataStatistic.share_statistics.float8}</div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_share_statictis.held_by_insiders1' })}</div>
                            <div>
                              {dataStatistic.share_statistics.held_by_insiders1}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_share_statictis.held_by_institutions1' })}</div>
                            <div>
                              {dataStatistic.share_statistics.held_by_institutions1}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_share_statictis.shares_short4' })}</div>
                            <div>{dataStatistic.share_statistics.shares_short4}</div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_share_statictis.short_ratio4' })}</div>
                            <div>{dataStatistic.share_statistics.short_ratio4}</div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_share_statictis.short_of_float4' })}</div>
                            <div>
                              {dataStatistic.share_statistics.short_of_float4}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_share_statictis.implied_shares_outstanding6' })}</div>
                            <div>
                              {
                                dataStatistic.share_statistics
                                  .implied_shares_outstanding6
                              }
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_share_statictis.shares_short5' })}</div>
                            <div>{dataStatistic.share_statistics.shares_short4}</div>
                          </div>
                        </Collapse>
                      </div>
                      <div>
                        <Collapse
                          title={intl.formatMessage({ id: 'lang_title_dividends_splits' })}
                          arrow={true}
                          style={`${style.statisticInfo} ${style.headerdrop}  ${style.paddingLeft_32}`}
                          IdOpen="33"
                        >
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_dividends_splits.forward_annual_dividend_rate4' })}</div>
                            <div>
                              {
                                dataStatistic.dividends_splits
                                  .forward_annual_dividend_rate4
                              }
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_dividends_splits.forward_annual_dividend_yield4' })}</div>
                            <div>
                              {
                                dataStatistic.dividends_splits
                                  .forward_annual_dividend_yield4
                              }
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_dividends_splits.trailing_annual_dividend_rate3' })}</div>
                            <div>
                              {
                                dataStatistic.dividends_splits
                                  .trailing_annual_dividend_rate3
                              }
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_dividends_splits.trailing_annual_dividend_yield3' })}</div>
                            <div>
                              {
                                dataStatistic.dividends_splits
                                  .trailing_annual_dividend_yield3
                              }
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_dividends_splits.year_average_dividend_yield4' })}</div>
                            <div>
                              {
                                dataStatistic.dividends_splits
                                  .year_average_dividend_yield4
                              }
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_dividends_splits.payout_ratio4' })}</div>
                            <div>{dataStatistic.dividends_splits.payout_ratio4}</div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_dividends_splits.dividend_date3' })}</div>
                            <div>{dataStatistic.dividends_splits.dividend_date3}</div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_dividends_splits.ex_dividend_date4' })}</div>
                            <div>
                              {dataStatistic.dividends_splits.ex_dividend_date4}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_dividends_splits.last_split_factor2' })}</div>
                            <div>
                              {dataStatistic.dividends_splits.last_split_factor2}
                            </div>
                          </div>
                          <div className={`${style.rowdrop_detail} ${style.paddingLeft_32}`}>
                            <div>{intl.formatMessage({ id: 'lang_title_dividends_splits.last_split_date3' })}</div>
                            <div>
                              {dataStatistic.dividends_splits.last_split_date3}
                            </div>
                          </div>
                        </Collapse>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
              {/* End Statistic */}

            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

type CollapseProps = {
  children: any;
  title: string;
  link?: string;
  namelink?: string;
  style?: string;
  opened?: boolean;
  icon?: string;
  arrow?: boolean;
  styleTitle?: string;
  IdOpen?: string;
};
export const Collapse = ({
  children,
  title,
  // link,
  // namelink,
  style = "",
  opened,
  // icon,
  arrow,
  // styleTitle,
  IdOpen,
}: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(opened || false);
  return (
    <div>
      <div
        className={` ${style} `}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        id={`openDrop${IdOpen}`}
      >
        {arrow === true ? (
          <div style={isOpen ? { transform: "rotate(-90deg)", display: "flex", alignItems: "center" } : { transform: "rotate(0)", display: "flex", alignItems: "center" }}>
            {/* <Image
              src={ic_arrow}
              width={14}
              height={14}
            /> */}
          </div>
        ) : (
          <div></div>
        )}
        <div>
          <span>{title} </span>
        </div>
      </div>

      <CollapseMantine in={isOpen}>{children}</CollapseMantine>
    </div>
  );
};

export default Statistic;
