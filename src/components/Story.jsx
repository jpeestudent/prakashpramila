import React from 'react';
import KolamCorners from './KolamCorners';
import './Story.css';

const Story = () => {
  return (
    <section className="story section-padding">
      <KolamCorners size={80} opacity={0.35} offset={12} />
      <div className="container">
        <h2 className="section-title">Our Story</h2>
        <div className="story-content">
          <div className="story-image">
            <div className="photo-frame">
              <img src={`${import.meta.env.BASE_URL}couple_photo.jpg`} alt="Jeyaprakash and Pramila" />
            </div>
          </div>
          <div className="story-text">
            <h3>How We Met</h3>
            <p>
              What began as a simple friendship slowly turned into something more beautiful than we ever imagined. With the blessings and love of our families, we are now ready to begin our journey as partners for life. We would be delighted to have you with us as we celebrate this special moment.
            </p>
            <p>
              We can't wait to celebrate our special day with you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
