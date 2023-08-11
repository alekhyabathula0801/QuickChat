import { isEmpty } from "lodash-es";

export const getDateViewValue = (date = "") => {
  if (isEmpty(date)) {
    return "";
  }
  const currentDate = new Date();
  const currentTime = currentDate.getTime();

  const prevDate = new Date(date);
  const prevTime = prevDate.getTime();

  const timeDifferenceInMs = currentTime - prevTime;

  const timeDifferenceInSeconds = parseInt(timeDifferenceInMs / 1000);
  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds}s ago`;
  }
  const timeDifferenceInMinutes = parseInt(timeDifferenceInSeconds / 60);
  if (timeDifferenceInMinutes < 60) {
    return `${timeDifferenceInMinutes}min ago`;
  }
  const timeDifferenceInHours = parseInt(timeDifferenceInMinutes / 60);
  if (timeDifferenceInHours < 24) {
    return `${timeDifferenceInHours}h ago`;
  }
  const timeDifferenceInDays = parseInt(timeDifferenceInHours / 24);
  return `${timeDifferenceInDays}day${timeDifferenceInDays > 1 ? `s` : ""} ago`;
};
