import React from 'react'
import { useSelector } from 'react-redux'

export default function Spinner() {
  const appStatus = useSelector(state => state.appStatus)

  const {
    loading
  } = appStatus

  if (!loading) {
    return null
  }

  return (
    <div className="spinner">
      <div className="spinner-icon"></div>
    </div>
  )
}
