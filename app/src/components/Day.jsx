// @ts-nocheck
import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from './Flex'
import { Grid } from './Grid'
import { Dot } from './Dot'
import { CustomText } from './CustomText'

const StyledDay = styled.div`
color:${props => props.color || props.theme.colors.text};
border-bottom: 3px solid ${props => props.bordercolor || props.theme.colors.primary};
width:100%;
min-height:60px;
height:100%;
user-select:none;
    cursor: pointer;
font-family: 'Metrophobic', sans-serif;
`

export const Day = ({ children, num, month, dayData, handleDayClickViaMonth, ...props }) => {
   const notes = dayData ? dayData : null
   let dots = []
   if (notes != null) {
      notes.map((item, index) => {
         dots.push(<Dot key={index} scale='10px' />)
      })
   }

   const handleClick = (data) => {
      handleDayClickViaMonth(data)
   }
   return (
      <StyledDay
         onClick={() => {
            handleClick({ num, month, notes })
         }}
         {...props}>
         <Flex align='center' justify='space-between' padding='0 10px'>
            {num}
            <Grid repeat='4' width='80%' height='fit-content' repeatwidth='1fr' gap='5px' margin='0 0 0 5px'>
               {dots}
            </Grid>
         </Flex>
      </StyledDay >
   )
}
