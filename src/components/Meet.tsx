"use client"
import { useState } from 'react'
import { data } from "../../datadr"
import Image from 'next/image'
export default function Meet() {
  const [teams]=useState(data)

  return (
    <div className="mt-20 lg:mt-44">
      <section>
        <h3 className="text-blue-800 text-2xl lg:text-5xl text-center font-bold">Meet In House Health Team </h3>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {
          teams.map((team) => (
            <div key={String(team.id)}>
              <div className="flex justify-center flex-col items-center mt-8">
                <Image src={team.img} alt="companies" width={300} height={300} className="rounded-lg" />
                <h3 className="pt-2 text-blue-800 font-bold">{team.name}</h3>
                <p className="mt-2 text-slate-500 hover:text-blue-700 font-mono">{team.desc}</p>
              </div>
            </div>
          ))
        }

      </div>
      </section>
    </div>

  )
}