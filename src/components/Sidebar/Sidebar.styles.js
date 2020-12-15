import styled from "@emotion/styled";

// Sidebar
export const SidebarContainer = styled.div`
  width: ${(p) => (p.isSidebarOpen ? "20%" : "5%")};
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
  transition:.2s ease-in all;
`;
// header/logo
export const SidebarHeader = styled.h3`
  padding: 20px 0;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 6px;
  font-family:${(p) => p.font};

`;

// Container holding menu items
export const MenuItemContainer = styled.div`
`
// Each menu item
export const MenuItem = styled.div`
${p=>!p.isSidebarOpen && `
  text-align: center;
`}
  padding: 6px 20px;
  font-weight: 600;
  /* When using ternary operator in logic of styles "" is needed */
  color: ${(p) => (p.selected ? "rgba(255, 255, 255)" : "rgba(19, 15, 64)")};
  font-family: ${(p) => p.font};
  &:hover {
    color: rgba(255, 255, 255);
    transition: 0.1s ease-in all;
  }
  &::after {
    content: "";
    border: 0.8px solid
      ${(p) => (p.selected ? "rgba(255, 255, 255)" : "rgba(214, 100, 178)")};
    display: block;
    margin: 8px 0 4px;
  }

  ${(p)=>!p.selected && `
    &:hover {
      &::after {
        border: 0.8px solid rgba(255, 255, 255, 0.2);
        transition: .1s ease-in all;
      }
    }
  `}
`;



export const Text = styled.p`
display: ${p=>p.isSidebarOpen ? "inline" : "none"};
`

export const Icon = styled.img`
${p => p.isSidebarOpen && `
  padding-right:20px;
  `}
height:16px;
width:16px;
`


/* Toggler  ------------------------------------- */
export const TogglerContainer = styled.div`
/* Toggler */
  position: absolute;
  width:30%;
  bottom: 10%;
  left: 0;
  right:0;
  margin: 0 auto;
`

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
