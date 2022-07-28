import React from "react";
import styled from "styled-components";
import Icon from './common/IconList'

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
`

const Right = styled.div`
  display: flex;
`
function Nav(props) {
  function back() {
    window.history.back()
  }

  return (
    <NavBar>
      <div onPointerDown={back} >
        <Icon name="arrowLeft"/>
      </div>
      <Right>
        {props.children}
      </Right>
    </NavBar>
  )
}

export default Nav