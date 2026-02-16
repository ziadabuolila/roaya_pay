import React, { useState, useEffect } from "react";

function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1750);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div id="loader">
          <div className="loader-container">
            <div className="neon-loader-ring"></div>
            <img src="/Loader_icon.png" alt="Roaya" draggable="false" />
          </div>
        </div>
      ) : (
        <div id="main-content">{children}</div>
      )}
    </>
  );
}

export default Loader;
