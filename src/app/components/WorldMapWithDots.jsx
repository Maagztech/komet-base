"use client";
// import React from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
// } from "react-simple-maps";

// // // Define the geographical coordinates for the centers of the five countries
// const markers = [
//   { markerOffset: -15, name: "Brazil", coordinates: [-51.9253, -14.235] },
//   { markerOffset: -15, name: "India", coordinates: [78.9629, 20.5937] },
//   { markerOffset: 25, name: "China", coordinates: [104.1954, 35.8617] },
//   { markerOffset: -15, name: "Germany", coordinates: [10.4515, 51.1657] },
//   { markerOffset: -15, name: "Canada", coordinates: [-106.3468, 56.1304] },
// ];

// const MapChart = () => {
//   return (
//     <div className="bg-slate-50 ml-[20px] mb-[30px] p-[20px] rounded-md pb-[40px] w-2/3 h-[500px]">
//       <ComposableMap>
//         <Geographies geography="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json">
//           {({ geographies }) =>
//             geographies.map((geo) => (
//               <Geography key={geo.rsmKey} geography={geo} />
//             ))
//           }
//         </Geographies>
//         {markers.map(({ name, coordinates, markerOffset }) => (
//           <Marker key={name} coordinates={coordinates}>
//             <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
//             <text
//               textAnchor="middle"
//               y={markerOffset}
//               style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
//             >
//               {name}
//             </text>
//           </Marker>
//         ))}
//       </ComposableMap>
//     </div>
//   );
// };

// export default MapChart;

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix marker icon issue in Leaflet 1.x.x
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const WorldMapWithDots = () => {
  // Define coordinates for five specific countries
  const countries = [
    { name: "United States", coords: [37.0902, -95.7129] },
    { name: "Brazil", coords: [-14.235, -51.9253] },
    { name: "India", coords: [20.5937, 78.9629] },
    { name: "Germany", coords: [51.1657, 10.4515] },
    { name: "Australia", coords: [-25.2744, 133.7751] },
  ];

  return (
    <div className="bg-slate-50 ml-[20px] mb-[30px] p-[20px] rounded-md pb-[40px] w-2/3 h-[500px]">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</contributors>'
        />
        {countries.map((country, index) => (
          <Marker key={index} position={country.coords}>
            <Popup>{country.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WorldMapWithDots;

