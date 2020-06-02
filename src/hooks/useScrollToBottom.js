import { useEffect } from 'react'

export default function useScrollToBottom(ref) {
  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight
  }, [ref])
}
