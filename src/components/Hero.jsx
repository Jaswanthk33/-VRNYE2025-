import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from "framer-motion";
import { AuroraBackground } from './ui/aurora-background';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  const [timeLeft, setTimeLeft] = useState(getTimeUntilNewYear())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilNewYear())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function getTimeUntilNewYear() {
    const now = new Date()
    const newYear = new Date(2025, 0, 1)
    const difference = newYear.getTime() - now.getTime()

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const seconds = Math.floor((difference / 1000) % 60)

    return { days, hours, minutes, seconds }
  }
  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 1 })
  }, [])

  return (
    // <section className="w-full nav-height bg-black relative">
    //   <div className="h-5/6 w-full flex-center flex-col">
    //     <p id="hero" className="hero-title">Tirupati's Biggest NYE</p>
    //     <div className="flex justify-centerw-full max-w-4xl mx-auto px-4">
    //       {/* <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
    //         <source src={videoSrc} type="video/mp4" />
    //       </video> */}
    //       <img src="./assets/images/vibrantreload.png" alt="title"/>
    //     </div>
    //   </div>

    //   {/* <div
    //     id="cta"
    //     className="flex flex-col items-center opacity-0 translate-y-20"
    //   >
    //     <a href="#highlights" className="btn">Buy</a>
    //     <p className="font-normal text-xl">From $199/month or $999</p>
    //   </div> */}
    //   <div
    //     id="cta"
    //     className="flex justify-center space-x-20 items-center opacity-0 translate-y-20"
    //   >
    //     <div className = "flex flex-col items-center">
    //     <p className="font-semibold text-gray-100 text-xl mb-2">When</p>
    //     <p className="font-semibold text-gray-100 text-xl mb-2">Dec 31 2024, 8 PM</p>
    //     </div>
    //     <div className = "flex flex-col items-center font-semibold text-gray-100 text-xl mb-2">
    //     <p>Where</p>
    //     <p>To be announced</p>
    //     </div>        
    //   </div>
    //   {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
    //       <div className="flex items-center justify-center space-x-2 bg-gray-900/50 p-4 rounded-lg">
    //         <CalendarIcon className="h-6 w-6 text-yellow-400" />
    //         <span>December 31, 2024</span>
    //       </div>
    //       <div className="flex items-center justify-center space-x-2 bg-gray-900/50 p-4 rounded-lg">
    //         <ClockIcon className="h-6 w-6 text-yellow-400" />
    //         <span>8:00 PM - 2:00 AM</span>
    //       </div>
    //       <div className="flex items-center justify-center space-x-2 bg-gray-900/50 p-4 rounded-lg">
    //         <MapPinIcon className="h-6 w-6 text-yellow-400" />
    //         <span>SV Gardens, Tirupati</span>
    //       </div>
    //     </div> */}
    //     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
    //       <div className="bg-gray-900/50 p-6 rounded-lg">
    //         <span className="text-4xl font-bold text-yellow-400">{timeLeft.days}</span>
    //         <p className="text-sm uppercase mt-1">Days</p>
    //       </div>
    //       <div className="bg-gray-900/50 p-6 rounded-lg">
    //         <span className="text-4xl font-bold text-yellow-400">{timeLeft.hours}</span>
    //         <p className="text-sm uppercase mt-1">Hours</p>
    //       </div>
    //       <div className="bg-gray-900/50 p-6 rounded-lg">
    //         <span className="text-4xl font-bold text-yellow-400">{timeLeft.minutes}</span>
    //         <p className="text-sm uppercase mt-1">Minutes</p>
    //       </div>
    //       <div className="bg-gray-900/50 p-6 rounded-lg">
    //         <span className="text-4xl font-bold text-yellow-400">{timeLeft.seconds}</span>
    //         <p className="text-sm uppercase mt-1">Seconds</p>
    //       </div>
    //     </div>

    // </section>
    <AuroraBackground>
      <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
    <section className="min-h-screen flex items-center justify-center bg-black text-white p-4 sm:p-6 lg:p-8">
      
        
          <div className="w-full max-w-4xl mx-auto text-center">
          {/* <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-4 sm:mb-6">
            Tirupati's Biggest Event
          </h2> */}
          
          <div className="relative w-full max-w-lg mx-auto mb-6 sm:mb-8">
            <img
              src="./assets/images/vibrantreload.png"
              alt="Vibrant Reload NYE 2025"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 sm:mb-8">
            <div className="flex items-center justify-center space-x-2 bg-gray-900/50 p-3 rounded-lg">
              <Calendar className="h-5 w-5 text-yellow-400" />
              <span className="text-sm sm:text-base">December 31, 2024</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-gray-900/50 p-3 rounded-lg">
              <Clock className="h-5 w-5 text-yellow-400" />
              <span className="text-sm sm:text-base">8:00 PM - 12:00 AM</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-gray-900/50 p-3 rounded-lg">
              <MapPin className="h-5 w-5 text-yellow-400" />
              <span className="text-sm sm:text-base">K V S Sports Park, Tummalagunta</span>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 sm:mb-8">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="bg-gray-900/50 p-4 rounded-lg">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
                  {item.value}
                </span>
                <p className="text-xs sm:text-sm uppercase mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <button className="w-full sm:w-auto bg-yellow-400 text-black px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">
            Book Your Tickets Now
          </button> */}
        </div>
        
    </section>
    </motion.div>
      
    </AuroraBackground>
      
  )
}

export default Hero