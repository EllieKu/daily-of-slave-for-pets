import React from "react";
import styled from 'styled-components';
import Icon from '../common/IconList';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
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

const EventWrapper = styled.div`
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  padding: 4px;
  background-color: #fff;
  border: 1px solid #f1eee9;
  border-radius: 14px;
  line-height: 24px;
  font-weight: bold;
  z-index: 1;
`

const EventName = styled.span`
  background-color: #f1eee9;
  padding: 3px 6px 3px 24px;
  margin-left: -24px;
  line-height: 24px;
  border-radius: 14px;
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
  color: rgba(102,102,102);
`

function Event(props) {
  const { iconName, name } = props

  return (
    <EventWrapper>
      <IconWrapper>
        <Icon name={iconName} />
      </IconWrapper>
      <EventName>{name}</EventName>
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
        <Event name={event.name} iconName={event.iconName} />
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