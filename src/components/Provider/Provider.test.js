import React from 'react'
import {
  render,
  screen,
} from '@testing-library/react'

import Provider from '.'

test('renders without crashing', async () => {
  render(
    <Provider>
      <span>OK</span>
    </Provider>
  )

  screen.getByText('OK')
})
