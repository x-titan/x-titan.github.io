"use client";

import type { SubmitEventHandler } from "react";

export default function Newsletter() {
  const preventDefault: SubmitEventHandler = (e) => e.preventDefault();

  return (
    <div className="newsletter">
      <form action="/" method="post" onSubmit={preventDefault}>
      
        <h2>Newsletter</h2>
        <p>Stay up to date with our latest news.</p>
        <label htmlFor="firstName" className="sr-only">
          First name
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          placeholder="First name"
          autoComplete="given-name"
        />
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="john.doe@example.com"
          autoComplete="email"
          required
        />
        <span className="error">Please enter a valid email address.</span>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
