import React from "react";
import * as s from "./Sidebar.styles";

// Provide default value to props
const Sidebar = ({
  backgroundImage = "",
  SidebarHeader = "",
  menuItems = [],
  fonts={
    header:"",
    menu: ""
  }
}) => {
  const menuItemsJSX = menuItems.map((item, index) => {
    return (
      <s.MenuItem key={index} font={fonts.menu}>
        <s.Icon src={item.icon} />
        <s.Text>{item.name}</s.Text>
      </s.MenuItem>
    );
  });
  return (
    <s.SidebarContainer backgroundImage={backgroundImage}>
      <s.SidebarHeader font={fonts.header}>{SidebarHeader}</s.SidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
