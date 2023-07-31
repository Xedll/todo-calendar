// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
color:${props => props.color || props.theme.colors.text};
font-size:25px;
margin:${props => props.margin || '0'};
width:fit-content;
font-family: 'Metrophobic', sans-serif;
`
export const Title = (props) => {
   return <StyledTitle{...props} />
}
