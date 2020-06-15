import React, { useRef } from 'react'

import { selectGameLog } from '../constants/selectors'

import useAppState from '../hooks/useAppState'
import useGameLog from '../hooks/useGameLog'
import useScrollToBottom from '../hooks/useScrollToBottom'

export default function GameLog(){
  const gameLog = useAppState(selectGameLog)
  const ref = useRef(null)

  useGameLog()
  useScrollToBottom(ref, gameLog)

  return (
    <div ref={ref} className="console" role="log">
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
