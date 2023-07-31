import React from 'react'
import styled, { css } from 'styled-components'

const StyledSlider = styled.div`
width:${props => props.width || 0};
height:${props => props.height};
position:relative;
overflow:hidden;
`


export const Slider = (props) => {
   return <StyledSlider {...props} />
}
