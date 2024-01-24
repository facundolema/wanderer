import os
from pathlib import Path
import json, shutil

#path = '../../data/world_50m.json'
#countriesjson = '../../data/countries.json'
#
#with open(countriesjson) as f:
#    selected = json.load(f)
#    with open(path) as f:
#        world = json.load(f)
#        for country in world['features']:
#            if country['properties']['name'] not in selected['north_america']:
#                continue
#            n = {
#                "type": "FeatureCollection",
#                "features": [country]
#            }
#            os.mkdir(f'../../data/maps/{country["properties"]["name"].replace(" ", "_").lower()}')
#            # with open(f'../../data/countries/maps/{country["properties"]["name"].replace(" ", "_").lower()}/map.json', 'w') as f:
#            #     json.dump(n, f)
#
    # path = '../../data/markers.json'
    # countriesjson = '../../data/countries.json'

    # with open(path) as f:
    # countries = json.load(f)
    # for country in countries:
    #     new_markers = []
    #     for marker in country['markers']: 
    #         new_markers.append({
    #         "name": marker['name'],
    #         "coordinates": [marker['lat'], marker['lng']],
    #         "type": marker['type']
    #         })
    #         country['markers'] = new_markers
    #     with open(f'../../data/maps/{country["name"].replace(" ", "_").lower()}/markers.json', 'w') as f:
    #         json.dump(country['markers'], f)

path = '../../data/country_data'

for filename in os.listdir(path):
  if os.path.isdir(os.path.join(path, filename)):
    for filename2 in os.listdir(os.path.join(path, filename)):
        if filename2 == 'markers.json':
            shutil.copy(os.path.join(path, filename, filename2), os.path.join(path, 'markers', f"{filename}.json"))