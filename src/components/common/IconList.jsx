import React from "react";
import { ReactComponent as IconBath } from '../../images/bath-solid.svg';
import { ReactComponent as IconHospital } from '../../images/hospital-regular.svg';
import { ReactComponent as IconPills } from '../../images/pills-solid.svg';

function Icon(props) {
  const { name } = props;

  let icon = null;
  switch (name) {
    case 'pills':
      icon = <IconPills />
      break;
    case 'bath':
      icon = <IconBath />
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