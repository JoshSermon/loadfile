import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { ThemeToggler } from './ThemeToggler';

function Header() {
    return <header className='flex items-center justify-between'>
    <Link href="/" className='flex items-center space-x-2'>
        <div className='bg-[#0160FE] w-fit' >
            <Image 
            src="https://www.shareicon.net/data/128x128/2016/05/06/760840_zip_512x512.png" 
            alt="logo"
            className='invert'
            height={50}
            width={50}
            />
        </div>
    <h1 className='font-bold text-xl'>Loadfile</h1>
    </Link>


    <div className="px-5 flex space-x-2 items-center">
        <ThemeToggler />

        <UserButton afterSignOutUrl='/' />

        <SignedOut>
            <SignInButton afterSignInUrl='/dashboard"'mode='modal'/>
        </SignedOut>

         {/* Theme toggler */}
          {/* New Text */}
    </div>
    </header>
}

export default Header

// Stopped at 52:30