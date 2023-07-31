import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
height:fit-content;
width:100%;
background-color:${props => props.theme.colors.background};
color:${props => props.theme.colors.text};
border:3px solid ${props => props.theme.colors.primary};
padding:10px 3px;
font-family: 'Metrophobic', sans-serif;

&:focus {
   outline:none;
}
`

export const Input = (props) => {
   return <StyledInput {...props} />
}
