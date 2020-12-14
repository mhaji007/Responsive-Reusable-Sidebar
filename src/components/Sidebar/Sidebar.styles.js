import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  width: 20%;
  max-width: 280px;
  min-width: 80px;
  background-image: linear-gradient(
      315deg,
      rgb(189, 216, 254, 0.8) 0%,
      rgb(225, 134, 180, 0.8) 74%
    ),
    url(${p =>p.backgroundImage});
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center center;
  color:#fff;


`;

export const sidebarHeader = styled.h3`
  padding: 20px 0;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 6px;
  font-family: 'Playfair Display', serif;

`;
