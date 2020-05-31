const colors = {
  WHITE: 'w',
  BLACK: 'b'
}

export const colorsBySymbol =  new Map(
  Object.entries(colors).map(
    ([key, value]) => [value, key]
  )
)

export const USER_COLOR = colors.WHITE
export const AI_COLOR = colors.BLACK

export default colors
