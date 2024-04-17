"use client";
import { Dashboard } from '@/components/component/dashboard';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

function Page() {
    const { data: session } = useSession();

    return (
        <div>
            <Dashboard/>
        </div>
    );
}

export default Page;
