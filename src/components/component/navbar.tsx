/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/pkrgKme1SIn
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { JetBrains_Mono } from 'next/font/google'
import { Poppins } from 'next/font/google'

jetbrains_mono({
  subsets: ['latin'],
  display: 'swap',
})

poppins({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

/** Add border radius CSS variable to your global CSS:

:root {
  --radius: 0.5rem;
}
**/
import Link from "next/link"

export function Navbar() {
  return (
    <header className="flex h-16 w-full shrink-0 items-center px-4 ">
      <Link className="mr-6" href="/">
        <div className="flex gap-2">
        <SunIcon className="h-6 w-6" />
        <h1 className="font-bold">MindMate</h1>
        </div>
      </Link>
      <nav className="flex-1 justify-end space-x-4 lg:flex">
        <Link className="font-medium hover:scale-105 duration-150" href="/register">
          Register
        </Link>
        <Link className="font-medium hover:scale-110 duration-150" href="/dashboard">
          Dashboard
        </Link>
      </nav>
    </header>
  )
}

function SunIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}
