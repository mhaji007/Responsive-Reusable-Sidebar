import styled from "@emotion/styled";

// Sidebar
export const SidebarContainer = styled.div`
  width: ${(p) => (p.isSidebarOpen ? "20%" : "7%")};
  max-width: 280px;
  min-width: 80px;
  background-image: linear-gradient(
      315deg,
      rgb(189, 216, 254, 0.8) 0%,
      rgb(225, 134, 180, 0.8) 74%
    ),
    url(${(p) => p.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  position: relative;
  transition: 0.2s ease-in all;
`;
// header/logo
export const SidebarHeader = styled.h3`
  padding: 20px 0;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 6px;
  font-family: ${(p) => p.font};
`;

// Container holding menu items
export const MenuItemContainer = styled.div``;
// Container wrapping both menu items container and submenu items container
export const ItemContainer = styled.div``;
// Each menu item
export const MenuItem = styled.div`
  ${(p) =>
    !p.isSidebarOpen &&
    `
  text-align: center;
  ${p.selected && "background-color: rgba(0,0,0,0.3);"}
`};
  padding: 6px 20px;
  font-weight: 600;
  /* When using ternary operator in logic of styles "" is needed */
  color: ${(p) => (p.selected ? "rgba(255, 255, 255)" : "rgba(19, 15, 64)")};
  font-family: ${(p) => p.font};
  /* To deal with janky transition text motion from collpase mode to extended mode
   we need to make sure no matter how long the text is, it will always stay on
   the same line as the icon */
  white-space: nowrap;
  /* Dropdown menu */
  position: relative;
  transition: 0.2s ease-in all;
  &:hover {
    color: rgba(255, 255, 255);
    transition: 0.1s ease-in all;
  }
  &::after {
    content: "";
    border: 0.8px solid
      ${(p) => (p.selected ? "rgba(255, 255, 255)" : "rgba(214, 100, 178)")};
    display: ${p => p.isSidebarOpen && p.selected && p.isOpen ? "none": "block"};
    margin: 8px 0 4px;
    transition: 0.2s ease-in all;
  }
  ${(p) =>
    !p.selected &&
    `
    &:hover {
      &::after {
        border: 0.8px solid rgba(255, 255, 255, 0.2);
        transition: .1s ease-in all;
      }
    }
  `}
`;

export const Text = styled.p`
  display: ${(p) => (p.isSidebarOpen ? "inline" : "none")};
`;

export const Icon = styled.img`
  ${(p) =>
    p.isSidebarOpen &&
    `
  padding-right:20px;
  transition: .2s ease-in padding-right;
  `}
  height:16px;
  width: 16px;
`;
/* Submenu Items  ------------------------------------- */
export const SubMenuItemContainer = styled.div`
  font-size: 14px;
  ${(p) => p.isSidebarOpen && "padding-left: 20%"};
  ${(p) => !p.isSidebarOpen && "text-align: center"};
`;
export const SubMenuItem = styled.p`
  color: rgba(19, 15, 64);
  &:hover {
    color: rgba(255, 255, 255);
  }
`;

/* Dropdown Icon  ------------------------------------- */
// Dropdown icon consists of a box that is
// rotated 45 degrees and only right and
// bottom sides (borders) are visible
export const DropdownIcon = styled.span`
  position: absolute;
  top: ${(p) => (p.isOpen ? "16px" : "12px")};
  right: 24px;
  border: solid
    ${(p) => (p.selected ? "rgba(255, 255, 255)" : "rgba(19, 15, 64)")};
  border-width: 0 1px 1px 0;
  /* How big the square is */
  padding: 3px;
  transform: ${(p) => (p.isOpen ? "rotate(-135deg)" : "rotate(45deg)")};
  transition: 0.4s;
`;

/* Toggler  ------------------------------------- */
export const TogglerContainer = styled.div`
  /* Toggler */
  position: absolute;
  width: 30%;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Toggler = styled.div`
  height: 40px;
  cursor: pointer;
  /* Horizontal lines */
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0.25em;
    height: 0.1em;
    width: 100%;
    background: #fff;
    box-shadow: 0 0.75em 0 0 #fff, 0 1.5em 0 0 #fff;
  }
`;
