import React from 'react'
import styled, { css } from 'styled-components'

const StyledContent = styled.div`
width:900px;
transition:visibility 0s, opacity .5s linear;
height:900px;
${props => props.hide && css`
   visibility:hidden;
   opacity:0;
`};
`
export const Content = (props) => {
   return <StyledContent {...props} />
}
