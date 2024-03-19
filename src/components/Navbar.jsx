import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import {useSession} from 'next-auth/react'  Forma desde el front

async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="flex justify-between items-center bg-gray-950 text-white px-24 py-3">
      <h1 className="text-xl font-bold">NextAuth</h1>

      <ul className="flex gap-x-2">
        {
        !session?.user ? (
          <>
            <li>
              <link href="/">Home</link>
            </li>
            <li>
              <link href="/auth/login">Login</link>
            </li>
            <li>
              <link href="/auth/register">Register</link>
            </li>
          </>
        ) : (
            <>
             <li>
              <link href="/dashboard">Dashboard</link>
            </li>
            <li>
              <link href="/api/auth/signout">Logout</link>
            </li>
            </>
        )
    }
      </ul>
    </nav>
  );
}
