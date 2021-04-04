import dynamic from "next/dynamic";

export const MAP = [
  {
    name: "Dashboard",
    component: dynamic(() => import("./Dashboard/Dashboard")),
    tabs: [],
  },
  {
    name: "Profile",
    component: dynamic(() => import("./Profile/Profile")),
    tabs: [
      {
        name: "Example",
        component: dynamic(() => import("./Profile/Tabs/Example")),
      },
      {
        name: "Personal",
        component: dynamic(() => import("./Profile/Tabs/Personal")),
      },
    ],
  },
  {
    name: "Settings",
    component: dynamic(() => import("./Settings/Settings")),
    tabs: [],
  },
];
