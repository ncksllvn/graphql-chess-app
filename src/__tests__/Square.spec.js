import React from 'react'

import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react'

import Square from '../components/Square'

const defaultProps = {
  squareId: 'a1',
  piece: null,
  isDark: false,
  isActive: false,
  targetedBy: null,
  onClick: null
}

test('it renders as empty', () => {
  render(
    <Square {...defaultProps}/>
  )

  screen.getByLabelText('a1 is empty')
})

test('it renders with a piece', () => {
  render(
    <Square {...defaultProps}
      piece={{
        type: 'q',
        color: 'w'
      }}/>
  )

  screen.getByLabelText('a1 contains a white queen')
})

test('it renders as active', async () => {
  const onClick = jest.fn()

  render(
    <Square {...defaultProps}
      piece={{
        type: 'q',
        color: 'w'
      }}
      isActive={true}
      onClick={onClick}/>
  )

  const queen = screen.getByLabelText(
    'a1 contains a white queen selected for move',
    { exact: false }
  )

  fireEvent.click(queen)
  expect(onClick.mock.calls[0][0]).toBe('a1')
})

test('it renders as a destination when targeted by a piece on a different square', () => {
  const onClick = jest.fn()

  render(
    <Square {...defaultProps}
      piece={{
        type: 'q',
        color: 'w'
      }}
      isActive={true}
      onClick={onClick}
      targetedBy={{
        id: 'b3',
        piece: {
          type: 'n',
          color: 'b'
        }
      }}/>
  )

  const queen = screen.getByLabelText(
    'Move black knight on b3 to capture white queen on a1'
  )

  fireEvent.click(queen)
  expect(onClick.mock.calls[0][0]).toBe('a1')
})
