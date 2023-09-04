"use client"
import  { useState } from 'react';
import { data } from '../../data';
import Image from 'next/image';

export default function Cards() {
  const [cards] = useState(data);

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 text-center gap-4 mt-12 lg:mt-32'>
      {cards.map((card) => (
        <div key={String(card.id)}>
          <div className='justify-center items-center bg-blue-100 p-4 rounded-md shadow-xl border-4 border-t-yellow-400'>
            <Image src={card.img} alt="icons" width={20} height={20} />
            <p className='mt-4 hover:text-blue-700'>{card.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
