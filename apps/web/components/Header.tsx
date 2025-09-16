import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Header Top */}
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="header__top__left">
                <ul>
                  <li><i className="fa fa-envelope"></i> hello@bazaari.com</li>
                  <li><i className="fa fa-phone"></i> 099-353-3556</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="header__top__right">
                <div className="header__top__right__social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="#"><i className="fa fa-pinterest-p"></i></a>
                </div>
                <div className="header__top__right__language">
                  <img src="/img/language.png" alt="" />
                  <div>English</div>
                  <span className="arrow_carrot-down"></span>
                  <ul>
                    <li><a href="#">Spanish</a></li>
                    <li><a href="#">English</a></li>
                  </ul>
                </div>
                <div className="header__top__right__auth">
                  <a href="#"><i className="fa fa-user"></i> Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Main */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__logo">
              <Link href="/">
                <img src="/img/logo.png" alt="Bazaari" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header__menu">
              <ul>
                <li className="active"><Link href="/">Home</Link></li>
                <li><Link href="/food">Food Delivery</Link></li>
                <li><Link href="/hotels">Hotels</Link></li>
                <li><Link href="/spa">Spa & Wellness</Link></li>
                <li><Link href="/visa">Visa Services</Link></li>
                <li><Link href="/healthcare">Healthcare</Link></li>
                <li><Link href="/realestate">Real Estate</Link></li>
                <li><Link href="/marketplace">Marketplace</Link></li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__cart">
              <ul>
                <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
              </ul>
              <div className="header__cart__price">item: <span>$150.00</span></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};