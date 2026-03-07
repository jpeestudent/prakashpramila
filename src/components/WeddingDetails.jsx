import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import KolamCorners from './KolamCorners';
import './WeddingDetails.css';

const EventCard = ({ title, date, time, location, description, mapLink, showMap }) => (
  <div className="event-card">
    <h3>{title}</h3>

    <div className="event-info">
      <div className="info-item">
        <Calendar size={16} />
        <span>{date}</span>
      </div>

      <div className="info-item">
        <Clock size={16} />
        <span>{time}</span>
      </div>

      <div className="info-item">
        <MapPin size={16} />
        <span>{location}</span>
      </div>
    </div>

    <p className="description">{description}</p>

    {showMap && (
      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn map-btn"
      >
        Get Directions
      </a>
    )}
  </div>
);

const WeddingDetails = () => {
  return (
    <section className="wedding-details section-padding" id="events">
      <KolamCorners size={80} opacity={0.35} offset={12} />

      <div className="container">
        <h2 className="section-title">Wedding Events</h2>

        <div className="events-grid">

          {/* Muhurtham */}
          <EventCard
            title="Muhurtham"
            date="March 25, 2026 (Wednesday)"
            time="9:00 AM - 10:30 AM"
            location="IMA Mahal, Tiruchendur"
            description="The auspicious moment where we tie the knot. Your presence is our greatest blessing."
            showMap={false}
          />

          {/* Reception */}
          <EventCard
            title="Reception"
            date="March 25, 2026 (Wednesday)"
            time="6:00 PM onwards"
            location="Thangabharathi Mandabam, Spicnagar, Thoothukudi"
            description="Join us for the evening reception and celebrate our new beginning with dinner and joy."
            mapLink="https://maps.app.goo.gl/faATRWzAZKXBTS636"
            showMap={true}
          />

        </div>

        {/* Map only for Reception */}
        <div className="map-container">
          <iframe
            src="https://maps.app.goo.gl/faATRWzAZKXBTS636"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Reception Location Map"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default WeddingDetails;