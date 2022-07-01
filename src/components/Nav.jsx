import React from "react";
import './Nav.css'
import icon_arrow_left from '../images/arrow-left-solid.svg';

function Nav(props) {
  function back() {
    window.history.back()
  }

  return (
    <nav>
      <img src={icon_arrow_left} alt="icon_arrow_left" onPointerDown={back} />
      <div className="right">
        {props.children}
      </div>
    </nav>
  )
}

export default Nav