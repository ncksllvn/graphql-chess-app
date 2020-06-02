import { useEffect } from 'react'

export default function useScrollToBottom(ref) {
  return useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight
  }, [ref])
}
