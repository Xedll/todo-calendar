// @ts-nocheck
import React from 'react'
import styled, { css } from 'styled-components'

const StyledFlex = styled.div`
display:flex;
flex-direction:${props => props.direction || "row"};
justify-content:${props => props.justify || "stretch"};
align-items:${props => props.align || "stretch"};
width:${props => props.width || '100%'};
height:${props => props.height || '100%'};
margin:${props => props.margin || '0'};
padding:${props => props.padding || '0'};
column-gap:${props => props.colgap || '0'};
position:${props => props.position || 'relative'};
transition: all .5s;
${props => props.overflowHide && css`
overflow:hidden;
`}
${props => props.scroll && css`
overflow-x: scroll;
&::-webkit-scrollbar {
   height:5px;
}
&::-webkit-scrollbar-thumb {
   background: ${props => props.theme.colors.primary};
   border-radius:5px;
}
scrollbar-width:5px;
scrollbar-color: ${props => props.theme.colors.primary}
`};

${props => props.hide && css`
   visibility:hidden;
   opacity:0;
   top:-100%;
`};
${props => props.show && css`
   visibility:visible;
   opacity:1;
   top:0;
`};
`

export const Flex = (props) => {
   return <StyledFlex {...props} />
}

