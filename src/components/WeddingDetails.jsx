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
            mapLink="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.514361656841!2d78.1188435!3d8.737577600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ee071e5b7be3%3A0x238b042f9cc75acc!2sThanga%20Bharathi%20Thirumana%20Mandapam!5e0!3m2!1sen!2sin!4v1772924497300!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"
            showMap={true}
          />

        </div>

        {/* Map only for Reception */}
        <div className="map-container">
          <iframe
            src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.514361656841!2d78.1188435!3d8.737577600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ee071e5b7be3%3A0x238b042f9cc75acc!2sThanga%20Bharathi%20Thirumana%20Mandapam!5e0!3m2!1sen!2sin!4v1772924497300!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"
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