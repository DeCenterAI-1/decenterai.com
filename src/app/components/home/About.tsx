'use client'
import Star1 from '@/svg/star1'
import Star3 from '@/svg/star3'
import Star2 from '@/svg/star2'
import React, { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { El1 } from '@/svg/el1'
import { El2 } from '@/svg/el2'
import { Globe } from '@/svg/globe'
import { Star4 } from '@/svg/star4'
import { Star5 } from '@/svg/star5'
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion'

const About = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { ref: vRef, inView } = useInView({
    threshold: 0.4,
  })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1])

  const star = useAnimation()
  const globe = useAnimation()

  useEffect(() => {
    if (inView) {
      //star animation
      star.start({
        y: 0,
        transition: {
          duration: 2,
        },
      })

      //globe animation
      globe.start({
        rotateZ: 360,
        transition: {
          duration: 2,
        },
      })
    } else {
      star.start({
        y: '-20vh',
      })

      //globe animation
      globe.start({
        rotateZ: -360,
        transition: {
          duration: 3,
        },
      })
    }
  }, [inView])

  return (
    <motion.div
      id="about"
      ref={ref}
      // style={{
      //   scale: scaleProgress,
      //   opacity: opacityProgress,
      // }}

      className=" h-[60vh] md:h-[80vh] relative z-0"
    >
      <motion.div animate={star} className=" w-[80%] m-auto h-[10%] ">
        <Star1 />
      </motion.div>
      <div className="flex w-[80%] mx-auto relative  h-[90%] ">
        <div className="absolute flex flex-col md:flex-row inset-0 gap-y-4 md:gap-x-4 h-full items-center justify-center z-10">
          <div className="w-full md:w-[40%] backdrop-blur-md px-10 py-10 min-h-[100px] h-[390px] flex flex-col justify-center border border-primary_11 bg-opacity-90 rounded-xl text-primary_1">
            <h3 className="font-logirentBold text-lg md:text-2xl lg:text-3xl">Problem</h3>

            <h2 className="md:text-xl">Consumer AI apps can&apos;t scale</h2>

            <ul className="font-archivo text-xs md:text-sm font-normal mt-4 md:mt-6 list-disc pl-6">
              <li>High inference costs for popular models ($0.30–$0.50)</li>
              <li>High entry pricing (avg $20/m) limits mass adoption</li>
              <li>Low conversion rates (typically 2–3%)</li>
            </ul>
          </div>

          <div className="w-full md:w-[40%]  px-10 py-10 min-h-[100px] h-[390px] flex flex-col justify-center backdrop-blur-md border border-primary_11 bg-opacity-90 rounded-xl text-primary_1">
            <h3 className="font-logirentBold text-lg md:text-2xl lg:text-3xl">
              Solution
            </h3>

            <h2 className="md:text-xl">AI apps now profitable at scale</h2>

            <ul className="font-archivo text-xs md:text-sm font-normal mt-4 md:mt-6 list-disc pl-6">
              <li>Low inference costs using specialized models ($0.01)</li>
              <li>Affordable pricing models ($2 entry or usage-based)</li>
              <li>Significantly higher conversion rates (up to 30%)</li>
            </ul>
          </div>
        </div>
        <motion.div
          // animate={star}
          className=" p-2 w-[10%] h-full flex flex-col justify-end text-white "
        >
          <Star2 />
          <Star3 />
        </motion.div>

        <div className=" w-[80%] h-full z-20 ">
          <div className="h-full w-full   flex justify-center items-center m-auto relative">
            <El1 />
            <div className="absolute  inset-0 ">
              <div className="h-full w-full flex justify-center  items-center">
                <El2 />

                <motion.div
                  // initial={{
                  //   rotate: 0,
                  // }}
                  animate={globe}
                  ref={vRef}
                  className="absolute inset-0  flex items-center justify-center"
                >
                  <Globe />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          // animate={star}
          className=" p-2 w-[10%] h-full flex items-center "
        >
          <Star5 />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
