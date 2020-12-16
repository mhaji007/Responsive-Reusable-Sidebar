import React, { useState, useEffect } from "react";
import * as s from "./Sidebar.styles";

// Provide default value to props
const Sidebar = ({
  backgroundImage = "",
  sidebarHeader = {
    fullName: "",
    shortName: "",
  },
  menuItems = [],
  fonts = {
    header: "",
    menu: "",
  },
}) => {
  const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [header, setHeader] = useState(sidebarHeader.fullName);

  // Effects
  // Update of header state
  useEffect(() => {
    isSidebarOpen
      ? // to avoid the janky transition motion when expanding
        // use only when switching from shortName to longName
        setTimeout(() => setHeader(sidebarHeader.fullName), 200)
      : setHeader(sidebarHeader.shortName);
  }, [isSidebarOpen, sidebarHeader]);

  const handleMenuItemClick = (name) => {
    setSelectedMenuItem(name);
  };

  // Update of sidebar state
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1280) setSidebarState(false);
      else setSidebarState(true);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [isSidebarOpen]);




  const menuItemsJSX = menuItems.map((item, index) => {

    const isItemSelected = selected === item.name;

    // Submenu availability indicator

    // !! converts the value of length into a boolean
    // 0 ==> falsy value ==> hasSubments becomes false
    // anything but 0 ===> truthy value ==> submenu becomes true
    const hasSubmenus = !!item.subMenuItems.length;

    // console.log(`${item.name} selected? ${isItemSelected}`);

    // JSX for submenus
    const subMenuJSX= item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {
      return (
        <s.SubMenuItem key={subMenuItemIndex}>
          {subMenuItem.name}
        </s.SubMenuItem>
      )
    })

    return (
      <s.ItemContainer key={index}>
        <s.MenuItem
          font={fonts.menu}
          // Pass selected item to change
          // the color of the divider
          selected={isItemSelected}
          isSidebarOpen={isSidebarOpen}
          onClick={() => handleMenuItemClick(item.name)}
        >
          <s.Icon
            src={item.icon}
            isSidebarOpen={isSidebarOpen}
            selected={isItemSelected}
          />
          <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
          {/* Display drop down arrow */}
          {hasSubmenus && <s.DropdownIcon selected={isItemSelected} />}
        </s.MenuItem>
        {/* Display submenus if they exist */}
        <s.SubMenuItemContainer>
          {subMenuJSX}
        </s.SubMenuItemContainer>
      </s.ItemContainer>
    );
  });
  console.log(`Is sidebar open ${isSidebarOpen}`);
  return (
    <s.SidebarContainer
      backgroundImage={backgroundImage}
      isSidebarOpen={isSidebarOpen}
    >
      <s.SidebarHeader font={fonts.header}>{header}</s.SidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <s.Toggler />
      </s.TogglerContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
