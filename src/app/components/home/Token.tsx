import { Rings } from '@/svg/rings'
import { TokenMinor } from '@/svg/tokenMinor'
import { TokenStar } from '@/svg/tokenstar'
import React from 'react'

const Token = () => {
  return (
    <section className="min-h-[80vh] mt-20 relative  ">
      <div className="h-[10%] w-[80%] m-auto flex justify-end ">
        <TokenMinor />
      </div>
      <div className="w-[80%]  h-[10%] m-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-fit text-primary_1">

          <h2 className="font-logirentBold text-2xl md:text-3xl lg:text-4xl leading-loose">Dcen tokens</h2>



          <div className="mt-12 md:mt-20 font-archivo text-base md:text-lg">
            <div className="py-2 pb-11 relative border-l  border-primary_8 ml-2   px-6">
              <div className="absolute -top-7 -left-3 p-1 border border-primary_8 rounded-full bg-primary_13 ">
                <div className="rounded-full p-2 bg-primary_1"></div>
              </div>
              Unified currency across all platform layers, simplifying all network
              interactions.
            </div>
            <div className="py-2 pb-11 relative border-l  border-primary_8 ml-2   px-6">
              <div className="absolute -top-7 -left-3 p-1 border border-primary_8 rounded-full bg-primary_13 ">
                <div className="rounded-full p-2 bg-primary_1"></div>
              </div>
              Rewards contributors and resource providers for the value they add to the
              network.
            </div>
            <div className="py-2 pb-11 relative border-l  border-primary_8 ml-2   px-6">
              <div className="absolute -top-7 -left-3 p-1 border border-primary_8 rounded-full bg-primary_13 ">
                <div className="rounded-full p-2 bg-primary_1"></div>
              </div>
              Grants access to data services, advanced tools, platform upgrades, and
              enterprise integrations.
            </div>
          </div>
        </div>

        <div className="w-full md:w-[50vw] h-full flex justify-center">
          <Rings />
        </div>
      </div>
      <div className="h-[10%] -mt-96 flex justify-end">
        <TokenStar />
      </div>
    </section>
  )
}

export default Token
