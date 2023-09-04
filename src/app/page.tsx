  "use client"
import Image from "next/image";
import doctor from '../../public/Doctors-pana.png'
import Cards from "@/components/Cards";
import Button from "@/components/Button";
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Testimonial from "@/components/Testimonial";
import Subscription from "@/components/Subscription";
import Rating from "@/components/Rating";
import Trusted from "@/components/Trusted";
import { motion } from "framer-motion"
import Meet from "@/components/Meet";

export default function homepage() {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <section className="slide">
            <h2 className={styles.head}>
              Take Charge of Your Health.<br/> Do More. Be More.
            </h2>
            <p className={styles.headPara}>Explore a complete health check. Walk in,
              receive a thorough health assessment, along with practical tips for a healthier you.</p>
            <Link href="/price">
              <div className="mt-8">
                <Button value="Click Here To Get Started" className={styles.btnHome} />
              </div>
            </Link>
          </section>
          <section className= "lg:ml-28">
            <Image src={doctor} alt="doctor-cover" width={850} height={400}/>
          </section>
        </div>
        <div>
          <Cards/>
        </div>
        <Testimonial />
        <Rating />
        <Trusted />
        <Meet/>
        <Subscription />
      </div>
    </>
    
    
  )
}
