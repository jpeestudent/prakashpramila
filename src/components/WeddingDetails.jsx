import React from "react";
import { MapPin, Calendar, Clock } from "lucide-react";
import KolamCorners from "./KolamCorners";
import "./WeddingDetails.css";

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
      <div style={{ marginTop: "12px" }}>
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn map-btn"
        >
          Get Directions
        </a>

        <a
          href="https://wa.me/918610442528?text=I%20will%20attend%20your%20wedding"
          target="_blank"
          rel="noopener noreferrer"
          className="btn map-btn"
          style={{ marginLeft: "10px", background: "#25D366", color: "#fff" }}
        >
          WhatsApp RSVP
        </a>
      </div>
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
            location="Thanga Bharathi Thirumana Mandapam, Spicnagar, Thoothukudi"
            description="Join us for the evening reception and celebrate our new beginning with dinner and joy."
            mapLink="https://maps.google.com/?q=Thanga+Bharathi+Thirumana+Mandapam"
            showMap={true}
          />

        </div>

        {/* Google Map */}
        <div className="map-container" style={{ marginTop: "40px" }}>
          <iframe
            src="https://www.google.com/maps?q=Thanga+Bharathi+Thirumana+Mandapam&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            title="Reception Location Map"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default WeddingDetails;