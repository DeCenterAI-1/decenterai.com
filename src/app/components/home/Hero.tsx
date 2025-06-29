'use client'
import Spiral from '@/svg/spiral'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { RxHamburgerMenu } from 'react-icons/rx'

const Hero = () => {
  const [menu, setMenu] = useState<boolean>(false)
  const [sticky, setSticky] = useState<boolean>(false)

  // Handle scroll event to make nav sticky
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    // Special case for hero section
    if (id === '#/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setMenu(false)
      return
    }

    const element = document.querySelector(id)
    if (element) {
      setMenu(false) // Close mobile menu if open
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section
      id="/"
      className="min-h-[70vh] md:min-h-[80vh flex justify-end relative z-10">
      {menu && (
        <div className={`fixed top-0 w-full z-[10000] ${sticky ? 'mt-0' : ''}`}>
          <div className="w-[90%] h-[70vh] bg-primary_12 m-auto mt-2 border border-primary_8 rounded-xl shadow-[0px_-2px_16px_0px_#4a5568] py-6 px-4 text-primary_1">
            <div className="h-[10%] flex">
              <div className="w-[50%] h-full  relative">
                <Link href="/">
                  {' '}
                  <Image
                    src="/logo.png"
                    alt="logo image"
                    fill={true}
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </Link>
              </div>
              <div className="w-[50%] h-full  flex justify-end items-center">
                <LiaTimesSolid size={30} onClick={() => setMenu(!menu)} />
              </div>
            </div>

            <div className="h-[70%]">
              <ul className="h-full w-full text-primary_7 text font-archivo">
                <Link href="#/" onClick={(e) => scrollToSection(e, '#/')}>
                  <li className="h-[25%] w-full flex items-center hover:text-primary_1 transition-colors">
                    Home
                  </li>
                </Link>
                <Link href="#about" onClick={(e) => scrollToSection(e, '#about')}>
                  <li className="h-[25%] w-full flex items-center hover:text-primary_1 transition-colors">
                    About Us
                  </li>
                </Link>
                <Link href="#team" onClick={(e) => scrollToSection(e, '#team')}>
                  <li className="h-[25%] w-full flex items-center hover:text-primary_1 transition-colors">
                    Team
                  </li>
                </Link>
                <Link href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                  <li className="h-[25%] w-full flex items-center hover:text-primary_1 transition-colors">
                    Contact US
                  </li>
                </Link>
              </ul>
            </div>
            <div className="h-[20%] text-center cursor-pointer">
              <Link target="_blank" href="https://form.typeform.com/to/oGnlAAyV">
                <button className="bg-primary_11 w-full text-xs md:text-sm text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-full hover:bg-primary_11/90 transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <Spiral />
      <div className="absolute inset-0 bg-primary_13 bg-opacity-50 z-10">
        <div
          className={`w-[80%] h-[10%] m-auto ${sticky ? 'fixed top-4 left-[10%] right-[10%] z-[9999]' : 'mt-[2%]'} rounded-full bg-primary_13 px-10 border-[1px] border-primary_12 bg-opacity-80 text-white flex justify-between transition-all duration-300 shadow-lg`}>
          <div className="w-[50%] md:w-[10%] relative">
            <Image
              src="/logo.png"
              alt="logo image"
              fill={true}
              style={{
                objectFit: 'contain',
              }}
            />
          </div>

          <div className="hidden md:flex space-x-12 justify-center font-primaryArchivo w-[60%] items-center">
            <Link href="#/" onClick={(e) => scrollToSection(e, '#/')}>
              <div className="text-primary_8 font-semibold text-sm md:text-base cursor-pointer hover:text-primary_1 transition-colors">
                Home
              </div>
            </Link>
            <Link href="#about" onClick={(e) => scrollToSection(e, '#about')}>
              <div className="text-primary_8 font-semibold text-sm md:text-base cursor-pointer hover:text-primary_1 transition-colors">
                About Us
              </div>
            </Link>
            <Link href="#team" onClick={(e) => scrollToSection(e, '#team')}>
              <div className="text-primary_8 font-semibold text-sm md:text-base cursor-pointer hover:text-primary_1 transition-colors">
                Team
              </div>
            </Link>
            <Link href="#contact">
              <div className="text-primary_8 font-semibold text-md cursor-pointer hover:text-primary_1 ">
                Contact Us
              </div>
            </Link>
          </div>

          <div className=" w-[50%] md:w-[20%] h-full flex items-center justify-end">
            <Link
              target="_blank"
              href="https://form.typeform.com/to/oGnlAAyV"
              className="hidden md:block cursor-pointer">
              <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-xl">
                Get Started
              </button>
            </Link>
            <RxHamburgerMenu
              size={30}
              className="cursor-pointer md:hidden"
              onClick={() => setMenu(!menu)}
            />
          </div>
        </div>

        <div className="h-[85%] w-[80%] m-auto flex flex-col justify-center gap-6 ">
          <h1 className="font-logirentBold text-2xl md:text-5xl text-primary_1 leading-normal">
            Decentralized AI Infrastructure <br /> for web2 and Web3 Applications.
          </h1>
          <p className="font-archivo text-sm text-primary_6 leading-loose">
            Integrate AI into Apps and Dapps Seamlessly.
          </p>
          <div className="flex space-x-9 md:space-x-10  md:mt-10">
            <Link target="_blank" href="https://form.typeform.com/to/oGnlAAyV">
              <button className="bg-primary_11 text-sm text-primary_1 font-normal font-primaryArchivo cursor-pointer rounded-3xl p-3 px-6">
                Get Started
              </button>
            </Link>

            <Link target="_blank" href="https://decenter-ai.gitbook.io/whitepaper/">
              <button className="border border-primary_11 text-sm text-primary_1 font-normal font-primaryArchivo hover:border-white cursor-pointer rounded-3xl p-3 px-6">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
