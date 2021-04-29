import React from 'react'
import './Separator.postcss'

function Separator({ children }) {
  return (
    <div class="separator">
      <hr />
      <span class="content">{children}</span>
      <hr />
    </div>
  )
}

export default Separator
