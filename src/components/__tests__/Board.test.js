import React from 'react';
import renderer from 'react-test-renderer';

import Provider from '../Provider'
import Board from '../Board';

import {
  actions
} from '../__fixtures__'

jest.mock('../Provider')

it('renders loading', () => {
  const tree = renderer
    .create(
      (
        <Provider>
          <Board/>
        </Provider>
      )
    ).toJSON();

  expect(tree).toMatchSnapshot();
})

it('renders starting position', () => {
  const tree = renderer
    .create(
      <Provider initializers={[actions.appStarted]}>
        <Board/>
      </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
})

it('renders active square and targets', () => {
  const tree = renderer
    .create(
      <Provider initializers={[actions.appStarted, actions.pieceSelected]}>
        <Board/>
      </Provider>
    ).toJSON()

  expect(tree).toMatchSnapshot();
})

it('renders after a move', () => {
  const tree = renderer
    .create(
      <Provider initializers={[actions.appStarted, actions.pieceSelected, actions.moveInitiated]}>
        <Board/>
      </Provider>
    ).toJSON()

  expect(tree).toMatchSnapshot();
})
