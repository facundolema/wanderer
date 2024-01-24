import RegionMap from '@/components/RegionMap'
import D3Map from '@/components/D3Map'
import map from '@/data/world_50m.json'
import markers from '@/data/markers.json'
import { onEachFeature } from '@/utils/functions'

export default function Page({params} : {params: {id: string}}) {
  const continent = params.id[0].toUpperCase() + params.id.slice(1).replace('_', ' ');
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col h-12">
          <div className="w-2 flex-1 bg-black"></div>
          <div className="w-2 flex-1 bg-[#D00]"></div>
          <div className="w-2 flex-1 bg-[#FFCE00]"></div>
        </div>
        <div>
          <h1 className="font-bold text-5xl leading-normal">{continent}</h1>
        </div>
      </div>
          <div className='w-full aspect-[4/3]'>
          <RegionMap
            map={map}
            zoom={3.2}
            center={[57, 10]}
            m={markers}
          />
        </div>
        <div className='w-full aspect-[4/3] py-4'>
          <D3Map
            map={map}
            prj={params.id}
            markers={[]}
          />
        </div>
    </div>
  )
}

const continents = ["south_america", "north_america", "europe", "oceania"]

export async function getStaticPaths() {
  const paths = getAllPostcontinentss();
  return {
    paths,
    fallback: false,
  };
}

export function getAllPostcontinentss() {
  return continents.map((fileName) => {
    return {
      params: {
        id: fileName,
      },
    };
  });
}
