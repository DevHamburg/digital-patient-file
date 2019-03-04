import React from 'react'
import styled from 'styled-components'
import Title from './Title'

const StyledHeader = styled.header`
  overflow: hidden;
`

export default function Header() {
  return (
    <StyledHeader>
      <Title />
    </StyledHeader>
  )
}
