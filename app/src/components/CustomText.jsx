import React from 'react'
import styled from 'styled-components'

const StyledText = styled.div`
font-family: 'Metrophobic', sans-serif;
font-size:20px;
width:100%;
height:fit-content;
padding:0 10px;
margin:${props => props.margin || '0'};
`


export const CustomText = (props) => {
   return <StyledText {...props} />
}
