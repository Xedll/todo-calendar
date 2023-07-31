import React from 'react'
import styled from 'styled-components'
import { Title } from './Title'
import { Grid } from './Grid'
import { Flex } from './Flex'
import { Day } from './Day'

const StyledMonth = styled.div`
min-width:100%;
height:100%;
`


export const Month = ({ title, dbData, handleDayClick, days, ...props }) => {
   const dayList = []
   for (let i = 0; i < days; i++) {
      dayList.push(i + 1)
   }
   const handleDayClickViaMonth = (data) => {
      handleDayClick(data)
   }
   return (
      <StyledMonth>
         <Flex direction='column' align='center'>
            <Title margin='0 0 20px 0'>{title}</Title>
            <Grid repeat='7' repeatwidth='1fr' gap='20px' height="fit-content">
               {dayList.map((item, index) => {
                  return <Day handleDayClickViaMonth={handleDayClickViaMonth} month={title} dayData={dbData?.[index + 1] || null} num={item} key={index}></Day>
               })}
            </Grid>
         </Flex>
      </StyledMonth>
   )
}
