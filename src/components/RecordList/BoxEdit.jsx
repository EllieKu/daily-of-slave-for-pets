import React from "react";
import styled from 'styled-components';
import { ReactComponent as IconClose } from '../../images/circle-xmark-solid.svg';
import Icon from '../common/IconList'

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

const IconCloseWrapper = styled.div`
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

const EventWrapper = styled.div`
  margin: 10px auto;
  width: 50px;
  text-align: center;
`

const Span = styled.span`
  display: inline-block;
  margin-bottom: 10px;
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

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const Img = styled.div`
  width: 80px;
  height: 80px;
  border: 2px dotted #000;
  border-radius: 10px;
  background-image: url(${icon_plus});
  background-position: center;
  background-repeat: no-repeat;
`

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
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
    this.handleClose = this.handleClose.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleClose() {
    this.props.displayBoxEdit(false)
  }
  
  handleSave() {
    console.log('save')
    this.handleClose() 
  }

  handleDelete() {
    this.props.itemDelete()
    this.handleClose()
  }

  render() {
    return (
      <Cover>
        <Message>
          <Title>修改記事</Title>
          <IconCloseWrapper>
            <IconClose onPointerDown={this.handleClose} />
          </IconCloseWrapper>
          <EventWrapper>
            <Icon name="bath" />
            <Span>洗澡</Span>
          </EventWrapper>
          <Span>日期: 2022-07-01</Span>
          <br/>
          <Note
            rows="5"
            placeholder="備註">
          </Note>
          <ImgWrapper>
            <Img></Img>
            <Img></Img>
            <Img></Img>
          </ImgWrapper>
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