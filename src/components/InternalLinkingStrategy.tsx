import React, { useEffect } from "react";

const Adsense: React.FC = () => {
  useEffect(() => {
    // Create the async AdSense script
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2885050972904135";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Push ads to the container
    script.onload = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error(e);
      }
    };
  }, []);

  return (
    <div>
      {/* Exact same ad container as your HTML snippet */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2885050972904135"
        data-ad-slot="8766008078"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default Adsense;
