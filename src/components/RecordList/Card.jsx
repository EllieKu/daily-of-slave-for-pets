import React from "react";
import styled from 'styled-components'
import eventIconList from './EventAndIcon'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  margin-block: 10px;
  background-color: #fff;
  font-size: 12px;
`

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 5px;
  font-size: 16px;
`

const EventIcon = styled.span`
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 1px;
  margin-right: 2px;
  background-color: #fff;
  border: 1px solid #f1eee9;
  border-radius: 12px;
`

const EventWrapper = styled.span`
  padding-right: 12px;
  background-color: #f1eee9;
  border-radius: 12px;
  line-height: 24px;
  font-weight: bold;
`

const Edit = styled.button`
  padding: 1px 12px;
  background-color: #f94c66;
  color: #fff;
  border-radius: 20px;
  border: unset;
  line-height: 24px;
`

const Span = styled.span`
  margin-block: 5px;
`

// const eventIconList = [
//   {
//     name: '洗澡',
//     icon: '🛁',
//   },
//   {
//     name: '內驅',
//     icon: '💊',
//   },
//   {
//     name: '外驅',
//     icon: '🧴',
//   },
//   {
//     name: '剪毛',
//     icon: '✂️',
//   }
// ]

function Event(props) {
  const { name } = props
  const eventInside = eventIconList.find(element => element.name === name)

  return (
    <EventWrapper>
      <EventIcon
        role="img"
        aria-label="eventIcon">
          {eventInside.icon}
      </EventIcon>
      <span>{eventInside.name}</span>
    </EventWrapper>
  )
}

function Card(props) {

  const { event } = props
  function handleEdit() {
    props.displayBoxEdit(true)
  }

  return (
    <StyledCard>
      <FirstLine>
        <Event name={event.name}/>
        <Edit
          onPointerDown={handleEdit}
          aria-label="edit">
            編輯
        </Edit>
      </FirstLine>
      <Span>{event.time}</Span>
      { event.note.length > 0 &&
        <Span>{event.note}</Span>
      }
    </StyledCard>
  )
}

export default Card