import React from 'react'
import PlayButton from '../PlayButton'
import './HeaderPublic.postcss'

function HeaderPublic({ className, style }) {
  return (
    <div
      className={`header-public flex justify-between items-center px-6 ${
        className ? className : ''
      }`}
      style={{ ...style }}
    >
      <div className="header-left">
        <img src="/src/assets/logos/logo.png" alt="Logo" className="w-12" />
      </div>
      <div className="header-right">
        <button>Contact sales</button>
        <button>Explore content</button>
        <button>Play</button>
        <PlayButton type="success" className="btn-signup">
          Sign up
        </PlayButton>
        <button>Log in</button>
      </div>
    </div>
  )
}

export default HeaderPublic
