'use client'

import {GeoJSON, GeoJSONProps, MapContainer, Marker, Popup} from "react-leaflet";
import "@/public/custom.leaflet.css";
import { createIcon } from '@/utils/functions';
import Image from 'next/image'

export default function SvgMap({map, zoom, center, markers, onEachFeature}:
  {map: GeoJSONProps, zoom: number, center: [number, number], onEachFeature: any, markers: any}) {
  return (
    <MapContainer 
      center={center}
      zoom={zoom}
      style={{ height: '100%', width: '100%', backgroundColor: '#fff'}}
      zoomSnap={0.1}
      zoomControl={false}
    >
      <GeoJSON
        data={map}
        style={{ color: '#acb6a0', weight: 1, opacity: 1, fillOpacity: 1}}
      />
      {markers.map((marker, index) => {
        return (
        <Marker
          key={index}
          position={marker.coordinates}
          icon={createIcon(marker.type)}
        >
          <Popup>
            <div className="w-[255px] aspect-[5/3] relative bg-green-500">
              <Image src={marker.image ? marker.image : '/pictures/saxony.jpg'} alt={marker.name} fill objectFit="cover"/>
            </div>
            <h1 className="text-lg p-4 py-2 font-semibold">{marker.name}</h1>
          </Popup>
        </Marker>
        )
      })}
    </MapContainer>
  )
}