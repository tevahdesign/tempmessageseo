import React, { useEffect } from "react";

export const BacklinkSection: React.FC = () => {
  // Load AdSense script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-286858050972904135";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    script.onload = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error(e);
      }
    };
  }, []);

  return (
    <section className="backlink-section text-center py-6">
      <h2>Check out our backlinks</h2>
      <p>Some content about backlinks goes here.</p>

      {/* AdSense ad */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", margin: "20px auto" }}
        data-ad-client="ca-pub-2885050972904135"
        data-ad-slot="8766008078"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </section>
  );
};
