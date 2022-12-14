import { convertDate } from "./../../utility/index";

export const getDataColumns = (propsData: any) => {
  const column = [
    {
      name: "breakDown",
      title: propsData.lang_breakDown,
    },
    {
      name: "ttm",
      title: propsData.lang_ttm,
    },
    propsData[3] && propsData[3].reported_time_display
      ? {
          name: "reported_time_display3",
          title: convertDate(propsData[3].reported_time_display),
        }
      : undefined,
    propsData[2] && propsData[2].reported_time_display
      ? {
          name: "reported_time_display2",
          title: convertDate(propsData[2].reported_time_display),
        }
      : undefined,
    propsData[1] && propsData[1].reported_time_display
      ? {
          name: "reported_time_display1",
          title: convertDate(propsData[1].reported_time_display),
        }
      : undefined,
    propsData[0] && propsData[0].reported_time_display
      ? {
          name: "reported_time_display0",
          title: convertDate(propsData[0].reported_time_display),
        }
      : undefined,
  ];

  const map = (arr: any) => {
    return arr
      .filter((item: any) => item !== undefined)
  };

  return map(column)
};
