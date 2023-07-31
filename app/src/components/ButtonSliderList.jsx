// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

const StyledButtonSliderList = styled.div`
   position:absolute;
   width:${props => props.width || 0};
   height:${props => props.height || 0};
   top:0;
   left:${props => props.left || 0};
   transition: all .5s;
`

export const ButtonSliderList = (props) => {
   return <StyledButtonSliderList {...props} />
}
