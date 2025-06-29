import { Grid } from '@/svg/grid'
import Image from 'next/image'
import { AiOutlineLinkedin, AiOutlineBehance } from 'react-icons/ai'
import React from 'react'
import Rock1 from '@/svg/Rock1'
import Rock2 from '@/svg/Rock2'
import Rock3 from '@/svg/Rock3'
import Rock4 from '@/svg/Rock4'
import Rock5 from '@/svg/Rock5'

const Mail = () => {
  return (
    <section id="team" className="h-[70vh]   relative  mb-14 ">
      <div className="flex w-full h-[20%] items-center gap-10">
        <Rock1 />
        <Rock2 />
      </div>

      <div className="h-[60%] flex justify-center items-center">
        <Rock3 />
      </div>
      <div className="h-[20%] flex justify-end items-end gap-10">
        <Rock5 />
        <Rock4 />
      </div>

      <div className="absolute inset-0">
        <div className="w-[80%] m-auto flex flex-col justify-center items-center h-[60vh] mt-28 gap-6 ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-logirentBold text-center">
            Ready to unlock the future?
          </h2>
          <p className="text-primary_6 text-base md:text-lg mt-2 font-archivo font-semibold text-center">
            Contact us today to discover the unlimited potential of AI.
          </p>
          <div className="w-[90%] max-w-[450px] flex">
            <a
              href="https://form.typeform.com/to/oGnlAAyV"
              target="_blank"
              rel="noopener noreferrer"

              className="text-white font-semibold text-xs md:text-sm bg-primary_10 w-full h-12 md:h-14 rounded-xl flex items-center justify-center hover:bg-primary_10/90 transition-colors">

              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mail
