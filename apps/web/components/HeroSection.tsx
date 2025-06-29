// วิธีที่ 1: ใช้ CSS animation แทน JavaScript (แนะนำ)
'use client';

import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section 
      className="hero is-fullheight-with-navbar is-relative"
      style={{
        backgroundImage: `url('/assets/bazaaari-hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 64px)', // ปรับตามความสูงของ navbar
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
          <h1 
            className="title is-size-1 has-text-white slide-up-auto" 
            style={{ fontFamily: "'Kantumruy Pro', serif" }}
          >
            Bazaaari
          </h1>
          <h2 className="subtitle is-size-3 has-text-white slide-up-auto delay-1">
            The spirit of India, right here.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;