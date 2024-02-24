"use client";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// Define the geographical coordinates for the centers of the five countries
const markers = [
  { markerOffset: -15, name: "Brazil", coordinates: [-51.9253, -14.235] },
  { markerOffset: -15, name: "India", coordinates: [78.9629, 20.5937] },
  { markerOffset: 25, name: "China", coordinates: [104.1954, 35.8617] },
  { markerOffset: -15, name: "Germany", coordinates: [10.4515, 51.1657] },
  { markerOffset: -15, name: "Canada", coordinates: [-106.3468, 56.1304] },
];

const MapChart = () => {
  return (
    <div className="bg-slate-50 ml-[20px] mb-[30px] p-[20px] rounded-md pb-[40px] w-2/3 h-[500px]">
      <ComposableMap>
        <Geographies geography="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default MapChart;
