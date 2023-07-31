import isPropValid from '@emotion/is-prop-valid';
import React, { useEffect, useRef, useState } from "react"
import styled, { StyleSheetManager } from 'styled-components'
import { Content } from "./components/Content"
import { Flex } from "./components/Flex"
import { Slider } from "./components/Slider"
import { Month } from "./components/Month"
import { ButtonSliderList } from "./components/ButtonSliderList"
import { Button } from "./components/Button"
import { PopUp } from "./components/PopUp"
import { Title } from "./components/Title"
import { Subtitle } from "./components/Subtitle"
import { Grid } from "./components/Grid"
import { CustomText } from "./components/CustomText"
import { Scrollable } from "./components/Scrollable"
import { Close } from "./components/Close"
import { Item } from "./components/Item"
import { Input } from "./components/Input"
import { Select } from "./components/Select"
import { Delete } from './components/Delete';
import { CreateForm } from './components/CreateForm';
import { DayInfo } from './components/DayInfo';

const StyledApp = styled.div`
   height:100%;
   width:100%;
   background: ${props => props.theme.colors.background};
   color:${props => props.theme.colors.text};
   position:relative;
`
const Wrapper = styled.div`
   width:100%;
   height:100svh;
   display:flex;
   justify-content:center;
   align-items: center;
`

