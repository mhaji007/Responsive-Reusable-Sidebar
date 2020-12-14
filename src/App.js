import React from "react";
import * as s from "./App.styles";

// Import components
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";

const sidebarHeader = "Reusable Sidebar";

const menuItems = [
  { name: "Home", to: "/", icon: "", subMenuItems: [] },
  { name: "About", to: "/about", icon: "", subMenuItems: [] },
  {
    name: "Locations",
    to: "/locations",
    icon: "",
    subMenuItems: [
      { name: "California", to: "/california" },
      { name: "Washington", to: "/washington" },
      { name: "Florida", to: "/florida" },
      { name: "Texas", to: "/texas" },
    ],
  },
  { name: "Services", to: "/services", icon: "", subMenuItems: [] },
  { name: "Blog", to: "/blog", icon: "", subMenuItems: [] },
  { name: "Contacts", to: "/contacts", icon: "", subMenuItems: [] },
];

const App = () => {
  const backgroundImage = "images/company.jpeg";
  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
      />
      <MainView />
    </s.App>
  );
};

export default App;
