import React from 'react'
import styled, { css } from 'styled-components'



const StyledGrid = styled.div`
display:grid;
grid-template-columns:repeat(${props => props.repeat || '0'}, ${props => props.repeatwidth || '0'});
gap:${props => props.gap || '0'};
width:${props => props.width || '100%'};
height:${props => props.height || '100%'};
margin:${props => props.margin || '0'};
padding:${props => props.padding || '0'};
${props => props.itemsborderright && css`
   &>* {
      border-right: 2px solid ${props => props.theme.colors.primary};
      padding-right:5px;
   }
   &>*:first-child {
      border-left: 2px solid ${props => props.theme.colors.primary};
      padding-left: 5px;
   }
`}
`

export const Grid = (props) => {
   return <StyledGrid {...props} />
}
