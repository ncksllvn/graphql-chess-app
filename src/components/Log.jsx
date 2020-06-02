import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_log_role
export default function Log(){
  const gameLog = useSelector(state => state.gameLog)
  const containerEl = useRef(null)

  useEffect(() => {
    containerEl.current.scrollTop = containerEl.current.scrollHeight
  }, [gameLog])

  return (
    <div ref={containerEl} className="console" role="log">
      <ul className="console-output" aria-live="polite" aria-atomic="false">
        {gameLog?.map((gameEvent, index) =>
          <li key={index} className="console-output-item">
            [<time dateTime={gameEvent.time}>{gameEvent.time}</time>] {gameEvent.message}
          </li>
        )}
      </ul>
    </div>
  )
}
