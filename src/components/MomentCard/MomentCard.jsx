import React from 'react';
import './MomentCard.css';

const MomentCard = ({ moment }) => {
  return (
    <div className="moment-card">
      <img src={moment.image} alt={moment.title} className="moment-card-img" />
      <div className="moment-card-overlay">
        <div className="moment-card-category">{moment.category}</div>
        <h3 className="moment-card-title">{moment.title}</h3>
      </div>
    </div>
  );
};

export default MomentCard;
