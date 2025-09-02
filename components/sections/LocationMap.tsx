"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Import Leaflet's CSS
import "leaflet/dist/leaflet.css";

// STYLES
// We'll create this CSS file next to style our popup

// A. CUSTOM MARKER ICON
// Create a custom icon using a simple SVG for a modern look
const customMarkerIcon = new L.Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3" fill="#818cf8"></circle>
    </svg>`)}`,
  iconSize: [40, 40], // size of the icon
  iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -40], // point from which the popup should open relative to the iconAnchor
});

// B. ANIMATION COMPONENT
// This component will handle the "fly to" animation
const MapFlyTo = ({ position }) => {
  const map = useMap(); // Get the map instance

  useEffect(() => {
    if (position) {
      // When the position prop changes, fly to the new coordinates
      map.flyTo(position, 15, {
        // 15 is the zoom level
        animate: true,
        duration: 1.5, // Animation duration in seconds
      });
    }
  }, [position, map]);

  return null; // This component does not render anything
};

// C. MAIN MAP COMPONENT
const LocationMap = ({ position }) => {
  const mapboxAttribution = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`;
  // Using CARTO's Voyager theme for a more modern, clean look
  const cartoVoyagerUrl = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;

  return (
    // Make sure the parent container has a defined height!
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={true} // Enabled for better user experience
      className="w-full h-full z-0 rounded-lg shadow-xl" // Added rounding and shadow
    >
      <TileLayer attribution={mapboxAttribution} url={cartoVoyagerUrl} />

      <Marker position={position} icon={customMarkerIcon}>
        <Popup>
          {/* Apply the custom CSS class to the popup */}
          <div className="custom-popup">
            <h3
              style={{
                margin: 0,
                paddingBottom: "8px",
                borderBottom: "1px solid #ddd",
              }}
            >
              St. Joseph's Institute of Technology
            </h3>
            <p style={{ margin: "8px 0 0" }}>OMR, Chennai, Tamil Nadu</p>
            <a
              href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6366f1",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              View on Google Maps
            </a>
          </div>
        </Popup>
      </Marker>

      {/* Include the animation component inside the map */}
      <MapFlyTo position={position} />
    </MapContainer>
  );
};

export default LocationMap;
