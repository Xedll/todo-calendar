import React from 'react'
import styled, { css } from 'styled-components'

const StyledPopUp = styled.div`
width:900px;
height:450px;
position:absolute;
border: 3px solid ${props => props.color || props.theme.colors.primary};
left: 50%;
top:-200%;
transform: translateX(-50%) translateY(-50%);
background: ${props => props.background || props.theme.colors.background};
z-index:1000;
transition:all .5s;
${props => props.shown && css`
   top:50%;
`}
`

export const PopUp = (props) => {
   return <StyledPopUp {...props} />
}
