import React from "react";
import * as s from "./Sidebar.styles";

const Sidebar = ({ backgroundImage, sidebarHeader }) => {

  const menuItems = [
    "Home",
    "About",
    "Locations",
    "Services",
    "Blog",
    "Contacts",
  ];
  return (
    <s.SidebarContainer backgroundImage={backgroundImage}>
      <s.sidebarHeader>{sidebarHeader}</s.sidebarHeader>
    </s.SidebarContainer>
  );
};

export default Sidebar;
