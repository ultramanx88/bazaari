'use client';

import React from 'react';

const DownloadSection = () => {
  return (
    <section className="section has-background-light" style={{ height: '50vh' }}>
      <div className="container is-flex is-flex-direction-column is-justify-content-center is-align-items-center h-100">
        <h2 className="title is-3 has-text-centered mb-5">Download our App</h2>

        <div className="buttons">
          <a href="//" className="button is-white p-0" style={{ border: 'none' }}>
            <img
              src="/assets/playstore.jpg"
              alt="Download on Play Store"
              style={{ height: '60px', objectFit: 'contain' }}
            />
          </a>
          <a href="//" className="button is-white p-0" style={{ border: 'none' }}>
            <img
              src="/assets/appstore.jpg"
              alt="Download on App Store"
              style={{ height: '60px', objectFit: 'contain' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;