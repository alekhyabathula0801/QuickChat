import { ReactComponent as Calender } from "../../assets/calender.svg";
import { ReactComponent as Clock } from "../../assets/clock.svg";
import { ReactComponent as UserProfile } from "../../assets/user-profile.svg";
import { ReactComponent as Rejected } from "../../assets/rejected.svg";

export const MEETING_DATA = [
  {
    title: "13h",
    Icon: Clock,
    subtitle: "Time",
  },
  {
    title: "188",
    Icon: UserProfile,
    subtitle: "Atended",
    className: "attention",
  },
  {
    title: "119",
    Icon: Calender,
    subtitle: "Meetings",
    className: "positive",
  },
  {
    title: "41",
    Icon: Rejected,
    subtitle: "Rejected",
    className: "warning",
  },
];

export const BAR_MEETER_DATA = [
  {
    label: "Mon",
    value: 30,
  },
  {
    label: "Tue",
    value: 15,
  },
  {
    label: "Wed",
    value: 60,
    isActive: true,
  },
  {
    label: "Thur",
    value: 20,
  },
  {
    label: "Fri",
    value: 35,
  },
  {
    label: "Sat",
    value: 40,
  },
  {
    label: "Sun",
    value: 70,
  },
];
