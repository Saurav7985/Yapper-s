import React from 'react';
import './EventCard.css';

const EventCard = ({ icon, title, description, schedule }) => {
  return (
    <div className="event-card">
      <div className="event-card-icon">
        {icon}
      </div>
      <h3 className="event-card-title">{title}</h3>
      <p className="event-card-description">{description}</p>
      <div className="event-card-divider"></div>
      <div className="event-card-schedule">{schedule}</div>
    </div>
  );
};

export default EventCard;
