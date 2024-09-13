// ClustrMapsWidget.js
import React, { useEffect } from 'react';

const ClustrMapsWidget = () => {
  /* eslint-disable no-console */
  console.log('in cluster map');
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'clustrmaps';
    script.src = '//clustrmaps.com/map_v2.js?d=rQo8iZy4MbK5AKMZWZ9QXa1zp60hFPD-XHaP4XJkt-c&cl=ffffff&w=a';

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up by removing the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      {/* This is where the ClustrMaps widget will be inserted */}
      <div id="clustrmaps-widget" />
    </div>
  );
};

export default ClustrMapsWidget;
