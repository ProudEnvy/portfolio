import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import About from '../components/About'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Testimonials from '../components/Testimonials'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Services from '../components/Services'

export default function Home() {
  return (
    <div className="flex   bg-bgColor  text-white leading-7 justify-center">
      <div className="flex md:w-[80%] sm:w-[90%] lg:w-[75%] flex-col items-center justify-center">
        <Header />
        <Navigation />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
