"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export default function LocationMap() {
  const [position] = useState<LatLngExpression>([12.892, 80.227]); // OMR, Chennai

  useEffect(() => {
    import("leaflet/dist/leaflet.css");
  }, []);

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
            <strong>St Josephs Institute of Technology, Chennai.</strong>
            <p>OMR, Chennai, Tamil Nadu</p>
            <a
              href={`https://www.google.com/maps?q=${
                (position as [number, number])[0]
              },${(position as [number, number])[1]}`}
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
