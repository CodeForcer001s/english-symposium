"use client"
// Example path: /components/maps/LocationMap.tsx

import React, { useEffect, useState } from "react";
// Make sure you have your map library imports here
// For example, if using react-leaflet:
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// You might need to fix the default icon issue with Leaflet
import L from "leaflet";
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Define the prop types
interface LocationMapProps {
  position?: [number, number];
  title?: string;
  description?: string;
}

export default function LocationMap({ 
  position = [12.892, 80.227], // Default to OMR, Chennai
  title = "CharityConnect Office",
  description = "OMR, Chennai, Tamil Nadu"
}: LocationMapProps) {
  const [isClient, setIsClient] = useState(false);

  // Ensure everything loads only on client
  useEffect(() => {
    setIsClient(true);
    
    // Load Leaflet CSS
    const loadCSS = async () => {
      const leafletStyles = document.createElement('link');
      leafletStyles.rel = 'stylesheet';
      leafletStyles.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
      document.head.appendChild(leafletStyles);
      
      // Fix for default markers in Next.js
      const L = await import("leaflet");
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    };
    
    loadCSS();
  }, []);

  // Don't render until client-side
  if (!isClient) {
    return (
      <div 
        style={{ height: "400px", width: "100%" }}
        className="bg-gray-100 flex items-center justify-center"
      >
        <p>Loading map...</p>
      </div>
    );
  }

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>{title}</strong>
            <p>{description}</p>
            <a
              href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
