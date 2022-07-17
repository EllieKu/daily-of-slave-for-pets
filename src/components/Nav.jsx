import React from "react";
import './Nav.css'
import { ReactComponent as IconArrowLeft } from '../images/arrow-left-solid.svg';

function Nav(props) {
  function back() {
    window.history.back()
  }

  return (
    <nav>
      <IconArrowLeft onPointerDown={back}/>
      <div className="right">
        {props.children}
      </div>
    </nav>
  )
}

export default Nav