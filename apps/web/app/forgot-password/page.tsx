'use client';

import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password reset instructions have been sent to your email.');
        setEmail('');
      } else {
        setError(data.message || 'Failed to send reset email. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Forgot password error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="hero is-fullheight has-background-light">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form className="box" onSubmit={handleSubmit}>
                <h1 className="title has-text-centered">Reset Password</h1>
                <p className="subtitle has-text-centered has-text-grey">
                  Enter your email address and we'll send you instructions to reset your password.
                </p>

                {error && (
                  <div className="notification is-danger is-light">
                    <button 
                      className="delete" 
                      type="button"
                      onClick={() => setError('')}
                      aria-label="Close notification"
                    />
                    {error}
                  </div>
                )}

                {message && (
                  <div className="notification is-success is-light">
                    <button 
                      className="delete" 
                      type="button"
                      onClick={() => setMessage('')}
                      aria-label="Close notification"
                    />
                    {message}
                  </div>
                )}

                <div className="field">
                  <label className="label" htmlFor="email">
                    Email Address
                  </label>
                  <div className="control has-icons-left">
                    <input
                      id="email"
                      className="input"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                        if (message) setMessage('');
                      }}
                      disabled={isLoading}
                      required
                      autoComplete="email"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="field">
                  <button 
                    className={`button is-primary is-fullwidth ${isLoading ? 'is-loading' : ''}`}
                    type="submit"
                    disabled={isLoading || !email.trim()}
                  >
                    {isLoading ? 'Sending...' : 'Send Reset Instructions'}
                  </button>
                </div>

                <div className="has-text-centered">
                  <p className="is-size-7 has-text-grey">
                    Remember your password? 
                    <a href="/login" className="has-text-primary"> Sign in</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}