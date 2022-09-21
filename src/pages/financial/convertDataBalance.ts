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

  const data = propsData.financials.balance_sheet;

  return [
    {
      breakDown: "Total Assets",
      reported_time_display3: data[3].total_assets
        ? convertValue(data[3].total_assets)
        : "--",
      reported_time_display2: data[2].total_assets
        ? convertValue(data[2].total_assets)
        : "--",
      reported_time_display1: data[1].total_assets
        ? convertValue(data[1].total_assets)
        : "--",
      reported_time_display0: data[0].total_assets
        ? convertValue(data[0].total_assets)
        : "--",
      items: [
        {
          breakDown: "Current Assets",
          reported_time_display3: data[3].current_assets
            ? convertValue(data[3].current_assets)
            : "--",
          reported_time_display2: data[2].current_assets
            ? convertValue(data[2].current_assets)
            : "--",
          reported_time_display1: data[1].current_assets
            ? convertValue(data[1].current_assets)
            : "--",
          reported_time_display0: data[0].current_assets
            ? convertValue(data[0].current_assets)
            : "--",
          items: [
            {
              breakDown: "Cash, Cash Equivalents & Short Term Investments",
              reported_time_display3: data[3].cash_cash_equivalents_and_short_term_investments
                ? convertValue(data[3].cash_cash_equivalents_and_short_term_investments)
                : "--",
              reported_time_display2: data[2].cash_cash_equivalents_and_short_term_investments
                ? convertValue(data[2].cash_cash_equivalents_and_short_term_investments)
                : "--",
              reported_time_display1: data[1].cash_cash_equivalents_and_short_term_investments
                ? convertValue(data[1].cash_cash_equivalents_and_short_term_investments)
                : "--",
              reported_time_display0: data[0].cash_cash_equivalents_and_short_term_investments
                ? convertValue(data[0].cash_cash_equivalents_and_short_term_investments)
                : "--",
              items: [
                {
                  breakDown: "Cash And Cash Equivalents",
                  reported_time_display3: data[3].cash_and_cash_equivalents
                    ? convertValue(data[3].cash_and_cash_equivalents)
                    : "--",
                  reported_time_display2: data[2].cash_and_cash_equivalents
                    ? convertValue(data[2].cash_and_cash_equivalents)
                    : "--",
                  reported_time_display1: data[1].cash_and_cash_equivalents
                    ? convertValue(data[1].cash_and_cash_equivalents)
                    : "--",
                  reported_time_display0: data[0].cash_and_cash_equivalents
                    ? convertValue(data[0].cash_and_cash_equivalents)
                    : "--",
                  items: [
                    {
                      breakDown: "Cash",
                      reported_time_display3: data[3].cash_financial
                        ? convertValue(data[3].cash_financial)
                        : "--",
                      reported_time_display2: data[2].cash_financial
                        ? convertValue(data[2].cash_financial)
                        : "--",
                      reported_time_display1: data[1].cash_financial
                        ? convertValue(data[1].cash_financial)
                        : "--",
                      reported_time_display0: data[0].cash_financial
                        ? convertValue(data[0].cash_financial)
                        : "--",
                    },
                    {
                      breakDown: "Cash Equivalents",
                      reported_time_display3: data[3].cash_equivalents
                        ? convertValue(data[3].cash_equivalents)
                        : "--",
                      reported_time_display2: data[2].cash_equivalents
                        ? convertValue(data[2].cash_equivalents)
                        : "--",
                      reported_time_display1: data[1].cash_equivalents
                        ? convertValue(data[1].cash_equivalents)
                        : "--",
                      reported_time_display0: data[0].cash_equivalents
                        ? convertValue(data[0].cash_equivalents)
                        : "--",
                    }
                  ]
                },
                {
                  breakDown: "Other Short Term Investments",
                  reported_time_display3: data[3].other_short_term_investments
                    ? convertValue(data[3].other_short_term_investments)
                    : "--",
                  reported_time_display2: data[2].other_short_term_investments
                    ? convertValue(data[2].other_short_term_investments)
                    : "--",
                  reported_time_display1: data[1].other_short_term_investments
                    ? convertValue(data[1].other_short_term_investments)
                    : "--",
                  reported_time_display0: data[0].other_short_term_investments
                    ? convertValue(data[0].other_short_term_investments)
                    : "--",
                },
              ]
            },
            {
              breakDown: "Receivables",
              reported_time_display3: data[3].receivables
                ? convertValue(data[3].receivables)
                : "--",
              reported_time_display2: data[2].receivables
                ? convertValue(data[2].receivables)
                : "--",
              reported_time_display1: data[1].receivables
                ? convertValue(data[1].receivables)
                : "--",
              reported_time_display0: data[0].receivables
                ? convertValue(data[0].receivables)
                : "--",
              items: [
                {
                  breakDown: "Accounts receivable",
                  reported_time_display3: data[3].accounts_receivable
                    ? convertValue(data[3].accounts_receivable)
                    : "--",
                  reported_time_display2: data[2].accounts_receivable
                    ? convertValue(data[2].accounts_receivable)
                    : "--",
                  reported_time_display1: data[1].accounts_receivable
                    ? convertValue(data[1].accounts_receivable)
                    : "--",
                  reported_time_display0: data[0].accounts_receivable
                    ? convertValue(data[0].accounts_receivable)
                    : "--",
                  items: [
                    {
                      breakDown: "Gross Accounts Receivable",
                      reported_time_display3: data[3].gross_accounts_receivable
                        ? convertValue(data[3].gross_accounts_receivable)
                        : "--",
                      reported_time_display2: data[2].gross_accounts_receivable
                        ? convertValue(data[2].gross_accounts_receivable)
                        : "--",
                      reported_time_display1: data[1].gross_accounts_receivable
                        ? convertValue(data[1].gross_accounts_receivable)
                        : "--",
                      reported_time_display0: data[0].gross_accounts_receivable
                        ? convertValue(data[0].gross_accounts_receivable)
                        : "--",
                    },
                    {
                      breakDown: "Allowance For Doubtful Accounts Receivable",
                      reported_time_display3: data[3].allowance_for_doubtful_accounts_receivable
                        ? convertValue(data[3].allowance_for_doubtful_accounts_receivable)
                        : "--",
                      reported_time_display2: data[2].allowance_for_doubtful_accounts_receivable
                        ? convertValue(data[2].allowance_for_doubtful_accounts_receivable)
                        : "--",
                      reported_time_display1: data[1].allowance_for_doubtful_accounts_receivable
                        ? convertValue(data[1].allowance_for_doubtful_accounts_receivable)
                        : "--",
                      reported_time_display0: data[0].allowance_for_doubtful_accounts_receivable
                        ? convertValue(data[0].allowance_for_doubtful_accounts_receivable)
                        : "--",
                    },
                  ]
                },
                {
                  breakDown: "Taxes Receivableeceivables",
                  reported_time_display3: data[3].taxes_receivable
                    ? convertValue(data[3].taxes_receivable)
                    : "--",
                  reported_time_display2: data[2].taxes_receivable
                    ? convertValue(data[2].taxes_receivable)
                    : "--",
                  reported_time_display1: data[1].taxes_receivable
                    ? convertValue(data[1].taxes_receivable)
                    : "--",
                  reported_time_display0: data[0].taxes_receivable
                    ? convertValue(data[0].taxes_receivable)
                    : "--",
                },
                {
                  breakDown: "Receivables Adjustments Allowances",
                  reported_time_display3: data[3].receivables_adjustments_allowances
                    ? convertValue(data[3].receivables_adjustments_allowances)
                    : "--",
                  reported_time_display2: data[2].receivables_adjustments_allowances
                    ? convertValue(data[2].receivables_adjustments_allowances)
                    : "--",
                  reported_time_display1: data[1].receivables_adjustments_allowances
                    ? convertValue(data[1].receivables_adjustments_allowances)
                    : "--",
                  reported_time_display0: data[0].receivables_adjustments_allowances
                    ? convertValue(data[0].receivables_adjustments_allowances)
                    : "--",
                },
                {
                  breakDown: "Other Receivables",
                  reported_time_display3: data[3].other_receivables
                    ? convertValue(data[3].other_receivables)
                    : "--",
                  reported_time_display2: data[2].other_receivables
                    ? convertValue(data[2].other_receivables)
                    : "--",
                  reported_time_display1: data[1].other_receivables
                    ? convertValue(data[1].other_receivables)
                    : "--",
                  reported_time_display0: data[0].other_receivables
                    ? convertValue(data[0].other_receivables)
                    : "--",
                },
              ]
            },
            {
              breakDown: "Inventory",
              reported_time_display3: data[3].inventory
                ? convertValue(data[3].inventory)
                : "--",
              reported_time_display2: data[2].inventory
                ? convertValue(data[2].inventory)
                : "--",
              reported_time_display1: data[1].inventory
                ? convertValue(data[1].inventory)
                : "--",
              reported_time_display0: data[0].inventory
                ? convertValue(data[0].inventory)
                : "--",
              items: [
                {
                  breakDown: "Raw Materials",
                  reported_time_display3: data[3].raw_materials
                    ? convertValue(data[3].raw_materials)
                    : "--",
                  reported_time_display2: data[2].raw_materials
                    ? convertValue(data[2].raw_materials)
                    : "--",
                  reported_time_display1: data[1].raw_materials
                    ? convertValue(data[1].raw_materials)
                    : "--",
                  reported_time_display0: data[0].raw_materials
                    ? convertValue(data[0].raw_materials)
                    : "--",
                },
                {
                  breakDown: "Work in Process",
                  reported_time_display3: data[3].work_in_process
                    ? convertValue(data[3].work_in_process)
                    : "--",
                  reported_time_display2: data[2].work_in_process
                    ? convertValue(data[2].work_in_process)
                    : "--",
                  reported_time_display1: data[1].work_in_process
                    ? convertValue(data[1].work_in_process)
                    : "--",
                  reported_time_display0: data[0].work_in_process
                    ? convertValue(data[0].work_in_process)
                    : "--",
                },
                {
                  breakDown: "Finished Goods",
                  reported_time_display3: data[3].finished_goods
                    ? convertValue(data[3].finished_goods)
                    : "--",
                  reported_time_display2: data[2].finished_goods
                    ? convertValue(data[2].finished_goods)
                    : "--",
                  reported_time_display1: data[1].finished_goods
                    ? convertValue(data[1].finished_goods)
                    : "--",
                  reported_time_display0: data[0].finished_goods
                    ? convertValue(data[0].finished_goods)
                    : "--",
                },
                {
                  breakDown: "Other Inventories",
                  reported_time_display3: data[3].other_inventories
                    ? convertValue(data[3].other_inventories)
                    : "--",
                  reported_time_display2: data[2].other_inventories
                    ? convertValue(data[2].other_inventories)
                    : "--",
                  reported_time_display1: data[1].other_inventories
                    ? convertValue(data[1].other_inventories)
                    : "--",
                  reported_time_display0: data[0].other_inventories
                    ? convertValue(data[0].other_inventories)
                    : "--",
                },
              ]
            },
            {
              breakDown: "Prepaid Assets",
              reported_time_display3: data[3].prepaid_assets
                ? convertValue(data[3].prepaid_assets)
                : "--",
              reported_time_display2: data[2].prepaid_assets
                ? convertValue(data[2].prepaid_assets)
                : "--",
              reported_time_display1: data[1].prepaid_assets
                ? convertValue(data[1].prepaid_assets)
                : "--",
              reported_time_display0: data[0].prepaid_assets
                ? convertValue(data[0].prepaid_assets)
                : "--",
            },
            {
              breakDown: "Current Deferred Assets",
              reported_time_display3: data[3].current_deferred_assets
                ? convertValue(data[3].current_deferred_assets)
                : "--",
              reported_time_display2: data[2].current_deferred_assets
                ? convertValue(data[2].current_deferred_assets)
                : "--",
              reported_time_display1: data[1].current_deferred_assets
                ? convertValue(data[1].current_deferred_assets)
                : "--",
              reported_time_display0: data[0].current_deferred_assets
                ? convertValue(data[0].current_deferred_assets)
                : "--",
              items: [
                {
                  breakDown: "Current Deferred Taxes Assets",
                  reported_time_display3: data[3].current_deferred_taxes_assets
                    ? convertValue(data[3].current_deferred_taxes_assets)
                    : "--",
                  reported_time_display2: data[2].current_deferred_taxes_assets
                    ? convertValue(data[2].current_deferred_taxes_assets)
                    : "--",
                  reported_time_display1: data[1].current_deferred_taxes_assets
                    ? convertValue(data[1].current_deferred_taxes_assets)
                    : "--",
                  reported_time_display0: data[0].current_deferred_taxes_assets
                    ? convertValue(data[0].current_deferred_taxes_assets)
                    : "--",
                }
              ]
            },
            {
              breakDown: "Assets Held for Sale Current",
              reported_time_display3: data[3].assets_held_for_sale_current
                ? convertValue(data[3].assets_held_for_sale_current)
                : "--",
              reported_time_display2: data[2].assets_held_for_sale_current
                ? convertValue(data[2].assets_held_for_sale_current)
                : "--",
              reported_time_display1: data[1].assets_held_for_sale_current
                ? convertValue(data[1].assets_held_for_sale_current)
                : "--",
              reported_time_display0: data[0].assets_held_for_sale_current
                ? convertValue(data[0].assets_held_for_sale_current)
                : "--",
            },
            {
              breakDown: "Hedging Assets Current",
              reported_time_display3: data[3].hedging_assets_current
                ? convertValue(data[3].hedging_assets_current)
                : "--",
              reported_time_display2: data[2].hedging_assets_current
                ? convertValue(data[2].hedging_assets_current)
                : "--",
              reported_time_display1: data[1].hedging_assets_current
                ? convertValue(data[1].hedging_assets_current)
                : "--",
              reported_time_display0: data[0].hedging_assets_current
                ? convertValue(data[0].hedging_assets_current)
                : "--",
            },
            {
              breakDown: "Other Current Assets",
              reported_time_display3: data[3].other_current_assets
                ? convertValue(data[3].other_current_assets)
                : "--",
              reported_time_display2: data[2].other_current_assets
                ? convertValue(data[2].other_current_assets)
                : "--",
              reported_time_display1: data[1].other_current_assets
                ? convertValue(data[1].other_current_assets)
                : "--",
              reported_time_display0: data[0].other_current_assets
                ? convertValue(data[0].other_current_assets)
                : "--",
            },
          ]
        },
        {
          breakDown: "Total non-current assets",
          reported_time_display3: data[3].total_non_current_assets
            ? convertValue(data[3].total_non_current_assets)
            : "--",
          reported_time_display2: data[2].total_non_current_assets
            ? convertValue(data[2].total_non_current_assets)
            : "--",
          reported_time_display1: data[1].total_non_current_assets
            ? convertValue(data[1].total_non_current_assets)
            : "--",
          reported_time_display0: data[0].total_non_current_assets
            ? convertValue(data[0].total_non_current_assets)
            : "--",
          items: [
            {
              breakDown: "Net PPE",
              reported_time_display3: data[3].net_ppe
                ? convertValue(data[3].net_ppe)
                : "--",
              reported_time_display2: data[2].net_ppe
                ? convertValue(data[2].net_ppe)
                : "--",
              reported_time_display1: data[1].net_ppe
                ? convertValue(data[1].net_ppe)
                : "--",
              reported_time_display0: data[0].net_ppe
                ? convertValue(data[0].net_ppe)
                : "--",
              items: [
                {
                  breakDown: "Gross PPE",
                  reported_time_display3: data[3].gross_ppe
                    ? convertValue(data[3].gross_ppe)
                    : "--",
                  reported_time_display2: data[2].gross_ppe
                    ? convertValue(data[2].gross_ppe)
                    : "--",
                  reported_time_display1: data[1].gross_ppe
                    ? convertValue(data[1].gross_ppe)
                    : "--",
                  reported_time_display0: data[0].gross_ppe
                    ? convertValue(data[0].gross_ppe)
                    : "--",
                  items: [
                    {
                      breakDown: "Mineral Properties",
                      reported_time_display3: data[3].mineral_properties
                        ? convertValue(data[3].mineral_properties)
                        : "--",
                      reported_time_display2: data[2].mineral_properties
                        ? convertValue(data[2].mineral_properties)
                        : "--",
                      reported_time_display1: data[1].mineral_properties
                        ? convertValue(data[1].mineral_properties)
                        : "--",
                      reported_time_display0: data[0].mineral_properties
                        ? convertValue(data[0].mineral_properties)
                        : "--",
                    },
                    {
                      breakDown: "Properties",
                      reported_time_display3: data[3].properties
                        ? convertValue(data[3].properties)
                        : "--",
                      reported_time_display2: data[2].properties
                        ? convertValue(data[2].properties)
                        : "--",
                      reported_time_display1: data[1].properties
                        ? convertValue(data[1].properties)
                        : "--",
                      reported_time_display0: data[0].properties
                        ? convertValue(data[0].properties)
                        : "--",
                    },
                    {
                      breakDown: "Land And Improvements",
                      reported_time_display3: data[3].land_and_improvements
                        ? convertValue(data[3].land_and_improvements)
                        : "--",
                      reported_time_display2: data[2].land_and_improvements
                        ? convertValue(data[2].land_and_improvements)
                        : "--",
                      reported_time_display1: data[1].land_and_improvements
                        ? convertValue(data[1].land_and_improvements)
                        : "--",
                      reported_time_display0: data[0].land_and_improvements
                        ? convertValue(data[0].land_and_improvements)
                        : "--",
                    },
                    {
                      breakDown: "Buildings And Improvements",
                      reported_time_display3: data[3].buildings_and_improvements
                        ? convertValue(data[3].buildings_and_improvements)
                        : "--",
                      reported_time_display2: data[2].buildings_and_improvements
                        ? convertValue(data[2].buildings_and_improvements)
                        : "--",
                      reported_time_display1: data[1].buildings_and_improvements
                        ? convertValue(data[1].buildings_and_improvements)
                        : "--",
                      reported_time_display0: data[0].buildings_and_improvements
                        ? convertValue(data[0].buildings_and_improvements)
                        : "--",
                    },
                    {
                      breakDown: "Machinery Furniture Equipment",
                      reported_time_display3: data[3].machinery_furniture_equipment
                        ? convertValue(data[3].machinery_furniture_equipment)
                        : "--",
                      reported_time_display2: data[2].machinery_furniture_equipment
                        ? convertValue(data[2].machinery_furniture_equipment)
                        : "--",
                      reported_time_display1: data[1].machinery_furniture_equipment
                        ? convertValue(data[1].machinery_furniture_equipment)
                        : "--",
                      reported_time_display0: data[0].machinery_furniture_equipment
                        ? convertValue(data[0].machinery_furniture_equipment)
                        : "--",
                    },
                    {
                      breakDown: "Construction in Progress",
                      reported_time_display3: data[3].construction_in_progress
                        ? convertValue(data[3].construction_in_progress)
                        : "--",
                      reported_time_display2: data[2].construction_in_progress
                        ? convertValue(data[2].construction_in_progress)
                        : "--",
                      reported_time_display1: data[1].construction_in_progress
                        ? convertValue(data[1].construction_in_progress)
                        : "--",
                      reported_time_display0: data[0].construction_in_progress
                        ? convertValue(data[0].construction_in_progress)
                        : "--",
                    },
                    {
                      breakDown: "Leases",
                      reported_time_display3: data[3].leases
                        ? convertValue(data[3].leases)
                        : "--",
                      reported_time_display2: data[2].leases
                        ? convertValue(data[2].leases)
                        : "--",
                      reported_time_display1: data[1].leases
                        ? convertValue(data[1].leases)
                        : "--",
                      reported_time_display0: data[0].leases
                        ? convertValue(data[0].leases)
                        : "--",
                    },
                    {
                      breakDown: "Other Properties",
                      reported_time_display3: data[3].other_properties
                        ? convertValue(data[3].other_properties)
                        : "--",
                      reported_time_display2: data[2].other_properties
                        ? convertValue(data[2].other_properties)
                        : "--",
                      reported_time_display1: data[1].other_properties
                        ? convertValue(data[1].other_properties)
                        : "--",
                      reported_time_display0: data[0].other_properties
                        ? convertValue(data[0].other_properties)
                        : "--",
                    },
                  ]
                },
                {
                  breakDown: "Accumulated Depreciation",
                  reported_time_display3: data[3].accumulated_depreciation
                    ? convertValue(data[3].accumulated_depreciation)
                    : "--",
                  reported_time_display2: data[2].accumulated_depreciation
                    ? convertValue(data[2].accumulated_depreciation)
                    : "--",
                  reported_time_display1: data[1].accumulated_depreciation
                    ? convertValue(data[1].accumulated_depreciation)
                    : "--",
                  reported_time_display0: data[0].accumulated_depreciation
                    ? convertValue(data[0].accumulated_depreciation)
                    : "--",
                },
              ]
            },
            {
              breakDown: "Goodwill And Other Intangible Assets",
              reported_time_display3: data[3].goodwill_and_other_intangible_assets
                ? convertValue(data[3].goodwill_and_other_intangible_assets)
                : "--",
              reported_time_display2: data[2].goodwill_and_other_intangible_assets
                ? convertValue(data[2].goodwill_and_other_intangible_assets)
                : "--",
              reported_time_display1: data[1].goodwill_and_other_intangible_assets
                ? convertValue(data[1].goodwill_and_other_intangible_assets)
                : "--",
              reported_time_display0: data[0].goodwill_and_other_intangible_assets
                ? convertValue(data[0].goodwill_and_other_intangible_assets)
                : "--",
              items: [
                {
                  breakDown: "Goodwill",
                  reported_time_display3: data[3].goodwill
                    ? convertValue(data[3].goodwill)
                    : "--",
                  reported_time_display2: data[2].goodwill
                    ? convertValue(data[2].goodwill)
                    : "--",
                  reported_time_display1: data[1].goodwill
                    ? convertValue(data[1].goodwill)
                    : "--",
                  reported_time_display0: data[0].goodwill
                    ? convertValue(data[0].goodwill)
                    : "--",
                },
                {
                  breakDown: "Other Intangible Assets",
                  reported_time_display3: data[3].other_intangible_assets
                    ? convertValue(data[3].other_intangible_assets)
                    : "--",
                  reported_time_display2: data[2].other_intangible_assets
                    ? convertValue(data[2].other_intangible_assets)
                    : "--",
                  reported_time_display1: data[1].other_intangible_assets
                    ? convertValue(data[1].other_intangible_assets)
                    : "--",
                  reported_time_display0: data[0].other_intangible_assets
                    ? convertValue(data[0].other_intangible_assets)
                    : "--",
                },
              ]
            },
            {
              breakDown: "Investment Properties",
              reported_time_display3: data[3].investment_properties
                ? convertValue(data[3].investment_properties)
                : "--",
              reported_time_display2: data[2].investment_properties
                ? convertValue(data[2].investment_properties)
                : "--",
              reported_time_display1: data[1].investment_properties
                ? convertValue(data[1].investment_properties)
                : "--",
              reported_time_display0: data[0].investment_properties
                ? convertValue(data[0].investment_properties)
                : "--",
            },
            {
              breakDown: "Investments And Advances",
              reported_time_display3: data[3].investments_and_advances
                ? convertValue(data[3].investments_and_advances)
                : "--",
              reported_time_display2: data[2].investments_and_advances
                ? convertValue(data[2].investments_and_advances)
                : "--",
              reported_time_display1: data[1].investments_and_advances
                ? convertValue(data[1].investments_and_advances)
                : "--",
              reported_time_display0: data[0].investments_and_advances
                ? convertValue(data[0].investments_and_advances)
                : "--",
              items: [
                {
                  breakDown: "Long Term Equity Investment",
                  reported_time_display3: data[3].long_term_equity_investment
                    ? convertValue(data[3].long_term_equity_investment)
                    : "--",
                  reported_time_display2: data[2].long_term_equity_investment
                    ? convertValue(data[2].long_term_equity_investment)
                    : "--",
                  reported_time_display1: data[1].long_term_equity_investment
                    ? convertValue(data[1].long_term_equity_investment)
                    : "--",
                  reported_time_display0: data[0].long_term_equity_investment
                    ? convertValue(data[0].long_term_equity_investment)
                    : "--",
                  items: [
                    {
                      breakDown: "Investments in Associatesat Cost",
                      reported_time_display3: data[3].investmentsin_associatesat_cost
                        ? convertValue(data[3].investmentsin_associatesat_cost)
                        : "--",
                      reported_time_display2: data[2].investmentsin_associatesat_cost
                        ? convertValue(data[2].investmentsin_associatesat_cost)
                        : "--",
                      reported_time_display1: data[1].investmentsin_associatesat_cost
                        ? convertValue(data[1].investmentsin_associatesat_cost)
                        : "--",
                      reported_time_display0: data[0].investmentsin_associatesat_cost
                        ? convertValue(data[0].investmentsin_associatesat_cost)
                        : "--",
                    },
                  ]
                },
                {
                  breakDown: "Investment in Financial Assets",
                  reported_time_display3: data[3].investmentin_financial_assets
                    ? convertValue(data[3].investmentin_financial_assets)
                    : "--",
                  reported_time_display2: data[2].investmentin_financial_assets
                    ? convertValue(data[2].investmentin_financial_assets)
                    : "--",
                  reported_time_display1: data[1].investmentin_financial_assets
                    ? convertValue(data[1].investmentin_financial_assets)
                    : "--",
                  reported_time_display0: data[0].investmentin_financial_assets
                    ? convertValue(data[0].investmentin_financial_assets)
                    : "--",
                  items: [
                    {
                      breakDown: "Financial Assets Designatedas Fair Value Through Profitor Loss Total",
                      reported_time_display3: data[3].financial_assets_designatedas_fair_value_through_profitor_loss_total
                        ? convertValue(data[3].financial_assets_designatedas_fair_value_through_profitor_loss_total)
                        : "--",
                      reported_time_display2: data[2].financial_assets_designatedas_fair_value_through_profitor_loss_total
                        ? convertValue(data[2].financial_assets_designatedas_fair_value_through_profitor_loss_total)
                        : "--",
                      reported_time_display1: data[1].financial_assets_designatedas_fair_value_through_profitor_loss_total
                        ? convertValue(data[1].financial_assets_designatedas_fair_value_through_profitor_loss_total)
                        : "--",
                      reported_time_display0: data[0].financial_assets_designatedas_fair_value_through_profitor_loss_total
                        ? convertValue(data[0].financial_assets_designatedas_fair_value_through_profitor_loss_total)
                        : "--",
                    },
                    {
                      breakDown: "Available for Sale Securit",
                      reported_time_display3: data[3].available_for_sale_securities
                        ? convertValue(data[3].available_for_sale_securities)
                        : "--",
                      reported_time_display2: data[2].available_for_sale_securities
                        ? convertValue(data[2].available_for_sale_securities)
                        : "--",
                      reported_time_display1: data[1].available_for_sale_securities
                        ? convertValue(data[1].available_for_sale_securities)
                        : "--",
                      reported_time_display0: data[0].available_for_sale_securities
                        ? convertValue(data[0].available_for_sale_securities)
                        : "--",
                    },
                    {
                      breakDown: "Trading Securities",
                      reported_time_display3: data[3].trading_securities
                        ? convertValue(data[3].trading_securities)
                        : "--",
                      reported_time_display2: data[2].trading_securities
                        ? convertValue(data[2].trading_securities)
                        : "--",
                      reported_time_display1: data[1].trading_securities
                        ? convertValue(data[1].trading_securities)
                        : "--",
                      reported_time_display0: data[0].trading_securities
                        ? convertValue(data[0].trading_securities)
                        : "--",
                    },
                  ]
                },
                {
                  breakDown: "Other Investments",
                  reported_time_display3: data[3].other_investments
                    ? convertValue(data[3].other_investments)
                    : "--",
                  reported_time_display2: data[2].other_investments
                    ? convertValue(data[2].other_investments)
                    : "--",
                  reported_time_display1: data[1].other_investments
                    ? convertValue(data[1].other_investments)
                    : "--",
                  reported_time_display0: data[0].other_investments
                    ? convertValue(data[0].other_investments)
                    : "--",
                },
              ]
            },
            {
              breakDown: "Financial Assets",
              reported_time_display3: data[3].financial_assets
                ? convertValue(data[3].financial_assets)
                : "--",
              reported_time_display2: data[2].financial_assets
                ? convertValue(data[2].financial_assets)
                : "--",
              reported_time_display1: data[1].financial_assets
                ? convertValue(data[1].financial_assets)
                : "--",
              reported_time_display0: data[0].financial_assets
                ? convertValue(data[0].financial_assets)
                : "--",
            },
            {
              breakDown: "Non Current Accounts Receivable",
              reported_time_display3: data[3].non_current_accounts_receivable
                ? convertValue(data[3].non_current_accounts_receivable)
                : "--",
              reported_time_display2: data[2].non_current_accounts_receivable
                ? convertValue(data[2].non_current_accounts_receivable)
                : "--",
              reported_time_display1: data[1].non_current_accounts_receivable
                ? convertValue(data[1].non_current_accounts_receivable)
                : "--",
              reported_time_display0: data[0].non_current_accounts_receivable
                ? convertValue(data[0].non_current_accounts_receivable)
                : "--",
            },
            {
              breakDown: "Non Current Prepaid Assets",
              reported_time_display3: data[3].non_current_prepaid_assets
                ? convertValue(data[3].non_current_prepaid_assets)
                : "--",
              reported_time_display2: data[2].non_current_prepaid_assets
                ? convertValue(data[2].non_current_prepaid_assets)
                : "--",
              reported_time_display1: data[1].non_current_prepaid_assets
                ? convertValue(data[1].non_current_prepaid_assets)
                : "--",
              reported_time_display0: data[0].non_current_prepaid_assets
                ? convertValue(data[0].non_current_prepaid_assets)
                : "--",
            },
            {
              breakDown: "Non Current Deferred Assets",
              reported_time_display3: data[3].non_current_deferred_assets
                ? convertValue(data[3].non_current_deferred_assets)
                : "--",
              reported_time_display2: data[2].non_current_deferred_assets
                ? convertValue(data[2].non_current_deferred_assets)
                : "--",
              reported_time_display1: data[1].non_current_deferred_assets
                ? convertValue(data[1].non_current_deferred_assets)
                : "--",
              reported_time_display0: data[0].non_current_deferred_assets
                ? convertValue(data[0].non_current_deferred_assets)
                : "--",
              items: [
                {
                  breakDown: "Non Current Deferred Taxes Assets",
                  reported_time_display3: data[3].non_current_deferred_taxes_assets
                    ? convertValue(data[3].non_current_deferred_taxes_assets)
                    : "--",
                  reported_time_display2: data[2].non_current_deferred_taxes_assets
                    ? convertValue(data[2].non_current_deferred_taxes_assets)
                    : "--",
                  reported_time_display1: data[1].non_current_deferred_taxes_assets
                    ? convertValue(data[1].non_current_deferred_taxes_assets)
                    : "--",
                  reported_time_display0: data[0].non_current_deferred_taxes_assets
                    ? convertValue(data[0].non_current_deferred_taxes_assets)
                    : "--",
                }
              ]
            },
            {
              breakDown: "Defined Pension Benefit",
              reported_time_display3: data[3].defined_pension_benefit
                ? convertValue(data[3].defined_pension_benefit)
                : "--",
              reported_time_display2: data[2].defined_pension_benefit
                ? convertValue(data[2].defined_pension_benefit)
                : "--",
              reported_time_display1: data[1].defined_pension_benefit
                ? convertValue(data[1].defined_pension_benefit)
                : "--",
              reported_time_display0: data[0].defined_pension_benefit
                ? convertValue(data[0].defined_pension_benefit)
                : "--",
            },
            {
              breakDown: "Other Non Current Assets",
              reported_time_display3: data[3].other_non_current_assets
                ? convertValue(data[3].other_non_current_assets)
                : "--",
              reported_time_display2: data[2].other_non_current_assets
                ? convertValue(data[2].other_non_current_assets)
                : "--",
              reported_time_display1: data[1].other_non_current_assets
                ? convertValue(data[1].other_non_current_assets)
                : "--",
              reported_time_display0: data[0].other_non_current_assets
                ? convertValue(data[0].other_non_current_assets)
                : "--",
            },
          ]
        }
      ]
    },
    {
      breakDown: "Total Liabilities Net Minority Interest",
      reported_time_display3: data[3].total_liabilities_net_minority_interest
        ? convertValue(data[3].total_liabilities_net_minority_interest)
        : "--",
      reported_time_display2: data[2].total_liabilities_net_minority_interest
        ? convertValue(data[2].total_liabilities_net_minority_interest)
        : "--",
      reported_time_display1: data[1].total_liabilities_net_minority_interest
        ? convertValue(data[1].total_liabilities_net_minority_interest)
        : "--",
      reported_time_display0: data[0].total_liabilities_net_minority_interest
        ? convertValue(data[0].total_liabilities_net_minority_interest)
        : "--",
      items: [
        {
          breakDown: "Current Liabilities",
          reported_time_display3: data[3].current_liabilities
            ? convertValue(data[3].current_liabilities)
            : "--",
          reported_time_display2: data[2].current_liabilities
            ? convertValue(data[2].current_liabilities)
            : "--",
          reported_time_display1: data[1].current_liabilities
            ? convertValue(data[1].current_liabilities)
            : "--",
          reported_time_display0: data[0].current_liabilities
            ? convertValue(data[0].current_liabilities)
            : "--",
          items: [
            {
              breakDown: "Payables And Accrued Expenses",
              reported_time_display3: data[3].payables_and_accrued_expenses
                ? convertValue(data[3].payables_and_accrued_expenses)
                : "--",
              reported_time_display2: data[2].payables_and_accrued_expenses
                ? convertValue(data[2].payables_and_accrued_expenses)
                : "--",
              reported_time_display1: data[1].payables_and_accrued_expenses
                ? convertValue(data[1].payables_and_accrued_expenses)
                : "--",
              reported_time_display0: data[0].payables_and_accrued_expenses
                ? convertValue(data[0].payables_and_accrued_expenses)
                : "--",
              items: [
                {
                  breakDown: "Payables",
                  reported_time_display3: data[3].payables
                    ? convertValue(data[3].payables)
                    : "--",
                  reported_time_display2: data[2].payables
                    ? convertValue(data[2].payables)
                    : "--",
                  reported_time_display1: data[1].payables
                    ? convertValue(data[1].payables)
                    : "--",
                  reported_time_display0: data[0].payables
                    ? convertValue(data[0].payables)
                    : "--",
                  items: [
                    {
                      breakDown: "Accounts Payablees",
                      reported_time_display3: data[3].accounts_payable
                        ? convertValue(data[3].accounts_payable)
                        : "--",
                      reported_time_display2: data[2].accounts_payable
                        ? convertValue(data[2].accounts_payable)
                        : "--",
                      reported_time_display1: data[1].accounts_payable
                        ? convertValue(data[1].accounts_payable)
                        : "--",
                      reported_time_display0: data[0].accounts_payable
                        ? convertValue(data[0].accounts_payable)
                        : "--",
                    },
                    {
                      breakDown: "Total Tax Payable",
                      reported_time_display3: data[3].total_tax_payable
                        ? convertValue(data[3].total_tax_payable)
                        : "--",
                      reported_time_display2: data[2].total_tax_payable
                        ? convertValue(data[2].total_tax_payable)
                        : "--",
                      reported_time_display1: data[1].total_tax_payable
                        ? convertValue(data[1].total_tax_payable)
                        : "--",
                      reported_time_display0: data[0].total_tax_payable
                        ? convertValue(data[0].total_tax_payable)
                        : "--",
                    },
                    {
                      breakDown: "Dividends Payable",
                      reported_time_display3: data[3].dividends_payable
                        ? convertValue(data[3].dividends_payable)
                        : "--",
                      reported_time_display2: data[2].dividends_payable
                        ? convertValue(data[2].dividends_payable)
                        : "--",
                      reported_time_display1: data[1].dividends_payable
                        ? convertValue(data[1].dividends_payable)
                        : "--",
                      reported_time_display0: data[0].dividends_payable
                        ? convertValue(data[0].dividends_payable)
                        : "--",
                    },
                    {
                      breakDown: "Other Payable",
                      reported_time_display3: data[3].other_payable
                        ? convertValue(data[3].other_payable)
                        : "--",
                      reported_time_display2: data[2].other_payable
                        ? convertValue(data[2].other_payable)
                        : "--",
                      reported_time_display1: data[1].other_payable
                        ? convertValue(data[1].other_payable)
                        : "--",
                      reported_time_display0: data[0].other_payable
                        ? convertValue(data[0].other_payable)
                        : "--",
                    },
                  ]
                },
              ]
            },
            {
              breakDown: "Current Provisions",
              reported_time_display3: data[3].current_provisions
                ? convertValue(data[3].current_provisions)
                : "--",
              reported_time_display2: data[2].current_provisions
                ? convertValue(data[2].current_provisions)
                : "--",
              reported_time_display1: data[1].current_provisions
                ? convertValue(data[1].current_provisions)
                : "--",
              reported_time_display0: data[0].current_provisions
                ? convertValue(data[0].current_provisions)
                : "--",
            },
            {
              breakDown: "Pension & Other Post Retirement Benefit Plans Current",
              reported_time_display3: data[3].pensionand_other_post_retirement_benefit_plans_current
                ? convertValue(data[3].pensionand_other_post_retirement_benefit_plans_current)
                : "--",
              reported_time_display2: data[2].pensionand_other_post_retirement_benefit_plans_current
                ? convertValue(data[2].pensionand_other_post_retirement_benefit_plans_current)
                : "--",
              reported_time_display1: data[1].pensionand_other_post_retirement_benefit_plans_current
                ? convertValue(data[1].pensionand_other_post_retirement_benefit_plans_current)
                : "--",
              reported_time_display0: data[0].pensionand_other_post_retirement_benefit_plans_current
                ? convertValue(data[0].pensionand_other_post_retirement_benefit_plans_current)
                : "--",
            },
            {
              breakDown: "Current Debt And Capital Lease Obligation",
              reported_time_display3: data[3].current_debt_and_capital_lease_obligation
                ? convertValue(data[3].current_debt_and_capital_lease_obligation)
                : "--",
              reported_time_display2: data[2].current_debt_and_capital_lease_obligation
                ? convertValue(data[2].current_debt_and_capital_lease_obligation)
                : "--",
              reported_time_display1: data[1].current_debt_and_capital_lease_obligation
                ? convertValue(data[1].current_debt_and_capital_lease_obligation)
                : "--",
              reported_time_display0: data[0].current_debt_and_capital_lease_obligation
                ? convertValue(data[0].current_debt_and_capital_lease_obligation)
                : "--",
              items: [
                {
                  breakDown: "Current Debt",
                  reported_time_display3: data[3].current_debt
                    ? convertValue(data[3].current_debt)
                    : "--",
                  reported_time_display2: data[2].current_debt
                    ? convertValue(data[2].current_debt)
                    : "--",
                  reported_time_display1: data[1].current_debt
                    ? convertValue(data[1].current_debt)
                    : "--",
                  reported_time_display0: data[0].current_debt
                    ? convertValue(data[0].current_debt)
                    : "--",
                  items: [
                    {
                      breakDown: "Current Notes Payable",
                      reported_time_display3: data[3].current_notes_payable
                        ? convertValue(data[3].current_notes_payable)
                        : "--",
                      reported_time_display2: data[2].current_notes_payable
                        ? convertValue(data[2].current_notes_payable)
                        : "--",
                      reported_time_display1: data[1].current_notes_payable
                        ? convertValue(data[1].current_notes_payable)
                        : "--",
                      reported_time_display0: data[0].current_notes_payable
                        ? convertValue(data[0].current_notes_payable)
                        : "--",
                    },
                    {
                      breakDown: "Line of Credit",
                      reported_time_display3: data[3].line_of_credit
                        ? convertValue(data[3].line_of_credit)
                        : "--",
                      reported_time_display2: data[2].line_of_credit
                        ? convertValue(data[2].line_of_credit)
                        : "--",
                      reported_time_display1: data[1].line_of_credit
                        ? convertValue(data[1].line_of_credit)
                        : "--",
                      reported_time_display0: data[0].line_of_credit
                        ? convertValue(data[0].line_of_credit)
                        : "--",
                    },
                    {
                      breakDown: "Other Current Borrowings",
                      reported_time_display3: data[3].other_current_borrowings
                        ? convertValue(data[3].other_current_borrowings)
                        : "--",
                      reported_time_display2: data[2].other_current_borrowings
                        ? convertValue(data[2].other_current_borrowings)
                        : "--",
                      reported_time_display1: data[1].other_current_borrowings
                        ? convertValue(data[1].other_current_borrowings)
                        : "--",
                      reported_time_display0: data[0].other_current_borrowings
                        ? convertValue(data[0].other_current_borrowings)
                        : "--",
                    },
                  ]
                },
                {
                  breakDown: "Bank Indebtedness",
                  reported_time_display3: data[3].bank_indebtedness
                    ? convertValue(data[3].bank_indebtedness)
                    : "--",
                  reported_time_display2: data[2].bank_indebtedness
                    ? convertValue(data[2].bank_indebtedness)
                    : "--",
                  reported_time_display1: data[1].bank_indebtedness
                    ? convertValue(data[1].bank_indebtedness)
                    : "--",
                  reported_time_display0: data[0].bank_indebtedness
                    ? convertValue(data[0].bank_indebtedness)
                    : "--",
                },
                {
                  breakDown: "Current Capital Lease Obligation",
                  reported_time_display3: data[3].current_capital_lease_obligation
                    ? convertValue(data[3].current_capital_lease_obligation)
                    : "--",
                  reported_time_display2: data[2].current_capital_lease_obligation
                    ? convertValue(data[2].current_capital_lease_obligation)
                    : "--",
                  reported_time_display1: data[1].current_capital_lease_obligation
                    ? convertValue(data[1].current_capital_lease_obligation)
                    : "--",
                  reported_time_display0: data[0].current_capital_lease_obligation
                    ? convertValue(data[0].current_capital_lease_obligation)
                    : "--",
                },
              ]
            },
            {
              breakDown: "Current Deferred Liabilities",
              reported_time_display3: data[3].current_deferred_liabilities
                ? convertValue(data[3].current_deferred_liabilities)
                : "--",
              reported_time_display2: data[2].current_deferred_liabilities
                ? convertValue(data[2].current_deferred_liabilities)
                : "--",
              reported_time_display1: data[1].current_deferred_liabilities
                ? convertValue(data[1].current_deferred_liabilities)
                : "--",
              reported_time_display0: data[0].current_deferred_liabilities
                ? convertValue(data[0].current_deferred_liabilities)
                : "--",
              items: [
                {
                  breakDown: "Current Deferred Taxes Liabilities",
                  reported_time_display3: data[3].current_deferred_taxes_liabilities
                    ? convertValue(data[3].current_deferred_taxes_liabilities)
                    : "--",
                  reported_time_display2: data[2].current_deferred_taxes_liabilities
                    ? convertValue(data[2].current_deferred_taxes_liabilities)
                    : "--",
                  reported_time_display1: data[1].current_deferred_taxes_liabilities
                    ? convertValue(data[1].current_deferred_taxes_liabilities)
                    : "--",
                  reported_time_display0: data[0].current_deferred_taxes_liabilities
                    ? convertValue(data[0].current_deferred_taxes_liabilities)
                    : "--",
                },
                {
                  breakDown: "Current Deferred Revenue",
                  reported_time_display3: data[3].current_deferred_revenue
                    ? convertValue(data[3].current_deferred_revenue)
                    : "--",
                  reported_time_display2: data[2].current_deferred_revenue
                    ? convertValue(data[2].current_deferred_revenue)
                    : "--",
                  reported_time_display1: data[1].current_deferred_revenue
                    ? convertValue(data[1].current_deferred_revenue)
                    : "--",
                  reported_time_display0: data[0].current_deferred_revenue
                    ? convertValue(data[0].current_deferred_revenue)
                    : "--",
                },
              ]
            },
            {
              breakDown: "Other Current Liabilities",
              reported_time_display3: data[3].other_current_liabilities
                ? convertValue(data[3].other_current_liabilities)
                : "--",
              reported_time_display2: data[2].other_current_liabilities
                ? convertValue(data[2].other_current_liabilities)
                : "--",
              reported_time_display1: data[1].other_current_liabilities
                ? convertValue(data[1].other_current_liabilities)
                : "--",
              reported_time_display0: data[0].other_current_liabilities
                ? convertValue(data[0].other_current_liabilities)
                : "--",
            },
          ]
        },
        {
          breakDown: "Total Non Current Liabilities Net Minority Interest",
          reported_time_display3: data[3].total_non_current_liabilities_net_minority_interest
            ? convertValue(data[3].total_non_current_liabilities_net_minority_interest)
            : "--",
          reported_time_display2: data[2].total_non_current_liabilities_net_minority_interest
            ? convertValue(data[2].total_non_current_liabilities_net_minority_interest)
            : "--",
          reported_time_display1: data[1].total_non_current_liabilities_net_minority_interest
            ? convertValue(data[1].total_non_current_liabilities_net_minority_interest)
            : "--",
          reported_time_display0: data[0].total_non_current_liabilities_net_minority_interest
            ? convertValue(data[0].total_non_current_liabilities_net_minority_interest)
            : "--",
          items: [
            {
              breakDown: "Long Term Provisions",
              reported_time_display3: data[3].long_term_provisions
                ? convertValue(data[3].long_term_provisions)
                : "--",
              reported_time_display2: data[2].long_term_provisions
                ? convertValue(data[2].long_term_provisions)
                : "--",
              reported_time_display1: data[1].long_term_provisions
                ? convertValue(data[1].long_term_provisions)
                : "--",
              reported_time_display0: data[0].long_term_provisions
                ? convertValue(data[0].long_term_provisions)
                : "--",
            },
            {
              breakDown: "Long Term Debt And Capital Lease Obligation",
              reported_time_display3: data[3].long_term_debt_and_capital_lease_obligation
                ? convertValue(data[3].long_term_debt_and_capital_lease_obligation)
                : "--",
              reported_time_display2: data[2].long_term_debt_and_capital_lease_obligation
                ? convertValue(data[2].long_term_debt_and_capital_lease_obligation)
                : "--",
              reported_time_display1: data[1].long_term_debt_and_capital_lease_obligation
                ? convertValue(data[1].long_term_debt_and_capital_lease_obligation)
                : "--",
              reported_time_display0: data[0].long_term_debt_and_capital_lease_obligation
                ? convertValue(data[0].long_term_debt_and_capital_lease_obligation)
                : "--",
              items: [
                {
                  breakDown: "Long Term Debt",
                  reported_time_display3: data[3].long_term_debt
                    ? convertValue(data[3].long_term_debt)
                    : "--",
                  reported_time_display2: data[2].long_term_debt
                    ? convertValue(data[2].long_term_debt)
                    : "--",
                  reported_time_display1: data[1].long_term_debt
                    ? convertValue(data[1].long_term_debt)
                    : "--",
                  reported_time_display0: data[0].long_term_debt
                    ? convertValue(data[0].long_term_debt)
                    : "--",
                },
                {
                  breakDown: "Long Term Capital Lease Obligation",
                  reported_time_display3: data[3].long_term_capital_lease_obligation
                    ? convertValue(data[3].long_term_capital_lease_obligation)
                    : "--",
                  reported_time_display2: data[2].long_term_capital_lease_obligation
                    ? convertValue(data[2].long_term_capital_lease_obligation)
                    : "--",
                  reported_time_display1: data[1].long_term_capital_lease_obligation
                    ? convertValue(data[1].long_term_capital_lease_obligation)
                    : "--",
                  reported_time_display0: data[0].long_term_capital_lease_obligation
                    ? convertValue(data[0].long_term_capital_lease_obligation)
                    : "--",
                },
              ]
            },
            {
              breakDown: "Non Current Deferred Liabilities",
              reported_time_display3: data[3].non_current_deferred_liabilities
                ? convertValue(data[3].non_current_deferred_liabilities)
                : "--",
              reported_time_display2: data[2].non_current_deferred_liabilities
                ? convertValue(data[2].non_current_deferred_liabilities)
                : "--",
              reported_time_display1: data[1].non_current_deferred_liabilities
                ? convertValue(data[1].non_current_deferred_liabilities)
                : "--",
              reported_time_display0: data[0].non_current_deferred_liabilities
                ? convertValue(data[0].non_current_deferred_liabilities)
                : "--",
              items: [
                {
                  breakDown: "Non Current Deferred Taxes Liabilities",
                  reported_time_display3: data[3].non_current_deferred_taxes_liabilities
                    ? convertValue(data[3].non_current_deferred_taxes_liabilities)
                    : "--",
                  reported_time_display2: data[2].non_current_deferred_taxes_liabilities
                    ? convertValue(data[2].non_current_deferred_taxes_liabilities)
                    : "--",
                  reported_time_display1: data[1].non_current_deferred_taxes_liabilities
                    ? convertValue(data[1].non_current_deferred_taxes_liabilities)
                    : "--",
                  reported_time_display0: data[0].non_current_deferred_taxes_liabilities
                    ? convertValue(data[0].non_current_deferred_taxes_liabilities)
                    : "--",
                },
                {
                  breakDown: "Non Current Deferred Revenue",
                  reported_time_display3: data[3].non_current_deferred_revenue
                    ? convertValue(data[3].non_current_deferred_revenue)
                    : "--",
                  reported_time_display2: data[2].non_current_deferred_revenue
                    ? convertValue(data[2].non_current_deferred_revenue)
                    : "--",
                  reported_time_display1: data[1].non_current_deferred_revenue
                    ? convertValue(data[1].non_current_deferred_revenue)
                    : "--",
                  reported_time_display0: data[0].non_current_deferred_revenue
                    ? convertValue(data[0].non_current_deferred_revenue)
                    : "--",
                },
              ]
            },
            {
              breakDown: "Tradeand Other Payables Non Current",
              reported_time_display3: data[3].tradeand_other_payables_non_current
                ? convertValue(data[3].tradeand_other_payables_non_current)
                : "--",
              reported_time_display2: data[2].tradeand_other_payables_non_current
                ? convertValue(data[2].tradeand_other_payables_non_current)
                : "--",
              reported_time_display1: data[1].tradeand_other_payables_non_current
                ? convertValue(data[1].tradeand_other_payables_non_current)
                : "--",
              reported_time_display0: data[0].tradeand_other_payables_non_current
                ? convertValue(data[0].tradeand_other_payables_non_current)
                : "--",
            },
            {
              breakDown: "Derivative Product Liabilities",
              reported_time_display3: data[3].derivative_product_liabilities
                ? convertValue(data[3].derivative_product_liabilities)
                : "--",
              reported_time_display2: data[2].derivative_product_liabilities
                ? convertValue(data[2].derivative_product_liabilities)
                : "--",
              reported_time_display1: data[1].derivative_product_liabilities
                ? convertValue(data[1].derivative_product_liabilities)
                : "--",
              reported_time_display0: data[0].derivative_product_liabilities
                ? convertValue(data[0].derivative_product_liabilities)
                : "--",
            },
            {
              breakDown: "Employee Benefits",
              reported_time_display3: data[3].employee_benefits
                ? convertValue(data[3].employee_benefits)
                : "--",
              reported_time_display2: data[2].employee_benefits
                ? convertValue(data[2].employee_benefits)
                : "--",
              reported_time_display1: data[1].employee_benefits
                ? convertValue(data[1].employee_benefits)
                : "--",
              reported_time_display0: data[0].employee_benefits
                ? convertValue(data[0].employee_benefits)
                : "--",
              items: [
                {
                  breakDown: "Non Current Pension And Other Post-Retirement Benefit Plans",
                  reported_time_display3: data[3].non_current_pension_and_other_postretirement_benefit_plans
                    ? convertValue(data[3].non_current_pension_and_other_postretirement_benefit_plans)
                    : "--",
                  reported_time_display2: data[2].non_current_pension_and_other_postretirement_benefit_plans
                    ? convertValue(data[2].non_current_pension_and_other_postretirement_benefit_plans)
                    : "--",
                  reported_time_display1: data[1].non_current_pension_and_other_postretirement_benefit_plans
                    ? convertValue(data[1].non_current_pension_and_other_postretirement_benefit_plans)
                    : "--",
                  reported_time_display0: data[0].non_current_pension_and_other_postretirement_benefit_plans
                    ? convertValue(data[0].non_current_pension_and_other_postretirement_benefit_plans)
                    : "--",
                }
              ]
            },
            {
              breakDown: "Other Non Current Liabilities",
              reported_time_display3: data[3].other_non_current_liabilities
                ? convertValue(data[3].other_non_current_liabilities)
                : "--",
              reported_time_display2: data[2].other_non_current_liabilities
                ? convertValue(data[2].other_non_current_liabilities)
                : "--",
              reported_time_display1: data[1].other_non_current_liabilities
                ? convertValue(data[1].other_non_current_liabilities)
                : "--",
              reported_time_display0: data[0].other_non_current_liabilities
                ? convertValue(data[0].other_non_current_liabilities)
                : "--",
            },

          ]
        },
      ]
    },
    {
      breakDown: "Total Equity Gross Minority Interest",
      reported_time_display3: data[3].total_equity_gross_minority_interest
        ? convertValue(data[3].total_equity_gross_minority_interest)
        : "--",
      reported_time_display2: data[2].total_equity_gross_minority_interest
        ? convertValue(data[2].total_equity_gross_minority_interest)
        : "--",
      reported_time_display1: data[1].total_equity_gross_minority_interest
        ? convertValue(data[1].total_equity_gross_minority_interest)
        : "--",
      reported_time_display0: data[0].total_equity_gross_minority_interest
        ? convertValue(data[0].total_equity_gross_minority_interest)
        : "--",
      items: [
        {
          breakDown: "Stockholders' Equity",
          reported_time_display3: data[3].stockholders_equity
            ? convertValue(data[3].stockholders_equity)
            : "--",
          reported_time_display2: data[2].stockholders_equity
            ? convertValue(data[2].stockholders_equity)
            : "--",
          reported_time_display1: data[1].stockholders_equity
            ? convertValue(data[1].stockholders_equity)
            : "--",
          reported_time_display0: data[0].stockholders_equity
            ? convertValue(data[0].stockholders_equity)
            : "--",
          items: [
            {
              breakDown: "Capital Stock",
              reported_time_display3: data[3].capital_stock
                ? convertValue(data[3].capital_stock)
                : "--",
              reported_time_display2: data[2].capital_stock
                ? convertValue(data[2].capital_stock)
                : "--",
              reported_time_display1: data[1].capital_stock
                ? convertValue(data[1].capital_stock)
                : "--",
              reported_time_display0: data[0].capital_stock
                ? convertValue(data[0].capital_stock)
                : "--",
              items: [
                {
                  breakDown: "Common Stock",
                  reported_time_display3: data[3].common_stock
                    ? convertValue(data[3].common_stock)
                    : "--",
                  reported_time_display2: data[2].common_stock
                    ? convertValue(data[2].common_stock)
                    : "--",
                  reported_time_display1: data[1].common_stock
                    ? convertValue(data[1].common_stock)
                    : "--",
                  reported_time_display0: data[0].common_stock
                    ? convertValue(data[0].common_stock)
                    : "--",
                },
                {
                  breakDown: "Preferred Stock",
                  reported_time_display3: data[3].preferred_stock
                    ? convertValue(data[3].preferred_stock)
                    : "--",
                  reported_time_display2: data[2].preferred_stock
                    ? convertValue(data[2].preferred_stock)
                    : "--",
                  reported_time_display1: data[1].preferred_stock
                    ? convertValue(data[1].preferred_stock)
                    : "--",
                  reported_time_display0: data[0].preferred_stock
                    ? convertValue(data[0].preferred_stock)
                    : "--",
                },
              ]
            },
            {
              breakDown: "Additional Paid in Capital",
              reported_time_display3: data[3].additional_paid_in_capital
                ? convertValue(data[3].additional_paid_in_capital)
                : "--",
              reported_time_display2: data[2].additional_paid_in_capital
                ? convertValue(data[2].additional_paid_in_capital)
                : "--",
              reported_time_display1: data[1].additional_paid_in_capital
                ? convertValue(data[1].additional_paid_in_capital)
                : "--",
              reported_time_display0: data[0].additional_paid_in_capital
                ? convertValue(data[0].additional_paid_in_capital)
                : "--",
            },
            {
              breakDown: "Retained Earnings",
              reported_time_display3: data[3].retained_earnings
                ? convertValue(data[3].retained_earnings)
                : "--",
              reported_time_display2: data[2].retained_earnings
                ? convertValue(data[2].retained_earnings)
                : "--",
              reported_time_display1: data[1].retained_earnings
                ? convertValue(data[1].retained_earnings)
                : "--",
              reported_time_display0: data[0].retained_earnings
                ? convertValue(data[0].retained_earnings)
                : "--",
            },
            {
              breakDown: "Treasury Stock",
              reported_time_display3: data[3].treasury_stock
                ? convertValue(data[3].treasury_stock)
                : "--",
              reported_time_display2: data[2].treasury_stock
                ? convertValue(data[2].treasury_stock)
                : "--",
              reported_time_display1: data[1].treasury_stock
                ? convertValue(data[1].treasury_stock)
                : "--",
              reported_time_display0: data[0].treasury_stock
                ? convertValue(data[0].treasury_stock)
                : "--",
            },
            {
              breakDown: "Gains Losses Not Affecting Retained Earnings",
              reported_time_display3: data[3].gains_losses_not_affecting_retained_earnings
                ? convertValue(data[3].gains_losses_not_affecting_retained_earnings)
                : "--",
              reported_time_display2: data[2].gains_losses_not_affecting_retained_earnings
                ? convertValue(data[2].gains_losses_not_affecting_retained_earnings)
                : "--",
              reported_time_display1: data[1].gains_losses_not_affecting_retained_earnings
                ? convertValue(data[1].gains_losses_not_affecting_retained_earnings)
                : "--",
              reported_time_display0: data[0].gains_losses_not_affecting_retained_earnings
                ? convertValue(data[0].gains_losses_not_affecting_retained_earnings)
                : "--",
              items: [
                {
                  breakDown: "Foreign Currency Translation Adjustments",
                  reported_time_display3: data[3].foreign_currency_translation_adjustments
                    ? convertValue(data[3].foreign_currency_translation_adjustments)
                    : "--",
                  reported_time_display2: data[2].foreign_currency_translation_adjustments
                    ? convertValue(data[2].foreign_currency_translation_adjustments)
                    : "--",
                  reported_time_display1: data[1].foreign_currency_translation_adjustments
                    ? convertValue(data[1].foreign_currency_translation_adjustments)
                    : "--",
                  reported_time_display0: data[0].foreign_currency_translation_adjustments
                    ? convertValue(data[0].foreign_currency_translation_adjustments)
                    : "--",
                },
                {
                  breakDown: "Fixed Assets Revaluation Reserve",
                  reported_time_display3: data[3].fixed_assets_revaluation_reserve
                    ? convertValue(data[3].fixed_assets_revaluation_reserve)
                    : "--",
                  reported_time_display2: data[2].fixed_assets_revaluation_reserve
                    ? convertValue(data[2].fixed_assets_revaluation_reserve)
                    : "--",
                  reported_time_display1: data[1].fixed_assets_revaluation_reserve
                    ? convertValue(data[1].fixed_assets_revaluation_reserve)
                    : "--",
                  reported_time_display0: data[0].fixed_assets_revaluation_reserve
                    ? convertValue(data[0].fixed_assets_revaluation_reserve)
                    : "--",
                },
                {
                  breakDown: "Other Equity Adjustments",
                  reported_time_display3: data[3].other_equity_adjustments
                    ? convertValue(data[3].other_equity_adjustments)
                    : "--",
                  reported_time_display2: data[2].other_equity_adjustments
                    ? convertValue(data[2].other_equity_adjustments)
                    : "--",
                  reported_time_display1: data[1].other_equity_adjustments
                    ? convertValue(data[1].other_equity_adjustments)
                    : "--",
                  reported_time_display0: data[0].other_equity_adjustments
                    ? convertValue(data[0].other_equity_adjustments)
                    : "--",
                },
              ]
            },
            {
              breakDown: "Other Equity Interest",
              reported_time_display3: data[3].other_equity_interest
                ? convertValue(data[3].other_equity_interest)
                : "--",
              reported_time_display2: data[2].other_equity_interest
                ? convertValue(data[2].other_equity_interest)
                : "--",
              reported_time_display1: data[1].other_equity_interest
                ? convertValue(data[1].other_equity_interest)
                : "--",
              reported_time_display0: data[0].other_equity_interest
                ? convertValue(data[0].other_equity_interest)
                : "--",
            },

          ]
        },
        {
          breakDown: "Minority Interest",
          reported_time_display3: data[3].minority_interest
            ? convertValue(data[3].minority_interest)
            : "--",
          reported_time_display2: data[2].minority_interest
            ? convertValue(data[2].minority_interest)
            : "--",
          reported_time_display1: data[1].minority_interest
            ? convertValue(data[1].minority_interest)
            : "--",
          reported_time_display0: data[0].minority_interest
            ? convertValue(data[0].minority_interest)
            : "--",
        },
      ]
    },
    {
      breakDown: "Total Capitalization",
      reported_time_display3: data[3].total_capitalization
        ? convertValue(data[3].total_capitalization)
        : "--",
      reported_time_display2: data[2].total_capitalization
        ? convertValue(data[2].total_capitalization)
        : "--",
      reported_time_display1: data[1].total_capitalization
        ? convertValue(data[1].total_capitalization)
        : "--",
      reported_time_display0: data[0].total_capitalization
        ? convertValue(data[0].total_capitalization)
        : "--",
    },
    {
      breakDown: "Preferred Stock Equity",
      reported_time_display3: data[3].preferred_stock_equity
        ? convertValue(data[3].preferred_stock_equity)
        : "--",
      reported_time_display2: data[2].preferred_stock_equity
        ? convertValue(data[2].preferred_stock_equity)
        : "--",
      reported_time_display1: data[1].preferred_stock_equity
        ? convertValue(data[1].preferred_stock_equity)
        : "--",
      reported_time_display0: data[0].preferred_stock_equity
        ? convertValue(data[0].preferred_stock_equity)
        : "--",
    },
    {
      breakDown: "Common Stock Equity",
      reported_time_display3: data[3].common_stock_equity
        ? convertValue(data[3].common_stock_equity)
        : "--",
      reported_time_display2: data[2].common_stock_equity
        ? convertValue(data[2].common_stock_equity)
        : "--",
      reported_time_display1: data[1].common_stock_equity
        ? convertValue(data[1].common_stock_equity)
        : "--",
      reported_time_display0: data[0].common_stock_equity
        ? convertValue(data[0].common_stock_equity)
        : "--",
    },
    {
      breakDown: "Capital Lease Obligations",
      reported_time_display3: data[3].capital_lease_obligations
        ? convertValue(data[3].capital_lease_obligations)
        : "--",
      reported_time_display2: data[2].capital_lease_obligations
        ? convertValue(data[2].capital_lease_obligations)
        : "--",
      reported_time_display1: data[1].capital_lease_obligations
        ? convertValue(data[1].capital_lease_obligations)
        : "--",
      reported_time_display0: data[0].capital_lease_obligations
        ? convertValue(data[0].capital_lease_obligations)
        : "--",
    },
    {
      breakDown: "Net Tangible Assets",
      reported_time_display3: data[3].net_tangible_assets
        ? convertValue(data[3].net_tangible_assets)
        : "--",
      reported_time_display2: data[2].net_tangible_assets
        ? convertValue(data[2].net_tangible_assets)
        : "--",
      reported_time_display1: data[1].net_tangible_assets
        ? convertValue(data[1].net_tangible_assets)
        : "--",
      reported_time_display0: data[0].net_tangible_assets
        ? convertValue(data[0].net_tangible_assets)
        : "--",
    },
    {
      breakDown: "Working Capital",
      reported_time_display3: data[3].working_capital
        ? convertValue(data[3].working_capital)
        : "--",
      reported_time_display2: data[2].working_capital
        ? convertValue(data[2].working_capital)
        : "--",
      reported_time_display1: data[1].working_capital
        ? convertValue(data[1].working_capital)
        : "--",
      reported_time_display0: data[0].working_capital
        ? convertValue(data[0].working_capital)
        : "--",
    },
    {
      breakDown: "Invested Capital",
      reported_time_display3: data[3].invested_capital
        ? convertValue(data[3].invested_capital)
        : "--",
      reported_time_display2: data[2].invested_capital
        ? convertValue(data[2].invested_capital)
        : "--",
      reported_time_display1: data[1].invested_capital
        ? convertValue(data[1].invested_capital)
        : "--",
      reported_time_display0: data[0].invested_capital
        ? convertValue(data[0].invested_capital)
        : "--",
    },
    {
      breakDown: "Tangible Book Value",
      reported_time_display3: data[3].tangible_book_value
        ? convertValue(data[3].tangible_book_value)
        : "--",
      reported_time_display2: data[2].tangible_book_value
        ? convertValue(data[2].tangible_book_value)
        : "--",
      reported_time_display1: data[1].tangible_book_value
        ? convertValue(data[1].tangible_book_value)
        : "--",
      reported_time_display0: data[0].tangible_book_value
        ? convertValue(data[0].tangible_book_value)
        : "--",
    },
    {
      breakDown: "Total Debt",
      reported_time_display3: data[3].total_debt
        ? convertValue(data[3].total_debt)
        : "--",
      reported_time_display2: data[2].total_debt
        ? convertValue(data[2].total_debt)
        : "--",
      reported_time_display1: data[1].total_debt
        ? convertValue(data[1].total_debt)
        : "--",
      reported_time_display0: data[0].total_debt
        ? convertValue(data[0].total_debt)
        : "--",
    },
    {
      breakDown: "Net Debt",
      reported_time_display3: data[3].net_debt
        ? convertValue(data[3].net_debt)
        : "--",
      reported_time_display2: data[2].net_debt
        ? convertValue(data[2].net_debt)
        : "--",
      reported_time_display1: data[1].net_debt
        ? convertValue(data[1].net_debt)
        : "--",
      reported_time_display0: data[0].net_debt
        ? convertValue(data[0].net_debt)
        : "--",
    },
    {
      breakDown: "Share Issued",
      reported_time_display3: data[3].share_issued
        ? convertValue(data[3].share_issued)
        : "--",
      reported_time_display2: data[2].share_issued
        ? convertValue(data[2].share_issued)
        : "--",
      reported_time_display1: data[1].share_issued
        ? convertValue(data[1].share_issued)
        : "--",
      reported_time_display0: data[0].share_issued
        ? convertValue(data[0].share_issued)
        : "--",
    },
    {
      breakDown: "Ordinary Shares Number",
      reported_time_display3: data[3].ordinary_shares_number
        ? convertValue(data[3].ordinary_shares_number)
        : "--",
      reported_time_display2: data[2].ordinary_shares_number
        ? convertValue(data[2].ordinary_shares_number)
        : "--",
      reported_time_display1: data[1].ordinary_shares_number
        ? convertValue(data[1].ordinary_shares_number)
        : "--",
      reported_time_display0: data[0].ordinary_shares_number
        ? convertValue(data[0].ordinary_shares_number)
        : "--",
    },
    {
      breakDown: "Treasury Shares Number",
      reported_time_display3: data[3].treasury_shares_number
        ? convertValue(data[3].treasury_shares_number)
        : "--",
      reported_time_display2: data[2].treasury_shares_number
        ? convertValue(data[2].treasury_shares_number)
        : "--",
      reported_time_display1: data[1].treasury_shares_number
        ? convertValue(data[1].treasury_shares_number)
        : "--",
      reported_time_display0: data[0].treasury_shares_number
        ? convertValue(data[0].treasury_shares_number)
        : "--",
    }
  ]
}
