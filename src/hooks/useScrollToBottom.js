import { useEffect } from 'react'

export default function useScrollToBottom(ref, state) {
  return useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight
  }, [ref, state])
}
