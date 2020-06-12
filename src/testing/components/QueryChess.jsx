import useQueryChess from '../../hooks/useQueryChess'

export default function QueryChess({ children }) {
  useQueryChess()
  return (
    children
  )
}
