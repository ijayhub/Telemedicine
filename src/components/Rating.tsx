
import { AiFillStar } from "react-icons/ai";
export default function Rating() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-20 lg:mt-44 font-serif">
      <div className="bg-blue-800 p-5 rounded-lg border-4 border-t-black">
        <h3 className="text-white text-2xl lg:text-4xl font-bold">20,000+</h3>
        <h4 className="text-white mb-6 mt-2">Health checks delivered</h4>
        <p className="text-slate-400 leading-6 text-justify text-sm lg:text-lg">At CR wellness we approach each health check as a distinct and individualized experience.
          We attentively listen to your health-related concerns,
          ensuring that we comprehensively address every aspect of your well-being that may be causing you worry.</p>
      </div>
      <div className="bg-blue-100 p-5 rounded-lg lg:ml-6  border-4 border-t-blue-800 lg:mt-0 mt-4">
        <div className="flex item-center">
          <h3 className="text-blue-900 lg:text-4xl font-bold ">5.0/<small className="text-slate-500 hover:text-blue-800">5</small></h3>
          <span><AiFillStar className="text-yellow-400 ml-4 text-2xl" /></span>
          <span><AiFillStar className="text-yellow-400 text-2xl" /></span>
          <span><AiFillStar className="text-yellow-400 text-2xl" /></span>
          <span><AiFillStar className="text-yellow-400 text-2xl" /></span>
          <span><AiFillStar className="text-yellow-400 text-2xl" /></span>
        </div>
        <h4 className="text-blue-800 mb-6 mt-2 hover:text-slate-500">Customer Rating</h4>
        <p className="text-slate-400 leading-6 text-justify text-sm lg:text-lg">Achieving an Impressive Average Customer Rating of 5.00/5,
          we assure you an exceptional and personalized journey when you schedule your yearly health check with us.</p>
        </div>
    </section>
  )
}