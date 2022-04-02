import React from 'react'
import * as s from './styles'

export const MainButton = ({children, fullWidth, bgColor}) => {
  return (
    <s.Button bgColor={bgColor} fullWidth={fullWidth}>{children}</s.Button>
  )
}
