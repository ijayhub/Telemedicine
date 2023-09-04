import { useState } from 'react'
import styles from '../styles/Testimonial.module.css'
import { data } from '../../datatest'
import Image from 'next/image'
export default function Testimonial() {
  const[tests]=useState(data)
  return (
    <section className="mt-20 lg:mt-44">
      <h2 className={styles.testHead}>What Our Clients Have To Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {
          tests.map((test) => (
            <div key={String(test.id)} className="shadow-2xl p-4 rounded-lg mt-8">
              <div className='flex items-center'>
                <Image src={test.img} alt='testimonies of clients' width={30} height={10} className={styles.ImgTest} />
                <h3 className='text-slate-400 ml-6 text-sm lg:text-base'>{test.name}</h3>
              </div>
              <div className='mt-8'>
                <p className='text-xs lg:text-lg'>{test.desc}</p>
              </div>
            </div>
          ))
        }
        
      </div>
    </section>
  )
}