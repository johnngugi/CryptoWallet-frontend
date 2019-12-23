import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Wallet from "@/pages/Wallet.vue";
import Stats from "@/pages/Stats.vue";
import Login from "@/pages/Login.vue";
import Signup from "@/pages/SignUp.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    meta: { requiresAuth: true },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "wallet",
        name: "Wallet",
        component: Wallet
      },
      {
        path: "stats",
        name: "Stats",
        component: Stats
      }
    ]
  },
  {
    path: "/login",
    component: Login,
    name: "Login"
  },
  {
    path: "/signup",
    component: Signup,
    name: "Signup"
  }
];

export default routes;
