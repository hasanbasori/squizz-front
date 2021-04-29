import React from "react";
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
 `;

function Main() {
    return (
        <div styled={{ width: "100%", height: "100%" }}>
            <Navbar />
            <h1 className="text-red-800">Main</h1>
            <Title>Test</Title>
        </div>
    )
}

export default Main
