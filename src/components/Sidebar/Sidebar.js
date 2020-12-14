import React from "react";
import * as s from "./Sidebar.styles";

// Provide default value to props
const Sidebar = ({
  backgroundImage="",
  sidebarHeader= "",
  menuItems =[]}
  ) => {

  const menuItemsJSX = menuItems.map((item, index) => {
    return <s.MenuItem key={index}>{item}</s.MenuItem>;
  });
  return (
    <s.SidebarContainer backgroundImage={backgroundImage}>
      <s.sidebarHeader>{sidebarHeader}</s.sidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
