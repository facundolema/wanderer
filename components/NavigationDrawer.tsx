'use client'

import { usePathname } from "next/navigation"
import { countries } from '@/data/countries'
import Link from 'next/link'

export default function NavigationDrawer() {
  let page = usePathname().split('/').at(-1)
  let selected = page.charAt(0).toUpperCase() + page.slice(1)

  return (
  <aside className="w-72 h-screen bg-primary p-2">
    <h1 className="w-full p-2 px-4 text-xl">Countries</h1>
    <ul>
      {
        countries.map((continent, index) => {
          return (
            <li key={index} className="w-full rounded-md mb-1">
              <Link
                href={`/countries/continents/${continent.continent.toLowerCase().replace(' ','_')}`}
                className="w-full px-4 py-1 rounded-md hover:bg-light mb-1 block">
                {continent.continent}
              </Link>
                <ul className="ml-4">
              {
                continent.countries.map((country, index) => {
                  let classname = country === selected ? 'w-full px-4 py-1 rounded-md hover:bg-light bg-light block' : 'w-full px-4 py-1 rounded-md hover:bg-light block'
                  return (
                    <li key={index} className="mb-1">
                      <Link href={`/countries/${country.toLowerCase().replace(' ', '_')}`} className={classname}>{country}</Link>
                    </li>
                  )
                })
              }
            </ul>
            </li>
          )
        })
      }
    </ul>
  </aside>
  )
}