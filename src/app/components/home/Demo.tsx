import { Rain } from '@/svg/rain'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Demo = () => {
  return (
    <section className="min-h-[80vh]  relative flex justify-end">
      <Rain />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] relative border backdrop-blur-md border-primary_8 bg-opacity-90 rounded-xl shadow-[0px_-2px_16px_0px_#4a5568] py-10 px-10 text-primary_1">
          <h2 className="font-logirentBold text-lg md:text-2xl lg:text-3xl">
            Unified DePIN for AI
          </h2>
          <ul className="font-archivo leading-loose text-xs md:text-sm font-normal mt-4 md:mt-6 list-disc pl-6">
            <li>Multi-layered architecture</li>
            <li>Agnostic Design</li>
            <li>API Native</li>
            <li>Zero-cost Entry</li>
            <li>Integrated Data Services</li>
          </ul>

          <Link target="_blank" href="https://form.typeform.com/to/oGnlAAyV">
            <button className="bg-primary_10 text-primary_1 font-semibold text-xs md:text-sm py-2 px-3 mt-4 md:mt-6 cursor-pointer rounded-xl hover:bg-primary_10/90 transition-colors">
              Get Started
            </button>
          </Link>

          <div className="absolute right-20 top-3 scale-125 w-[25%] h-full hidden md:block ">
            <Image
              src="/pc.png"
              alt="decenter image"
              fill={true}
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo
