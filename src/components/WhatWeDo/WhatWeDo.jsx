import React from 'react';
import './WhatWeDo.css';
import EventCard from '../EventCard/EventCard';

const WhatWeDo = () => {
  const cardsData = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ), // Using placeholder icon (path) representing outdoor/walking
      title: "Morning & Sunset Walks",
      description: "Scenic nature trails, forest paths, and peaceful open horizons along Panna Road with unscripted chats. Walking breaks the ice naturally.",
      schedule: "EVERY SUNDAY MORNING"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 12h4m-2-2v4m10-2h.01M16 10h.01" />
        </svg>
      ), // Controller icon
      title: "Lawn Games & Icebreakers",
      description: "Giant Jenga, Connect 4, frisbee toss, and hilarious team trivia on open green lawns. Zero performance pressure—just laughter and banter.",
      schedule: "BI-WEEKLY SATURDAYS"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      ), // Coffee cup icon
      title: "Chai & Cafe Evenings",
      description: "Fairy lights, cozy corners, warm masala chai, and honest conversations on life, creative projects, books, and dreams with newfound friends.",
      schedule: "FRIDAY ACOUSTIC EVENINGS"
    }
  ];

  return (
    <section id="about" className="what-we-do-section">
      <div className="what-we-do-container">
        
        <div className="what-we-do-header">
          <div className="what-we-do-badge">WHAT WE DO</div>
          <h2 className="what-we-do-title">Simple weekends, real connections.</h2>
          <p className="what-we-do-description">
            No forced networking or awkward small talk. Just lighthearted outdoor fun and warm conversations in Chhatarpur.
          </p>
        </div>

        <div className="what-we-do-grid">
          {cardsData.map((card, index) => (
            <EventCard 
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              schedule={card.schedule}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
