import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import UserPage from "views/User.js";
import Product from "views/Product.js";
import Category from "views/Category.js";
import Banner from "views/Banner.js";
import Login from "views/Login.js";

var routes = [
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-bank",
  //   component: Icons,
  //   layout: "/admin",
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-diamond",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/category",
    name: "Category",
    icon: "nc-icon nc-single-copy-04",
    component: Category,
    layout: "/admin",
  },
  {
    path: "/product",
    name: "Products",
    icon: "nc-icon nc-bank",
    component: Product,
    layout: "/admin",
  },
  {
    path: "/banner",
    name: "Banner",
    icon: "nc-icon nc-album-2",
    component: Banner,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Profile",
    icon: "nc-icon nc-user-run",
    component: UserPage,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/#",
    name: "Logout",
    icon: "nc-icon nc-button-power",
    component: UserPage,
    layout: "/admin",
  },
];
export default routes;
