export const getDataTable = (propsData: any) => {
  const convertValue = (value: any) => {
    value = value + "";
    if (value.length <= 5) {
      return (value = (value / 1000).toFixed(2).toLocaleString());
    } else if (value.length > 5) {
      return (value = (value / 1000).toLocaleString());
    }
    return value.toLocaleString();
  };

  const data = propsData.financials.cashflow;
  const data_ttm = propsData.financials.cashflow_ttm;

  return [
    {
      breakDown: "Cash Flows from Used in Operating Activities Direct",
      ttm: data_ttm[0].cash_flowsfromusedin_operating_activities_direct
        ? convertValue(data_ttm[0].cash_flowsfromusedin_operating_activities_direct)
        : "--",
      reported_time_display3: data[3].cash_flowsfromusedin_operating_activities_direct
        ? convertValue(data[3].cash_flowsfromusedin_operating_activities_direct)
        : "--",
      reported_time_display2: data[2].cash_flowsfromusedin_operating_activities_direct
        ? convertValue(data[2].cash_flowsfromusedin_operating_activities_direct)
        : "--",
      reported_time_display1: data[1].cash_flowsfromusedin_operating_activities_direct
        ? convertValue(data[1].cash_flowsfromusedin_operating_activities_direct)
        : "--",
      reported_time_display0: data[0].cash_flowsfromusedin_operating_activities_direct
        ? convertValue(data[0].cash_flowsfromusedin_operating_activities_direct)
        : "--",
      items: [
        {
          breakDown: "Classes of Cash Receipts from Operating Activities",
          ttm: data_ttm[0].classesof_cash_receiptsfrom_operating_activities
            ? convertValue(data_ttm[0].classesof_cash_receiptsfrom_operating_activities)
            : "--",
          reported_time_display3: data[3].classesof_cash_receiptsfrom_operating_activities
            ? convertValue(data[3].classesof_cash_receiptsfrom_operating_activities)
            : "--",
          reported_time_display2: data[2].classesof_cash_receiptsfrom_operating_activities
            ? convertValue(data[2].classesof_cash_receiptsfrom_operating_activities)
            : "--",
          reported_time_display1: data[1].classesof_cash_receiptsfrom_operating_activities
            ? convertValue(data[1].classesof_cash_receiptsfrom_operating_activities)
            : "--",
          reported_time_display0: data[0].classesof_cash_receiptsfrom_operating_activities
            ? convertValue(data[0].classesof_cash_receiptsfrom_operating_activities)
            : "--",
          items: [
            {
              breakDown: "Cash Receipts from Depositsby Banks & Customers",
              ttm: data_ttm[0].cash_receiptsfrom_depositsby_banksand_customers
                ? convertValue(data_ttm[0].cash_receiptsfrom_depositsby_banksand_customers)
                : "--",
              reported_time_display3: data[3].cash_receiptsfrom_depositsby_banksand_customers
                ? convertValue(data[3].cash_receiptsfrom_depositsby_banksand_customers)
                : "--",
              reported_time_display2: data[2].cash_receiptsfrom_depositsby_banksand_customers
                ? convertValue(data[2].cash_receiptsfrom_depositsby_banksand_customers)
                : "--",
              reported_time_display1: data[1].cash_receiptsfrom_depositsby_banksand_customers
                ? convertValue(data[1].cash_receiptsfrom_depositsby_banksand_customers)
                : "--",
              reported_time_display0: data[0].cash_receiptsfrom_depositsby_banksand_customers
                ? convertValue(data[0].cash_receiptsfrom_depositsby_banksand_customers)
                : "--",
            },
            {
              breakDown: "Other Cash Receipts from Operating Activities",
              ttm: data_ttm[0].other_cash_receiptsfrom_operating_activities
                ? convertValue(data_ttm[0].other_cash_receiptsfrom_operating_activities)
                : "--",
              reported_time_display3: data[3].other_cash_receiptsfrom_operating_activities
                ? convertValue(data[3].other_cash_receiptsfrom_operating_activities)
                : "--",
              reported_time_display2: data[2].other_cash_receiptsfrom_operating_activities
                ? convertValue(data[2].other_cash_receiptsfrom_operating_activities)
                : "--",
              reported_time_display1: data[1].other_cash_receiptsfrom_operating_activities
                ? convertValue(data[1].other_cash_receiptsfrom_operating_activities)
                : "--",
              reported_time_display0: data[0].other_cash_receiptsfrom_operating_activities
                ? convertValue(data[0].other_cash_receiptsfrom_operating_activities)
                : "--",
            },
            {
              breakDown: "Receipts from Customers",
              ttm: data_ttm[0].receiptsfrom_customers
                ? convertValue(data_ttm[0].receiptsfrom_customers)
                : "--",
              reported_time_display3: data[3].receiptsfrom_customers
                ? convertValue(data[3].receiptsfrom_customers)
                : "--",
              reported_time_display2: data[2].receiptsfrom_customers
                ? convertValue(data[2].receiptsfrom_customers)
                : "--",
              reported_time_display1: data[1].receiptsfrom_customers
                ? convertValue(data[1].receiptsfrom_customers)
                : "--",
              reported_time_display0: data[0].receiptsfrom_customers
                ? convertValue(data[0].receiptsfrom_customers)
                : "--",
            },
            {
              breakDown: "Receipts from Government Grants",
              ttm: data_ttm[0].receiptsfrom_government_grants
                ? convertValue(data_ttm[0].receiptsfrom_government_grants)
                : "--",
              reported_time_display3: data[3].receiptsfrom_government_grants
                ? convertValue(data[3].receiptsfrom_government_grants)
                : "--",
              reported_time_display2: data[2].receiptsfrom_government_grants
                ? convertValue(data[2].receiptsfrom_government_grants)
                : "--",
              reported_time_display1: data[1].receiptsfrom_government_grants
                ? convertValue(data[1].receiptsfrom_government_grants)
                : "--",
              reported_time_display0: data[0].receiptsfrom_government_grants
                ? convertValue(data[0].receiptsfrom_government_grants)
                : "--",
            },
          ],
        },
        {
          breakDown: "Dividends Received Direct",
          ttm: data_ttm[0].dividends_received_direct
            ? convertValue(data_ttm[0].dividends_received_direct)
            : "--",
          reported_time_display3: data[3].dividends_received_direct
            ? convertValue(data[3].dividends_received_direct)
            : "--",
          reported_time_display2: data[2].dividends_received_direct
            ? convertValue(data[2].dividends_received_direct)
            : "--",
          reported_time_display1: data[1].dividends_received_direct
            ? convertValue(data[1].dividends_received_direct)
            : "--",
          reported_time_display0: data[0].dividends_received_direct
            ? convertValue(data[0].dividends_received_direct)
            : "--",
        },
        {
          breakDown: "Interest Received Direct",
          ttm: data_ttm[0].interest_received_direct
            ? convertValue(data_ttm[0].interest_received_direct)
            : "--",
          reported_time_display3: data[3].interest_received_direct
            ? convertValue(data[3].interest_received_direct)
            : "--",
          reported_time_display2: data[2].interest_received_direct
            ? convertValue(data[2].interest_received_direct)
            : "--",
          reported_time_display1: data[1].interest_received_direct
            ? convertValue(data[1].interest_received_direct)
            : "--",
          reported_time_display0: data[0].interest_received_direct
            ? convertValue(data[0].interest_received_direct)
            : "--",
        },
        {
          breakDown: "Taxes Refund Paid Direct",
          ttm: data_ttm[0].taxes_refund_paid_direct
            ? convertValue(data_ttm[0].taxes_refund_paid_direct)
            : "--",
          reported_time_display3: data[3].taxes_refund_paid_direct
            ? convertValue(data[3].taxes_refund_paid_direct)
            : "--",
          reported_time_display2: data[2].taxes_refund_paid_direct
            ? convertValue(data[2].taxes_refund_paid_direct)
            : "--",
          reported_time_display1: data[1].taxes_refund_paid_direct
            ? convertValue(data[1].taxes_refund_paid_direct)
            : "--",
          reported_time_display0: data[0].taxes_refund_paid_direct
            ? convertValue(data[0].taxes_refund_paid_direct)
            : "--",
        },
        {
          breakDown: "Classes of Cash Payments",
          ttm: data_ttm[0].classesof_cash_payments
            ? convertValue(data_ttm[0].classesof_cash_payments)
            : "--",
          reported_time_display3: data[3].classesof_cash_payments
            ? convertValue(data[3].classesof_cash_payments)
            : "--",
          reported_time_display2: data[2].classesof_cash_payments
            ? convertValue(data[2].classesof_cash_payments)
            : "--",
          reported_time_display1: data[1].classesof_cash_payments
            ? convertValue(data[1].classesof_cash_payments)
            : "--",
          reported_time_display0: data[0].classesof_cash_payments
            ? convertValue(data[0].classesof_cash_payments)
            : "--",
          items: [
            {
              breakDown: "Cash Payments for Depositsby Banks & Customers",
              ttm: data_ttm[0].cash_paymentsfor_depositsby_banksand_customers
                ? convertValue(data_ttm[0].cash_paymentsfor_depositsby_banksand_customers)
                : "--",
              reported_time_display3: data[3].cash_paymentsfor_depositsby_banksand_customers
                ? convertValue(data[3].cash_paymentsfor_depositsby_banksand_customers)
                : "--",
              reported_time_display2: data[2].cash_paymentsfor_depositsby_banksand_customers
                ? convertValue(data[2].cash_paymentsfor_depositsby_banksand_customers)
                : "--",
              reported_time_display1: data[1].cash_paymentsfor_depositsby_banksand_customers
                ? convertValue(data[1].cash_paymentsfor_depositsby_banksand_customers)
                : "--",
              reported_time_display0: data[0].cash_paymentsfor_depositsby_banksand_customers
                ? convertValue(data[0].cash_paymentsfor_depositsby_banksand_customers)
                : "--",
            },
            {
              breakDown: "Other Cash Payments from Operating Activities",
              ttm: data_ttm[0].other_cash_paymentsfrom_operating_activities
                ? convertValue(data_ttm[0].other_cash_paymentsfrom_operating_activities)
                : "--",
              reported_time_display3: data[3].other_cash_paymentsfrom_operating_activities
                ? convertValue(data[3].other_cash_paymentsfrom_operating_activities)
                : "--",
              reported_time_display2: data[2].other_cash_paymentsfrom_operating_activities
                ? convertValue(data[2].other_cash_paymentsfrom_operating_activities)
                : "--",
              reported_time_display1: data[1].other_cash_paymentsfrom_operating_activities
                ? convertValue(data[1].other_cash_paymentsfrom_operating_activities)
                : "--",
              reported_time_display0: data[0].other_cash_paymentsfrom_operating_activities
                ? convertValue(data[0].other_cash_paymentsfrom_operating_activities)
                : "--",
            },
            {
              breakDown: "Payments to Suppliers for Goods & Services",
              ttm: data_ttm[0].paymentsto_suppliersfor_goodsand_services
                ? convertValue(data_ttm[0].paymentsto_suppliersfor_goodsand_services)
                : "--",
              reported_time_display3: data[3].paymentsto_suppliersfor_goodsand_services
                ? convertValue(data[3].paymentsto_suppliersfor_goodsand_services)
                : "--",
              reported_time_display2: data[2].paymentsto_suppliersfor_goodsand_services
                ? convertValue(data[2].paymentsto_suppliersfor_goodsand_services)
                : "--",
              reported_time_display1: data[1].paymentsto_suppliersfor_goodsand_services
                ? convertValue(data[1].paymentsto_suppliersfor_goodsand_services)
                : "--",
              reported_time_display0: data[0].paymentsto_suppliersfor_goodsand_services
                ? convertValue(data[0].paymentsto_suppliersfor_goodsand_services)
                : "--",
            },
            {
              breakDown: "Operating Cash Flow",
              ttm: data_ttm[0].operating_cash_flow
                ? convertValue(data_ttm[0].operating_cash_flow)
                : "--",
              reported_time_display3: data[3].operating_cash_flow
                ? convertValue(data[3].operating_cash_flow)
                : "--",
              reported_time_display2: data[2].operating_cash_flow
                ? convertValue(data[2].operating_cash_flow)
                : "--",
              reported_time_display1: data[1].operating_cash_flow
                ? convertValue(data[1].operating_cash_flow)
                : "--",
              reported_time_display0: data[0].operating_cash_flow
                ? convertValue(data[0].operating_cash_flow)
                : "--",
              items: [
                {
                  breakDown: "Cash Flow from Continuing Operating Activities",
                  ttm: data_ttm[0].cash_flow_from_continuing_operating_activities
                    ? convertValue(data_ttm[0].cash_flow_from_continuing_operating_activities)
                    : "--",
                  reported_time_display3: data[3].cash_flow_from_continuing_operating_activities
                    ? convertValue(data[3].cash_flow_from_continuing_operating_activities)
                    : "--",
                  reported_time_display2: data[2].cash_flow_from_continuing_operating_activities
                    ? convertValue(data[2].cash_flow_from_continuing_operating_activities)
                    : "--",
                  reported_time_display1: data[1].cash_flow_from_continuing_operating_activities
                    ? convertValue(data[1].cash_flow_from_continuing_operating_activities)
                    : "--",
                  reported_time_display0: data[0].cash_flow_from_continuing_operating_activities
                    ? convertValue(data[0].cash_flow_from_continuing_operating_activities)
                    : "--",
                },
                {
                  breakDown: "Net Income from Continuing Operations",
                  ttm: data_ttm[0].net_income_from_continuing_operations
                    ? convertValue(data_ttm[0].net_income_from_continuing_operations)
                    : "--",
                  reported_time_display3: data[3].net_income_from_continuing_operations
                    ? convertValue(data[3].net_income_from_continuing_operations)
                    : "--",
                  reported_time_display2: data[2].net_income_from_continuing_operations
                    ? convertValue(data[2].net_income_from_continuing_operations)
                    : "--",
                  reported_time_display1: data[1].net_income_from_continuing_operations
                    ? convertValue(data[1].net_income_from_continuing_operations)
                    : "--",
                  reported_time_display0: data[0].net_income_from_continuing_operations
                    ? convertValue(data[0].net_income_from_continuing_operations)
                    : "--",
                },
                {
                  breakDown: "Operating Gains Losses",
                  ttm: data_ttm[0].operating_gains_losses
                    ? convertValue(data_ttm[0].operating_gains_losses)
                    : "--",
                  reported_time_display3: data[3].operating_gains_losses
                    ? convertValue(data[3].operating_gains_losses)
                    : "--",
                  reported_time_display2: data[2].operating_gains_losses
                    ? convertValue(data[2].operating_gains_losses)
                    : "--",
                  reported_time_display1: data[1].operating_gains_losses
                    ? convertValue(data[1].operating_gains_losses)
                    : "--",
                  reported_time_display0: data[0].operating_gains_losses
                    ? convertValue(data[0].operating_gains_losses)
                    : "--",
                },
                {
                  breakDown: "Depreciation Amortization Depletion",
                  ttm: data_ttm[0].depreciation_amortization_depletion
                    ? convertValue(data_ttm[0].depreciation_amortization_depletion)
                    : "--",
                  reported_time_display3: data[3].depreciation_amortization_depletion
                    ? convertValue(data[3].depreciation_amortization_depletion)
                    : "--",
                  reported_time_display2: data[2].depreciation_amortization_depletion
                    ? convertValue(data[2].depreciation_amortization_depletion)
                    : "--",
                  reported_time_display1: data[1].depreciation_amortization_depletion
                    ? convertValue(data[1].depreciation_amortization_depletion)
                    : "--",
                  reported_time_display0: data[0].depreciation_amortization_depletion
                    ? convertValue(data[0].depreciation_amortization_depletion)
                    : "--",
                },
                {
                  breakDown: "Asset Impairment Charge",
                  ttm: data_ttm[0].asset_impairment_charge
                    ? convertValue(data_ttm[0].asset_impairment_charge)
                    : "--",
                  reported_time_display3: data[3].asset_impairment_charge
                    ? convertValue(data[3].asset_impairment_charge)
                    : "--",
                  reported_time_display2: data[2].asset_impairment_charge
                    ? convertValue(data[2].asset_impairment_charge)
                    : "--",
                  reported_time_display1: data[1].asset_impairment_charge
                    ? convertValue(data[1].asset_impairment_charge)
                    : "--",
                  reported_time_display0: data[0].asset_impairment_charge
                    ? convertValue(data[0].asset_impairment_charge)
                    : "--",
                },
                {
                  breakDown: "Other non-cash items",
                  ttm: data_ttm[0].other_non_cash_items
                    ? convertValue(data_ttm[0].other_non_cash_items)
                    : "--",
                  reported_time_display3: data[3].other_non_cash_items
                    ? convertValue(data[3].other_non_cash_items)
                    : "--",
                  reported_time_display2: data[2].other_non_cash_items
                    ? convertValue(data[2].other_non_cash_items)
                    : "--",
                  reported_time_display1: data[1].other_non_cash_items
                    ? convertValue(data[1].other_non_cash_items)
                    : "--",
                  reported_time_display0: data[0].other_non_cash_items
                    ? convertValue(data[0].other_non_cash_items)
                    : "--",
                },
                {
                  breakDown: "Change in working capital",
                  ttm: data_ttm[0].change_in_working_capital
                    ? convertValue(data_ttm[0].change_in_working_capital)
                    : "--",
                  reported_time_display3: data[3].change_in_working_capital
                    ? convertValue(data[3].change_in_working_capital)
                    : "--",
                  reported_time_display2: data[2].change_in_working_capital
                    ? convertValue(data[2].change_in_working_capital)
                    : "--",
                  reported_time_display1: data[1].change_in_working_capital
                    ? convertValue(data[1].change_in_working_capital)
                    : "--",
                  reported_time_display0: data[0].change_in_working_capital
                    ? convertValue(data[0].change_in_working_capital)
                    : "--",
                },
                {
                  breakDown: "Dividend Received CFO",
                  ttm: data_ttm[0].dividend_received_cfo
                    ? convertValue(data_ttm[0].dividend_received_cfo)
                    : "--",
                  reported_time_display3: data[3].dividend_received_cfo
                    ? convertValue(data[3].dividend_received_cfo)
                    : "--",
                  reported_time_display2: data[2].dividend_received_cfo
                    ? convertValue(data[2].dividend_received_cfo)
                    : "--",
                  reported_time_display1: data[1].dividend_received_cfo
                    ? convertValue(data[1].dividend_received_cfo)
                    : "--",
                  reported_time_display0: data[0].dividend_received_cfo
                    ? convertValue(data[0].dividend_received_cfo)
                    : "--",
                },
                {
                  breakDown: "Interest Paid CFO",
                  ttm: data_ttm[0].interest_paid_cfo
                    ? convertValue(data_ttm[0].interest_paid_cfo)
                    : "--",
                  reported_time_display3: data[3].interest_paid_cfo
                    ? convertValue(data[3].interest_paid_cfo)
                    : "--",
                  reported_time_display2: data[2].interest_paid_cfo
                    ? convertValue(data[2].interest_paid_cfo)
                    : "--",
                  reported_time_display1: data[1].interest_paid_cfo
                    ? convertValue(data[1].interest_paid_cfo)
                    : "--",
                  reported_time_display0: data[0].interest_paid_cfo
                    ? convertValue(data[0].interest_paid_cfo)
                    : "--",
                },
                {
                  breakDown: "Interest Received CFO",
                  ttm: data_ttm[0].interest_received_cfo
                    ? convertValue(data_ttm[0].interest_received_cfo)
                    : "--",
                  reported_time_display3: data[3].interest_received_cfo
                    ? convertValue(data[3].interest_received_cfo)
                    : "--",
                  reported_time_display2: data[2].interest_received_cfo
                    ? convertValue(data[2].interest_received_cfo)
                    : "--",
                  reported_time_display1: data[1].interest_received_cfo
                    ? convertValue(data[1].interest_received_cfo)
                    : "--",
                  reported_time_display0: data[0].interest_received_cfo
                    ? convertValue(data[0].interest_received_cfo)
                    : "--",
                },
                {
                  breakDown: "Taxes Refund Paid",
                  ttm: data_ttm[0].taxes_refund_paid
                    ? convertValue(data_ttm[0].taxes_refund_paid)
                    : "--",
                  reported_time_display3: data[3].taxes_refund_paid
                    ? convertValue(data[3].taxes_refund_paid)
                    : "--",
                  reported_time_display2: data[2].taxes_refund_paid
                    ? convertValue(data[2].taxes_refund_paid)
                    : "--",
                  reported_time_display1: data[1].taxes_refund_paid
                    ? convertValue(data[1].taxes_refund_paid)
                    : "--",
                  reported_time_display0: data[0].taxes_refund_paid
                    ? convertValue(data[0].taxes_refund_paid)
                    : "--",
                },
              ],
            },
          ],
        },
        {
          breakDown: "Cash from Discontinued Operating Activities",
          ttm: data_ttm[0].cash_from_discontinued_operating_activities
            ? convertValue(data_ttm[0].cash_from_discontinued_operating_activities)
            : "--",
          reported_time_display3: data[3].cash_from_discontinued_operating_activities
            ? convertValue(data[3].cash_from_discontinued_operating_activities)
            : "--",
          reported_time_display2: data[2].cash_from_discontinued_operating_activities
            ? convertValue(data[2].cash_from_discontinued_operating_activities)
            : "--",
          reported_time_display1: data[1].cash_from_discontinued_operating_activities
            ? convertValue(data[1].cash_from_discontinued_operating_activities)
            : "--",
          reported_time_display0: data[0].cash_from_discontinued_operating_activities
            ? convertValue(data[0].cash_from_discontinued_operating_activities)
            : "--",
        },
      ],
    },
    {
      breakDown: "Investing Cash Flow",
      ttm: data_ttm[0].investing_cash_flow
        ? convertValue(data_ttm[0].investing_cash_flow)
        : "--",
      reported_time_display3: data[3].investing_cash_flow
        ? convertValue(data[3].investing_cash_flow)
        : "--",
      reported_time_display2: data[2].investing_cash_flow
        ? convertValue(data[2].investing_cash_flow)
        : "--",
      reported_time_display1: data[1].investing_cash_flow
        ? convertValue(data[1].investing_cash_flow)
        : "--",
      reported_time_display0: data[0].investing_cash_flow
        ? convertValue(data[0].investing_cash_flow)
        : "--",
      items: [
        {
          breakDown: "Cash Flow from Continuing Investing Activities",
          ttm: data_ttm[0].cash_flow_from_continuing_investing_activities
            ? convertValue(data_ttm[0].cash_flow_from_continuing_investing_activities)
            : "--",
          reported_time_display3: data[3].cash_flow_from_continuing_investing_activities
            ? convertValue(data[3].cash_flow_from_continuing_investing_activities)
            : "--",
          reported_time_display2: data[2].cash_flow_from_continuing_investing_activities
            ? convertValue(data[2].cash_flow_from_continuing_investing_activities)
            : "--",
          reported_time_display1: data[1].cash_flow_from_continuing_investing_activities
            ? convertValue(data[1].cash_flow_from_continuing_investing_activities)
            : "--",
          reported_time_display0: data[0].cash_flow_from_continuing_investing_activities
            ? convertValue(data[0].cash_flow_from_continuing_investing_activities)
            : "--",
        },
        {
          breakDown: "Capital Expenditure Reported",
          ttm: data_ttm[0].capital_expenditure_reported
            ? convertValue(data_ttm[0].capital_expenditure_reported)
            : "--",
          reported_time_display3: data[3].capital_expenditure_reported
            ? convertValue(data[3].capital_expenditure_reported)
            : "--",
          reported_time_display2: data[2].capital_expenditure_reported
            ? convertValue(data[2].capital_expenditure_reported)
            : "--",
          reported_time_display1: data[1].capital_expenditure_reported
            ? convertValue(data[1].capital_expenditure_reported)
            : "--",
          reported_time_display0: data[0].capital_expenditure_reported
            ? convertValue(data[0].capital_expenditure_reported)
            : "--",
        },
        {
          breakDown: "Net PPE Purchase And Sale",
          ttm: data_ttm[0].net_ppe_purchase_and_sale
            ? convertValue(data_ttm[0].net_ppe_purchase_and_sale)
            : "--",
          reported_time_display3: data[3].net_ppe_purchase_and_sale
            ? convertValue(data[3].net_ppe_purchase_and_sale)
            : "--",
          reported_time_display2: data[2].net_ppe_purchase_and_sale
            ? convertValue(data[2].net_ppe_purchase_and_sale)
            : "--",
          reported_time_display1: data[1].net_ppe_purchase_and_sale
            ? convertValue(data[1].net_ppe_purchase_and_sale)
            : "--",
          reported_time_display0: data[0].net_ppe_purchase_and_sale
            ? convertValue(data[0].net_ppe_purchase_and_sale)
            : "--",
          items: [
            {
              breakDown: "Purchase of PPE",
              ttm: data_ttm[0].purchase_of_ppe
                ? convertValue(data_ttm[0].purchase_of_ppe)
                : "--",
              reported_time_display3: data[3].purchase_of_ppe
                ? convertValue(data[3].purchase_of_ppe)
                : "--",
              reported_time_display2: data[2].purchase_of_ppe
                ? convertValue(data[2].purchase_of_ppe)
                : "--",
              reported_time_display1: data[1].purchase_of_ppe
                ? convertValue(data[1].purchase_of_ppe)
                : "--",
              reported_time_display0: data[0].purchase_of_ppe
                ? convertValue(data[0].purchase_of_ppe)
                : "--",
            },
            {
              breakDown: "Sale of PPE",
              ttm: data_ttm[0].sale_of_ppe
                ? convertValue(data_ttm[0].sale_of_ppe)
                : "--",
              reported_time_display3: data[3].sale_of_ppe
                ? convertValue(data[3].sale_of_ppe)
                : "--",
              reported_time_display2: data[2].sale_of_ppe
                ? convertValue(data[2].sale_of_ppe)
                : "--",
              reported_time_display1: data[1].sale_of_ppe
                ? convertValue(data[1].sale_of_ppe)
                : "--",
              reported_time_display0: data[0].sale_of_ppe
                ? convertValue(data[0].sale_of_ppe)
                : "--",
            },
          ],
        },
        {
          breakDown: "Net Investment Purchase And Sale",
          ttm: data_ttm[0].net_investment_purchase_and_sale
            ? convertValue(data_ttm[0].net_investment_purchase_and_sale)
            : "--",
          reported_time_display3: data[3].net_investment_purchase_and_sale
            ? convertValue(data[3].net_investment_purchase_and_sale)
            : "--",
          reported_time_display2: data[2].net_investment_purchase_and_sale
            ? convertValue(data[2].net_investment_purchase_and_sale)
            : "--",
          reported_time_display1: data[1].net_investment_purchase_and_sale
            ? convertValue(data[1].net_investment_purchase_and_sale)
            : "--",
          reported_time_display0: data[0].net_investment_purchase_and_sale
            ? convertValue(data[0].net_investment_purchase_and_sale)
            : "--",
          items: [
            {
              breakDown: "Purchase of Investment",
              ttm: data_ttm[0].purchase_of_investment
                ? convertValue(data_ttm[0].purchase_of_investment)
                : "--",
              reported_time_display3: data[3].purchase_of_investment
                ? convertValue(data[3].purchase_of_investment)
                : "--",
              reported_time_display2: data[2].purchase_of_investment
                ? convertValue(data[2].purchase_of_investment)
                : "--",
              reported_time_display1: data[1].purchase_of_investment
                ? convertValue(data[1].purchase_of_investment)
                : "--",
              reported_time_display0: data[0].purchase_of_investment
                ? convertValue(data[0].purchase_of_investment)
                : "--",
            },
            {
              breakDown: "Sale of Investment",
              ttm: data_ttm[0].sale_of_investment
                ? convertValue(data_ttm[0].sale_of_investment)
                : "--",
              reported_time_display3: data[3].sale_of_investment
                ? convertValue(data[3].sale_of_investment)
                : "--",
              reported_time_display2: data[2].sale_of_investment
                ? convertValue(data[2].sale_of_investment)
                : "--",
              reported_time_display1: data[1].sale_of_investment
                ? convertValue(data[1].sale_of_investment)
                : "--",
              reported_time_display0: data[0].sale_of_investment
                ? convertValue(data[0].sale_of_investment)
                : "--",
            },
          ],
        },
        {
          breakDown: "Net Business Purchase And Sale",
          ttm: data_ttm[0].net_business_purchase_and_sale
            ? convertValue(data_ttm[0].net_business_purchase_and_sale)
            : "--",
          reported_time_display3: data[3].net_business_purchase_and_sale
            ? convertValue(data[3].net_business_purchase_and_sale)
            : "--",
          reported_time_display2: data[2].net_business_purchase_and_sale
            ? convertValue(data[2].net_business_purchase_and_sale)
            : "--",
          reported_time_display1: data[1].net_business_purchase_and_sale
            ? convertValue(data[1].net_business_purchase_and_sale)
            : "--",
          reported_time_display0: data[0].net_business_purchase_and_sale
            ? convertValue(data[0].net_business_purchase_and_sale)
            : "--",
          items: [
            {
              breakDown: "Sale of Business",
              ttm: data_ttm[0].sale_of_business
                ? convertValue(data_ttm[0].sale_of_business)
                : "--",
              reported_time_display3: data[3].sale_of_business
                ? convertValue(data[3].sale_of_business)
                : "--",
              reported_time_display2: data[2].sale_of_business
                ? convertValue(data[2].sale_of_business)
                : "--",
              reported_time_display1: data[1].sale_of_business
                ? convertValue(data[1].sale_of_business)
                : "--",
              reported_time_display0: data[0].sale_of_business
                ? convertValue(data[0].sale_of_business)
                : "--",
            },
            {
              breakDown: "Purchase of Business",
              ttm: data_ttm[0].purchase_of_business
                ? convertValue(data_ttm[0].purchase_of_business)
                : "--",
              reported_time_display3: data[3].purchase_of_business
                ? convertValue(data[3].purchase_of_business)
                : "--",
              reported_time_display2: data[2].purchase_of_business
                ? convertValue(data[2].purchase_of_business)
                : "--",
              reported_time_display1: data[1].purchase_of_business
                ? convertValue(data[1].purchase_of_business)
                : "--",
              reported_time_display0: data[0].purchase_of_business
                ? convertValue(data[0].purchase_of_business)
                : "--",
            },
          ],
        },
        {
          breakDown: "Dividends Received CFI",
          ttm: data_ttm[0].dividends_received_cfi
            ? convertValue(data_ttm[0].dividends_received_cfi)
            : "--",
          reported_time_display3: data[3].dividends_received_cfi
            ? convertValue(data[3].dividends_received_cfi)
            : "--",
          reported_time_display2: data[2].dividends_received_cfi
            ? convertValue(data[2].dividends_received_cfi)
            : "--",
          reported_time_display1: data[1].dividends_received_cfi
            ? convertValue(data[1].dividends_received_cfi)
            : "--",
          reported_time_display0: data[0].dividends_received_cfi
            ? convertValue(data[0].dividends_received_cfi)
            : "--",
        },
        {
          breakDown: "Net Other Investing Changes",
          ttm: data_ttm[0].net_other_investing_changes
            ? convertValue(data_ttm[0].net_other_investing_changes)
            : "--",
          reported_time_display3: data[3].net_other_investing_changes
            ? convertValue(data[3].net_other_investing_changes)
            : "--",
          reported_time_display2: data[2].net_other_investing_changes
            ? convertValue(data[2].net_other_investing_changes)
            : "--",
          reported_time_display1: data[1].net_other_investing_changes
            ? convertValue(data[1].net_other_investing_changes)
            : "--",
          reported_time_display0: data[0].net_other_investing_changes
            ? convertValue(data[0].net_other_investing_changes)
            : "--",
        },
        {
          breakDown: "Net Intangibles Purchase And Sale",
          ttm: data_ttm[0].net_intangibles_purchase_and_sale
            ? convertValue(data_ttm[0].net_intangibles_purchase_and_sale)
            : "--",
          reported_time_display3: data[3].net_intangibles_purchase_and_sale
            ? convertValue(data[3].net_intangibles_purchase_and_sale)
            : "--",
          reported_time_display2: data[2].net_intangibles_purchase_and_sale
            ? convertValue(data[2].net_intangibles_purchase_and_sale)
            : "--",
          reported_time_display1: data[1].net_intangibles_purchase_and_sale
            ? convertValue(data[1].net_intangibles_purchase_and_sale)
            : "--",
          reported_time_display0: data[0].net_intangibles_purchase_and_sale
            ? convertValue(data[0].net_intangibles_purchase_and_sale)
            : "--",
        },
        {
          breakDown: "Purchase of Intangibles",
          ttm: data_ttm[0].purchase_of_intangibles
            ? convertValue(data_ttm[0].purchase_of_intangibles)
            : "--",
          reported_time_display3: data[3].purchase_of_intangibles
            ? convertValue(data[3].purchase_of_intangibles)
            : "--",
          reported_time_display2: data[2].purchase_of_intangibles
            ? convertValue(data[2].purchase_of_intangibles)
            : "--",
          reported_time_display1: data[1].purchase_of_intangibles
            ? convertValue(data[1].purchase_of_intangibles)
            : "--",
          reported_time_display0: data[0].purchase_of_intangibles
            ? convertValue(data[0].purchase_of_intangibles)
            : "--",
        },
      ],
    },
    {
      breakDown: "Financing Cash Flow",
      ttm: data_ttm[0].financing_cash_flow
        ? convertValue(data_ttm[0].financing_cash_flow)
        : "--",
      reported_time_display3: data[3].financing_cash_flow
        ? convertValue(data[3].financing_cash_flow)
        : "--",
      reported_time_display2: data[2].financing_cash_flow
        ? convertValue(data[2].financing_cash_flow)
        : "--",
      reported_time_display1: data[1].financing_cash_flow
        ? convertValue(data[1].financing_cash_flow)
        : "--",
      reported_time_display0: data[0].financing_cash_flow
        ? convertValue(data[0].financing_cash_flow)
        : "--",
      items: [
        {
          breakDown: "Cash Flow from Continuing Financing Activities",
          ttm: data_ttm[0].cash_flow_from_continuing_financing_activities
            ? convertValue(data_ttm[0].cash_flow_from_continuing_financing_activities)
            : "--",
          reported_time_display3: data[3].cash_flow_from_continuing_financing_activities
            ? convertValue(data[3].cash_flow_from_continuing_financing_activities)
            : "--",
          reported_time_display2: data[2].cash_flow_from_continuing_financing_activities
            ? convertValue(data[2].cash_flow_from_continuing_financing_activities)
            : "--",
          reported_time_display1: data[1].cash_flow_from_continuing_financing_activities
            ? convertValue(data[1].cash_flow_from_continuing_financing_activities)
            : "--",
          reported_time_display0: data[0].cash_flow_from_continuing_financing_activities
            ? convertValue(data[0].cash_flow_from_continuing_financing_activities)
            : "--",
        },
        {
          breakDown: "Net Issuance Payments of Debt",
          ttm: data_ttm[0].net_issuance_payments_of_debt
            ? convertValue(data_ttm[0].net_issuance_payments_of_debt)
            : "--",
          reported_time_display3: data[3].net_issuance_payments_of_debt
            ? convertValue(data[3].net_issuance_payments_of_debt)
            : "--",
          reported_time_display2: data[2].net_issuance_payments_of_debt
            ? convertValue(data[2].net_issuance_payments_of_debt)
            : "--",
          reported_time_display1: data[1].net_issuance_payments_of_debt
            ? convertValue(data[1].net_issuance_payments_of_debt)
            : "--",
          reported_time_display0: data[0].net_issuance_payments_of_debt
            ? convertValue(data[0].net_issuance_payments_of_debt)
            : "--",
        },
        {
          breakDown: "Net Long Term Debt Issuance",
          ttm: data_ttm[0].net_long_term_debt_issuance
            ? convertValue(data_ttm[0].net_long_term_debt_issuance)
            : "--",
          reported_time_display3: data[3].net_long_term_debt_issuance
            ? convertValue(data[3].net_long_term_debt_issuance)
            : "--",
          reported_time_display2: data[2].net_long_term_debt_issuance
            ? convertValue(data[2].net_long_term_debt_issuance)
            : "--",
          reported_time_display1: data[1].net_long_term_debt_issuance
            ? convertValue(data[1].net_long_term_debt_issuance)
            : "--",
          reported_time_display0: data[0].net_long_term_debt_issuance
            ? convertValue(data[0].net_long_term_debt_issuance)
            : "--",
          items: [
            {
              breakDown: "Long Term Debt Issuance",
              ttm: data_ttm[0].long_term_debt_issuance
                ? convertValue(data_ttm[0].long_term_debt_issuance)
                : "--",
              reported_time_display3: data[3].long_term_debt_issuance
                ? convertValue(data[3].long_term_debt_issuance)
                : "--",
              reported_time_display2: data[2].long_term_debt_issuance
                ? convertValue(data[2].long_term_debt_issuance)
                : "--",
              reported_time_display1: data[1].long_term_debt_issuance
                ? convertValue(data[1].long_term_debt_issuance)
                : "--",
              reported_time_display0: data[0].long_term_debt_issuance
                ? convertValue(data[0].long_term_debt_issuance)
                : "--",
            },
            {
              breakDown: "Long Term Debt Payments",
              ttm: data_ttm[0].long_term_debt_payments
                ? convertValue(data_ttm[0].long_term_debt_payments)
                : "--",
              reported_time_display3: data[3].long_term_debt_payments
                ? convertValue(data[3].long_term_debt_payments)
                : "--",
              reported_time_display2: data[2].long_term_debt_payments
                ? convertValue(data[2].long_term_debt_payments)
                : "--",
              reported_time_display1: data[1].long_term_debt_payments
                ? convertValue(data[1].long_term_debt_payments)
                : "--",
              reported_time_display0: data[0].long_term_debt_payments
                ? convertValue(data[0].long_term_debt_payments)
                : "--",
            },
          ],
        },
        {
          breakDown: "Net Common Stock Issuance",
          ttm: data_ttm[0].net_common_stock_issuance
            ? convertValue(data_ttm[0].net_common_stock_issuance)
            : "--",
          reported_time_display3: data[3].net_common_stock_issuance
            ? convertValue(data[3].net_common_stock_issuance)
            : "--",
          reported_time_display2: data[2].net_common_stock_issuance
            ? convertValue(data[2].net_common_stock_issuance)
            : "--",
          reported_time_display1: data[1].net_common_stock_issuance
            ? convertValue(data[1].net_common_stock_issuance)
            : "--",
          reported_time_display0: data[0].net_common_stock_issuance
            ? convertValue(data[0].net_common_stock_issuance)
            : "--",
          items: [
            {
              breakDown: "Common Stock Payments",
              ttm: data_ttm[0].common_stock_payments
                ? convertValue(data_ttm[0].common_stock_payments)
                : "--",
              reported_time_display3: data[3].common_stock_payments
                ? convertValue(data[3].common_stock_payments)
                : "--",
              reported_time_display2: data[2].common_stock_payments
                ? convertValue(data[2].common_stock_payments)
                : "--",
              reported_time_display1: data[1].common_stock_payments
                ? convertValue(data[1].common_stock_payments)
                : "--",
              reported_time_display0: data[0].common_stock_payments
                ? convertValue(data[0].common_stock_payments)
                : "--",
            },
            {
              breakDown: "Common Stock Issuance",
              ttm: data_ttm[0].common_stock_issuance
                ? convertValue(data_ttm[0].common_stock_issuance)
                : "--",
              reported_time_display3: data[3].common_stock_issuance
                ? convertValue(data[3].common_stock_issuance)
                : "--",
              reported_time_display2: data[2].common_stock_issuance
                ? convertValue(data[2].common_stock_issuance)
                : "--",
              reported_time_display1: data[1].common_stock_issuance
                ? convertValue(data[1].common_stock_issuance)
                : "--",
              reported_time_display0: data[0].common_stock_issuance
                ? convertValue(data[0].common_stock_issuance)
                : "--",
            },
          ],
        },
        {
          breakDown: "Cash Dividends Paid",
          ttm: data_ttm[0].cash_dividends_paid
            ? convertValue(data_ttm[0].cash_dividends_paid)
            : "--",
          reported_time_display3: data[3].cash_dividends_paid
            ? convertValue(data[3].cash_dividends_paid)
            : "--",
          reported_time_display2: data[2].cash_dividends_paid
            ? convertValue(data[2].cash_dividends_paid)
            : "--",
          reported_time_display1: data[1].cash_dividends_paid
            ? convertValue(data[1].cash_dividends_paid)
            : "--",
          reported_time_display0: data[0].cash_dividends_paid
            ? convertValue(data[0].cash_dividends_paid)
            : "--",
          items: [
            {
              breakDown: "Common Stock Dividend Paid",
              ttm: data_ttm[0].common_stock_dividend_paid
                ? convertValue(data_ttm[0].common_stock_dividend_paid)
                : "--",
              reported_time_display3: data[3].common_stock_dividend_paid
                ? convertValue(data[3].common_stock_dividend_paid)
                : "--",
              reported_time_display2: data[2].common_stock_dividend_paid
                ? convertValue(data[2].common_stock_dividend_paid)
                : "--",
              reported_time_display1: data[1].common_stock_dividend_paid
                ? convertValue(data[1].common_stock_dividend_paid)
                : "--",
              reported_time_display0: data[0].common_stock_dividend_paid
                ? convertValue(data[0].common_stock_dividend_paid)
                : "--",
            },
          ],
        },
        {
          breakDown: "Net Other Financing Charges",
          ttm: data_ttm[0].net_other_financing_charges
            ? convertValue(data_ttm[0].net_other_financing_charges)
            : "--",
          reported_time_display3: data[3].net_other_financing_charges
            ? convertValue(data[3].net_other_financing_charges)
            : "--",
          reported_time_display2: data[2].net_other_financing_charges
            ? convertValue(data[2].net_other_financing_charges)
            : "--",
          reported_time_display1: data[1].net_other_financing_charges
            ? convertValue(data[1].net_other_financing_charges)
            : "--",
          reported_time_display0: data[0].net_other_financing_charges
            ? convertValue(data[0].net_other_financing_charges)
            : "--",
        },
        {
          breakDown: "Interest Paid CFF",
          ttm: data_ttm[0].interest_paid_cff
            ? convertValue(data_ttm[0].interest_paid_cff)
            : "--",
          reported_time_display3: data[3].interest_paid_cff
            ? convertValue(data[3].interest_paid_cff)
            : "--",
          reported_time_display2: data[2].interest_paid_cff
            ? convertValue(data[2].interest_paid_cff)
            : "--",
          reported_time_display1: data[1].interest_paid_cff
            ? convertValue(data[1].interest_paid_cff)
            : "--",
          reported_time_display0: data[0].interest_paid_cff
            ? convertValue(data[0].interest_paid_cff)
            : "--",
        },
      ],
    },
    {
      breakDown: "End Cash Position",
      ttm: data_ttm[0].end_cash_position
        ? convertValue(data_ttm[0].end_cash_position)
        : "--",
      reported_time_display3: data[3].end_cash_position
        ? convertValue(data[3].end_cash_position)
        : "--",
      reported_time_display2: data[2].end_cash_position
        ? convertValue(data[2].end_cash_position)
        : "--",
      reported_time_display1: data[1].end_cash_position
        ? convertValue(data[1].end_cash_position)
        : "--",
      reported_time_display0: data[0].end_cash_position
        ? convertValue(data[0].end_cash_position)
        : "--",
      items: [
        {
          breakDown: "Changes in Cash",
          ttm: data_ttm[0].changes_in_cash
            ? convertValue(data_ttm[0].changes_in_cash)
            : "--",
          reported_time_display3: data[3].changes_in_cash
            ? convertValue(data[3].changes_in_cash)
            : "--",
          reported_time_display2: data[2].changes_in_cash
            ? convertValue(data[2].changes_in_cash)
            : "--",
          reported_time_display1: data[1].changes_in_cash
            ? convertValue(data[1].changes_in_cash)
            : "--",
          reported_time_display0: data[0].changes_in_cash
            ? convertValue(data[0].changes_in_cash)
            : "--",
        },
        {
          breakDown: "Effect of Exchange Rate Changes",
          ttm: data_ttm[0].effect_of_exchange_rate_changes
            ? convertValue(data_ttm[0].effect_of_exchange_rate_changes)
            : "--",
          reported_time_display3: data[3].effect_of_exchange_rate_changes
            ? convertValue(data[3].effect_of_exchange_rate_changes)
            : "--",
          reported_time_display2: data[2].effect_of_exchange_rate_changes
            ? convertValue(data[2].effect_of_exchange_rate_changes)
            : "--",
          reported_time_display1: data[1].effect_of_exchange_rate_changes
            ? convertValue(data[1].effect_of_exchange_rate_changes)
            : "--",
          reported_time_display0: data[0].effect_of_exchange_rate_changes
            ? convertValue(data[0].effect_of_exchange_rate_changes)
            : "--",
        },
        {
          breakDown: "Beginning Cash Position",
          ttm: data_ttm[0].beginning_cash_position
            ? convertValue(data_ttm[0].beginning_cash_position)
            : "--",
          reported_time_display3: data[3].beginning_cash_position
            ? convertValue(data[3].beginning_cash_position)
            : "--",
          reported_time_display2: data[2].beginning_cash_position
            ? convertValue(data[2].beginning_cash_position)
            : "--",
          reported_time_display1: data[1].beginning_cash_position
            ? convertValue(data[1].beginning_cash_position)
            : "--",
          reported_time_display0: data[0].beginning_cash_position
            ? convertValue(data[0].beginning_cash_position)
            : "--",
        },
      ],
    },
    {
      breakDown: "Issuance of Debt",
      ttm: data_ttm[0].issuance_of_debt
        ? convertValue(data_ttm[0].issuance_of_debt)
        : "--",
      reported_time_display3: data[3].issuance_of_debt
        ? convertValue(data[3].issuance_of_debt)
        : "--",
      reported_time_display2: data[2].issuance_of_debt
        ? convertValue(data[2].issuance_of_debt)
        : "--",
      reported_time_display1: data[1].issuance_of_debt
        ? convertValue(data[1].issuance_of_debt)
        : "--",
      reported_time_display0: data[0].issuance_of_debt
        ? convertValue(data[0].issuance_of_debt)
        : "--",
    },
    {
      breakDown: "Repayment of Debt",
      ttm: data_ttm[0].repayment_of_debt
        ? convertValue(data_ttm[0].repayment_of_debt)
        : "--",
      reported_time_display3: data[3].repayment_of_debt
        ? convertValue(data[3].repayment_of_debt)
        : "--",
      reported_time_display2: data[2].repayment_of_debt
        ? convertValue(data[2].repayment_of_debt)
        : "--",
      reported_time_display1: data[1].repayment_of_debt
        ? convertValue(data[1].repayment_of_debt)
        : "--",
      reported_time_display0: data[0].repayment_of_debt
        ? convertValue(data[0].repayment_of_debt)
        : "--",
    },
    {
      breakDown: "Repurchase of Capital Stock",
      ttm: data_ttm[0].repurchase_of_capital_stock
        ? convertValue(data_ttm[0].repurchase_of_capital_stock)
        : "--",
      reported_time_display3: data[3].repurchase_of_capital_stock
        ? convertValue(data[3].repurchase_of_capital_stock)
        : "--",
      reported_time_display2: data[2].repurchase_of_capital_stock
        ? convertValue(data[2].repurchase_of_capital_stock)
        : "--",
      reported_time_display1: data[1].repurchase_of_capital_stock
        ? convertValue(data[1].repurchase_of_capital_stock)
        : "--",
      reported_time_display0: data[0].repurchase_of_capital_stock
        ? convertValue(data[0].repurchase_of_capital_stock)
        : "--",
    },
    {
      breakDown: "Free Cash Flow",
      ttm: data_ttm[0].free_cash_flow
        ? convertValue(data_ttm[0].free_cash_flow)
        : "--",
      reported_time_display3: data[3].free_cash_flow
        ? convertValue(data[3].free_cash_flow)
        : "--",
      reported_time_display2: data[2].free_cash_flow
        ? convertValue(data[2].free_cash_flow)
        : "--",
      reported_time_display1: data[1].free_cash_flow
        ? convertValue(data[1].free_cash_flow)
        : "--",
      reported_time_display0: data[0].free_cash_flow
        ? convertValue(data[0].free_cash_flow)
        : "--",
    },
    {
      breakDown: "Income Tax Paid Supplemental Data",
      ttm: data_ttm[0].income_tax_paid_supplemental_data
        ? convertValue(data_ttm[0].income_tax_paid_supplemental_data)
        : "--",
      reported_time_display3: data[3].income_tax_paid_supplemental_data
        ? convertValue(data[3].income_tax_paid_supplemental_data)
        : "--",
      reported_time_display2: data[2].income_tax_paid_supplemental_data
        ? convertValue(data[2].income_tax_paid_supplemental_data)
        : "--",
      reported_time_display1: data[1].income_tax_paid_supplemental_data
        ? convertValue(data[1].income_tax_paid_supplemental_data)
        : "--",
      reported_time_display0: data[0].income_tax_paid_supplemental_data
        ? convertValue(data[0].income_tax_paid_supplemental_data)
        : "--",
    },
    {
      breakDown: "Capital Expenditure",
      ttm: data_ttm[0].capital_expenditure
        ? convertValue(data_ttm[0].capital_expenditure)
        : "--",
      reported_time_display3: data[3].capital_expenditure
        ? convertValue(data[3].capital_expenditure)
        : "--",
      reported_time_display2: data[2].capital_expenditure
        ? convertValue(data[2].capital_expenditure)
        : "--",
      reported_time_display1: data[1].capital_expenditure
        ? convertValue(data[1].capital_expenditure)
        : "--",
      reported_time_display0: data[0].capital_expenditure
        ? convertValue(data[0].capital_expenditure)
        : "--",
    },
    {
      breakDown: "Issuance of Capital Stock",
      ttm: data_ttm[0].issuance_of_capital_stock
        ? convertValue(data_ttm[0].issuance_of_capital_stock)
        : "--",
      reported_time_display3: data[3].issuance_of_capital_stock
        ? convertValue(data[3].issuance_of_capital_stock)
        : "--",
      reported_time_display2: data[2].issuance_of_capital_stock
        ? convertValue(data[2].issuance_of_capital_stock)
        : "--",
      reported_time_display1: data[1].issuance_of_capital_stock
        ? convertValue(data[1].issuance_of_capital_stock)
        : "--",
      reported_time_display0: data[0].issuance_of_capital_stock
        ? convertValue(data[0].issuance_of_capital_stock)
        : "--",
    },
  ];
};
