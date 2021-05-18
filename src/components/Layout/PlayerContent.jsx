import React from 'react'
import styled from 'styled-components'
import './PlayerContent.postcss'

const PlayerContentStyled = styled.div`
  height: 100%;
  .square {
    background-color: #3f1580;
    width: 800px;
    height: 800px;
    clip-path: polygon(
      50% 0%,
      47% 0,
      48% 0,
      70% 22%,
      46% 45%,
      21% 68%,
      0 48%,
      0 48%,
      0 48%,
      0 0
    );
  }
  .circle {
    background-color: #3f1580;
    width: 800px;
    height: 800px;
    position: absolute;
    top: 0px;
    right: 0;

    clip-path: circle(37.1% at 82% 78%);
  }
`

function PlayerContent({ style, className, children }) {
  return (
    <PlayerContentStyled
      className={`${className ? className : 'layout-content'}`}
      style={{ ...style }}
    >
      <div className="square"></div>
      <div className="circle"></div>
    </PlayerContentStyled>
  )
}

export default PlayerContent
