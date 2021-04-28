import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: khaki;
  height: 30px;
  width: 100px;
  color: crimson;
`;

const Header = styled.div`
  background-color: green;
  height: 200px;
  width: 100%;
  display: flex;
  align-item: center;
`;

const UpgradeDiv = styled(Header)`
  background-color: red;
`;

function Navbar() {
    return (
        <Header>
            <StyledButton>Test button</StyledButton>
            <StyledButton>Test </StyledButton>
        </Header>
    )
}

export default Navbar