import { Inter } from 'next/font/google'
import RegionMap from '@/components/RegionMap'
import D3Map from '@/components/D3Map'
import map from '@/data/world_50m.json'
import markers from '@/data/markers.json'
import { onEachFeature } from '@/utils/functions'

export default function Page() {
  return (
    <div className="w-full min-h-screen flex">
      <div className="h-24 flex-1 h-[100vh] p-16">
        <h1 className="font-bold text-5xl mb-4">Europe</h1>
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
            prj={"Europe"}
            zoom={700}
            center={[0, 52]}
            markers={[]}
          />
        </div>
      </div>
    </div>
  )
}