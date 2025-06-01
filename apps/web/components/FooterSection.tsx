'use client';

import React from 'react';

const FooterSection = () => {
  return (
    <footer className="footer has-background-dark has-text-light" style={{ minHeight: '50vh' }}>
      <div className="container">
        {/* Row 1 */}
        <div className="columns is-multiline py-6">
          {/* Column 1: Project info */}
          <div className="column is-4">
            <h3 className="title is-5 has-text-white">Bazaaari</h3>
            <p>Address: Sukhumvit 13, Bangkok, TH</p>
            <p>Tel: xxx-xxxxxxx</p>
          </div>

          {/* Column 2: Useful links */}
          <div className="column is-4">
            <h3 className="title is-6 has-text-white">Useful Links</h3>
            <ul>
              <li><a href="#" className="has-text-light">Terms & Conditions</a></li>
              <li><a href="#" className="has-text-light">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Social icons */}
          <div className="column is-4">
            <h3 className="title is-6 has-text-white">Follow Us</h3>
            <div className="buttons">
              <a className="button is-dark is-rounded" href="//">
                <span className="icon">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </a>
              <a className="button is-dark is-rounded" href="//">
                <span className="icon">
                  <i className="fab fa-twitter"></i>
                </span>
              </a>
              <a className="button is-dark is-rounded" href="//">
                <span className="icon">
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: Banner image */}
        <div className="has-text-centered py-4">
          <img
            src="/assets/stripe.png"
            alt="Stripe Payment Banner"
            style={{ maxHeight: '50px', objectFit: 'contain' }}
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
