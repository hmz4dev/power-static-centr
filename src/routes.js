import Dashboard from "views/Dashboard.js";
import Messages from "views/Messages.js";
import Plan from "views/Plan";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import UserPage from "views/UserPage.js";

var dashRoutes = [
  {
    path: "/power_static",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Plan",
    name: "Plan",
    icon: "design_image",
    component: Plan,
    layout: "/admin",
  },

  {
    path: "/Messages",
    name: "Messages",
    icon: "ui-1_bell-53",
    component: Messages,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/list-static",
    name: "Table List",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
  }

];
export default dashRoutes;
