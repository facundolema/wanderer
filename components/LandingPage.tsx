import { Inter, Courgette } from 'next/font/google'
import Map from '@/components/Map'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
const courgette = Courgette({ subsets: ['latin'], weight: "400" })

export default function LandingPage() {
  return (
    <div className="flex flex-col w-[100%] xl:w-[75%]">
      <h1 className={`${courgette.className} text-7xl self-center text-dark`}>The Wanderer</h1>
      <div className='flex w-96 self-center'>
        <span className='h-[2px] flex-1 bg-dark self-center m-2'></span>
        <p className={`${courgette.className} text-xl self-center text-dark`}>Discover</p>
        <span className='h-[2px] flex-1 bg-dark self-center m-2'></span>
      </div>
      <div className="flex my-4 gap-4">
        <span className="flex-[3] h-96 border-dark border rounded-lg overflow-hidden">
          <Map />
        </span>
        <span className="w-64 flex flex-col gap-2 justify-end">
          <div className='w-[100%] flex-1 border-dark border rounded-lg overflow-hidden relative'>
            <Image src='/pictures/switzerland.jpg' fill objectFit="cover" alt='' />
          </div>
          <button className="self-center bg-secondary border-2 h-12 w-[100%] rounded-lg hover:bg-accent">Read More</button>
          <button className="self-center bg-secondary h-12 w-[100%] rounded-lg hover:bg-accent">Read More</button>
          <div className="flex gap-2">
            <button className="self-center bg-secondary h-12 w-[100%] rounded-lg hover:bg-accent">Read More</button>
            <button className="self-center bg-primary h-12 w-[100%] rounded-lg hover:bg-accent">Read More</button>
          </div>
        </span>
      </div>
      <div className='flex my-4'>
        <h2 className={`${courgette.className} text-5xl text-dark`}>Highlights</h2>
        <span className='h-[2px] flex-1 bg-dark self-end m-2'></span>
      </div>
      <div className="grid gap-4 self-center w-[100%]
        grid-cols-1 grid-rows-1
        sm:grid-cols-2 sm:grid-rows-2
        md:grid-cols-3 md:grid-rows-3
        lg:grid-cols-3 lg:grid-rows-3
        xl:grid-cols-4 xl:grid-rows-4
      ">
        <span className="w-[100%] aspect-[4/3] border-dark border rounded-lg relative overflow-hidden">
          <Image src='/pictures/buenos_aires.jpg' fill objectFit="cover" alt='' />
        </span>
        <span className="w-[100%] aspect-[4/3] border-dark border rounded-lg relative overflow-hidden">
          <Image src='/pictures/london.jpg' fill objectFit="cover" alt='' />
        </span>
        <span className="w-[100%] aspect-[4/3] border-dark border rounded-lg relative overflow-hidden">
          <Image src='/pictures/barcelona.jpg' fill objectFit="cover" alt='' />
        </span>
        <span className="w-[100%] aspect-[4/3] border-dark border rounded-lg relative overflow-hidden">
          <Image src='/pictures/madrid.jpg' fill objectFit="cover" alt='' />
        </span>
        <span className="w-[100%] aspect-[4/3] border-dark border rounded-lg relative overflow-hidden">
          <Image src='/pictures/amsterdam.jpg' fill objectFit="cover" alt='' />
        </span>
        <span className="w-[100%] aspect-[4/3] border-dark border rounded-lg relative overflow-hidden">
          <Image src='/pictures/paris.jpg' fill objectFit="cover" alt='' />
        </span>
        <span className="w-[100%] aspect-[4/3] border-dark border rounded-lg relative overflow-hidden">
          <Image src='/pictures/edinburgh.jpg' fill objectFit="cover" alt='' />
        </span>
        <span className="w-[100%] aspect-[4/3] border-dark border rounded-lg relative overflow-hidden">
          <Image src='/pictures/buenos_aires.jpg' fill objectFit="cover" alt='' />
        </span>
      </div>
    </div>
  )
}