import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Telemedicine website',
  description: 'Built with next app|Tailwindcss|Typescript | </💖>',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar/>
        {children}
      
        <Link href="#">
        <div className='flex justify-end items-end sticky p-4 lg:p-8'>
          <BsFillArrowUpSquareFill className='text-blue-900 text-2xl lg:text-3xl' />
        </div>
        </Link>
          <Footer />
      </body>
    </html>
  )
}
