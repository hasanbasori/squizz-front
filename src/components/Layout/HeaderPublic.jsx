import React from "react";
import styled from "styled-components";
const HeaderStyled = styled.div`
  background-color: black;
  .header {
    color: crimson;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <h2 className="header">HEADER COMPONENT</h2>
    </HeaderStyled>
  );
}

export default Header;
