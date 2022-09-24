export const getDataTable = (propsData: any, queryString: string) => {
  let data = [];
  let data_ttm = [];
  const convertValue = (value: any) => {
    value = value + "";

    if (value.length <= 5) {
      return (value = (value / 1000)
        .toFixed(2)
        .toLocaleString()
        .split(".")
        .join());
    } else if (value.length > 5) {
      return (value = (value / 1000).toLocaleString().split(".").join());
    }
    return value.toLocaleString().split(".").join();
  };

  if (queryString === "Annual") {
    data = propsData.financials.income;
    data_ttm = propsData.financials.income_ttm;
  } else {
    data = propsData.financials.income_quarterly;
    data_ttm = propsData.financials.income_quarterly_ttm;
  }

  return [
    {
      breakDown: "Total Revenue",
      ttm:
        data_ttm[0] && data_ttm[0].total_revenue
          ? convertValue(data_ttm[0].total_revenue)
          : "--",
      reported_time_display3:
        data[3] && data[3].total_revenue
          ? convertValue(data[3].total_revenue)
          : "--",
      reported_time_display2:
        data[2] && data[2].total_revenue
          ? convertValue(data[2].total_revenue)
          : "--",
      reported_time_display1:
        data[1] && data[1].total_revenue
          ? convertValue(data[1].total_revenue)
          : "--",
      reported_time_display0:
        data[0] && data[0].total_revenue
          ? convertValue(data[0].total_revenue)
          : "--",
      items: [
        {
          breakDown: "Operating Revenue",
          ttm:
            data_ttm[0] && data_ttm[0].operating_revenue
              ? convertValue(data_ttm[0].operating_revenue)
              : "--",
          reported_time_display3:
            data[3] && data[3].operating_revenue
              ? convertValue(data[3].operating_revenue)
              : "--",
          reported_time_display2:
            data[2] && data[2].operating_revenue
              ? convertValue(data[2].operating_revenue)
              : "--",
          reported_time_display1:
            data[1] && data[1].operating_revenue
              ? convertValue(data[1].operating_revenue)
              : "--",
          reported_time_display0:
            data[0] && data[0].operating_revenue
              ? convertValue(data[0].operating_revenue)
              : "--",
        },
        {
          breakDown: "Net Interest Income",
          ttm:
            data_ttm[0] && data_ttm[0].net_interest_income
              ? convertValue(data_ttm[0].net_interest_income)
              : "--",
          reported_time_display3:
            data[3] && data[3].net_interest_income
              ? convertValue(data[3].net_interest_income)
              : "--",
          reported_time_display2:
            data[2] && data[2].net_interest_income
              ? convertValue(data[2].net_interest_income)
              : "--",
          reported_time_display1:
            data[1] && data[1].net_interest_income
              ? convertValue(data[1].net_interest_income)
              : "--",
          reported_time_display0:
            data[0] && data[0].net_interest_income
              ? convertValue(data[0].net_interest_income)
              : "--",
          items: [
            {
              breakDown: "Interest Income",
              ttm:
                data_ttm[0] && data_ttm[0].interest_income
                  ? convertValue(data_ttm[0].interest_income)
                  : "--",
              reported_time_display3:
                data[3] && data[3].interest_income
                  ? convertValue(data[3].interest_income)
                  : "--",
              reported_time_display2:
                data[2] && data[2].interest_income
                  ? convertValue(data[2].interest_income)
                  : "--",
              reported_time_display1:
                data[1] && data[1].interest_income
                  ? convertValue(data[1].interest_income)
                  : "--",
              reported_time_display0:
                data[0] && data[0].interest_income
                  ? convertValue(data[0].interest_income)
                  : "--",
            },
            {
              breakDown: "Interest Expense",
              ttm:
                data_ttm[0] && data_ttm[0].interest_expense
                  ? convertValue(data_ttm[0].interest_expense)
                  : "--",
              reported_time_display3:
                data[3] && data[3].interest_expense
                  ? convertValue(data[3].interest_expense)
                  : "--",
              reported_time_display2:
                data[2] && data[2].interest_expense
                  ? convertValue(data[2].interest_expense)
                  : "--",
              reported_time_display1:
                data[1] && data[1].interest_expense
                  ? convertValue(data[1].interest_expense)
                  : "--",
              reported_time_display0:
                data[0] && data[0].interest_expense
                  ? convertValue(data[0].interest_expense)
                  : "--",
            },
          ],
        },
        {
          breakDown: "Non Interest Income",
          ttm:
            data_ttm[0] && data_ttm[0].non_interest_income
              ? convertValue(data_ttm[0].non_interest_income)
              : "--",
          reported_time_display3:
            data[3] && data[3].non_interest_income
              ? convertValue(data[3].non_interest_income)
              : "--",
          reported_time_display2:
            data[2] && data[2].non_interest_income
              ? convertValue(data[2].non_interest_income)
              : "--",
          reported_time_display1:
            data[1] && data[1].non_interest_income
              ? convertValue(data[1].non_interest_income)
              : "--",
          reported_time_display0:
            data[0] && data[0].non_interest_income
              ? convertValue(data[0].non_interest_income)
              : "--",
        },
        {
          breakDown: "Total Premiums Earned",
          ttm:
            data_ttm[0] && data_ttm[0].total_premiums_earned
              ? convertValue(data_ttm[0].total_premiums_earned)
              : "--",
          reported_time_display3:
            data[3] && data[3].total_premiums_earned
              ? convertValue(data[3].total_premiums_earned)
              : "--",
          reported_time_display2:
            data[2] && data[2].total_premiums_earned
              ? convertValue(data[2].total_premiums_earned)
              : "--",
          reported_time_display1:
            data[1] && data[1].total_premiums_earned
              ? convertValue(data[1].total_premiums_earned)
              : "--",
          reported_time_display0:
            data[0] && data[0].total_premiums_earned
              ? convertValue(data[0].total_premiums_earned)
              : "--",
        },
        {
          breakDown: "Fees And Commissions",
          ttm:
            data_ttm[0] && data_ttm[0].fees_and_commissions
              ? convertValue(data_ttm[0].fees_and_commissions)
              : "--",
          reported_time_display3:
            data[3] && data[3].fees_and_commissions
              ? convertValue(data[3].fees_and_commissions)
              : "--",
          reported_time_display2:
            data[2] && data[2].fees_and_commissions
              ? convertValue(data[2].fees_and_commissions)
              : "--",
          reported_time_display1:
            data[1] && data[1].fees_and_commissions
              ? convertValue(data[1].fees_and_commissions)
              : "--",
          reported_time_display0:
            data[0] && data[0].fees_and_commissions
              ? convertValue(data[0].fees_and_commissions)
              : "--",
          items: [
            {
              breakDown: "Fees & Commission Income",
              ttm:
                data_ttm[0] && data_ttm[0].feesand_commission_income
                  ? convertValue(data_ttm[0].feesand_commission_income)
                  : "--",
              reported_time_display3:
                data[3] && data[3].feesand_commission_income
                  ? convertValue(data[3].feesand_commission_income)
                  : "--",
              reported_time_display2:
                data[2] && data[2].feesand_commission_income
                  ? convertValue(data[2].feesand_commission_income)
                  : "--",
              reported_time_display1:
                data[1] && data[1].feesand_commission_income
                  ? convertValue(data[1].feesand_commission_income)
                  : "--",
              reported_time_display0:
                data[0] && data[0].feesand_commission_income
                  ? convertValue(data[0].feesand_commission_income)
                  : "--",
            },
            {
              breakDown: "Fees & Commission Expense",
              ttm:
                data_ttm[0] && data_ttm[0].feesand_commission_expense
                  ? convertValue(data_ttm[0].feesand_commission_expense)
                  : "--",
              reported_time_display3:
                data[3] && data[3].feesand_commission_expense
                  ? convertValue(data[3].feesand_commission_expense)
                  : "--",
              reported_time_display2:
                data[2] && data[2].feesand_commission_expense
                  ? convertValue(data[2].feesand_commission_expense)
                  : "--",
              reported_time_display1:
                data[1] && data[1].feesand_commission_expense
                  ? convertValue(data[1].feesand_commission_expense)
                  : "--",
              reported_time_display0:
                data[0] && data[0].feesand_commission_expense
                  ? convertValue(data[0].feesand_commission_expense)
                  : "--",
            },
          ],
        },
        {
          breakDown: "Dividend Income",
          ttm:
            data_ttm[0] && data_ttm[0].dividend_income
              ? convertValue(data_ttm[0].dividend_income)
              : "--",
          reported_time_display3:
            data[3] && data[3].dividend_income
              ? convertValue(data[3].dividend_income)
              : "--",
          reported_time_display2:
            data[2] && data[2].dividend_income
              ? convertValue(data[2].dividend_income)
              : "--",
          reported_time_display1:
            data[1] && data[1].dividend_income
              ? convertValue(data[1].dividend_income)
              : "--",
          reported_time_display0:
            data[0] && data[0].dividend_income
              ? convertValue(data[0].dividend_income)
              : "--",
        },
        {
          breakDown: "Foreign Exchange Trading Gains",
          ttm:
            data_ttm[0] && data_ttm[0].foreign_exchange_trading_gains
              ? convertValue(data_ttm[0].foreign_exchange_trading_gains)
              : "--",
          reported_time_display3:
            data[3] && data[3].foreign_exchange_trading_gains
              ? convertValue(data[3].foreign_exchange_trading_gains)
              : "--",
          reported_time_display2:
            data[2] && data[2].foreign_exchange_trading_gains
              ? convertValue(data[2].foreign_exchange_trading_gains)
              : "--",
          reported_time_display1:
            data[1] && data[1].foreign_exchange_trading_gains
              ? convertValue(data[1].foreign_exchange_trading_gains)
              : "--",
          reported_time_display0:
            data[0] && data[0].foreign_exchange_trading_gains
              ? convertValue(data[0].foreign_exchange_trading_gains)
              : "--",
        },
        {
          breakDown: "Other Non Interest Income",
          ttm:
            data_ttm[0] && data_ttm[0].other_non_interest_income
              ? convertValue(data_ttm[0].other_non_interest_income)
              : "--",
          reported_time_display3:
            data[3] && data[3].other_non_interest_income
              ? convertValue(data[3].other_non_interest_income)
              : "--",
          reported_time_display2:
            data[2] && data[2].other_non_interest_income
              ? convertValue(data[2].other_non_interest_income)
              : "--",
          reported_time_display1:
            data[1] && data[1].other_non_interest_income
              ? convertValue(data[1].other_non_interest_income)
              : "--",
          reported_time_display0:
            data[0] && data[0].other_non_interest_income
              ? convertValue(data[0].other_non_interest_income)
              : "--",
        },
      ],
    },
    {
      breakDown: "Cost of Revenue",
      ttm:
        data_ttm[0] && data_ttm[0].cost_of_revenue
          ? convertValue(data_ttm[0].cost_of_revenue)
          : "--",
      reported_time_display3:
        data[3] && data[3].cost_of_revenue
          ? convertValue(data[3].cost_of_revenue)
          : "--",
      reported_time_display2:
        data[2] && data[2].cost_of_revenue
          ? convertValue(data[2].cost_of_revenue)
          : "--",
      reported_time_display1:
        data[1] && data[1].cost_of_revenue
          ? convertValue(data[1].cost_of_revenue)
          : "--",
      reported_time_display0:
        data[0] && data[0].cost_of_revenue
          ? convertValue(data[0].cost_of_revenue)
          : "--",
    },
    {
      breakDown: "Credit Losses Provision",
      ttm:
        data_ttm[0] && data_ttm[0].credit_losses_provision
          ? convertValue(data_ttm[0].credit_losses_provision)
          : "--",
      reported_time_display3:
        data[3] && data[3].credit_losses_provision
          ? convertValue(data[3].credit_losses_provision)
          : "--",
      reported_time_display2:
        data[2] && data[2].credit_losses_provision
          ? convertValue(data[2].credit_losses_provision)
          : "--",
      reported_time_display1:
        data[1] && data[1].credit_losses_provision
          ? convertValue(data[1].credit_losses_provision)
          : "--",
      reported_time_display0:
        data[0] && data[0].credit_losses_provision
          ? convertValue(data[0].credit_losses_provision)
          : "--",
    },
    {
      breakDown: "Non Interest Expenses",
      ttm:
        data_ttm[0] && data_ttm[0].non_interest_expense
          ? convertValue(data_ttm[0].non_interest_expense)
          : "--",
      reported_time_display3:
        data[3] && data[3].non_interest_expense
          ? convertValue(data[3].non_interest_expense)
          : "--",
      reported_time_display2:
        data[2] && data[2].non_interest_expense
          ? convertValue(data[2].non_interest_expense)
          : "--",
      reported_time_display1:
        data[1] && data[1].non_interest_expense
          ? convertValue(data[1].non_interest_expense)
          : "--",
      reported_time_display0:
        data[0] && data[0].non_interest_expense
          ? convertValue(data[0].non_interest_expense)
          : "--",
      items: [
        {
          breakDown: "Occupancy And Equipment",
          ttm:
            data_ttm[0] && data_ttm[0].occupancy_and_equipment
              ? convertValue(data_ttm[0].occupancy_and_equipment)
              : "--",
          reported_time_display3:
            data[3] && data[3].occupancy_and_equipment
              ? convertValue(data[3].occupancy_and_equipment)
              : "--",
          reported_time_display2:
            data[2] && data[2].occupancy_and_equipment
              ? convertValue(data[2].occupancy_and_equipment)
              : "--",
          reported_time_display1:
            data[1] && data[1].occupancy_and_equipment
              ? convertValue(data[1].occupancy_and_equipment)
              : "--",
          reported_time_display0:
            data[0] && data[0].occupancy_and_equipment
              ? convertValue(data[0].occupancy_and_equipment)
              : "--",
          items: [
            {
              breakDown: "Net Occupancy Expense",
              ttm:
                data_ttm[0] && data_ttm[0].net_occupancy_expense
                  ? convertValue(data_ttm[0].net_occupancy_expense)
                  : "--",
              reported_time_display3:
                data[3] && data[3].net_occupancy_expense
                  ? convertValue(data[3].net_occupancy_expense)
                  : "--",
              reported_time_display2:
                data[2] && data[2].net_occupancy_expense
                  ? convertValue(data[2].net_occupancy_expense)
                  : "--",
              reported_time_display1:
                data[1] && data[1].net_occupancy_expense
                  ? convertValue(data[1].net_occupancy_expense)
                  : "--",
              reported_time_display0:
                data[0] && data[0].net_occupancy_expense
                  ? convertValue(data[0].net_occupancy_expense)
                  : "--",
            },
          ],
        },
        {
          breakDown: "Professional Expense And Contract Services Expense",
          ttm:
            data_ttm[0] &&
            data_ttm[0].professional_expense_and_contract_services_expense
              ? convertValue(
                  data_ttm[0].professional_expense_and_contract_services_expense
                )
              : "--",
          reported_time_display3:
            data[3] &&
            data[3].professional_expense_and_contract_services_expense
              ? convertValue(
                  data[3].professional_expense_and_contract_services_expense
                )
              : "--",
          reported_time_display2:
            data[2] &&
            data[2].professional_expense_and_contract_services_expense
              ? convertValue(
                  data[2].professional_expense_and_contract_services_expense
                )
              : "--",
          reported_time_display1:
            data[1] &&
            data[1].professional_expense_and_contract_services_expense
              ? convertValue(
                  data[1].professional_expense_and_contract_services_expense
                )
              : "--",
          reported_time_display0:
            data[0] &&
            data[0].professional_expense_and_contract_services_expense
              ? convertValue(
                  data[0].professional_expense_and_contract_services_expense
                )
              : "--",
        },
        {
          breakDown: "Selling General and Administrative",
          ttm:
            data_ttm[0] && data_ttm[0].selling_general_and_administration
              ? convertValue(data_ttm[0].selling_general_and_administration)
              : "--",
          reported_time_display3:
            data[3] && data[3].selling_general_and_administration
              ? convertValue(data[3].selling_general_and_administration)
              : "--",
          reported_time_display2:
            data[2] && data[2].selling_general_and_administration
              ? convertValue(data[2].selling_general_and_administration)
              : "--",
          reported_time_display1:
            data[1] && data[1].selling_general_and_administration
              ? convertValue(data[1].selling_general_and_administration)
              : "--",
          reported_time_display0:
            data[0] && data[0].selling_general_and_administration
              ? convertValue(data[0].selling_general_and_administration)
              : "--",
          items: [
            {
              breakDown: "General & Administrative Expense",
              ttm:
                data_ttm[0] && data_ttm[0].general_and_administrative_expense
                  ? convertValue(data_ttm[0].general_and_administrative_expense)
                  : "--",
              reported_time_display3:
                data[3] && data[3].general_and_administrative_expense
                  ? convertValue(data[3].general_and_administrative_expense)
                  : "--",
              reported_time_display2:
                data[2] && data[2].general_and_administrative_expense
                  ? convertValue(data[2].general_and_administrative_expense)
                  : "--",
              reported_time_display1:
                data[1] && data[1].general_and_administrative_expense
                  ? convertValue(data[1].general_and_administrative_expense)
                  : "--",
              reported_time_display0:
                data[0] && data[0].general_and_administrative_expense
                  ? convertValue(data[0].general_and_administrative_expense)
                  : "--",
              items: [
                {
                  breakDown: "Salaries and Wages",
                  ttm:
                    data_ttm[0] && data_ttm[0].salaries_and_wages
                      ? convertValue(data_ttm[0].salaries_and_wages)
                      : "--",
                  reported_time_display3:
                    data[3] && data[3].salaries_and_wages
                      ? convertValue(data[3].salaries_and_wages)
                      : "--",
                  reported_time_display2:
                    data[2] && data[2].salaries_and_wages
                      ? convertValue(data[2].salaries_and_wages)
                      : "--",
                  reported_time_display1:
                    data[1] && data[1].salaries_and_wages
                      ? convertValue(data[1].salaries_and_wages)
                      : "--",
                  reported_time_display0:
                    data[0] && data[0].salaries_and_wages
                      ? convertValue(data[0].salaries_and_wages)
                      : "--",
                },
                {
                  breakDown: "Rental & Landing Fees",
                  ttm:
                    data_ttm[0] && data_ttm[0].rent_and_landing_fees
                      ? convertValue(data_ttm[0].rent_and_landing_fees)
                      : "--",
                  reported_time_display3:
                    data[3] && data[3].rent_and_landing_fees
                      ? convertValue(data[3].rent_and_landing_fees)
                      : "--",
                  reported_time_display2:
                    data[2] && data[2].rent_and_landing_fees
                      ? convertValue(data[2].rent_and_landing_fees)
                      : "--",
                  reported_time_display1:
                    data[1] && data[1].rent_and_landing_fees
                      ? convertValue(data[1].rent_and_landing_fees)
                      : "--",
                  reported_time_display0:
                    data[0] && data[0].rent_and_landing_fees
                      ? convertValue(data[0].rent_and_landing_fees)
                      : "--",
                },
              ],
            },
            {
              breakDown: "Selling & Marketing Expense",
              ttm:
                data_ttm[0] && data_ttm[0].selling_and_marketing_expense
                  ? convertValue(data_ttm[0].selling_and_marketing_expense)
                  : "--",
              reported_time_display3:
                data[3] && data[3].selling_and_marketing_expense
                  ? convertValue(data[3].selling_and_marketing_expense)
                  : "--",
              reported_time_display2:
                data[2] && data[2].selling_and_marketing_expense
                  ? convertValue(data[2].selling_and_marketing_expense)
                  : "--",
              reported_time_display1:
                data[1] && data[1].selling_and_marketing_expense
                  ? convertValue(data[1].selling_and_marketing_expense)
                  : "--",
              reported_time_display0:
                data[0] && data[0].selling_and_marketing_expense
                  ? convertValue(data[0].selling_and_marketing_expense)
                  : "--",
            },
          ],
        },
        {
          breakDown: "Depreciation Amortization Depletion",
          ttm:
            data_ttm[0] &&
            data_ttm[0].depreciation_amortization_depletion_income_statement
              ? convertValue(
                  data_ttm[0]
                    .depreciation_amortization_depletion_income_statement
                )
              : "--",
          reported_time_display3:
            data[3] &&
            data[3].depreciation_amortization_depletion_income_statement
              ? convertValue(
                  data[3].depreciation_amortization_depletion_income_statement
                )
              : "--",
          reported_time_display2:
            data[2] &&
            data[2].depreciation_amortization_depletion_income_statement
              ? convertValue(
                  data[2].depreciation_amortization_depletion_income_statement
                )
              : "--",
          reported_time_display1:
            data[1] &&
            data[1].depreciation_amortization_depletion_income_statement
              ? convertValue(
                  data[1].depreciation_amortization_depletion_income_statement
                )
              : "--",
          reported_time_display0:
            data[0] &&
            data[0].depreciation_amortization_depletion_income_statement
              ? convertValue(
                  data[0].depreciation_amortization_depletion_income_statement
                )
              : "--",
          items: [
            {
              breakDown: "Depreciation & amortization",
              ttm:
                data_ttm[0] &&
                data_ttm[0].depreciation_and_amortization_in_income_statement
                  ? convertValue(
                      data_ttm[0]
                        .depreciation_and_amortization_in_income_statement
                    )
                  : "--",
              reported_time_display3:
                data[3] &&
                data[3].depreciation_and_amortization_in_income_statement
                  ? convertValue(
                      data[3].depreciation_and_amortization_in_income_statement
                    )
                  : "--",
              reported_time_display2:
                data[2] &&
                data[2].depreciation_and_amortization_in_income_statement
                  ? convertValue(
                      data[2].depreciation_and_amortization_in_income_statement
                    )
                  : "--",
              reported_time_display1:
                data[1] &&
                data[1].depreciation_and_amortization_in_income_statement
                  ? convertValue(
                      data[1].depreciation_and_amortization_in_income_statement
                    )
                  : "--",
              reported_time_display0:
                data[0] &&
                data[0].depreciation_and_amortization_in_income_statement
                  ? convertValue(
                      data[0].depreciation_and_amortization_in_income_statement
                    )
                  : "--",
              items: [
                {
                  breakDown: "Depreciation",
                  ttm:
                    data_ttm[0] && data_ttm[0].depreciation_income_statement
                      ? convertValue(data_ttm[0].depreciation_income_statement)
                      : "--",
                  reported_time_display3:
                    data[3] && data[3].depreciation_income_statement
                      ? convertValue(data[3].depreciation_income_statement)
                      : "--",
                  reported_time_display2:
                    data[2] && data[2].depreciation_income_statement
                      ? convertValue(data[2].depreciation_income_statement)
                      : "--",
                  reported_time_display1:
                    data[1] && data[1].depreciation_income_statement
                      ? convertValue(data[1].depreciation_income_statement)
                      : "--",
                  reported_time_display0:
                    data[0] && data[0].depreciation_income_statement
                      ? convertValue(data[0].depreciation_income_statement)
                      : "--",
                },
                {
                  breakDown: "Amortization",
                  ttm:
                    data_ttm[0] && data_ttm[0].amortization
                      ? convertValue(data_ttm[0].amortization)
                      : "--",
                  reported_time_display3:
                    data[3] && data[3].amortization
                      ? convertValue(data[3].amortization)
                      : "--",
                  reported_time_display2:
                    data[2] && data[2].amortization
                      ? convertValue(data[2].amortization)
                      : "--",
                  reported_time_display1:
                    data[1] && data[1].amortization
                      ? convertValue(data[1].amortization)
                      : "--",
                  reported_time_display0:
                    data[0] && data[0].amortization
                      ? convertValue(data[0].amortization)
                      : "--",
                  items: [
                    {
                      breakDown: "Amortization of Intangibles",
                      ttm:
                        data_ttm[0] &&
                        data_ttm[0].amortization_of_intangibles_income_statement
                          ? convertValue(
                              data_ttm[0]
                                .amortization_of_intangibles_income_statement
                            )
                          : "--",
                      reported_time_display3:
                        data[3] &&
                        data[3].amortization_of_intangibles_income_statement
                          ? convertValue(
                              data[3]
                                .amortization_of_intangibles_income_statement
                            )
                          : "--",
                      reported_time_display2:
                        data[2] &&
                        data[2].amortization_of_intangibles_income_statement
                          ? convertValue(
                              data[2]
                                .amortization_of_intangibles_income_statement
                            )
                          : "--",
                      reported_time_display1:
                        data[1] &&
                        data[1].amortization_of_intangibles_income_statement
                          ? convertValue(
                              data[1]
                                .amortization_of_intangibles_income_statement
                            )
                          : "--",
                      reported_time_display0:
                        data[0] &&
                        data[0].amortization_of_intangibles_income_statement
                          ? convertValue(
                              data[0]
                                .amortization_of_intangibles_income_statement
                            )
                          : "--",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          breakDown: "Other Non Interest Expense",
          ttm:
            data_ttm[0] && data_ttm[0].other_non_interest_expense
              ? convertValue(data_ttm[0].other_non_interest_expense)
              : "--",
          reported_time_display3:
            data[3] && data[3].other_non_interest_expense
              ? convertValue(data[3].other_non_interest_expense)
              : "--",
          reported_time_display2:
            data[2] && data[2].other_non_interest_expense
              ? convertValue(data[2].other_non_interest_expense)
              : "--",
          reported_time_display1:
            data[1] && data[1].other_non_interest_expense
              ? convertValue(data[1].other_non_interest_expense)
              : "--",
          reported_time_display0:
            data[0] && data[0].other_non_interest_expense
              ? convertValue(data[0].other_non_interest_expense)
              : "--",
        },
      ],
    },
    {
      breakDown: "Gross Profit",
      ttm:
        data_ttm[0] && data_ttm[0].gross_profit
          ? convertValue(data_ttm[0].gross_profit)
          : "--",
      reported_time_display3:
        data[3] && data[3].gross_profit
          ? convertValue(data[3].gross_profit)
          : "--",
      reported_time_display2:
        data[2] && data[2].gross_profit
          ? convertValue(data[2].gross_profit)
          : "--",
      reported_time_display1:
        data[1] && data[1].gross_profit
          ? convertValue(data[1].gross_profit)
          : "--",
      reported_time_display0:
        data[0] && data[0].gross_profit
          ? convertValue(data[0].gross_profit)
          : "--",
    },
    {
      breakDown: "Operating Expense",
      ttm:
        data_ttm[0] && data_ttm[0].operating_expense
          ? convertValue(data_ttm[0].operating_expense)
          : "--",
      reported_time_display3:
        data[3] && data[3].operating_expense
          ? convertValue(data[3].operating_expense)
          : "--",
      reported_time_display2:
        data[2] && data[2].operating_expense
          ? convertValue(data[2].operating_expense)
          : "--",
      reported_time_display1:
        data[1] && data[1].operating_expense
          ? convertValue(data[1].operating_expense)
          : "--",
      reported_time_display0:
        data[0] && data[0].operating_expense
          ? convertValue(data[0].operating_expense)
          : "--",
      items: [
        {
          breakDown: "Selling General and Administrative",
          ttm:
            data_ttm[0] && data_ttm[0].selling_general_and_administration
              ? convertValue(data_ttm[0].selling_general_and_administration)
              : "--",
          reported_time_display3:
            data[3] && data[3].selling_general_and_administration
              ? convertValue(data[3].selling_general_and_administration)
              : "--",
          reported_time_display2:
            data[2] && data[2].selling_general_and_administration
              ? convertValue(data[2].selling_general_and_administration)
              : "--",
          reported_time_display1:
            data[1] && data[1].selling_general_and_administration
              ? convertValue(data[1].selling_general_and_administration)
              : "--",
          reported_time_display0:
            data[0] && data[0].selling_general_and_administration
              ? convertValue(data[0].selling_general_and_administration)
              : "--",
          items: [
            {
              breakDown: "General & Administrative Expense",
              ttm:
                data_ttm[0] && data_ttm[0].general_and_administrative_expense
                  ? convertValue(data_ttm[0].general_and_administrative_expense)
                  : "--",
              reported_time_display3:
                data[3] && data[3].general_and_administrative_expense
                  ? convertValue(data[3].general_and_administrative_expense)
                  : "--",
              reported_time_display2:
                data[2] && data[2].general_and_administrative_expense
                  ? convertValue(data[2].general_and_administrative_expense)
                  : "--",
              reported_time_display1:
                data[1] && data[1].general_and_administrative_expense
                  ? convertValue(data[1].general_and_administrative_expense)
                  : "--",
              reported_time_display0:
                data[0] && data[0].general_and_administrative_expense
                  ? convertValue(data[0].general_and_administrative_expense)
                  : "--",
              items: [
                {
                  breakDown: "Other G and A",
                  ttm:
                    data_ttm[0] && data_ttm[0].other_gand_a
                      ? convertValue(data_ttm[0].other_gand_a)
                      : "--",
                  reported_time_display3:
                    data[3] && data[3].other_gand_a
                      ? convertValue(data[3].other_gand_a)
                      : "--",
                  reported_time_display2:
                    data[2] && data[2].other_gand_a
                      ? convertValue(data[2].other_gand_a)
                      : "--",
                  reported_time_display1:
                    data[1] && data[1].other_gand_a
                      ? convertValue(data[1].other_gand_a)
                      : "--",
                  reported_time_display0:
                    data[0] && data[0].other_gand_a
                      ? convertValue(data[0].other_gand_a)
                      : "--",
                },
              ],
            },
            {
              breakDown: "Selling & Marketing Expense",
              ttm:
                data_ttm[0] && data_ttm[0].selling_and_marketing_expense
                  ? convertValue(data_ttm[0].selling_and_marketing_expense)
                  : "--",
              reported_time_display3:
                data[3] && data[3].selling_and_marketing_expense
                  ? convertValue(data[3].selling_and_marketing_expense)
                  : "--",
              reported_time_display2:
                data[2] && data[2].selling_and_marketing_expense
                  ? convertValue(data[2].selling_and_marketing_expense)
                  : "--",
              reported_time_display1:
                data[1] && data[1].selling_and_marketing_expense
                  ? convertValue(data[1].selling_and_marketing_expense)
                  : "--",
              reported_time_display0:
                data[0] && data[0].selling_and_marketing_expense
                  ? convertValue(data[0].selling_and_marketing_expense)
                  : "--",
            },
          ],
        },
        {
          breakDown: "Research & Development",
          ttm:
            data_ttm[0] && data_ttm[0].research_and_development
              ? convertValue(data_ttm[0].research_and_development)
              : "--",
          reported_time_display3:
            data[3] && data[3].research_and_development
              ? convertValue(data[3].research_and_development)
              : "--",
          reported_time_display2:
            data[2] && data[2].research_and_development
              ? convertValue(data[2].research_and_development)
              : "--",
          reported_time_display1:
            data[1] && data[1].research_and_development
              ? convertValue(data[1].research_and_development)
              : "--",
          reported_time_display0:
            data[0] && data[0].research_and_development
              ? convertValue(data[0].research_and_development)
              : "--",
        },
        {
          breakDown: "Depreciation Amortization Depletion",
          ttm:
            data_ttm[0] &&
            data_ttm[0].depreciation_amortization_depletion_income_statement
              ? convertValue(
                  data_ttm[0]
                    .depreciation_amortization_depletion_income_statement
                )
              : "--",
          reported_time_display3:
            data[3] &&
            data[3].depreciation_amortization_depletion_income_statement
              ? convertValue(
                  data[3].depreciation_amortization_depletion_income_statement
                )
              : "--",
          reported_time_display2:
            data[2] &&
            data[2].depreciation_amortization_depletion_income_statement
              ? convertValue(
                  data[2].depreciation_amortization_depletion_income_statement
                )
              : "--",
          reported_time_display1:
            data[1] &&
            data[1].depreciation_amortization_depletion_income_statement
              ? convertValue(
                  data[1].depreciation_amortization_depletion_income_statement
                )
              : "--",
          reported_time_display0:
            data[0] &&
            data[0].depreciation_amortization_depletion_income_statement
              ? convertValue(
                  data[0].depreciation_amortization_depletion_income_statement
                )
              : "--",
          items: [
            {
              breakDown: "Depreciation & amortization",
              ttm:
                data_ttm[0] &&
                data_ttm[0].depreciation_and_amortization_in_income_statement
                  ? convertValue(
                      data_ttm[0]
                        .depreciation_and_amortization_in_income_statement
                    )
                  : "--",
              reported_time_display3:
                data[3] &&
                data[3].depreciation_and_amortization_in_income_statement
                  ? convertValue(
                      data[3].depreciation_and_amortization_in_income_statement
                    )
                  : "--",
              reported_time_display2:
                data[2] &&
                data[2].depreciation_and_amortization_in_income_statement
                  ? convertValue(
                      data[2].depreciation_and_amortization_in_income_statement
                    )
                  : "--",
              reported_time_display1:
                data[1] &&
                data[1].depreciation_and_amortization_in_income_statement
                  ? convertValue(
                      data[1].depreciation_and_amortization_in_income_statement
                    )
                  : "--",
              reported_time_display0:
                data[0] &&
                data[0].depreciation_and_amortization_in_income_statement
                  ? convertValue(
                      data[0].depreciation_and_amortization_in_income_statement
                    )
                  : "--",
              items: [
                {
                  breakDown: "Depreciation",
                  ttm:
                    data_ttm[0] && data_ttm[0].depreciation_income_statement
                      ? convertValue(data_ttm[0].depreciation_income_statement)
                      : "--",
                  reported_time_display3:
                    data[3] && data[3].depreciation_income_statement
                      ? convertValue(data[3].depreciation_income_statement)
                      : "--",
                  reported_time_display2:
                    data[2] && data[2].depreciation_income_statement
                      ? convertValue(data[2].depreciation_income_statement)
                      : "--",
                  reported_time_display1:
                    data[1] && data[1].depreciation_income_statement
                      ? convertValue(data[1].depreciation_income_statement)
                      : "--",
                  reported_time_display0:
                    data[0] && data[0].depreciation_income_statement
                      ? convertValue(data[0].depreciation_income_statement)
                      : "--",
                },
                {
                  breakDown: "Amortization",
                  ttm:
                    data_ttm[0] && data_ttm[0].amortization
                      ? convertValue(data_ttm[0].amortization)
                      : "--",
                  reported_time_display3:
                    data[3] && data[3].amortization
                      ? convertValue(data[3].amortization)
                      : "--",
                  reported_time_display2:
                    data[2] && data[2].amortization
                      ? convertValue(data[2].amortization)
                      : "--",
                  reported_time_display1:
                    data[1] && data[1].amortization
                      ? convertValue(data[1].amortization)
                      : "--",
                  reported_time_display0:
                    data[0] && data[0].amortization
                      ? convertValue(data[0].amortization)
                      : "--",
                  items: [
                    {
                      breakDown: "Amortization of Intangibles",
                      ttm:
                        data_ttm[0] &&
                        data_ttm[0].amortization_of_intangibles_income_statement
                          ? convertValue(
                              data_ttm[0]
                                .amortization_of_intangibles_income_statement
                            )
                          : "--",
                      reported_time_display3:
                        data[3] &&
                        data[3].amortization_of_intangibles_income_statement
                          ? convertValue(
                              data[3]
                                .amortization_of_intangibles_income_statement
                            )
                          : "--",
                      reported_time_display2:
                        data[2] &&
                        data[2].amortization_of_intangibles_income_statement
                          ? convertValue(
                              data[2]
                                .amortization_of_intangibles_income_statement
                            )
                          : "--",
                      reported_time_display1:
                        data[1] &&
                        data[1].amortization_of_intangibles_income_statement
                          ? convertValue(
                              data[1]
                                .amortization_of_intangibles_income_statement
                            )
                          : "--",
                      reported_time_display0:
                        data[0] &&
                        data[0].amortization_of_intangibles_income_statement
                          ? convertValue(
                              data[0]
                                .amortization_of_intangibles_income_statement
                            )
                          : "--",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          breakDown: "Other Operating Expenses",
          ttm:
            data_ttm[0] && data_ttm[0].other_operating_expenses
              ? convertValue(data_ttm[0].other_operating_expenses)
              : "--",
          reported_time_display3:
            data[3] && data[3].other_operating_expenses
              ? convertValue(data[3].other_operating_expenses)
              : "--",
          reported_time_display2:
            data[2] && data[2].other_operating_expenses
              ? convertValue(data[2].other_operating_expenses)
              : "--",
          reported_time_display1:
            data[1] && data[1].other_operating_expenses
              ? convertValue(data[1].other_operating_expenses)
              : "--",
          reported_time_display0:
            data[0] && data[0].other_operating_expenses
              ? convertValue(data[0].other_operating_expenses)
              : "--",
        },
      ],
    },
    {
      breakDown: "Operating Income",
      ttm:
        data_ttm[0] && data_ttm[0].operating_income
          ? convertValue(data_ttm[0].operating_income)
          : "--",
      reported_time_display3:
        data[3] && data[3].operating_income
          ? convertValue(data[3].operating_income)
          : "--",
      reported_time_display2:
        data[2] && data[2].operating_income
          ? convertValue(data[2].operating_income)
          : "--",
      reported_time_display1:
        data[1] && data[1].operating_income
          ? convertValue(data[1].operating_income)
          : "--",
      reported_time_display0:
        data[0] && data[0].operating_income
          ? convertValue(data[0].operating_income)
          : "--",
    },
    {
      breakDown: "Net Non Operating Interest Income Expense",
      ttm:
        data_ttm[0] && data_ttm[0].net_non_operating_interest_income_expense
          ? convertValue(data_ttm[0].net_non_operating_interest_income_expense)
          : "--",
      reported_time_display3:
        data[3] && data[3].net_non_operating_interest_income_expense
          ? convertValue(data[3].net_non_operating_interest_income_expense)
          : "--",
      reported_time_display2:
        data[2] && data[2].net_non_operating_interest_income_expense
          ? convertValue(data[2].net_non_operating_interest_income_expense)
          : "--",
      reported_time_display1:
        data[1] && data[1].net_non_operating_interest_income_expense
          ? convertValue(data[1].net_non_operating_interest_income_expense)
          : "--",
      reported_time_display0:
        data[0] && data[0].net_non_operating_interest_income_expense
          ? convertValue(data[0].net_non_operating_interest_income_expense)
          : "--",
      items: [
        {
          breakDown: "Interest Income Non Operating",
          ttm:
            data_ttm[0] && data_ttm[0].interest_income_non_operating
              ? convertValue(data_ttm[0].interest_income_non_operating)
              : "--",
          reported_time_display3:
            data[3] && data[3].interest_income_non_operating
              ? convertValue(data[3].interest_income_non_operating)
              : "--",
          reported_time_display2:
            data[2] && data[2].interest_income_non_operating
              ? convertValue(data[2].interest_income_non_operating)
              : "--",
          reported_time_display1:
            data[1] && data[1].interest_income_non_operating
              ? convertValue(data[1].interest_income_non_operating)
              : "--",
          reported_time_display0:
            data[0] && data[0].interest_income_non_operating
              ? convertValue(data[0].interest_income_non_operating)
              : "--",
        },
        {
          breakDown: "Interest Expense Non Operating",
          ttm:
            data_ttm[0] && data_ttm[0].interest_expense_non_operating
              ? convertValue(data_ttm[0].interest_expense_non_operating)
              : "--",
          reported_time_display3:
            data[3] && data[3].interest_expense_non_operating
              ? convertValue(data[3].interest_expense_non_operating)
              : "--",
          reported_time_display2:
            data[2] && data[2].interest_expense_non_operating
              ? convertValue(data[2].interest_expense_non_operating)
              : "--",
          reported_time_display1:
            data[1] && data[1].interest_expense_non_operating
              ? convertValue(data[1].interest_expense_non_operating)
              : "--",
          reported_time_display0:
            data[0] && data[0].interest_expense_non_operating
              ? convertValue(data[0].interest_expense_non_operating)
              : "--",
        },
        {
          breakDown: "Total Other Finance Cost",
          ttm:
            data_ttm[0] && data_ttm[0].total_other_finance_cost
              ? convertValue(data_ttm[0].total_other_finance_cost)
              : "--",
          reported_time_display3:
            data[3] && data[3].total_other_finance_cost
              ? convertValue(data[3].total_other_finance_cost)
              : "--",
          reported_time_display2:
            data[2] && data[2].total_other_finance_cost
              ? convertValue(data[2].total_other_finance_cost)
              : "--",
          reported_time_display1:
            data[1] && data[1].total_other_finance_cost
              ? convertValue(data[1].total_other_finance_cost)
              : "--",
          reported_time_display0:
            data[0] && data[0].total_other_finance_cost
              ? convertValue(data[0].total_other_finance_cost)
              : "--",
        },
      ],
    },
    {
      breakDown: "Other Income Expense",
      ttm:
        data_ttm[0] && data_ttm[0].other_income_expense
          ? convertValue(data_ttm[0].other_income_expense)
          : "--",
      reported_time_display3:
        data[3] && data[3].other_income_expense
          ? convertValue(data[3].other_income_expense)
          : "--",
      reported_time_display2:
        data[2] && data[2].other_income_expense
          ? convertValue(data[2].other_income_expense)
          : "--",
      reported_time_display1:
        data[1] && data[1].other_income_expense
          ? convertValue(data[1].other_income_expense)
          : "--",
      reported_time_display0:
        data[0] && data[0].other_income_expense
          ? convertValue(data[0].other_income_expense)
          : "--",
      items: [
        {
          breakDown: "Special Income Charges",
          ttm:
            data_ttm[0] && data_ttm[0].special_income_charges
              ? convertValue(data_ttm[0].special_income_charges)
              : "--",
          reported_time_display3:
            data[3] && data[3].special_income_charges
              ? convertValue(data[3].special_income_charges)
              : "--",
          reported_time_display2:
            data[2] && data[2].special_income_charges
              ? convertValue(data[2].special_income_charges)
              : "--",
          reported_time_display1:
            data[1] && data[1].special_income_charges
              ? convertValue(data[1].special_income_charges)
              : "--",
          reported_time_display0:
            data[0] && data[0].special_income_charges
              ? convertValue(data[0].special_income_charges)
              : "--",
          items: [
            {
              breakDown: "Restructuring & Mergers Acquisition",
              ttm:
                data_ttm[0] && data_ttm[0].restructuring_and_mergern_acquisition
                  ? convertValue(
                      data_ttm[0].restructuring_and_mergern_acquisition
                    )
                  : "--",
              reported_time_display3:
                data[3] && data[3].restructuring_and_mergern_acquisition
                  ? convertValue(data[3].restructuring_and_mergern_acquisition)
                  : "--",
              reported_time_display2:
                data[2] && data[2].restructuring_and_mergern_acquisition
                  ? convertValue(data[2].restructuring_and_mergern_acquisition)
                  : "--",
              reported_time_display1:
                data[1] && data[1].restructuring_and_mergern_acquisition
                  ? convertValue(data[1].restructuring_and_mergern_acquisition)
                  : "--",
              reported_time_display0:
                data[0] && data[0].restructuring_and_mergern_acquisition
                  ? convertValue(data[0].restructuring_and_mergern_acquisition)
                  : "--",
            },
          ],
        },
        {
          breakDown: "Other Non Operating Income Expenses",
          ttm:
            data_ttm[0] && data_ttm[0].other_non_operating_income_expenses
              ? convertValue(data_ttm[0].other_non_operating_income_expenses)
              : "--",
          reported_time_display3:
            data[3] && data[3].other_non_operating_income_expenses
              ? convertValue(data[3].other_non_operating_income_expenses)
              : "--",
          reported_time_display2:
            data[2] && data[2].other_non_operating_income_expenses
              ? convertValue(data[2].other_non_operating_income_expenses)
              : "--",
          reported_time_display1:
            data[1] && data[1].other_non_operating_income_expenses
              ? convertValue(data[1].other_non_operating_income_expenses)
              : "--",
          reported_time_display0:
            data[0] && data[0].other_non_operating_income_expenses
              ? convertValue(data[0].other_non_operating_income_expenses)
              : "--",
        },
      ],
    },
    {
      breakDown: "Pretax Income",
      ttm:
        data_ttm[0] && data_ttm[0].pretax_income
          ? convertValue(data_ttm[0].pretax_income)
          : "--",
      reported_time_display3:
        data[3] && data[3].pretax_income
          ? convertValue(data[3].pretax_income)
          : "--",
      reported_time_display2:
        data[2] && data[2].pretax_income
          ? convertValue(data[2].pretax_income)
          : "--",
      reported_time_display1:
        data[1] && data[1].pretax_income
          ? convertValue(data[1].pretax_income)
          : "--",
      reported_time_display0:
        data[0] && data[0].pretax_income
          ? convertValue(data[0].pretax_income)
          : "--",
    },
    {
      breakDown: "Tax Provision",
      ttm:
        data_ttm[0] && data_ttm[0].tax_provision
          ? convertValue(data_ttm[0].tax_provision)
          : "--",
      reported_time_display3:
        data[3] && data[3].tax_provision
          ? convertValue(data[3].tax_provision)
          : "--",
      reported_time_display2:
        data[2] && data[2].tax_provision
          ? convertValue(data[2].tax_provision)
          : "--",
      reported_time_display1:
        data[1] && data[1].tax_provision
          ? convertValue(data[1].tax_provision)
          : "--",
      reported_time_display0:
        data[0] && data[0].tax_provision
          ? convertValue(data[0].tax_provision)
          : "--",
    },
    {
      breakDown: "Net Income Common Stockholders",
      ttm:
        data_ttm[0] && data_ttm[0].net_income_common_stockholders
          ? convertValue(data_ttm[0].net_income_common_stockholders)
          : "--",
      reported_time_display3:
        data[3] && data[3].net_income_common_stockholders
          ? convertValue(data[3].net_income_common_stockholders)
          : "--",
      reported_time_display2:
        data[2] && data[2].net_income_common_stockholders
          ? convertValue(data[2].net_income_common_stockholders)
          : "--",
      reported_time_display1:
        data[1] && data[1].net_income_common_stockholders
          ? convertValue(data[1].net_income_common_stockholders)
          : "--",
      reported_time_display0:
        data[0] && data[0].net_income_common_stockholders
          ? convertValue(data[0].net_income_common_stockholders)
          : "--",
      items: [
        {
          breakDown: "Net Income",
          ttm:
            data_ttm[0] && data_ttm[0].net_income
              ? convertValue(data_ttm[0].net_income)
              : "--",
          reported_time_display3:
            data[3] && data[3].net_income
              ? convertValue(data[3].net_income)
              : "--",
          reported_time_display2:
            data[2] && data[2].net_income
              ? convertValue(data[2].net_income)
              : "--",
          reported_time_display1:
            data[1] && data[1].net_income
              ? convertValue(data[1].net_income)
              : "--",
          reported_time_display0:
            data[0] && data[0].net_income
              ? convertValue(data[0].net_income)
              : "--",
          items: [
            {
              breakDown: "Net Income Including Non-Controlling Interests",
              ttm:
                data_ttm[0] &&
                data_ttm[0].net_income_including_noncontrolling_interests
                  ? convertValue(
                      data_ttm[0].net_income_including_noncontrolling_interests
                    )
                  : "--",
              reported_time_display3:
                data[3] && data[3].net_income_including_noncontrolling_interests
                  ? convertValue(
                      data[3].net_income_including_noncontrolling_interests
                    )
                  : "--",
              reported_time_display2:
                data[2] && data[2].net_income_including_noncontrolling_interests
                  ? convertValue(
                      data[2].net_income_including_noncontrolling_interests
                    )
                  : "--",
              reported_time_display1:
                data[1] && data[1].net_income_including_noncontrolling_interests
                  ? convertValue(
                      data[1].net_income_including_noncontrolling_interests
                    )
                  : "--",
              reported_time_display0:
                data[0] && data[0].net_income_including_noncontrolling_interests
                  ? convertValue(
                      data[0].net_income_including_noncontrolling_interests
                    )
                  : "--",
              items: [
                {
                  breakDown: "Net Income Continuous Operations",
                  ttm:
                    data_ttm[0] && data_ttm[0].net_income_continuous_operations
                      ? convertValue(
                          data_ttm[0].net_income_continuous_operations
                        )
                      : "--",
                  reported_time_display3:
                    data[3] && data[3].net_income_continuous_operations
                      ? convertValue(data[3].net_income_continuous_operations)
                      : "--",
                  reported_time_display2:
                    data[2] && data[2].net_income_continuous_operations
                      ? convertValue(data[2].net_income_continuous_operations)
                      : "--",
                  reported_time_display1:
                    data[1] && data[1].net_income_continuous_operations
                      ? convertValue(data[1].net_income_continuous_operations)
                      : "--",
                  reported_time_display0:
                    data[0] && data[0].net_income_continuous_operations
                      ? convertValue(data[0].net_income_continuous_operations)
                      : "--",
                },
              ],
            },
            {
              breakDown: "Minority Interests",
              ttm:
                data_ttm[0] && data_ttm[0].minority_interests
                  ? convertValue(data_ttm[0].minority_interests)
                  : "--",
              reported_time_display3:
                data[3] && data[3].minority_interests
                  ? convertValue(data[3].minority_interests)
                  : "--",
              reported_time_display2:
                data[2] && data[2].minority_interests
                  ? convertValue(data[2].minority_interests)
                  : "--",
              reported_time_display1:
                data[1] && data[1].minority_interests
                  ? convertValue(data[1].minority_interests)
                  : "--",
              reported_time_display0:
                data[0] && data[0].minority_interests
                  ? convertValue(data[0].minority_interests)
                  : "--",
            },
          ],
        },
        {
          breakDown: "Otherunder Preferred Stock Dividend",
          ttm:
            data_ttm[0] && data_ttm[0].otherunder_preferred_stock_dividend
              ? convertValue(data_ttm[0].otherunder_preferred_stock_dividend)
              : "--",
          reported_time_display3:
            data[3] && data[3].otherunder_preferred_stock_dividend
              ? convertValue(data[3].otherunder_preferred_stock_dividend)
              : "--",
          reported_time_display2:
            data[2] && data[2].otherunder_preferred_stock_dividend
              ? convertValue(data[2].otherunder_preferred_stock_dividend)
              : "--",
          reported_time_display1:
            data[1] && data[1].otherunder_preferred_stock_dividend
              ? convertValue(data[1].otherunder_preferred_stock_dividend)
              : "--",
          reported_time_display0:
            data[0] && data[0].otherunder_preferred_stock_dividend
              ? convertValue(data[0].otherunder_preferred_stock_dividend)
              : "--",
        },
      ],
    },
    {
      breakDown: "Average Dilution Earnings",
      ttm:
        data_ttm[0] && data_ttm[0].average_dilution_earnings
          ? convertValue(data_ttm[0].average_dilution_earnings)
          : "--",
      reported_time_display3:
        data[3] && data[3].average_dilution_earnings
          ? convertValue(data[3].average_dilution_earnings)
          : "--",
      reported_time_display2:
        data[2] && data[2].average_dilution_earnings
          ? convertValue(data[2].average_dilution_earnings)
          : "--",
      reported_time_display1:
        data[1] && data[1].average_dilution_earnings
          ? convertValue(data[1].average_dilution_earnings)
          : "--",
      reported_time_display0:
        data[0] && data[0].average_dilution_earnings
          ? convertValue(data[0].average_dilution_earnings)
          : "--",
    },
    {
      breakDown: "Diluted NI Available to Com Stockholders",
      ttm:
        data_ttm[0] && data_ttm[0].diluted_ni_availto_com_stockholders
          ? convertValue(data_ttm[0].diluted_ni_availto_com_stockholders)
          : "--",
      reported_time_display3:
        data[3] && data[3].diluted_ni_availto_com_stockholders
          ? convertValue(data[3].diluted_ni_availto_com_stockholders)
          : "--",
      reported_time_display2:
        data[2] && data[2].diluted_ni_availto_com_stockholders
          ? convertValue(data[2].diluted_ni_availto_com_stockholders)
          : "--",
      reported_time_display1:
        data[1] && data[1].diluted_ni_availto_com_stockholders
          ? convertValue(data[1].diluted_ni_availto_com_stockholders)
          : "--",
      reported_time_display0:
        data[0] && data[0].diluted_ni_availto_com_stockholders
          ? convertValue(data[0].diluted_ni_availto_com_stockholders)
          : "--",
    },
    {
      breakDown: "Basic EPS",
      ttm:
        data_ttm[0] && data_ttm[0].basic_eps
          ? convertValue(data_ttm[0].basic_eps)
          : "--",
      reported_time_display3:
        data[3] && data[3].basic_eps ? convertValue(data[3].basic_eps) : "--",
      reported_time_display2:
        data[2] && data[2].basic_eps ? convertValue(data[2].basic_eps) : "--",
      reported_time_display1:
        data[1] && data[1].basic_eps ? convertValue(data[1].basic_eps) : "--",
      reported_time_display0:
        data[0] && data[0].basic_eps ? convertValue(data[0].basic_eps) : "--",
    },
    {
      breakDown: "Diluted EPS",
      ttm:
        data_ttm[0] && data_ttm[0].diluted_eps
          ? convertValue(data_ttm[0].diluted_eps)
          : "--",
      reported_time_display3:
        data[3] && data[3].diluted_eps
          ? convertValue(data[3].diluted_eps)
          : "--",
      reported_time_display2:
        data[2] && data[2].diluted_eps
          ? convertValue(data[2].diluted_eps)
          : "--",
      reported_time_display1:
        data[1] && data[1].diluted_eps
          ? convertValue(data[1].diluted_eps)
          : "--",
      reported_time_display0:
        data[0] && data[0].diluted_eps
          ? convertValue(data[0].diluted_eps)
          : "--",
    },
    {
      breakDown: "Basic Average Shares",
      ttm:
        data_ttm[0] && data_ttm[0].basic_average_shares
          ? convertValue(data_ttm[0].basic_average_shares)
          : "--",
      reported_time_display3:
        data[3] && data[3].basic_average_shares
          ? convertValue(data[3].basic_average_shares)
          : "--",
      reported_time_display2:
        data[2] && data[2].basic_average_shares
          ? convertValue(data[2].basic_average_shares)
          : "--",
      reported_time_display1:
        data[1] && data[1].basic_average_shares
          ? convertValue(data[1].basic_average_shares)
          : "--",
      reported_time_display0:
        data[0] && data[0].basic_average_shares
          ? convertValue(data[0].basic_average_shares)
          : "--",
    },
    {
      breakDown: "Diluted Average Shares",
      ttm:
        data_ttm[0] && data_ttm[0].diluted_average_shares
          ? convertValue(data_ttm[0].diluted_average_shares)
          : "--",
      reported_time_display3:
        data[3] && data[3].diluted_average_shares
          ? convertValue(data[3].diluted_average_shares)
          : "--",
      reported_time_display2:
        data[2] && data[2].diluted_average_shares
          ? convertValue(data[2].diluted_average_shares)
          : "--",
      reported_time_display1:
        data[1] && data[1].diluted_average_shares
          ? convertValue(data[1].diluted_average_shares)
          : "--",
      reported_time_display0:
        data[0] && data[0].diluted_average_shares
          ? convertValue(data[0].diluted_average_shares)
          : "--",
    },
    {
      breakDown: "Net Income from Continuing & Discontinued Operation",
      ttm:
        data_ttm[0] &&
        data_ttm[0].net_income_from_continuing_and_discontinued_operation
          ? convertValue(
              data_ttm[0].net_income_from_continuing_and_discontinued_operation
            )
          : "--",
      reported_time_display3:
        data[3] && data[3].net_income_from_continuing_and_discontinued_operation
          ? convertValue(
              data[3].net_income_from_continuing_and_discontinued_operation
            )
          : "--",
      reported_time_display2:
        data[2] && data[2].net_income_from_continuing_and_discontinued_operation
          ? convertValue(
              data[2].net_income_from_continuing_and_discontinued_operation
            )
          : "--",
      reported_time_display1:
        data[1] && data[1].net_income_from_continuing_and_discontinued_operation
          ? convertValue(
              data[1].net_income_from_continuing_and_discontinued_operation
            )
          : "--",
      reported_time_display0:
        data[0] && data[0].net_income_from_continuing_and_discontinued_operation
          ? convertValue(
              data[0].net_income_from_continuing_and_discontinued_operation
            )
          : "--",
    },
    {
      breakDown: "Normalized Income",
      ttm:
        data_ttm[0] && data_ttm[0].normalized_income
          ? convertValue(data_ttm[0].normalized_income)
          : "--",
      reported_time_display3:
        data[3] && data[3].normalized_income
          ? convertValue(data[3].normalized_income)
          : "--",
      reported_time_display2:
        data[2] && data[2].normalized_income
          ? convertValue(data[2].normalized_income)
          : "--",
      reported_time_display1:
        data[1] && data[1].normalized_income
          ? convertValue(data[1].normalized_income)
          : "--",
      reported_time_display0:
        data[0] && data[0].normalized_income
          ? convertValue(data[0].normalized_income)
          : "--",
    },
    {
      breakDown: "Reconciled Depreciation",
      ttm:
        data_ttm[0] && data_ttm[0].reconciled_depreciation
          ? convertValue(data_ttm[0].reconciled_depreciation)
          : "--",
      reported_time_display3:
        data[3] && data[3].reconciled_depreciation
          ? convertValue(data[3].reconciled_depreciation)
          : "--",
      reported_time_display2:
        data[2] && data[2].reconciled_depreciation
          ? convertValue(data[2].reconciled_depreciation)
          : "--",
      reported_time_display1:
        data[1] && data[1].reconciled_depreciation
          ? convertValue(data[1].reconciled_depreciation)
          : "--",
      reported_time_display0:
        data[0] && data[0].reconciled_depreciation
          ? convertValue(data[0].reconciled_depreciation)
          : "--",
    },
    {
      breakDown: "Net Income from Continuing Operation Net Minority Interest",
      ttm:
        data_ttm[0] &&
        data_ttm[0].net_income_from_continuing_operation_net_minority_interest
          ? convertValue(
              data_ttm[0]
                .net_income_from_continuing_operation_net_minority_interest
            )
          : "--",
      reported_time_display3:
        data[3] &&
        data[3].net_income_from_continuing_operation_net_minority_interest
          ? convertValue(
              data[3].net_income_from_continuing_operation_net_minority_interest
            )
          : "--",
      reported_time_display2:
        data[2] &&
        data[2].net_income_from_continuing_operation_net_minority_interest
          ? convertValue(
              data[2].net_income_from_continuing_operation_net_minority_interest
            )
          : "--",
      reported_time_display1:
        data[1] &&
        data[1].net_income_from_continuing_operation_net_minority_interest
          ? convertValue(
              data[1].net_income_from_continuing_operation_net_minority_interest
            )
          : "--",
      reported_time_display0:
        data[0] &&
        data[0].net_income_from_continuing_operation_net_minority_interest
          ? convertValue(
              data[0].net_income_from_continuing_operation_net_minority_interest
            )
          : "--",
    },
    {
      breakDown: "Total Unusual Items Excluding Goodwill",
      ttm:
        data_ttm[0] && data_ttm[0].total_unusual_items
          ? convertValue(data_ttm[0].total_unusual_items)
          : "--",
      reported_time_display3:
        data[3] && data[3].total_unusual_items
          ? convertValue(data[3].total_unusual_items)
          : "--",
      reported_time_display2:
        data[2] && data[2].total_unusual_items
          ? convertValue(data[2].total_unusual_items)
          : "--",
      reported_time_display1:
        data[1] && data[1].total_unusual_items
          ? convertValue(data[1].total_unusual_items)
          : "--",
      reported_time_display0:
        data[0] && data[0].total_unusual_items
          ? convertValue(data[0].total_unusual_items)
          : "--",
    },
    {
      breakDown: "Total Unusual Items",
      ttm:
        data_ttm[0] && data_ttm[0].total_unusual_items
          ? convertValue(data_ttm[0].total_unusual_items)
          : "--",
      reported_time_display3:
        data[3] && data[3].total_unusual_items
          ? convertValue(data[3].total_unusual_items)
          : "--",
      reported_time_display2:
        data[2] && data[2].total_unusual_items
          ? convertValue(data[2].total_unusual_items)
          : "--",
      reported_time_display1:
        data[1] && data[1].total_unusual_items
          ? convertValue(data[1].total_unusual_items)
          : "--",
      reported_time_display0:
        data[0] && data[0].total_unusual_items
          ? convertValue(data[0].total_unusual_items)
          : "--",
    },
    {
      breakDown: "Tax Rate for Calcs",
      ttm:
        data_ttm[0] && data_ttm[0].tax_rate_for_calcs
          ? convertValue(data_ttm[0].tax_rate_for_calcs)
          : "--",
      reported_time_display3:
        data[3] && data[3].tax_rate_for_calcs
          ? convertValue(data[3].tax_rate_for_calcs)
          : "--",
      reported_time_display2:
        data[2] && data[2].tax_rate_for_calcs
          ? convertValue(data[2].tax_rate_for_calcs)
          : "--",
      reported_time_display1:
        data[1] && data[1].tax_rate_for_calcs
          ? convertValue(data[1].tax_rate_for_calcs)
          : "--",
      reported_time_display0:
        data[0] && data[0].tax_rate_for_calcs
          ? convertValue(data[0].tax_rate_for_calcs)
          : "--",
    },
    {
      breakDown: "Tax Effect of Unusual Items",
      ttm:
        data_ttm[0] && data_ttm[0].tax_effect_of_unusual_items
          ? convertValue(data_ttm[0].tax_effect_of_unusual_items)
          : "--",
      reported_time_display3:
        data[3] && data[3].tax_effect_of_unusual_items
          ? convertValue(data[3].tax_effect_of_unusual_items)
          : "--",
      reported_time_display2:
        data[2] && data[2].tax_effect_of_unusual_items
          ? convertValue(data[2].tax_effect_of_unusual_items)
          : "--",
      reported_time_display1:
        data[1] && data[1].tax_effect_of_unusual_items
          ? convertValue(data[1].tax_effect_of_unusual_items)
          : "--",
      reported_time_display0:
        data[0] && data[0].tax_effect_of_unusual_items
          ? convertValue(data[0].tax_effect_of_unusual_items)
          : "--",
    },
    {
      breakDown: "Total Operating Income as Reported",
      ttm:
        data_ttm[0] && data_ttm[0].total_operating_income_as_reported
          ? convertValue(data_ttm[0].total_operating_income_as_reported)
          : "--",
      reported_time_display3:
        data[3] && data[3].total_operating_income_as_reported
          ? convertValue(data[3].total_operating_income_as_reported)
          : "--",
      reported_time_display2:
        data[2] && data[2].total_operating_income_as_reported
          ? convertValue(data[2].total_operating_income_as_reported)
          : "--",
      reported_time_display1:
        data[1] && data[1].total_operating_income_as_reported
          ? convertValue(data[1].total_operating_income_as_reported)
          : "--",
      reported_time_display0:
        data[0] && data[0].total_operating_income_as_reported
          ? convertValue(data[0].total_operating_income_as_reported)
          : "--",
    },
    {
      breakDown: "Total Expenses",
      ttm:
        data_ttm[0] && data_ttm[0].total_expenses
          ? convertValue(data_ttm[0].total_expenses)
          : "--",
      reported_time_display3:
        data[3] && data[3].total_expenses
          ? convertValue(data[3].total_expenses)
          : "--",
      reported_time_display2:
        data[2] && data[2].total_expenses
          ? convertValue(data[2].total_expenses)
          : "--",
      reported_time_display1:
        data[1] && data[1].total_expenses
          ? convertValue(data[1].total_expenses)
          : "--",
      reported_time_display0:
        data[0] && data[0].total_expenses
          ? convertValue(data[0].total_expenses)
          : "--",
    },
    {
      breakDown: "Interest Income",
      ttm:
        data_ttm[0] && data_ttm[0].interest_income
          ? convertValue(data_ttm[0].interest_income)
          : "--",
      reported_time_display3:
        data[3] && data[3].interest_income
          ? convertValue(data[3].interest_income)
          : "--",
      reported_time_display2:
        data[2] && data[2].interest_income
          ? convertValue(data[2].interest_income)
          : "--",
      reported_time_display1:
        data[1] && data[1].interest_income
          ? convertValue(data[1].interest_income)
          : "--",
      reported_time_display0:
        data[0] && data[0].interest_income
          ? convertValue(data[0].interest_income)
          : "--",
    },
    {
      breakDown: "Interest Expense",
      ttm:
        data_ttm[0] && data_ttm[0].interest_expense
          ? convertValue(data_ttm[0].interest_expense)
          : "--",
      reported_time_display3:
        data[3] && data[3].interest_expense
          ? convertValue(data[3].interest_expense)
          : "--",
      reported_time_display2:
        data[2] && data[2].interest_expense
          ? convertValue(data[2].interest_expense)
          : "--",
      reported_time_display1:
        data[1] && data[1].interest_expense
          ? convertValue(data[1].interest_expense)
          : "--",
      reported_time_display0:
        data[0] && data[0].interest_expense
          ? convertValue(data[0].interest_expense)
          : "--",
    },
    {
      breakDown: "Net Interest Income",
      ttm:
        data_ttm[0] && data_ttm[0].net_interest_income
          ? convertValue(data_ttm[0].net_interest_income)
          : "--",
      reported_time_display3:
        data[3] && data[3].net_interest_income
          ? convertValue(data[3].net_interest_income)
          : "--",
      reported_time_display2:
        data[2] && data[2].net_interest_income
          ? convertValue(data[2].net_interest_income)
          : "--",
      reported_time_display1:
        data[1] && data[1].net_interest_income
          ? convertValue(data[1].net_interest_income)
          : "--",
      reported_time_display0:
        data[0] && data[0].net_interest_income
          ? convertValue(data[0].net_interest_income)
          : "--",
    },
    {
      breakDown: "EBIT",
      ttm:
        data_ttm[0] && data_ttm[0].ebit ? convertValue(data_ttm[0].ebit) : "--",
      reported_time_display3:
        data[3] && data[3].ebit ? convertValue(data[3].ebit) : "--",
      reported_time_display2:
        data[2] && data[2].ebit ? convertValue(data[2].ebit) : "--",
      reported_time_display1:
        data[1] && data[1].ebit ? convertValue(data[1].ebit) : "--",
      reported_time_display0:
        data[0] && data[0].ebit ? convertValue(data[0].ebit) : "--",
    },
    {
      breakDown: "EBITDA",
      ttm:
        data_ttm[0] && data_ttm[0].ebitda
          ? convertValue(data_ttm[0].ebitda)
          : "--",
      reported_time_display3:
        data[3] && data[3].ebitda ? convertValue(data[3].ebitda) : "--",
      reported_time_display2:
        data[2] && data[2].ebitda ? convertValue(data[2].ebitda) : "--",
      reported_time_display1:
        data[1] && data[1].ebitda ? convertValue(data[1].ebitda) : "--",
      reported_time_display0:
        data[0] && data[0].ebitda ? convertValue(data[0].ebitda) : "--",
    },
    {
      breakDown: "Reconciled Cost of Revenue",
      ttm:
        data_ttm[0] && data_ttm[0].reconciled_cost_of_revenue
          ? convertValue(data_ttm[0].reconciled_cost_of_revenue)
          : "--",
      reported_time_display3:
        data[3] && data[3].reconciled_cost_of_revenue
          ? convertValue(data[3].reconciled_cost_of_revenue)
          : "--",
      reported_time_display2:
        data[2] && data[2].reconciled_cost_of_revenue
          ? convertValue(data[2].reconciled_cost_of_revenue)
          : "--",
      reported_time_display1:
        data[1] && data[1].reconciled_cost_of_revenue
          ? convertValue(data[1].reconciled_cost_of_revenue)
          : "--",
      reported_time_display0:
        data[0] && data[0].reconciled_cost_of_revenue
          ? convertValue(data[0].reconciled_cost_of_revenue)
          : "--",
    },
    {
      breakDown: "Normalized EBITDA",
      ttm:
        data_ttm[0] && data_ttm[0].normalized_ebitda
          ? convertValue(data_ttm[0].normalized_ebitda)
          : "--",
      reported_time_display3:
        data[3] && data[3].normalized_ebitda
          ? convertValue(data[3].normalized_ebitda)
          : "--",
      reported_time_display2:
        data[2] && data[2].normalized_ebitda
          ? convertValue(data[2].normalized_ebitda)
          : "--",
      reported_time_display1:
        data[1] && data[1].normalized_ebitda
          ? convertValue(data[1].normalized_ebitda)
          : "--",
      reported_time_display0:
        data[0] && data[0].normalized_ebitda
          ? convertValue(data[0].normalized_ebitda)
          : "--",
    },
  ];
};
