"use client";

import { FormEvent, useId, useState } from "react";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function NewsletterForm() {
  const emailId = useId();
  const consentId = useId();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setHasError(true);
      setMessage("Saisissez une adresse électronique valide.");
      return;
    }

    if (!consent) {
      setHasError(true);
      setMessage(
        "Vous devez confirmer avoir compris qu’aucune donnée ne sera transmise.",
      );
      return;
    }

    setHasError(false);
    setMessage(
      "Validation réussie. Cette démonstration n’enregistre et ne transmet aucune donnée.",
    );
    setEmail("");
    setConsent(false);
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
      <div className="newsletter-field">
        <label htmlFor={emailId}>Adresse électronique</label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          aria-describedby={`${emailId}-help`}
          onChange={(event) => {
            setEmail(event.target.value);
            setMessage("");
          }}
        />
        <p id={`${emailId}-help`}>
          Exemple : nom@exemple.fr
        </p>
      </div>

      <div className="newsletter-consent">
        <input
          id={consentId}
          type="checkbox"
          checked={consent}
          onChange={(event) => {
            setConsent(event.target.checked);
            setMessage("");
          }}
        />
        <label htmlFor={consentId}>
          Je comprends que ce formulaire est une démonstration et que mon
          adresse ne sera ni enregistrée ni transmise.
        </label>
      </div>

      <button className="button button-dark" type="submit">
        Valider l’adresse
      </button>

      <p
        className={
          hasError
            ? "newsletter-message is-error"
            : "newsletter-message"
        }
        role={hasError ? "alert" : "status"}
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
