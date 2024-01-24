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
        style={{ color: '#171712', weight: 1, opacity: 1, fillOpacity: 1}}
        onEachFeature={(feature, layer) => {
          switch (feature.properties.subregion) {
              case 'Southern Europe':
                layer.options.fillColor = '#aec1c7'; break;
              case 'Western Europe':
                layer.options.fillColor = '#e47356'; break;
              case 'Northern Europe':
                layer.options.fillColor = '#74625d'; break;
              case 'Eastern Europe':
                layer.options.fillColor = '#7a8e6a'; break;
              default:
                layer.options.fillColor = '#e8e0de'; break;
            }
          layer.on({
            mouseover: (e) => {
              layer.setStyle({color: "#e8e0de", weight: 2, fillOpacity: 0.7})
              e.target.bringToFront()
            },
            mouseout: (e) => {
              layer.setStyle({color: "#171712", weight: 1, fillOpacity: 1})
            },
            click: (e) => {
              console.log(e.target.feature.properties.name)
              window.location.href = `/countries/europe/${e.target.feature.properties.name.toLowerCase()}`
            }
          })
          }}
      />
      {markers.map((marker, index) => {
        console.log(marker)
        return (
        <Marker
          key={index}
          position={[marker.lat, marker.lng]}
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