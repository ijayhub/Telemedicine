"use client"
import { useState } from 'react'
import { data } from '../../datatrust'
import Image from 'next/image';
export default function Trusted() {
  const[companies]=useState(data)
  return (
    <section className="mt-20 lg:mt-44">
      <h3 className="text-blue-800 text-2xl lg:text-5xl text-center font-bold">Trusted By</h3>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-6">
        {
          companies.map((company) => (
            <div key={String(company.id)}>
              <div className="flex justify-center flex-col items-center">
                <Image src={company.img} alt="companies" width={100} height={100} className="rounded-lg" />
                <p className="mt-2 text-slate-500 hover:text-blue-700 font-mono">{company.desc}</p>
              </div>
            </div>
          ))
        }

      </div>

    </section>
  )
}