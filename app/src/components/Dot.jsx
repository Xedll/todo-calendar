import React from 'react'
import styled from 'styled-components'

const StyledDot = styled.div`
width:${props => props.scale || 0};
height:${props => props.scale || 0};
background: ${props => props.theme.colors.accent};
border-radius:50%;
`


export const Dot = (props) => {
   return <StyledDot {...props} />
}
