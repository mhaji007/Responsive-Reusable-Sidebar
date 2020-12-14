import React from "react";
import * as s from "./Sidebar.styles";

// Provide default value to props
const Sidebar = ({
  backgroundImage = "",
  SidebarHeader = "",
  menuItems = [],
}) => {
  const menuItemsJSX = menuItems.map((item, index) => {
    return (
      <s.MenuItem key={index}>
        <s.Icon src={item.icon} />
        <s.Text>{item.name}</s.Text>
      </s.MenuItem>
    );
  });
  return (
    <s.SidebarContainer backgroundImage={backgroundImage}>
      <s.SidebarHeader>{SidebarHeader}</s.SidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
