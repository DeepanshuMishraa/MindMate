"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const page = () => {
    const session = useSession();

    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm hover:scale-110 duration-200">
                <div className="flex justify-center mb-4">
                    <Image
                        src={session?.data?.user?.image ? session.data.user.image : "/default-profile.png"}
                        alt="profile"
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-lg font-bold mb-1 text-black">{session?.data?.user?.name}</h2>
                    <p className="text-gray-600">Email: {session?.data?.user?.email}</p>
                </div>
            </div>
        </div>
    )
}

export default page