// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
height:fit-content;
width:${props => props.width || '100%'};
margin:${props => props.margin || '0'};
color:${props => props.color || props.theme.colors.text};
border: 3px solid ${props => props.bordercolor || props.theme.colors.primary};
padding:10px 20px;
background-color:${props => props.background || props.theme.colors.background};
justify-self:${props => props.justifyself || 'flex-start'};
align-self:${props => props.alignself || 'flex-start'};
cursor: pointer;
z-index:100;
`


export const Button = (props) => {
   return <StyledButton {...props} />
}
