import React from "react";
import { BsFillCheckCircleFill, BsHourglassSplit } from "react-icons/bs";
import { BiCollection } from "react-icons/bi";

const StatusIcon = (props) => {
  const { status } = props;
  let Icon;

  switch (status) {
    case 'Todo':
      Icon = <BsFillCheckCircleFill style={{ color: 'green' }} />;
      break;
    case 'In progress':
      Icon = <BsHourglassSplit style={{ color: '#AE445A' }} />;
      break;
    case 'Backlog':
      Icon = <BiCollection style={{ color: 'red' }} />;
      break;
    default:
      Icon = null;
  }

  return <>{Icon}</>;
};

export default StatusIcon;
