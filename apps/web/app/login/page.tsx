'use client';

import 'bulma/css/bulma.min.css';
import { useState, useCallback } from 'react';
import { getAuth, signInWithEmailAndPassword, AuthError } from 'firebase/auth';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/firebaseConfig';

// Initialize Firebase app once (singleton pattern)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = useCallback((field: keyof LoginFormData) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({
        ...prev,
        [field]: e.target.value
      }));
      // Clear error when user starts typing
      if (error) setError('');
    }, [error]
  );

  const getErrorMessage = (error: AuthError): string => {
    switch (error.code) {
      case 'auth/user-not-found':
        return 'No account found with this email address.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/user-disabled':
        return 'This account has been disabled.';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later.';
      default:
        return 'Login failed. Please check your credentials and try again.';
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.email.trim() || !formData.password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        formData.email.trim(), 
        formData.password
      );
      
      console.log('Login successful!', userCredential.user.uid);
      
      // Redirect or handle successful login here
      // Example: router.push('/dashboard');
      
    } catch (err) {
      const authError = err as AuthError;
      setError(getErrorMessage(authError));
      console.error('Login error:', authError.code, authError.message);
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
              <form className="box" onSubmit={handleLogin}>
                <h1 className="title has-text-centered">Login</h1>

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

                <div className="field">
                  <label className="label" htmlFor="email">
                    Email
                  </label>
                  <div className="control has-icons-left">
                    <input
                      id="email"
                      className="input"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange('email')}
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
                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <div className="control has-icons-left">
                    <input
                      id="password"
                      className="input"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleInputChange('password')}
                      disabled={isLoading}
                      required
                      autoComplete="current-password"
                      minLength={6}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="field">
                  <button 
                    className={`button is-primary is-fullwidth ${isLoading ? 'is-loading' : ''}`}
                    type="submit"
                    disabled={isLoading || !formData.email.trim() || !formData.password.trim()}
                  >
                    {isLoading ? 'Logging in...' : 'Log In'}
                  </button>
                </div>

                <div className="has-text-centered">
                  <p className="is-size-7 has-text-grey">
                    Don't have an account? 
                    <a href="/register" className="has-text-primary"> Sign up</a>
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