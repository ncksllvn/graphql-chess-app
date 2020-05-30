import React from 'react'

// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_log_role
export default function Console(){
  return (
    <div className="console" role="log">
      <div className="console-output" aria-live="polite" aria-atomic="false">
        <div>
          Todo
        </div>
      </div>
    </div>
  )
}
