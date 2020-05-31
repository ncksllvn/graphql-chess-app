import React from 'react'
import { useSelector } from 'react-redux'

// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_log_role
export default function Log(){
  const records = useSelector(state => state.log)

  return (
    <div className="console" role="log">
      <ul className="console-output" aria-live="polite" aria-atomic="false">
        {records?.map((record, index) =>
          <li key={index} className="console-output-item">{record}</li>
        )}
      </ul>
    </div>
  )
}
