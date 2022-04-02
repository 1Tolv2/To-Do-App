import React from 'react'
import * as s from './styles'

export const BodyRegularText = ({children, type}) => {
  return (
    <s.Paragraph type={type}>{children}</s.Paragraph>
  )
}
