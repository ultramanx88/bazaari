import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__about__logo">
                <a href="./index.html"><img src="/img/logo.png" alt="Bazaari" /></a>
              </div>
              <ul>
                <li>Address: 19/18 Soi Sukhumvit 13 (Saeng Chan), Sukhumvit Road, Khlong Toei Nuea, Watthana, Bangkok 10110</li>
                <li>Phone: 099-353-3556</li>
                <li>Email: hello@bazaari.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
            <div className="footer__widget">
              <h6>Services</h6>
              <ul>
                <li><a href="/food">Food Delivery</a></li>
                <li><a href="/hotels">Hotels</a></li>
                <li><a href="/spa">Spa & Wellness</a></li>
                <li><a href="/visa">Visa Services</a></li>
                <li><a href="/healthcare">Healthcare</a></li>
                <li><a href="/realestate">Real Estate</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer__widget">
              <h6>Join Our Newsletter Now</h6>
              <p>Get E-mail updates about our latest services and special offers.</p>
              <form action="#">
                <input type="text" placeholder="Enter your mail" />
                <button type="submit" className="site-btn">Subscribe</button>
              </form>
              <div className="footer__widget__social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-pinterest"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__copyright">
              <div className="footer__copyright__text">
                <p>
                  Copyright &copy; {new Date().getFullYear()} All rights reserved | Bazaari Platform
                </p>
              </div>
              <div className="footer__copyright__payment">
                <img src="/img/payment-item.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};