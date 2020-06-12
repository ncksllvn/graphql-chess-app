import React from 'react'

import COLORS, {
  USER_COLOR
} from '../../constants/colors'

import { selectChess } from '../../constants/selectors'

import useAppState from '../../hooks/useAppState'
import useActiveSquare from '../../hooks/useActiveSquare'
import useInitiateMove from '../../hooks/useInitiateMove'

import Square from '../Square'

export default function Board() {
  const chess = useAppState(selectChess)
  const [activeSquare, setActiveSquare] = useActiveSquare()
  const initiateMove = useInitiateMove()

  if (!chess) {
    return (
      <div className="chess-board--loading" data-testid="chess-board--loading">
        Loading...
      </div>
    )
  }

  const classNames= ['chess-board']

  if (chess.turn === COLORS.BLACK) {
    classNames.push('chess-board--black-turn')
  }

  const isPlayerTurn = (
    chess.turn === USER_COLOR
  )

  return (
    <div className={classNames.join(' ')} data-testid="chess-board">
      {chess.squares.map(
        ({ id: squareId, piece, isDark }) => {
          const isActive = (
            squareId === activeSquare?.id
          )

          const isTargeted = (
            activeSquare?.targets?.has(squareId)
          )

          const targetedBy = (
            isTargeted ? activeSquare : null
          )

          let onClick = null

          if (isPlayerTurn) {
            if (isTargeted) {
              onClick = (squareId) => initiateMove(chess, activeSquare.id, squareId)
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
