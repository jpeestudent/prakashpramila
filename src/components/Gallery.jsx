import React from 'react';
import { publicUrl } from '../utils/publicUrl';
import styles from './Gallery.module.css';

const Gallery = () => {
  const photos = [
    { id: 1, src: publicUrl('/gallery/Photo_01.jpg') },
    { id: 2, src: publicUrl('/gallery/Photo_02.jpg') },
    { id: 3, src: publicUrl('/gallery/Photo_03.JPG') },
  ];

  return (
    <section className={styles.gallery} id="gallery">
      <div className="container">
        <h2 className="section-title">Captured Moments</h2>
        <div className={styles.galleryGrid}>
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={styles.galleryItem}
            >
              <div className={styles.photoContainer}>
                <img src={photo.src} alt={`Gallery image ${index + 1}`} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
