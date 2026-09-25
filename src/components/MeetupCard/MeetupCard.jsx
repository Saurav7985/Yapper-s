import React from 'react';
import './MeetupCard.css';

const MeetupCard = ({ meetup }) => {
  return (
    <div className="meetup-card">
      <div className="meetup-card-image-wrapper">
        <img src={meetup.imageUrl} alt={meetup.title} className="meetup-card-image" />
        <div className="meetup-card-day">{meetup.day}</div>
        <div className="meetup-card-time">{meetup.time}</div>
      </div>
      
      <div className="meetup-card-content">
        <h3 className="meetup-card-title">{meetup.title}</h3>
        <p className="meetup-card-description">{meetup.description}</p>
        
        <div className="meetup-card-divider"></div>
        
        <div className="meetup-card-footer">
          <div className="meetup-card-location">
            <span className="location-icon">📍</span> {meetup.location}
          </div>
          <button className="meetup-card-btn">RSVP Spot</button>
        </div>
      </div>
    </div>
  );
};

export default MeetupCard;
