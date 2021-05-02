import React from 'react'
import PlayButton from '../PlayButton'
import './HeaderPublic.postcss'


function HeaderPublic({ className, style }) {
  return (
    <div
      className={`layout-header-public flex justify-between items-center px-6 ${
        className ? className : ''
      }`}
      style={{ ...style }}
    >
      <div className="header-left">
        <img
          src="/src/assets/logos/logo.png"
          alt="Logo"
          className="w-12 inline-block"
        />
        <PlayButton type="primary" className="btn-signup ml-4">
          News
        </PlayButton>
        <button className="ml-4">School</button>
        <button className="ml-4">Work</button>
        <button className="ml-4">Home</button>
        <button className="ml-4">Academy</button>
      </div>
      <div className="header-right">
        <button className="ml-4">Contact sales</button>
        <button className="ml-4">Explore content</button>
        <button className="ml-4">Play</button>
        <PlayButton type="success" className="btn-signup ml-4">
          Sign up
        </PlayButton>
        <button className="ml-4">Log in</button>
      </div>
    </div>
  )
}

export default HeaderPublic
