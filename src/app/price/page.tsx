import Image from "next/image";
import basic from '../../../public/basic plan.svg'
import premium from '../../../public/premium plan.svg'
import premiumPlus from '../../../public/premium plus.svg'
import { BsCheck2, BsFillArrowUpSquareFill } from "react-icons/bs";
import Button from "@/components/Button";
import styles from '../../styles/Price.module.css'
import Link from "next/link";


export default function Price() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center leading-8">
        <h3 className="text-blue-800 text-2xl lg:text-5xl font-bold mt-16 lg:mt-20">Health Plans</h3>
        <p>Choose the plan that works for you</p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 mt-28 gap-4">
        <div className="flex justify-content items-center">
          <div className="border border-blue-800 flex flex-col p-5 rounded-xl shadow-lg">
          <div className="flex">
            <Image src={basic} alt="basic-plan" width={50} height={50} />
            <div className=" flex flex-col ml-4">
              <h3 className="text-slate-500 text-2xl font-semibold">Basic Plan</h3>
              <p className="text-slate-800 font-bold"><sup>#</sup>20,000<small className="text-slate-400">/year</small></p>
            </div>
          </div>
          <div className="flex mt-14">
            <div className="flex flex-col">
              <BsCheck2 className="text-blue-700 text-xl" />
              <BsCheck2 className="text-blue-700 text-xl" />
            </div>
            <div className=" flex flex-col ml-6 leading-8">
                <p>1 year telemedicine</p>
                <p>Oxygen Saturation, Weight, Height, Body Mass Index, Blood Pressure, Pulse Rate, Malaria Parasite,
                  Complete Hemogram (Full Blood Count), Blood Sugar, Urinalysis, Physical Examination, Doctor Review</p>
            </div>
          </div>
          <div className= {styles.btnPriceContainer}>
            <Link href="/book"><Button value="Choose Health Plan" className={styles.btnPrice} /></Link> 
          </div>
          </div>
        </div>
        <div className="bg-blue-900 flex flex-col p-8 rounded-xl relative">
          <div className="flex">
            <Image src={premium} alt="premiun-plan" width={50} height={50} />
            <div className=" flex flex-col ml-4">
              <h3 className="text-white text-2xl font-semibold">Premium</h3>
              <p className="text-white font-bold"><sup>#</sup>60,000<small className="text-slate-400">/year</small></p>
            </div>
          </div>
          <div className="flex mt-14">
            <div className="flex flex-col">
              <BsCheck2 className="text-green-700 text-xl" />
              <BsCheck2 className="text-green-700 text-xl" />
            </div>
              <div className=" flex flex-col ml-6 text-white leading-8">
                <p>1 year telemedicine</p>
                <p>Double Arm BP, Body Composition Analysis, Joint & Posture Check, 12 Lead ECG, Vision Screening,
                Hearing Screening, Dental Screening, Cardiovascular Ultrasound Scan, Kidney Function Test, Liver Function Test,
                Full Blood Count, Lipid Profile, Urinalysis, Uric Acid, Fasting/Random Blood Sugar, Malaria Parasite,
                Mental Health Screening.</p>
              </div>
              <div className="flex justify-end">
                <span className="text-white bg-blue-700 absolute top-0 rounded-full py-1 px-2 mt-2">Most Popular</span>
              </div>
            </div>
          <div className= {styles.btnPriceContainer}>
            <Link href="/book"><Button value="Choose Health Plan" className={styles.btnPrice2} /></Link> 
          </div>
        </div>
        <div className="flex justify-content items-center">
          <div className="border border-blue-800 flex flex-col p-5 rounded-xl shadow-lg">
          <div className="flex">
            <Image src={ premiumPlus } alt="premiumplus-plan" width={50} height={50} />
            <div className=" flex flex-col ml-4">
              <h3 className="text-slate-500 text-2xl font-semibold"> Premium Plus</h3>
              <p className="text-slate-800 font-bold"><sup>#</sup>150,000<small className="text-slate-400">/year</small></p>
            </div>
          </div>
          <div className="flex mt-14">
            <div className="flex flex-col">
              <BsCheck2 className="text-yellow-700 text-xl" />
              <BsCheck2 className="text-yellow-700 text-xl" />
            </div>
            <div className=" flex flex-col ml-6 leading-8">
              <p>Everything in Premium</p>
              <p>TB Serology, Hepatitis B, Hepatitis C, Calcium, PSA/Pap Smear, Breast Exam, Testosterone, HbA1C,
              hyroid Function Test, Intelligent Weighing Scale, ESR, Urine mcs, H. pylori</p>
            </div>
          </div>
          <div className= {styles.btnPriceContainer}>
            <Link href="/book"><Button value="Choose Health Plan" className={styles.btnPrice} /></Link> 
          </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}