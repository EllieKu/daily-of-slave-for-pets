import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image_jake from '../../images/icons8-jake-96.png'
import Icon from '../common/IconList'

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 64px;
  height: 85px;
`

const ProfileWrapper = styled.div`
  width: 90%;
  margin: auto;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
`

const ControlWrapper = styled.div`
  display: flex;
`

function Control() {

  return (
    <ControlWrapper>
      <Item key="recordList">
        <Icon name="scroll" />
        <Link to='/record-list'>紀錄</Link>
      </Item>
      <Item key="reminder">
        <Icon name="clock" />
        <Link to='/reminder'>提醒</Link>
      </Item>
    </ControlWrapper>
  )
}

function Profile(props) {
  const { pet } = props

  return (
    <ProfileWrapper>
      <ControlWrapper>
        <img className="avatar" src={image_jake} alt="avatar"/>
        <div className="brief">
          <div className="top">
            <span>{pet.name}</span>
            <span>{pet.category}</span>
          </div>
          <div className="bottom">
            {
              pet.gender === 'male' ? 
              <span role="img" aria-label="male">♀️</span> : 
              <span role="img" aria-label="female">♂️</span>
            }
            <span>{pet.age}</span>
          </div>
        </div>
      </ControlWrapper>
      <Control />
    </ProfileWrapper>
  )
}

export default Profile