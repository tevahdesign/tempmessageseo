import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import ReCAPTCHA from "react-google-recaptcha";
import App from "./App.tsx";
import "./index.css";

const RECAPTCHA_SITE_KEY = "6LcKN98rAAAAAFqzY4doSV5dZ9ulAjNBWV3xMgNr";

function ProtectedApp() {
  const [verified, setVerified] = useState(false);

  // Check localStorage to skip CAPTCHA for already verified users
  useEffect(() => {
    const v = localStorage.getItem("recaptcha_verified");
    if (v === "true") setVerified(true);
  }, []);

  const handleVerify = (token: string | null) => {
    if (token) {
      // You can optionally verify token on your backend here
      localStorage.setItem("recaptcha_verified", "true");
      setVerified(true);

      // Redirect automatically after successful verification
      setTimeout(() => {
        window.location.href = "/home"; // Change to your main page route
      }, 500);
    }
  };

  if (!verified) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "#0b1220",
          color: "#e6eef8",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Verify you’re human</h1>
        <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleVerify} />
      </div>
    );
  }

  // Once verified, render your React app
  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ProtectedApp />
    </HelmetProvider>
  </StrictMode>
);
