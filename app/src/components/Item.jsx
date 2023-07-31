import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.div`
background-color:transparent;
border:2px solid ${props => props.theme.colors.primary};
padding:5px;
max-width:100%;
font-family: 'Metrophobic', sans-serif;
color:${props => props.theme.colors.text};
grid-column:${props => props.from || 0}/${props => props.to || 0};
`


export const Item = (props) => {
   return <StyledItem {...props} />
}
