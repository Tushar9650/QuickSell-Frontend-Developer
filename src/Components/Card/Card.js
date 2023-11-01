import React from 'react';
import './Card.css';
import StatusIcon from '../StatusIcon/StatusIcon';
import { BsFillExclamationSquareFill } from 'react-icons/bs';

const Card = ({ id, title, tag, status ,first,last}) => {
  const userImageUrl = 'https://cdn-icons-png.flaticon.com/512/4715/4715329.png';

  const renderTags = () => {
    if (!tag || tag.length === 0) {
      return null;
    }

    return tag.map((elem, index) => (
      <div key={index} className="tags color-grey">
        <span>⬤</span> {elem}
      </div>
    ));
  };

  return (
    <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className='color-grey'>{id}</span>
        <div className="imageContainer relative ProfileName" style={{ width: "30px", height: "30px" }}>{first}{last}
          {/* <img
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            src={userImageUrl}
            alt="UserImage"
          /> */}
          <div className="showStatus1">
            <div className="showStatus"></div>
          </div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        <StatusIcon status={status} />
        <p style={{ display: 'inline', marginLeft: '4px' }}>{title}</p>
      </div>
      <div className="cardTags">
        <div className="tags color-grey">
          <BsFillExclamationSquareFill style={{ marginTop: '3px', color: '676565' }} />
        </div>
        {renderTags()}
      </div>
    </div>
  );
};

export default Card;
