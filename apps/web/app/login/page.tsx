"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = useCallback(
    (field: keyof LoginFormData) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
          ...prev,
          [field]: e.target.value,
        }));
        // Clear error when user starts typing
        if (error) setError("");
      },
    [error]
  );

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage or cookie
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Login error:", err);
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
                      onClick={() => setError("")}
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
                      onChange={handleInputChange("email")}
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
                      onChange={handleInputChange("password")}
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
                    className={`button is-primary is-fullwidth ${isLoading ? "is-loading" : ""}`}
                    type="submit"
                    disabled={
                      isLoading ||
                      !formData.email.trim() ||
                      !formData.password.trim()
                    }
                  >
                    {isLoading ? "Logging in..." : "Log In"}
                  </button>
                </div>

                <div className="has-text-centered">
                  <p className="is-size-7 has-text-grey">
                    Don't have an account?
                    <a href="/register" className="has-text-primary">
                      {" "}
                      Sign up
                    </a>
                  </p>
                  <p className="is-size-7 has-text-grey mt-2">
                    <a href="/forgot-password" className="has-text-primary">
                      Forgot password?
                    </a>
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
