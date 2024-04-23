"use client";
import { Navbar } from '@/components/component/DashNav';
import Dashboard from '@/components/component/dashboard';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

function Page() {
    const { data: session } = useSession();

    return (
        <div>
            <Navbar/>
            <Dashboard/>
        </div>
    );
}

export default Page;
