import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="hero__categories">
              <div className="hero__categories__all">
                <i className="fa fa-bars"></i>
                <span>All Services</span>
              </div>
              <ul>
                <li><a href="/food">Food Delivery</a></li>
                <li><a href="/hotels">Hotels & Accommodation</a></li>
                <li><a href="/spa">Spa & Wellness</a></li>
                <li><a href="/visa">Visa Services</a></li>
                <li><a href="/healthcare">Healthcare</a></li>
                <li><a href="/realestate">Real Estate</a></li>
                <li><a href="/marketplace">Marketplace</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="hero__search">
              <div className="hero__search__form">
                <form action="#">
                  <div className="hero__search__categories">
                    All Categories
                    <span className="arrow_carrot-down"></span>
                  </div>
                  <input type="text" placeholder="What do you need?" />
                  <button type="submit" className="site-btn">SEARCH</button>
                </form>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="hero__search__phone__text">
                  <h5>099-353-3556</h5>
                  <span>support 24/7 time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};