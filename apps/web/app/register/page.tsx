'use client';

import 'bulma/css/bulma.min.css';
import { useState, useCallback } from 'react';
import { getAuth, createUserWithEmailAndPassword, AuthError } from 'firebase/auth';
import { app } from '../../firebase/firebaseConfig';

const auth = getAuth(app);

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = useCallback((field: keyof RegisterFormData) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({
        ...prev,
        [field]: e.target.value
      }));
      // Clear messages when user starts typing
      if (error) setError('');
      if (success) setSuccess('');
    }, [error, success]
  );

  const validateForm = (): string | null => {
    if (!formData.email.trim()) {
      return 'Email is required.';
    }
    if (!formData.password) {
      return 'Password is required.';
    }
    if (formData.password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    if (!formData.confirmPassword) {
      return 'Please confirm your password.';
    }
    if (formData.password !== formData.confirmPassword) {
      return 'Passwords do not match.';
    }
    return null;
  };

  const getErrorMessage = (error: AuthError): string => {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'An account with this email already exists.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/weak-password':
        return 'Password is too weak. Please choose a stronger password.';
      case 'auth/operation-not-allowed':
        return 'Email/password accounts are not enabled. Please contact support.';
      default:
        return 'Registration failed. Please try again.';
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Client-side validation
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email.trim(), 
        formData.password
      );
      
      setSuccess('Registration successful! You can now log in to your account.');
      setFormData({
        email: '',
        password: '',
        confirmPassword: ''
      });
      
      console.log('Registration successful!', userCredential.user.uid);
      
      // Redirect after successful registration
      // Example: setTimeout(() => router.push('/login'), 2000);
      
    } catch (err) {
      const authError = err as AuthError;
      setError(getErrorMessage(authError));
      console.error('Registration error:', authError.code, authError.message);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = formData.email.trim() && 
                     formData.password && 
                     formData.confirmPassword && 
                     formData.password === formData.confirmPassword;

  return (
    <section className="hero is-fullheight has-background-light" style={{ minHeight: '100vh' }}>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form className="box" onSubmit={handleRegister}>
                <h1 className="title has-text-centered">Create Account</h1>

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

                {success && (
                  <div className="notification is-success is-light">
                    <button 
                      className="delete" 
                      type="button"
                      onClick={() => setSuccess('')}
                      aria-label="Close notification"
                    />
                    {success}
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
                      autoComplete="new-password"
                      minLength={6}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="help">Password must be at least 6 characters long</p>
                </div>

                <div className="field">
                  <label className="label" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <div className="control has-icons-left">
                    <input
                      id="confirmPassword"
                      className={`input ${formData.confirmPassword && formData.password !== formData.confirmPassword ? 'is-danger' : ''}`}
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleInputChange('confirmPassword')}
                      disabled={isLoading}
                      required
                      autoComplete="new-password"
                      minLength={6}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock" aria-hidden="true" />
                    </span>
                  </div>
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="help is-danger">Passwords do not match</p>
                  )}
                </div>

                <div className="field">
                  <button 
                    className={`button is-primary is-fullwidth ${isLoading ? 'is-loading' : ''}`}
                    type="submit"
                    disabled={isLoading || !isFormValid}
                  >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </button>
                </div>

                <div className="has-text-centered">
                  <p className="is-size-7 has-text-grey">
                    Already have an account? 
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