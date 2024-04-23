import { AuroraBackgroundDemo } from '@/components/aurora'
import { LoginForm } from '@/components/component/LoginForm'
import { Navbar } from '@/components/component/navbar'
import { HeroHighlightDemo } from '@/components/herohighlight'
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {

  return (
    <>
    <Navbar/>
   <HeroHighlightDemo/>
   </>
  )
}

export default page
