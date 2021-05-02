import React from 'react'

import './HeaderAuthentication.postcss'

function HeaderAuthentication({ className, style }) {
  return (
    <div
      className={`layout-header-auth bg-white flex justify-between items-center px-6 ${
        className ? className : ''
      }`}
      style={{ ...style }}
    >
      <div className="header-left">
        <img src="/src/assets/logos/logo.png" alt="Logo" className="w-12 " />
      </div>
    </div>
  )
}

export default HeaderAuthentication
