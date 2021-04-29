import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.div`
  height: var(--header-height);
`

function HeaderCreator({ style }) {
  return (
    <HeaderStyled className="header-creator w-full flex flex-row justify-between items-center bg-gray-50" style={{ ...style }}>
      <div className="w-3/6 flex flex-row items-center justify-around">
      <h1 className="w-40">Squizz !</h1>
        <h3>Home</h3>
        <h3>Discover</h3>
        <h3>Library</h3>
        <h3>Reports</h3>
        <h3>Groups</h3>
      </div>
      <div className="w-3/6 flex flex-row items-center justify-end">
        <button className="w-28">Share</button>
        <button className="w-28">Create</button>
        <h3 className="w-28">profile</h3>
      </div>
    </HeaderStyled>
  )
}

export default HeaderCreator
