"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface LocationMapProps {
  position: [number, number]; // ✅ strictly a tuple
}

const LocationMap: React.FC<LocationMapProps> = ({ position }) => {
  const customIcon = L.icon({
    iconUrl: "/marker-icon.png", // replace with your custom marker if needed
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40],
  });

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "100%", width: "100%", borderRadius: "12px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={customIcon}>
          <Popup>
            <div>
              <h3>College Location</h3>
              <p>OMR, Chennai, Tamil Nadu</p>
              <a
                href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1d4ed8",
                  textDecoration: "underline",
                  fontWeight: "500",
                }}
              >
                Open in Google Maps
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
