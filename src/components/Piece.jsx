import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'

import {
  PIECE_SYMBOLS,
  KEYS
} from '../constants'

import {
  pieceSelected
} from '../actions'

const {
  BLACK
} = KEYS

class Piece extends React.Component {
  render() {
    const {
      file,
      rank,
      type,
      typeName,
      colorName,
      moves
    } = this.props

    if (!type) {
      return null
    }

    const className = `chess-board-piece${
      colorName === BLACK ? ' chess-board-piece--black' : ''
    }`

    return (
      <button
        data-square={`${file}${rank}`}
        disabled={moves?.length === 0}
        onClick={() => console.log(moves)}
        className={className}
        aria-label={`${colorName} ${typeName} on ${file.toUpperCase()} ${rank}`}>
        {PIECE_SYMBOLS[typeName][colorName]}
      </button>
    )
  }
}

const mapStateToProps = (state, { type, color, file, rank }) => {
  return {
    moves: state.chess.movesBySquare[`${file}${rank}`],
    typeName: state.constants.piecesBySymbol[type],
    colorName: state.constants.colorsBySymbol[color]
  }
}

const mapDispatchToProps = {
  pieceSelected
}

export default connect(mapStateToProps, mapDispatchToProps)(Piece)
export { Piece }
