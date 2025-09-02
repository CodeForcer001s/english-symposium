"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L, { LatLngExpression } from "leaflet"; // <-- import type

import "leaflet/dist/leaflet.css";

// A. CUSTOM MARKER ICON
const customMarkerIcon = new L.Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3" fill="#818cf8"></circle>
    </svg>`)}`,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

// B. ANIMATION COMPONENT
interface MapFlyToProps {
  position: LatLngExpression;
}

const MapFlyTo: React.FC<MapFlyToProps> = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 15, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [position, map]);

  return null;
};

// C. MAIN MAP COMPONENT
interface LocationMapProps {
  position: LatLngExpression;
}

const LocationMap: React.FC<LocationMapProps> = ({ position }) => {
  const mapboxAttribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
  const cartoVoyagerUrl =
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={true}
      className="w-full h-full z-0 rounded-lg shadow-xl"
    >
      <TileLayer attribution={mapboxAttribution} url={cartoVoyagerUrl} />

      <Marker position={position} icon={customMarkerIcon}>
        <Popup>
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

      <MapFlyTo position={position} />
    </MapContainer>
  );
};

export default LocationMap;
