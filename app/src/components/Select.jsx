import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
height:fit-content;
background-color:${props => props.theme.colors.background};
color:${props => props.theme.colors.text};
border:3px solid ${props => props.theme.colors.primary};
padding:10px 6px;
font-family: 'Metrophobic', sans-serif;
appearance:none;
background-image: url();
&:focus {
   outline:none;
}
`

export const Select = (props) => {
   return <StyledSelect {...props} />
}
