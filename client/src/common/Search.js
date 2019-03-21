import React from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto auto;
  justify-content: end;
  align-content: end;
  margin-right: 12px;
  margin-top: 142px;
`

const StyledDiv = styled.div`
  font-size: 40px;
  color: #696969;
  border: none;
  border-bottom: 2px solid #5fbf00;
  padding: 12px;
  background: white;
  box-shadow: 0 0 10px #696969;
`

const StyledInput = styled.input`
  font-size: 40px;
  &::placeholder {
    padding-left: 16px;
  }
`

export default function Search({ onSearchInput }) {
  return (
    <StyledGrid>
      <StyledDiv>
        <StyledInput
          onChange={onSearchInput}
          type="search"
          placeholder="Patienten suche"
          name="search"
        />
        <FaSearch />
      </StyledDiv>
    </StyledGrid>
  )
}
