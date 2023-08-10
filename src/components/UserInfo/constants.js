import { APP_ROUTES } from "../../navigation/routeConstants";

export const USER_DATA = {
  id: "1",
  name: "Bill Bradford",
  subtitle: "Lead UX/UI Designer",
  status: "Active",
  icon: "https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Free-Sunflower-Unique-Whatsapp-DP-Images-Pics-Download-1.jpg",
};

export const MENU_OPTIONS = [
  { title: "Edit Profile", id: "edit" },
  {
    title: "User Activity",
    id: "userActivity",
    pathname: APP_ROUTES.userActivity,
  },
  { title: "Logout", id: "logout" },
];
