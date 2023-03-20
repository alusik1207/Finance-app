import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";

dayjs.extend(calendar);

export const calendarTime = (date) => {
  return dayjs(date).calendar(null, {
    sameDay: "[Today at] HH:mm", // The same day ( Today at 2:30 AM )
    nextDay: "[Tomorrow at] HH:mm", // The next day ( Tomorrow at 2:30 AM )
    nextWeek: "dddd [at] HH:mm", // The next week ( Sunday at 2:30 AM )
    lastDay: "[Yesterday at] HH:mm", // The day before ( Yesterday at 2:30 AM )
    lastWeek: "[Last] dddd [at] HH:mm", // Last week ( Last Monday at 2:30 AM )
    sameElse: "DD.MM.YYYY", // Everything else ( 17/10/2011 )
  });
};
