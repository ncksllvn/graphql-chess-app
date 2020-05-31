const flags = {
  NORMAL: 'n',
  CAPTURE: 'c',
  BIG_PAWN: 'b',
  EP_CAPTURE: 'e',
  PROMOTION: 'p',
  KSIDE_CASTLE: 'k',
  QSIDE_CASTLE: 'q'
}

export const flagsBySymbol =  new Map(
  Object.entries(flags).map(
    ([key, value]) => [value, key]
  )
)

export default flags
