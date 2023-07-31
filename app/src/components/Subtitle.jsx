// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

const StyledSubtitle = styled.h3`
color:${props => props.color || props.theme.colors.text};
font-size:20px;
margin:${props => props.margin || '0'};
width:fit-content;
font-family: 'Metrophobic', sans-serif;
`
export const Subtitle = (props) => {
   return <StyledSubtitle {...props} />
}
