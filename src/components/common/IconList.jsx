import React from "react";
import styled from 'styled-components';
import icon_scroll from '../../images/icons8-scroll.svg';
import icon_clock from '../../images/icons8-clock.svg';
import icon_bath from '../../images/bath-solid.svg';

const list = [
  {
    name: "scroll",
    item: icon_scroll
  },
  {
    name: 'remind',
    icon: icon_clock,
  },
  {
    name: 'bath',
    icon: icon_bath,
  }
]

const IconEvent = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 6px;
`

function Icon(props) {
  const { name } = props;
  const icon = list.find(item => item.name === name);

  return (
    <IconEvent src={icon.icon} alt={icon.icon} />
  )
}

export default Icon