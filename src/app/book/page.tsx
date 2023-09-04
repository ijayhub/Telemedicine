
import Image from 'next/image'
import carborn from '../../../public/carbon zero connect.svg'
import { BiLinkExternal } from "react-icons/bi";
import flutterwave from '../../../public/flutterwave.svg'
export default function Book() {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="text-center leading-8">
        <h3 className="text-blue-800 text-2xl lg:text-5xl font-bold mt-16 lg:mt-20">Book a full body check</h3>
        <p>Experience the most comprehensive health check at a affordable price</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="border border-gray-400 flex flex-col p-4 rounded-xl relative">
          <div className="flex">
            <Image src={carborn} alt="carborn-zero" width={50} height={50} />
            <div className=" flex flex-col ml-6 p-3">
              <h3 className="text-blue-800 text-2xl font-semibold">Buy Now, Pay Later</h3>
              <p className="text-slate-800 mt-4 mr-8">Pay with carbon zero: Buy Now, Pay later at 0% interest</p>
            </div>
          </div>
          <div className="flex justify-end items-center">
            
              <span className="text-blue-700 absolute top-5 rounded-full text-xl py-1 px-2 mt-3"><BiLinkExternal /></span>
          
          </div>
        </div>
        <div className="mt-8">
        <div className="border border-gray-400 flex flex-col p-5 rounded-xl relative">
          <div className="flex">
            <Image src={flutterwave} alt="flutterwave" width={50} height={50} />
            <div className=" flex flex-col ml-6 p-3">
              <h3 className="text-blue-800 text-2xl font-semibold">Pay with Flutterwave</h3>
              <p className="text-slate-800 mt-4 mr-8">Pay directly with MasterCard, Visa and Verve Card</p>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <span className="text-blue-700 absolute top-5 rounded-full text-xl py-1 px-2 mt-3"><BiLinkExternal /></span>
          </div>
        </div> 
      </div>
    </div>
  </div>
  )
}