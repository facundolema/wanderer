'use client'

import {GeoJSON, GeoJSONProps, MapContainer, Marker, Popup} from "react-leaflet";
import "@/public/custom.leaflet.css";
import { createIcon } from '@/utils/functions';
import Image from 'next/image'

export default function SvgMap({map, zoom, center, m, onEachFeature}:
  {map: GeoJSONProps, zoom: number, center: [number, number], onEachFeature: any, m: any}) {
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
              window.location.href = `/countries/${e.target.feature.properties.name.toLowerCase()}`
            }
          })
          }}
      />
    </MapContainer>
  )
}