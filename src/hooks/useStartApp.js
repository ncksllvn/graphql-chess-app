import { useEffect } from 'react';
import { startApp } from '../actions'

export default function useStartApp(dispatch) {
  return useEffect(() => {
    dispatch(startApp())
  }, [dispatch])
}
