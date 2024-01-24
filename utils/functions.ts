import L from 'leaflet';

export function createIcon(type: String) {
  let icon = '';
  switch (type) {
      case 'city': icon = "/marker_blue.svg"; break;
      case 'natural': icon = "/marker_green.svg"; break;
      case 'both': icon = "/marker_orange.svg"; break;
      default: icon = "/marker_orange.svg"; break;
  }
  
  return new L.Icon({
      iconUrl: icon,
      iconSize: [8, 8],
      iconAnchor: [4, 4],
      popupAnchor: [0, 0],
  });
}
export const setColor = (feature, layer) => {
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
}

export function changeColorOnHover(feature, layer) {
  layer.on({
    mouseover: (e) => {
      layer.setStyle({color: "#e8e0de", weight: 2, fillOpacity: 0.7})
      e.target.bringToFront()
    },
    mouseout: (e) => {
      layer.setStyle({color: "#171712", weight: 1, fillOpacity: 1})
    },
  })
}

export function onEachFeature(feature, layer) {
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
}

