import Image from 'next/image'
import check from '../../../public/health check2.jpeg'
import { BsEnvelopeAtFill, BsFillArrowUpSquareFill } from 'react-icons/bs'
import { PiPhoneCall } from 'react-icons/pi'
export default function About() {
  return (
    <>
      <section className="pb-3">
        <div className="grid grid-cols-1 xl:grid-cols-2 max-w-7xl mx-auto pt-20 lg:pt-40">
          <div>
            <Image src={check} alt="health-check" width={600} height={300} className="rounded-md hidden xl:block" />
          </div>
          <div className="leading-10 p-5">
            <h3 className="text-blue-800 text-2xl lg:text-5xl text-center font-bold">Who We Are</h3>
            <p className='text-justify mt-5'>At Cr Wellness, our primary emphasis is on proactive healthcare,
            specializing in wellness and telemedicine services. We firmly believe in making affordable healthcare universally accessible,
            transcending geographical constraints.</p>

            <p className='text-justify'>Our wellness assessments stand out as a benchmark in Nigeria,
            leveraging advanced medical technology and featuring exclusive tests unprecedented within the nation.</p>
            <div className='flex items-center justify-between'>
              <div className="pt-12 pl-4">
                <p className='flex items-center'>
                  <BsEnvelopeAtFill className="text-blue-700 text-sm lg:text-2xl"/>: xxx@gmail.com
                </p>
              </div>
              <div className="pt-12 pr-4">
                <p className='flex items-center'>
                  <PiPhoneCall className="text-blue-700 text-sm lg:text-2xl"/>: 012345678
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
          
          