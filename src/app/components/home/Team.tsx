import { Grid } from '@/svg/grid'
import Image from 'next/image'
import { AiOutlineLinkedin } from 'react-icons/ai'
import React from 'react'
import Link from 'next/link'

const Team = () => {
  // First 3 team members (top row)
  const topRowMembers = [
    {
      name: 'Victor',
      role: 'CEO',
      image: '/victor.png',
      linkedin: 'https://www.linkedin.com/in/victor-kaycee/',
      bio: 'Founded SureCrypto a blockchain service company with projects like GamerHub, Kryptotoday, Finality.',
    },
    {
      name: 'Hiro',
      role: 'CTO',
      image: '/hiro.png',
      linkedin: 'https://www.linkedin.com/in/laciferin/',
      bio: 'Data scientist and machine learning engineer with over 5 years of experience at AIChats, PYOR, HyperTest.',
    },
    {
      name: 'Glory',
      role: 'CMO',
      image: '/glory.png',
      linkedin: 'https://www.linkedin.com/in/glorylucas/',
      bio: 'Founded Mindspace solutions, a Web3 marketing agency with clients like Private AI, YOM, Riva Metaverse',
    },
  ]

  // Bottom team member (centered below)
  const bottomMember = {
    name: 'William',
    role: 'DEV',
    image: '/nonso.png',
    linkedin: 'https://www.linkedin.com/in/codypharm/',
    bio: 'Founding dev at FreshCoast Blockchain and OpenSafari. Core Contributor at RnDAO.',
  }

  // Define member type
  type TeamMember = {
    name: string
    role: string
    image: string
    linkedin: string
    bio: string
  }

  // Team card component for reuse
  const TeamCard = ({ member }: { member: TeamMember }) => (
    <div className="relative bg-black border border-primary_8 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] h-full flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        {/* Profile image - optimized dimensions */}
        <div className="mb-5 flex justify-center">
          <div className="relative w-32 h-32 sm:w-28 sm:h-28 md:w-32 md:h-32 border-2 border-primary_8/30 overflow-hidden">
            <Image
              src={member.image}
              alt={`${member.name} - ${member.role} at DECENTER`}
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
        </div>

        {/* Name and Role with LinkedIn icon */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-primary_1 font-archivo font-semibold text-base md:text-lg">
              {member.name} <span className="text-gray-400">({member.role})</span>
            </h3>
          </div>
          <Link
            href={member.linkedin}
            target="_blank"
            className="text-primary_7 hover:text-primary_1 transition-colors"

aria-label={`${member.name}'s LinkedIn profile`}>



            <AiOutlineLinkedin size={24} />
          </Link>
        </div>

        {/* Bio text with min-height to help even out cards */}


<p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-grow min-h-[3rem]">{member.bio}</p>

      </div>
    </div>
  )

  return (
    <section id="team" className="min-h-[70vh] h-auto -mt-44 relative mb-14 z-0">
      {/* Background with proper z-index */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/gridone.png"
          alt="Background grid"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content container with z-index to appear above background but below navbar */}
      <div className="relative z-10 container mx-auto px-4 pt-6">
        <h2 className="font-logirentBold text-3xl md:text-4xl lg:text-5xl text-center pt-20 mb-12 md:mb-16 text-primary_1">
          TEAM
        </h2>

        <div className="max-w-7xl mx-auto">
          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First three team members */}
            {topRowMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}

            {/* William's card with conditional positioning */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-1 lg:col-start-2">
              <TeamCard member={bottomMember} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
