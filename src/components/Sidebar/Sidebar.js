import React, { useState } from "react";
import * as s from "./Sidebar.styles";

// Provide default value to props
const Sidebar = ({
  backgroundImage = "",
  SidebarHeader = "",
  menuItems = [],
  fonts = {
    header: "",
    menu: "",
  },
}) => {
  const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
  const handleMenuItemClick = name => {
    setSelectedMenuItem(name)
  }

  const menuItemsJSX = menuItems.map((item, index) => {

    const isItemSelected = selected === item.name;

    console.log(`${item.name} selected? ${isItemSelected}`)

    return (
      <s.MenuItem
      key={index}
      font={fonts.menu}
      // Pass selected item to change
      // the color of the divider
      selected={isItemSelected}
      onClick = {()=> handleMenuItemClick(item.name)}
      >
        <s.Icon src={item.icon} />
        <s.Text>{item.name}</s.Text>
      </s.MenuItem>
    );
  });

  return (
    <s.SidebarContainer backgroundImage={backgroundImage}>
      <s.SidebarHeader font={fonts.header}>{SidebarHeader}</s.SidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      <s.TogglerContainer>
          <s.Toggler/>
      </s.TogglerContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
