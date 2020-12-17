import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as s from "./Sidebar.styles";
import { Link } from "react-router-dom";

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
  const [subMenusStates, setSubmenus] = useState({});

  // // How state of submenu items would look like
  // // 2 is the index of menu items that contains
  // // submenu items
  // const submenus = {
  //   2: {
  //     // Whether the parent is open or not
  //     isOpen: false,
  //     // which submenu item is selected
  //     isSelected: null
  //   }
  // }

  // Effects
  // Update of header state
  useEffect(() => {
    isSidebarOpen
      ? // to avoid the janky transition motion when expanding
        // use only when switching from shortName to longName
        setTimeout(() => setHeader(sidebarHeader.fullName), 200)
      : setHeader(sidebarHeader.shortName);
  }, [isSidebarOpen, sidebarHeader]);

  // Update of sidebar state
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1280) setSidebarState(false);
      else setSidebarState(true);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [isSidebarOpen]);

  // Add index of items that contain sub menu items
  useEffect(() => {
    const newSubmenus = {};

    menuItems.forEach((item, index) => {
      // below  line is same as item.subMenusItems.length !==0
      // !! takes a value and converts it to a boolean
      const hasSubmenus = !!item.subMenuItems.length;
      if (hasSubmenus) {
        newSubmenus[index] = {};
        newSubmenus[index]["isOpen"] = false;
        newSubmenus[index]["selected"] = null;
      }
    });
    setSubmenus(newSubmenus);
  }, [menuItems]);

  console.log(subMenusStates);

  const handleMenuItemClick = (name, index) => {
    setSelectedMenuItem(name);

    // Check whether what is being clicked
    // has submenus or not
    // Create deep copy
    const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));

    if (subMenusStates.hasOwnProperty(index)) {
      // set isOpen accordingly, now this variable can be used
      // to set the state of dropdown icon from open to close and vice versa
      subMenusCopy[index]["isOpen"] = !subMenusStates[index]["isOpen"];
      setSubmenus(subMenusCopy);
    } else {
      for (let item in subMenusStates) {
        subMenusCopy[item]["isOpen"] = false;
        subMenusCopy[item]["selected"] = null;
      }
      setSubmenus(subMenusCopy);
    }
  };

  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;

    // Submenu availability indicator

    // !! converts the value of length into a boolean
    // 0 ==> falsy value ==> hasSubments becomes false
    // anything but 0 ===> truthy value ==> submenu becomes true
    const hasSubmenus = !!item.subMenuItems.length;
    // Check for availability of submenu state at the given index
    // If this check is not in place, we encounter an error
    // since useEffect runs after the initial render and at that
    // time app does not have access to subMenusStates[index]
    // The following is the same as :
    // const isOpen = subMenusStates[index]?.isOpen;
    const isOpen = subMenusStates[index] ? subMenusStates[index].isOpen : null;

    // console.log(`${item.name} selected? ${isItemSelected}`);

    // JSX for submenus
    const subMenuJSX = item.subMenuItems.map(
      (subMenuItem, subMenuItemIndex) => {
        return (
          <Link
            key={subMenuItemIndex}
            to={`${item.to}${subMenuItem.to}`}
            style={{ textDecoration: "none" }}
          >
            <s.SubMenuItem>{subMenuItem.name}</s.SubMenuItem>
          </Link>
        );
      }
    );

    return (
      <s.ItemContainer key={index}>
        <Link to={item.to} style={{ textDecoration: "none" }}>
          <s.MenuItem
            font={fonts.menu}
            // Pass selected item to change
            // the color of the divider
            selected={isItemSelected}
            isOpen={isOpen}
            isSidebarOpen={isSidebarOpen}
            onClick={() => handleMenuItemClick(item.name, index)}
          >
            <s.Icon
              src={item.icon}
              isSidebarOpen={isSidebarOpen}
              selected={isItemSelected}
            />
            <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
            {/* Display drop down arrow */}
            {hasSubmenus && isSidebarOpen && (
              <s.DropdownIcon selected={isItemSelected} isOpen={isOpen} />
            )}
          </s.MenuItem>
        </Link>
        {/* Display submenus if they exist */}
        <AnimatePresence>
          {hasSubmenus && isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen}>
                {subMenuJSX}
              </s.SubMenuItemContainer>
            </motion.nav>
          )}
        </AnimatePresence>
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
