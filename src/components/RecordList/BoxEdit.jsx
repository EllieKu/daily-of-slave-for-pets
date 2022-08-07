import React from "react";
import styled from 'styled-components';
import Icon from '../common/IconList'

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; 
  background-color: rgb(0, 0, 0, .5);
  z-index: 2;
`

const Message = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 80%;
  height: 70%;
  margin: 74px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
`

const IconCloseWrapper = styled.div`
  position: absolute;
  width: 40px;
  top: -10px;
  right: -10px;
`

const Title = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: bolder;
  text-align: center;
`

const EventWrapper = styled.div`
  margin: 10px auto;
  width: 50px;
  text-align: center;
  font-size: 20px;
`

const EventText = styled.span`
  margin-top: 6px;
`

const DateWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const Span = styled.span`
  font-size: 14px;
  margin-right  6px;
`

const Note = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  border-radius: 10px;
  border-style: hidden;
`

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: calc(100% - 40px);
  text-align: center;
`

const Button = styled.button`
  padding: 8px 24px;
  background-color: #f94c66;
  margin: 0 10px;
  color: #fff;
  border-radius: 116px;
  border: unset;
`

class BoxEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      iconName: '',
      time: '',
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  componentDidMount() {
    this.setState((state, props) => ({
      ...props.event
    }))
  }

  handleClose() {
    this.props.close()
  }
  
  handleSave() {
    this.props.save(this.state)
    this.handleClose() 
  }

  handleDelete() {
    this.props.delete(this.state)
    this.handleClose()
  }

  handleDateChange(event) {
    this.setState({
      time: event.target.value
    })
  }

  render() {
    const {
      name,
      iconName,
      time
    } = this.state

    return (
      <Cover>
        <Message>
          <Title>修改記事</Title>
          <IconCloseWrapper onPointerDown={this.handleClose}>
            <Icon name="circleXmark" />
          </IconCloseWrapper>
          <EventWrapper>
            <Icon name={iconName} />
            <EventText>{name}</EventText>
          </EventWrapper>
          <DateWrapper>
            <Span>日期: </Span>
            <input
              type="date"
              value={time}
              onInput={this.handleDateChange}></input>
          </DateWrapper>
          <Note
            rows="5"
            placeholder="備註">
          </Note>
          <ButtonWrapper>
            <Button
              onPointerDown={this.handleDelete}>刪除</Button>
            <Button
              onPointerDown={this.handleSave}>保存</Button>
          </ButtonWrapper>
        </Message>
      </Cover>
    )
  }
}

export default BoxEdit