function App() {

   const calendar = [{ name: 'January', days: 31 }, { name: 'February', days: 28 }, { name: 'March', days: 31 }, { name: 'April', days: 30 }, { name: 'May', days: 31 }, { name: 'June', days: 30 }, { name: 'July', days: 31 }, { name: 'August', days: 31 }, { name: 'September', days: 30 }, { name: 'October', days: 31 }, { name: 'November', days: 30 }, { name: 'December', days: 31 }]
   const calendarDays = { 'January': 31, 'February': 28, 'March': 31, 'April': 30, 'May': 31, 'June': 30, 'July': 31, 'August': 31, 'September': 30, 'October': 31, 'November': 30, 'December': 31 }
   const [sliderOffset, setSliderOffset] = useState(0)
   const [currentDay, setCurrentDay] = useState({ num: '', month: '', showPopUp: false, notes: [] })
   const [inputData, setInputData] = useState({ month: 'January', day: '1', text: '', from: '0', to: '0' })
   const [dbData, setDbData] = useState(null)
   const [updateData, setUpdateData] = useState(0)
   const [showCreate, setShowCreate] = useState(0)
   const [swap, setSwap] = useState(1)
   const [currentNote, setCurrentNote] = useState({ text: '', from: 0, to: 0, id: 0 })

   const handlePrevButtonSliderClick = () => {
      if (sliderOffset + 920 > 0) {
         setSliderOffset((900 * 11 + 20 * 11) * -1)
      } else {
         setSliderOffset(sliderOffset + 920)
      }
   }
   const handleNextButtonSliderClick = () => {
      if (sliderOffset - 920 < (900 * 12 + 20 * 11) * -1) {
         setSliderOffset(0)
      } else {
         setSliderOffset(sliderOffset - 920)
      }
   }
   const handleDayClick = (data) => {
      setCurrentDay({ num: data.num, month: data.month, showPopUp: true, notes: data.notes })
   }

   const handleShowPopUpClick = () => {
      if (currentDay.showPopUp) {
         setCurrentDay({
            ...currentDay,
            showPopUp: false,
         })
      }
   }

   const handleShowCreateClick = (gonnaShow) => {
      setShowCreate(!gonnaShow)
   }

   const handleSwapClick = () => {
      setSwap(!swap)
   }

   const handleDeleteNoteClick = (data) => {
      if (data) {
         fetch(`/api?type=del&id=${data.id}&month=${data.month}&day=${data.day}`)
            .then(() => {
               setUpdateData(Math.random())
               setCurrentDay({
                  ...currentDay,
                  showPopUp: false
               })
            })
      }
   }

   useEffect(() => {
      fetch('/api?type=get')
         .then(res => res.json())
         .then(data => {
            setDbData(data)
         })
   }, [updateData])
   return (
      <StyleSheetManager shouldForwardProp={isPropValid}>
         <Wrapper>
            <StyledApp>
               <PopUp shown={currentDay.showPopUp}>
                  <Close onClick={() => {
                     setCurrentNote({ text: '', from: 0, to: 0, id: 0 })
                     if (!swap) {
                        let noteIndex = 0
                        currentDay.notes.map((item, index) => {
                           if (item.id == currentNote.id) {
                              noteIndex = index
                           }
                        })
                        let currentDayNotes = [...currentDay.notes]
                        currentDayNotes[noteIndex].text = currentNote.text
                        currentDayNotes[noteIndex].from = currentNote.from
                        currentDayNotes[noteIndex].to = currentNote.to
                        fetch(`/api?type=edit&month=${currentDay.month}&day=${currentDay.num}&index=${noteIndex}&text=${currentNote.text}&from=${currentNote.from}&to=${currentNote.to}`)
                           .then(() => {
                              setUpdateData(Math.random())
                           })
                     }
                     setSwap(1)
                     handleShowPopUpClick()
                  }} />
                  <Flex>
                     <Flex direction="column" width="30%" align="center">
                        <Title margin='60px 0 50px 0'>{currentDay.month}</Title>
                        <Subtitle>{currentDay.num}</Subtitle>
                     </Flex>
                     <Flex overflowHide>
                        <Flex position='absolute' hide show={swap}>
                           <Slider width='100%'>
                              <Scrollable width='fit-content' height='100%' margin="0 30px" >
                                 <Grid gap='20px' padding="50px 0" height='fit-content'>
                                    <Grid repeat='23' itemsborderright height='fit-content' repeatwidth='100px'>
                                       <CustomText margin='0 0 10px 0'>00:00</CustomText>
                                       <CustomText>01:00</CustomText>
                                       <CustomText>02:00</CustomText>
                                       <CustomText>03:00</CustomText>
                                       <CustomText>04:00</CustomText>
                                       <CustomText>05:00</CustomText>
                                       <CustomText>06:00</CustomText>
                                       <CustomText>07:00</CustomText>
                                       <CustomText>08:00</CustomText>
                                       <CustomText>09:00</CustomText>
                                       <CustomText>10:00</CustomText>
                                       <CustomText>11:00</CustomText>
                                       <CustomText>12:00</CustomText>
                                       <CustomText>13:00</CustomText>
                                       <CustomText>14:00</CustomText>
                                       <CustomText>15:00</CustomText>
                                       <CustomText>16:00</CustomText>
                                       <CustomText>17:00</CustomText>
                                       <CustomText>18:00</CustomText>
                                       <CustomText>19:00</CustomText>
                                       <CustomText>20:00</CustomText>
                                       <CustomText>21:00</CustomText>
                                       <CustomText>23:00</CustomText>
                                    </Grid>
                                    {currentDay.notes.map((item, index) => {
                                       return (
                                          <Grid key={index} repeat='23' itemsborderright height='fit-content' repeatwidth='100px'>
                                             <Item onClick={() => {
                                                setCurrentNote({ text: item.text, from: item.from, to: item.to, id: item.id })
                                                handleSwapClick()
                                             }} from={Number(item.from) + 1} to={Number(item.to) + 1} id={item.id}>
                                                <Flex align='center' justify='space-between'>
                                                   <Flex scroll width='80%' height='100%' padding='0 0 3px 0'>
                                                      {item.text}
                                                   </Flex>
                                                   <Delete
                                                      onClick={() => {
                                                         handleDeleteNoteClick({ id: item.id, month: currentDay.month, day: currentDay.num })
                                                      }}
                                                   />
                                                </Flex>
                                             </Item>
                                          </Grid>
                                       )
                                    })}
                                 </Grid>
                              </Scrollable>
                           </Slider>
                        </Flex>
                        <Flex position='absolute' hide show={!swap} padding='50px 30px'>
                           <DayInfo>
                              <CustomText>Edit text: </CustomText>
                              <Input value={currentNote.text}
                                 onInput={(e) => {
                                    setCurrentNote({
                                       ...currentNote,
                                       text: e.target.value
                                    })
                                 }}
                              ></Input>
                              <CustomText>Edit 'from' time: </CustomText>
                              <Input value={currentNote.from}
                                 onInput={(e) => {
                                    setCurrentNote({
                                       ...currentNote,
                                       from: e.target.value
                                    })
                                 }}
                                 type='number'
                                 min='0'
                                 max='23'></Input>
                              <CustomText>Edit 'to' time: </CustomText>
                              <Input value={currentNote.to}
                                 onInput={(e) => {
                                    setCurrentNote({
                                       ...currentNote,
                                       to: e.target.value
                                    })
                                 }}
                                 type='number'
                                 min='0'
                                 max='23'></Input>
                              <Button
                                 onClick={() => {
                                    setCurrentNote({ text: '', from: 0, to: 0, id: 0 })
                                    let noteIndex = 0
                                    currentDay.notes.map((item, index) => {
                                       if (item.id == currentNote.id) {
                                          noteIndex = index
                                       }
                                    })
                                    let currentDayNotes = [...currentDay.notes]
                                    currentDayNotes[noteIndex].text = currentNote.text
                                    currentDayNotes[noteIndex].from = currentNote.from
                                    currentDayNotes[noteIndex].to = currentNote.to
                                    handleSwapClick()
                                    fetch(`/api?type=edit&month=${currentDay.month}&day=${currentDay.num}&index=${noteIndex}&text=${currentNote.text}&from=${currentNote.from}&to=${currentNote.to}`)
                                       .then(() => {
                                          setUpdateData(Math.random())
                                       })
                                 }}
                              >Confirm</Button>
                           </DayInfo>
                        </Flex>
                     </Flex>
                  </Flex>
               </PopUp>
               <CreateForm
                  shown={showCreate}
               >
                  <Flex direction='column' padding='25px'>
                     <Flex margin='0 0 15px 0' direction='column'>
                        <CustomText margin='0 0 10px 0'>Select month:</CustomText>
                        <Select
                           onInput={(e) => {
                              setInputData({
                                 ...inputData,
                                 month: e.target.value
                              })
                           }}
                           value={`${inputData.month}`}
                           name='month'>
                           <option value="January">January</option>
                           <option value="February">February</option>
                           <option value="March">March</option>
                           <option value="April">April</option>
                           <option value="May">May</option>
                           <option value="June">June</option>
                           <option value="July">July</option>
                           <option value="August">August</option>
                           <option value="September">September</option>
                           <option value="October">October</option>
                           <option value="November">November</option>
                           <option value="December">December</option>
                        </Select>
                     </Flex>
                     <Flex margin='0 0 15px 0' direction='column'>
                        <CustomText margin='0 0 10px 0'>Select day:</CustomText>
                        <Input
                           type='number'
                           onInput={(e) => {
                              setInputData({
                                 ...inputData,
                                 day: e.target.value
                              })
                           }}
                           min='1'
                           max={calendarDays[inputData.month]}
                           value={`${inputData.day}`}
                           name='day' placeholder='Day'>
                        </Input>
                     </Flex>
                     <Flex margin='0 0 15px 0' direction='column'>
                        <CustomText margin='0 0 10px 0'>Select text:</CustomText>
                        <Input
                           onInput={(e) => {
                              setInputData({
                                 ...inputData,
                                 text: e.target.value
                              })
                           }}
                           value={`${inputData.text}`}
                           name='text' placeholder='Text'></Input>
                     </Flex>
                     <Flex margin='0 0 15px 0' direction='column'>
                        <CustomText margin='0 0 10px 0'>Select from:</CustomText>
                        <Input
                           onInput={(e) => {
                              setInputData({
                                 ...inputData,
                                 from: e.target.value
                              })
                           }}
                           value={`${inputData.from}`}
                           type='number'
                           min='0'
                           max='23'
                           name='from' placeholder='From'></Input>
                     </Flex>
                     <Flex margin='0 0 15px 0' direction='column'>
                        <CustomText margin='0 0 10px 0'>Select to:</CustomText>
                        <Input
                           onInput={(e) => {
                              setInputData({
                                 ...inputData,
                                 to: e.target.value
                              })
                           }}
                           value={`${inputData.to}`}
                           type='number'
                           min='0'
                           max='23'
                           name='to' placeholder='To'></Input>
                     </Flex>
                     <Button
                        onClick={() => {
                           handleShowCreateClick(showCreate)
                           if (inputData.text) {
                              fetch(`/api?month=${inputData.month}&day=${inputData.day}&text=${inputData.text}&from=${inputData.from}&to=${inputData.to}&type=post`)
                                 .then(() => {
                                    setInputData({ month: 'January', day: '1', text: '', from: '0', to: '0' })
                                    setUpdateData(Math.random())
                                 })
                           }
                        }}
                     >Submit</Button>
                  </Flex>
               </CreateForm>
               <Flex align='center' justify='center'>
                  <Content hide={currentDay.showPopUp || showCreate}>
                     <Flex direction='column' >
                        <Button width='fit-content' alignself='flex-end' margin='0px 0 10px 0'
                           onClick={() => {
                              handleShowCreateClick(showCreate)
                           }}
                        >Create Note</Button>
                        <Slider width="100%" height='100%'>
                           <Flex height='fit-content' justify='space-between' margin='0 0 20px 0'>
                              <Button width='fit-content' onClick={() => {
                                 handlePrevButtonSliderClick()
                              }} justifyself='flex-end'>Prev</Button>
                              <Button width='fit-content' onClick={() => {
                                 handleNextButtonSliderClick()
                              }} justifyself=''>Next</Button>
                           </Flex>
                           <ButtonSliderList left={`${sliderOffset}px`} width='100%' height='100%'>
                              <Flex colgap='20px'>
                                 {calendar.map((item, index) => {
                                    return <Month handleDayClick={handleDayClick} key={index} title={item.name} dbData={dbData && dbData[item.name]} days={item.days} />
                                 })}
                              </Flex>
                           </ButtonSliderList>
                        </Slider>
                     </Flex>
                  </Content>
               </Flex>
            </StyledApp >
         </Wrapper >
      </StyleSheetManager >
   )
}

export default App