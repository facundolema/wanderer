import markers from './markers.json'

let geojson = {
  type: 'FeatureCollection',
  features: []
}

for (const marker_group of markers) {
  let newMarkers = marker_group.markers.map((marker) => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [Number(marker.lng), Number(marker.lat)]
      },
      properties: {
        title: marker.name,
        country: marker_group.name,
        country_code: marker_group.code,
      }
    }
  })
  geojson.features.push(...newMarkers)
}

console.log(JSON.stringify(geojson, null, 2))