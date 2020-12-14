import React from "react";
import * as s from "./App.styles";

// Import components
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";

const SidebarHeader = "Reusable Sidebar";

const menuItems = [
  { name: "Home", to: "/", icon: "icons/home.svg", subMenuItems: [] },
  { name: "About", to: "/about", icon: "icons/about.svg", subMenuItems: [] },
  {
    name: "Locations",
    to: "/locations",
    icon: "icons/locations.svg",
    subMenuItems: [
      { name: "California", to: "/california" },
      { name: "Washington", to: "/washington" },
      { name: "Florida", to: "/florida" },
      { name: "Texas", to: "/texas" },
    ],
  },
  { name: "Services", to: "/services", icon: "icons/services.svg", subMenuItems: [] },
  { name: "Blog", to: "/blog", icon: "icons/blog.svg", subMenuItems: [] },
  { name: "Contacts", to: "/contacts", icon: "icons/contacts.svg", subMenuItems: [] },
];

const App = () => {
  const backgroundImage = "images/company.jpeg";
  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        SidebarHeader={SidebarHeader}
        menuItems={menuItems}
      />
      <MainView />
    </s.App>
  );
};

export default App;
