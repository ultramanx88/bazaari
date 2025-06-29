'use client';

import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/firebaseConfig'; // แก้ path ให้ตรงกับโปรเจกต์

// initialize Firebase app once
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('If this email is registered, a password reset link has been sent.');
      setEmail('');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="hero is-fullheight has-background-light" style={{ minHeight: '100vh' }}>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form className="box" onSubmit={handleReset}>
                <h1 className="title has-text-centered">Forgot Password</h1>

                {error && (
                  <div className="notification is-danger is-light">{error}</div>
                )}

                {message && (
                  <div className="notification is-success is-light">{message}</div>
                )}

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <button className="button is-primary is-fullwidth" type="submit">
                    Send Reset Link
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
