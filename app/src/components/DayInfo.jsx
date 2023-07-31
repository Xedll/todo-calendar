import React from 'react'
import styled from 'styled-components'

const StyledDayInfo = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
&>*:not(:last-child) {
   margin-bottom:10px;
}
`

export const DayInfo = (props) => {
   return <StyledDayInfo {...props} />
}
