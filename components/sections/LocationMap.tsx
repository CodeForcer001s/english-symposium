// Example path: /components/maps/LocationMap.tsx

import React from "react";
// Make sure you have your map library imports here
// For example, if using react-leaflet:
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// You might need to fix the default icon issue with Leaflet
import L from "leaflet";
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// 1. Define an interface for your component's props
interface LocationMapProps {
  position: [number, number]; // This defines 'position' as an array of two numbers
}

// 2. Use the interface with React.FC to type your component
//    and destructure 'position' from the props object
const LocationMap: React.FC<LocationMapProps> = ({ position }) => {
  return (
    // This is an example using react-leaflet.
    // Replace with your actual map implementation.
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}></Marker>
    </MapContainer>
  );
};

export default LocationMap;
