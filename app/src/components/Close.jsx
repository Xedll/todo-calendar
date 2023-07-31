import React from 'react'
import styled from 'styled-components'

const StyledClose = styled.button`
display:block;
border:none;
    width:${props => props.width || '40px'};
    height:${props => props.height || '40px'};
    background-color:inherit;
    position:absolute;
    right:${props => props.right || '5px'};
    top:${props => props.top || '5px'};
    z-index:1001;
    cursor: pointer;
&:before,&:after{
    content:'';
    position:absolute;
    width:${props => props.linewidth || '36px'};
    height:3px;
    background-color:${props => props.color || props.theme.colors.primary};
    border-radius:2px;
    top:${props => props.linetop || '16px'};
};
&:before{
    -webkit-transform:rotate(45deg);
    -moz-transform:rotate(45deg);
    transform:rotate(45deg);
    left: ${props => props.lineleft || "2px"};
};
&:after{
    -webkit-transform:rotate(-45deg);
    -moz-transform:rotate(-45deg);
    transform:rotate(-45deg);
    right: ${props => props.lineright || "2px"};
};

`

export const Close = (props) => {
   return (
      <StyledClose {...props} />
   )
}
