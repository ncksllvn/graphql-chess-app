import { useEffect, useCallback } from 'react'

import useAppDispatch from './useAppDispatch'
import useAppState, {
  selectAppStatus,
  selectChess,
  selectUI
} from './useAppState'

import {
  EVENT_LOGGED
} from '../constants/actions'

import { piecesBySymbol } from '../constants/pieces'
import { colorsBySymbol } from '../constants/colors'

export default function useLog() {
  const dispatch = useAppDispatch()
  const appStatus = useAppState(selectAppStatus)
  const chess = useAppState(selectChess)
  const ui = useAppState(selectUI)

  const sendToLog = useCallback(
    (data) => {
      dispatch({ type: EVENT_LOGGED, data })
    }
  , [dispatch])

  const processMove = useCallback(
    (move) => {
      const from = chess.squares.find(
        (square) => square.id === move.from
      )

      const to = chess.squares.find(
        (square) => square.id === move.to
      )

      let message = null

      if (to.piece) {
        message = `
          ${colorsBySymbol.get(from.piece.color)} ${piecesBySymbol.get(from.piece.type)
          } on ${from.id} captures ${piecesBySymbol.get(to.piece.type)} on ${to.id}`
      } else {
        message = `
          ${colorsBySymbol.get(from.piece.color)} ${piecesBySymbol.get(from.piece.type)
          } moves from ${from.id} to ${to.id}`
      }

      sendToLog(message)
    }
  , [chess, sendToLog])

  const reportAppStatus = () => {
    if (appStatus.initializing) {
      sendToLog('initializing game...')
    } else {
      sendToLog('game ready')
    }
  }

  const reportMove = () => {
    if (ui.pendingMove) {
      processMove(ui.pendingMove)
    }
  }

  const inCheckmate = chess?.inCheckmate
  const inCheck = chess?.inCheck

  const reportCheckStatus = () => {
    if (inCheckmate) {
      sendToLog(`${colorsBySymbol.get(chess.turn)} is in checkmate`)
    } else if (inCheck) {
      sendToLog(`${colorsBySymbol.get(chess.turn)} is in check`)
    }
  }

  useEffect(reportAppStatus, [sendToLog, appStatus.initializing])
  useEffect(reportMove, [ui.pendingMove, processMove])
  useEffect(reportCheckStatus, [inCheckmate, inCheck, sendToLog])
}
