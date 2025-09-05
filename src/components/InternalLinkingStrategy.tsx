import React, { useEffect } from "react";

const Adsense: React.FC = () => {
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
    <div>
      <ins
        className="adsbygoogle" // JSX uses className
        style={{ display: "block" }} // JSX style uses JS object
        data-ad-client="ca-pub-2883380972904135"
        data-ad-slot="8766008078"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default Adsense;
