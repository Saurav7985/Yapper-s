import React, { useState, useEffect } from 'react';
import MomentCard from '../MomentCard/MomentCard';
import './CommunityMoments.css';
import { getMoments } from '../../services/api';

const CommunityMoments = () => {
  const [moments, setMoments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMoments = async () => {
      try {
        const response = await getMoments();
        if (response.success) {
          setMoments(response.data);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError('Unable to load moments. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchMoments();
  }, []);

  return (
    <section id="moments" className="community-moments-section">
      <div className="community-moments-container">
        
        <div className="community-moments-header">
          <div className="community-moments-badge">COMMUNITY MOMENTS</div>
          <h2 className="community-moments-title">Snapshots of happy friendships.</h2>
          <p className="community-moments-description">
            Real candid moments from our strolls, quests, and weekend conversations.
          </p>
        </div>

        <div className="community-moments-content">
          {loading ? (
            <p className="status-text">Loading moments...</p>
          ) : error ? (
            <p className="status-text error-text">{error}</p>
          ) : moments.length === 0 ? (
            <p className="status-text">No moments found.</p>
          ) : (
            <div className="community-moments-grid">
              {moments.map((moment) => (
                <MomentCard 
                  key={moment._id} 
                  moment={moment} 
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default CommunityMoments;
