"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
        style={{ height: "10vh" }}
      >
        <div className="navbar-brand">
          <Link href="/" className="navbar-item has-text-weight-bold is-size-4">
            Bazaari
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setIsOpen(true)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end pr-4">
            <Link href="/partner" className="navbar-item">
              Become a Partner
            </Link>

            <div className="navbar-item">
              <div className="buttons">
                <a
                  href="/login"
                  className="button is-small is-rounded is-light"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="button is-small is-rounded is-primary ml-2"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Slide menu */}
      <div className={`menu-overlay ${isOpen ? "open" : ""}`}>
        <div className="slide-content">
          <button
            className="delete is-large"
            aria-label="close"
            onClick={() => setIsOpen(false)}
          ></button>
          <Link href="/partner" className="menu-item">
            Become a Partner
          </Link>

          {/* ปุ่ม Login/ Register */}
          <button className="menu-item">Login</button>
          <button className="menu-item">Register</button>
        </div>
      </div>

      <style jsx>{`
        .menu-overlay {
          position: fixed;
          top: 0;
          right: -100%;
          width: 250px;
          height: 100vh;
          background: white;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
          transition: right 0.3s ease-in-out;
          z-index: 1000;
        }

        .menu-overlay.open {
          right: 0;
        }

        .slide-content {
          padding: 2rem;
        }

        .menu-item {
          display: block;
          padding: 1rem 0;
          font-size: 1.2rem;
          color: #363636;
          border-bottom: 1px solid #ddd;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
        }

        @media (min-width: 1024px) {
          .menu-overlay {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
