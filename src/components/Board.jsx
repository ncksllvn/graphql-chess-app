import React from 'react'

import COLORS, {
  USER_COLOR
} from '../constants/colors'

import useAppState, { selectChess } from '../hooks/useAppState'
import useActiveSquare from '../hooks/useActiveSquare'
import useInitiateMove from '../hooks/useInitiateMove'

import Square from './Square'

export default function Board() {
  const chess = useAppState(selectChess)
  const [activeSquare, setActiveSquare] = useActiveSquare()
  const moveInitiated = useInitiateMove()

  if (!chess) {
    return <div className="chess-board--loading"/>
  }

  const classNames= ['chess-board']

  if (chess.turn === COLORS.BLACK) {
    classNames.push('chess-board--black-turn')
  }

  return (
    <div className={classNames.join(' ')}>
      {chess.squares.map(
        ({ id: squareId, piece, isDark }) => {
          const isActive = (
            squareId === activeSquare?.id
          )

          const isPlayerTurn = (
            chess.turn === USER_COLOR
          )

          const isTargeted = (
            activeSquare?.targets?.includes(squareId)
          )

          const targetedBy = (
            isTargeted ? activeSquare : null
          )

          let onClick = null

          if (isPlayerTurn) {
            if (isTargeted) {
              onClick = (squareId) => moveInitiated(chess, activeSquare.id, squareId)
            } else if (piece?.color === USER_COLOR) {
              onClick = (squareId) => setActiveSquare(squareId)
            }
          }

          return (
            <Square
              key={squareId}
              piece={piece}
              squareId={squareId}
              isDark={isDark}
              isActive={isActive}
              targetedBy={targetedBy}
              onClick={onClick}/>
          )
        }
      )}
    </div>
  )
}
