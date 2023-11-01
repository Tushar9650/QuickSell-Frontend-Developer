import React from "react";
import { MdIncompleteCircle, MdOutlineHourglassEmpty, MdSignalCellularAlt2Bar } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaRegCircle } from "react-icons/fa";
import { AiFillSignal, AiFillExclamationCircle } from "react-icons/ai";
import { FaSignal } from "react-icons/fa";

const TitleIcon = (props) => {
    const title = props.title;
    let Icon;
    if (title === 'Todo')
        Icon = <FaRegCircle style={{ color: 'grey' }} />;
    else if (title === 'In progress')
        Icon = <MdIncompleteCircle style={{ color: 'green' }} />
    else if (title === 'Backlog')
        Icon = <MdOutlineHourglassEmpty style={{ color: 'red' }} />
    else if (title === 'No priority')
        Icon = <BiDotsHorizontalRounded style={{ color: 'grey' }} />
    else if (title === 'Low')
        Icon = <MdSignalCellularAlt2Bar style={{ color: 'grey' }} />
    else if (title === 'Medium')
        Icon = <AiFillSignal style={{ color: 'grey' }} />
    else if (title === 'High')
        Icon = <FaSignal style={{ color: 'grey' }} />
    else if (title === 'Urgent')
        Icon = <AiFillExclamationCircle style={{ color: 'orange' }} />
    // console.log(title)
    return (
        <>

            {Icon}
        </>
    )
}

export default TitleIcon;