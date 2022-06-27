import React from "react";
import icon_scroll from '../../images/icons8-scroll.svg';
import icon_clock from '../../images/icons8-clock.svg'
import image_jake from '../../images/icons8-jake-96.png'
import './Card.css'

function Control() {
  const itemList = [
    {
      name: '紀錄',
      icon: icon_scroll,
      alt: 'icon_scroll'
    },
    {
      name: '提醒',
      icon: icon_clock,
      alt: 'icon_clock'
    }
  ]

  return (
    <div className="control">
      {
        itemList.map(item => (
        <div className="control-item" key={item.alt}>
          <img src={item.icon} alt={item.alt} />
          <span>{item.name}</span>
        </div>))
      }
    </div>
  )
}

function Card(props) {
  const { pet } = props

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
            <span role="img" aria-label="female">♂️</span>
            <span role="img" aria-label="male">♀️</span>
            <span>{pet.age.year}歲{pet.age.month}個月</span>
          </div>
        </div>
      </div>
      <Control />
    </div>
  )
}

export default Card