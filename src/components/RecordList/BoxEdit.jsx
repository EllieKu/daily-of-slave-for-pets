import React from "react";
import styled from 'styled-components';
import icon_close from '../../images/circle-xmark-solid.svg';
import icon_bath from '../../images/bath-solid.svg';
import icon_amend from '../../images/pen-to-square-solid.svg';

const Cover = styled.div`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 73px); 
  background-color: rgb(0, 0, 0, .5)
`

const Message = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 80%;
  height: 80%;
  margin: 10% auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
`

const IconClose = styled.img`
  position: absolute;
  width: 40px;
  top: -10px;
  right: -10px;
`

const Title = styled.span`
  display: inline-block;
  font-size: 20px;
  text-align: center;
`

const IconEvent = styled.img`
  margin-bottom: 6px;
`

const EventWrapper = styled.div`
  margin: 10px auto;
  width: 50px;
  text-align: center;
`

const Span = styled.span`
  display: inline-block;
  margin-bottom: 20px;
`

const Note = styled.textarea`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: #f2ebe9;
  border-radius: 10px;
  border-style: hidden;
`
const ButtonWrapper = styled.div`
  text-align: center;
`

const Button = styled.button`
  padding: 6px 24px;
  background-color: #f94c66;
  color: #fff;
  border-radius: 116px;
  border: unset;
`

class BoxEdit extends React.Component {
  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.props.displayBoxEdit(false)
  }

  render() {
    return (
      <Cover>
        <Message>
          <Title>修改記事</Title>
          <IconClose
            src={icon_close}
            alt="icon_close"
            aria-label="close"
            onPointerDown={this.handleClose} />
          <EventWrapper>
            <IconEvent 
              src={icon_bath}
              alt="icon_bath"
              aria-label="icon_bath" />
            <Span>洗澡</Span>
          </EventWrapper>
          <Span>日期: 2022-07-01</Span>
          <br/>
          <Note
            rows="5">
          </Note>
          <ButtonWrapper>
            <Button>刪除</Button>
            <Button>保存</Button>
          </ButtonWrapper>
        </Message>
      </Cover>
    )
  }
}

export default BoxEdit