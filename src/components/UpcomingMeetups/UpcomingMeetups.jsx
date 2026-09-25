import React, { useState, useEffect } from 'react';
import MeetupCard from '../MeetupCard/MeetupCard';
import './UpcomingMeetups.css';
import { getMeetups } from '../../services/api';

const UpcomingMeetups = () => {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMeetups = async () => {
      try {
        const response = await getMeetups();
        if (response.success) {
          setMeetups(response.data);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError('Unable to load meetups. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchMeetups();
  }, []);

  return (
    <section id="meetups" className="upcoming-meetups-section">
      <div className="upcoming-meetups-container">
        
        <div className="upcoming-meetups-header">
          <div className="upcoming-meetups-title-area">
            <div className="upcoming-meetups-badge">UPCOMING MEETUPS</div>
            <h2 className="upcoming-meetups-title">Save your spot for this week.</h2>
          </div>
          <div className="upcoming-meetups-desc-area">
            <p className="upcoming-meetups-description">
              Free entry, always welcoming. Drop in solo or bring a companion.
            </p>
          </div>
        </div>

        <div className="upcoming-meetups-content">
          {loading ? (
            <p className="status-text">Loading meetups...</p>
          ) : error ? (
            <p className="status-text error-text">{error}</p>
          ) : meetups.length === 0 ? (
            <p className="status-text">No upcoming meetups right now.</p>
          ) : (
            <div className="upcoming-meetups-grid">
              {meetups.map((meetup) => (
                <MeetupCard 
                  key={meetup._id} 
                  meetup={meetup} 
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default UpcomingMeetups;
