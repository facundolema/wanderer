'use client'

import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markers from '../data/markers.json';
import { createIcon } from '../utils/functions';

const dots = markers.map((country) => {
  return country.markers.map((marker, index) => {
    return <Marker key={index} position={[marker.lat, marker.lng]} icon={createIcon(marker.type)}/>
  })
})

export default function Map() {
  return (
    <MapContainer 
      center={[25, -10]}
      zoom={1.5}
      style={{ height: '100%', width: '100%'}}
      zoomSnap={0.1}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      { dots }
    </MapContainer>
  )
}