import Link from "next/link";
import { PiPersonArmsSpreadDuotone } from "react-icons/pi";
import styles from '../styles/Footer.module.css'
import Image from "next/image";
import apple from '../../public/apple-health.png'
import google from '../../public/google-health.png'
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FcGlobe, FcPhoneAndroid } from "react-icons/fc";
import { MdLocationCity } from "react-icons/md";

export default function Footer() {
  return (
    <section className={styles.footerContainer}>
      <footer className={styles.footer} id="footer">
      <div>
        <Link href="/">
          <h2 className="flex text-2xl items-center">
            CR<PiPersonArmsSpreadDuotone className="text-blue-800" />
            Wellness
          </h2>
        </Link>
          <p className={styles.footerPara}>Empower Yourself with Premier Healthcare.<br /> Connect with a Doctor Today.</p>
          <div className="flex item-center">
            <p className={styles.footerPara}><FcPhoneAndroid className="text-2xl" />08012345678</p>
          </div>
          <div className="flex item-center">
            <span className={styles.footerPara}><MdLocationCity className="text-white text-2xk" />Lagos, Nigeria</span>
          </div>
          <div className="flex item-center">
            <span className={styles.footerPara}><FcGlobe  className="text-2xl"/>www.cr.com</span>
          </div>
      </div>

      <div>
        <h2 className="text-sm lg:text-2xl">Company</h2>
        <ul>
          <Link href="/about"><li className={styles.footerPara}>Abou Us</li></Link>
          <Link href="#footer"><li className={styles.footerPara}> Contact Us</li></Link>
          <Link href="/price"><li className={styles.footerPara}>Health Plans</li></Link>
          <Link href="/form"><li className={styles.footerPara}>Feed-back Form</li></Link>
          
        </ul>
      </div>
      <div>
        <h2 className="text-sm lg:text-2xl">Legal</h2>
        <ul>
          <Link href="#"><li className={styles.footerPara}>Privacy Policy</li></Link>
          <Link href="#"><li className={styles.footerPara}>Terms and Conditions</li></Link>
          <Link href="/price"><li className={styles.footerPara}>Informed Consent</li></Link>
        </ul>
      </div>
      <div>
        <h2 className="text-sm lg:text-2xl">Download Our App</h2>
          <Image src={apple} alt="apple-img" width={200} height={100} className={styles.img} />
        <Image src={google} alt="apple-img" width={200} height={100} className={styles.img} />
      </div>
      </footer>
      <div className="bg-black p-6 flex  justify-center items-center text-2xl">
        <span><BsFacebook className="text-blue-800 ml-4" /></span>
        <span><BsYoutube className="text-red-800 ml-4"/></span>
        <span><AiFillLinkedin className="text-blue-800 ml-4" /></span>
        <span><BsTwitter className="text-blue-800 ml-4" /></span>
      </div>
      
      <p className={styles.footerPara1}> <Link href="https://github.com/ijayhub">Ijeoma © 2023</Link> </p>
  </section>
    
  )
}