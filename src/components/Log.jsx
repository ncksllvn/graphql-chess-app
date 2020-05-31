import React from 'react'
import { useSelector } from 'react-redux'

// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_log_role
export default function Log(){
  const gameLog = useSelector(state => state.gameLog)

  return (
    <div className="console" role="log">
      <ul className="console-output" aria-live="polite" aria-atomic="false">
        {gameLog?.map((gameEvent, index) =>
          <li key={index} className="console-output-item">{gameEvent}</li>
        )}
      </ul>
    </div>
  )
}
