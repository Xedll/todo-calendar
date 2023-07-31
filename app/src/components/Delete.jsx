import React from 'react'
import styled from 'styled-components'

const StyledDelete = styled.button`
min-width:10px;
min-height:10px;
border: none;
padding:0;
background: ${props => props.theme.colors.background};
position:relative;
cursor:pointer;
&:before,&:after{
    content:'';
    position:absolute;
    width:15px;
    height:3px;
    background-color:${props => props.color || props.theme.colors.primary};
    border-radius:2px;
    top:40%;
};
&:before{
    -webkit-transform:rotate(45deg);
    -moz-transform:rotate(45deg);
    transform:rotate(45deg);
    left:-2px;
};
&:after{
    -webkit-transform:rotate(-45deg);
    -moz-transform:rotate(-45deg);
    transform:rotate(-45deg);
    right: -3px;
};

`

export const Delete = (props) => {
   return <StyledDelete {...props} />
}
