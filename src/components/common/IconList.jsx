import React from "react";
import styled from 'styled-components';
import { ReactComponent as Iconath } from '../../images/bath-solid.svg';
import { ReactComponent as IconHospital } from '../../images/hospital-regular.svg';
import { ReactComponent as IconPills } from '../../images/pills-solid.svg';

const IconEvent = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 6px;
`

function Icon(props) {
  const { name } = props;

  let icon = null;
  switch (name) {
    case 'pills':
      icon = <IconPills />
      break;
    case 'bath':
      icon = <Iconath />
      break;
    case 'hospital':
      icon = <IconHospital />
      break;
    default:
      console.log('icon missing')
  }

  return icon
}

export default Icon