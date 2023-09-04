"use client"
import Link from "next/link";
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import styles from '../styles/Navbar.module.css';
import { PiPersonArmsSpreadDuotone } from "react-icons/pi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function Modal() {
    setOpen(!open);
  }

  return (
    <header className="bg-white">
      <div className="flex justify-between items-center shadow-xl xl:max-7xl xl:mx-auto py-5 px-[8%] w-full flex-wrap">
        <Link href="/">
          <h1 className="flex lg:text-2xl items-center cursor-pointer">
            CR<span className="text-blue-800"><PiPersonArmsSpreadDuotone /></span>
            Wellness
          </h1>
        </Link>
        <FiMenu className="lg:hidden block cursor-pointer h-6 w-6" onClick={Modal} />
        <nav className={`lg:flex lg:items-center lg:w-auto w-full ${open ? 'block' : 'hidden'}`}>
          <ul className="lg:flex lg:justify-between items-center">
            <li className={styles.list}><Link href="/about">About Us</Link></li>
            <li className={styles.list}><Link href="/price">Health Plans</Link></li>
            <li className={styles.list}><Link href="#footer">Contact Us</Link></li>
            <li className={styles.list}><Link href="/form">Feedback Form</Link></li>
            <li className={styles.btnNav}><Link href="/price">Book now</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
