'use client';

import React, { useEffect, useState } from 'react';
import './HeroSection.css'; // ไว้ใส่ css เสริม (ถ้าต้องการ)

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section 
      className="hero is-fullheight-with-navbar is-relative" 
      style={{ 
        backgroundImage: `url('/assets/bazaaari-hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay สีดำโปร่งแสง */}
      <div 
        className="hero-overlay" 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }}
      />

      {/* เนื้อหาตรงกลาง */}
      <div className="hero-body" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container has-text-centered">
          <h1 className={`title is-size-1 has-text-white ${animate ? 'slide-up' : ''}`} style={{ fontFamily: "'Kantumruy Pro', serif" }}>
            Bazaaari
          </h1>
          <h2 className={`subtitle is-size-3 has-text-white ${animate ? 'slide-up delay-1' : ''}`}>
            The spirit of India, right here.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
