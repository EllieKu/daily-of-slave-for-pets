import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import icon_scroll from '../../images/icons8-scroll.svg';
import icon_clock from '../../images/icons8-clock.svg'
import image_jake from '../../images/icons8-jake-96.png'

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

const ControlWrapepr = styled.div`
  display: flex;
`

function Control() {
  const itemList = [
    {
      name: '紀錄',
      icon: icon_scroll,
      alt: 'icon_scroll',
      link: '/record-list'
    },
    
    {
      name: '提醒',
      icon: icon_clock,
      alt: 'icon_clock',
      link: '/reminder'
    }
  ]

  return (
    <ControlWrapepr>
      {
        itemList.map(item => (
        <Item key={item.alt}>
          <img src={item.icon} alt={item.alt} />
          <Link to={item.link}>{item.name}</Link>
        </Item>))
      }
    </ControlWrapepr>
  )
}

function Profile(props) {
  const { pet } = props
  const gender = pet.gender === 'male' ? 
    <span role="img" aria-label="male">♀️</span> : 
    <span role="img" aria-label="female">♂️</span>

  return (
    <ProfileWrapper>
      <ControlWrapepr>
        <img className="avatar" src={image_jake} alt="avatar"/>
        <div className="brief">
          <div className="top">
            <span>{pet.name}</span>
            <span>{pet.category}</span>
          </div>
          <div className="bottom">
            {gender}
            {/* <span role="img" aria-label="female">♂️</span>
            <span role="img" aria-label="male">♀️</span> */}
            <span>{pet.age.year}歲{pet.age.month}個月</span>
          </div>
        </div>
      </ControlWrapepr>
      <Control />
    </ProfileWrapper>
  )
}

export default Profile