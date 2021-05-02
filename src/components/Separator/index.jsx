import React from 'react'
import './Separator.postcss'

function Separator({ children }) {
  return (
    <div className="separator">
      <hr />
      <span className="content">{children}</span>
      <hr />
    </div>
  )
}

export default Separator
