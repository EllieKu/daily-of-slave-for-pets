import React from "react";
import { Link } from "react-router-dom";
import icon_scroll from '../../images/icons8-scroll.svg';
import icon_clock from '../../images/icons8-clock.svg'
import image_jake from '../../images/icons8-jake-96.png'
import './Card.css'

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
    <div className="control">
      {
        itemList.map(item => (
        <div className="control-item" key={item.alt}>
          <img src={item.icon} alt={item.alt} />
          <Link to={item.link}>{item.name}</Link>
        </div>))
      }
    </div>
  )
}

function Card(props) {
  const { pet } = props
  const gender = pet.gender === 'male' ? 
    <span role="img" aria-label="male">♀️</span> : 
    <span role="img" aria-label="female">♂️</span>

  return (
    <div className="card">
      <div className="head">
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
      </div>
      <Control />
    </div>
  )
}

export default Card