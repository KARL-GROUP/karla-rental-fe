import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import CustomerFavs from '@/components/sections/CustomerFavs'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonies from '@/components/sections/CustomerExperience'
import Footer from '@/components/layout/Footer'


export default function Home() {
  return (
    <>
      <section className='bg-[#F5F5F5]'>
        {/* <Navbar /> */}
        {/* <Hero /> */}
        <Services />
        <CustomerFavs />
        <HowItWorks />
        <Testimonies />
        <Footer />
      </section>
    </>
  )
}
