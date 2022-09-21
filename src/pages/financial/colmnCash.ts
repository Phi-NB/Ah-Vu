export const getDataColumns = (propsData: any) => {
  const convertDate = (value: string) => {
    const [year, month, day] = value.split("-");

    return [month, day, year].join("/");
  };
  const data = propsData.financials.cashflow;
  return [
    {
      name: "breakDown",
      title: "BREAK DOWN",
    },
    {
      name: "ttm",
      title: "TTM",
    },
    {
      name: "reported_time_display3",
      title: convertDate(data[3].reported_time_display),
    },
    {
      name: "reported_time_display2",
      title: convertDate(data[2].reported_time_display),
    },
    {
      name: "reported_time_display1",
      title: convertDate(data[1].reported_time_display),
    },
    {
      name: "reported_time_display0",
      title: convertDate(data[0].reported_time_display),
    },
  ];
};
