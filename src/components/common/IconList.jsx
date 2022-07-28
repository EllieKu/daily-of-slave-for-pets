import React from "react";
import { ReactComponent as IconBath } from '../../images/bath-solid.svg';
import { ReactComponent as IconHospital } from '../../images/hospital-regular.svg';
import { ReactComponent as IconPills } from '../../images/pills-solid.svg';
import { ReactComponent as IconArrowLeft } from '../../images/arrow-left-solid.svg';
import { ReactComponent as IconCircleXmark } from '../../images/circle-xmark-solid.svg';
import { ReactComponent as IconPlus } from '../../images/plus-solid.svg';
import { ReactComponent as IconFilter } from '../../images/filter-solid.svg';
import { ReactComponent as IconScroll } from '../../images/icons8-scroll.svg';
import { ReactComponent as IconClock } from '../../images/icons8-clock.svg';

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
    case 'arrowLeft':
        icon = <IconArrowLeft />
        break;
    case 'circleXmark':
      icon = <IconCircleXmark />
      break;
    case 'plus':
      icon = <IconPlus />
      break;
    case 'filter':
      icon = <IconFilter />
      break;
    case 'scroll':
      icon = <IconScroll />
      break;
    case 'clock':
      icon = <IconClock />
      break;
    default:
      console.log('icon missing')
  }

  return icon
}

export default Icon