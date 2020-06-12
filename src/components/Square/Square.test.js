import React from 'react'
import renderer from 'react-test-renderer'

import Square from '.'

const defaultProps = {
  squareId: 'a1',
  piece: null,
  isDark: false,
  isActive: false,
  targetedBy: null,
  onClick: null
}

it('renders as empty', () => {
  const tree = renderer
    .create(<Square {...defaultProps}/>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('renders with a piece', () => {
  const props = {
    ...defaultProps,
    piece: { type: 'q', color: 'w' }
  }

  const tree = renderer
    .create(<Square {...props}/>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('renders as active', () => {
  const props = {
    ...defaultProps,
    piece: { type: 'q', color: 'w' },
    isActive: true,
    onClick: () => {}
  }

  const tree = renderer
    .create(<Square {...props}/>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('renders as a destination when targeted by a piece on a different square', () => {
  const props = {
    ...defaultProps,
    onClick: () => {},
    piece: { type: 'q', color: 'w' },
    targetedBy: {
      id: 'b3',
      piece: {
        type: 'n',
        color: 'b'
      }
    }
  }

  const tree = renderer
    .create(<Square {...props}/>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
