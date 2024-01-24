import { getAllPostIds } from "@/lib/posts";
import SvgMap from "@/components/CountryMap";
import * as country_data from '@/data/country_data'
import D3Map from "@/components/D3Map";

export default function Page({params} : {params: {id: string}}) {
  const country = params.id[0].toUpperCase() + params.id.slice(1).replace('_', ' ');
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col h-12">
          <div className="w-2 flex-1 bg-black"></div>
          <div className="w-2 flex-1 bg-[#D00]"></div>
          <div className="w-2 flex-1 bg-[#FFCE00]"></div>
        </div>
        <div>
          <h1 className="font-bold text-5xl leading-normal">{country}</h1>
        </div>
      </div>
      <div className="w-full max-w-[1000px] aspect-[4/3]">
        <SvgMap
          map={country_data[params.id].map}
          zoom={country_data[params.id].zoom}
          center={country_data[params.id].center}
          markers={country_data[params.id].markers}
        />
        <D3Map
          map={country_data[params.id].map}
          prj={country_data[params.id].projection}
          zoom={country_data[params.id].svg_scale}
          center={country_data[params.id].svg_center}
          markers={country_data[params.id].markers}
        />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

