'use client';
// Example path: /components/maps/LocationMap.tsx

import React, { useEffect, useState } from "react";
// Import these only on the client side
import dynamic from "next/dynamic";

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
  const [MapComponent, setMapComponent] = useState<React.ComponentType<any> | null>(null);

  // Ensure everything loads only on client
  useEffect(() => {
    setIsClient(true);
    
    // Dynamically import the map components
    const loadMap = async () => {
      // Dynamically import Leaflet and React-Leaflet
      const L = await import("leaflet");
      const { MapContainer, TileLayer, Marker, Popup } = await import("react-leaflet");
      
      // Fix for default markers in Next.js
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
      
      // Load Leaflet CSS
      
      // Create a map component
      const Map = () => (
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
      );
      
      setMapComponent(() => Map);
    };
    
    loadMap();
  }, [position, title, description]);

  // Don't render until client-side
  if (!isClient || !MapComponent) {
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
      {MapComponent && <MapComponent />}
    </div>
  );
}
