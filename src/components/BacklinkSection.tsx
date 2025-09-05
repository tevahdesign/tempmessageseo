import React, { useEffect } from "react";

const Adsense: React.FC = () => {
  useEffect(() => {
    // Dynamically add the AdSense script
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-286858050972904135";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    script.onload = () => {
      try {
        // Render the ad in the container
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error(e);
      }
    };
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle" // must use className
        style={{ display: "block" }} // style must be a JS object
        data-ad-client="ca-pub-2885050972904135"
        data-ad-slot="8766008078"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default Adsense;
