import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const StyledScrollableSliderList = styled.div`
display:flex;
flex-direction:row;
height:${props => props.height || 0};
margin:${props => props.margin || 0};
cursor: pointer;
overflow-x: scroll;
scrollbar-width:none;
&::-webkit-scrollbar{
   width:0;
   height:0;
   background: transparent;
};
user-select:none;
z-index:${props => props.index || 1};
`

export const Scrollable = (props) => {

   let ref = useRef()
   const [state, setState] = useState({
      isScrolling: false,
      clientX: 0,
      scrollX: 0,
   })

   useEffect(() => {
      const el = ref.current
      if (el) {
         const onWheel = (e) => {
            e.preventDefault()
            el.scrollTo({ left: el.scrollLeft + e.deltaY * 2, behavior: 'smooth' })
         }
         el.addEventListener('wheel', onWheel)
         return () => el.removeEventListener('wheel', onWheel)
      }


   }, [])


   const onMouseDown = (e) => {
      if (ref && ref.current && !ref.current.contains(e.target)) {
         return
      }
      e.preventDefault()
      setState({
         ...state,
         isScrolling: true,
         clientX: e.clientX
      })
   }


   const onMouseUp = (e) => {
      if (ref && ref.current && !ref.current.contains(e.target)) {
         return
      }
      e.preventDefault()
      setState({
         ...state,
         isScrolling: false
      })
   }

   const onMouseLeave = (e) => {
      e.preventDefault()
      setState({
         ...state,
         isScrolling: false
      })
   }

   const onMouseMove = (e) => {
      if (ref && ref.current && !ref.current.contains(e.target)) {
         return
      }
      e.preventDefault()
      const { clientX, scrollX, isScrolling } = state
      if (isScrolling) {
         ref.current.scrollLeft = scrollX - e.clientX + clientX
         if (scrollX - e.clientX + clientX > 1700) {
            setState({ ...state, scrollX: 1700, clientX: e.clientX })
         } else if (scrollX - e.clientX + clientX < 0) {
            setState({ ...state, scrollX: 0, clientX: e.clientX })
         }
         else {
            setState({ ...state, scrollX: scrollX - e.clientX + clientX, clientX: e.clientX })
         }
      }
   }
   useEffect(() => {
      document.addEventListener('mousedown', onMouseDown)
      document.addEventListener('mouseup', onMouseUp)
      document.addEventListener('mousemove', onMouseMove)
      return () => {
         document.removeEventListener('mousedown', onMouseDown)
         document.removeEventListener('mouseup', onMouseUp)
         document.removeEventListener('mousemove', onMouseMove)
      }
   })

   return <StyledScrollableSliderList
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      ref={ref}
      {...props}
   />
}
