"use client";


import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export function Appbar() {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between p-4 text-white bg-gray-900 border-b border-gray-800 ">
      <h1 className="text-xl">Dpin-uptime</h1>
      <nav className="flex space-x-4 items-center ">
        
        <SignedIn>
          <Button 
            variant="ghost" 
            className="text-white "
            onClick={() => router.push('/dashboard')}
          >
            Dashboard
          </Button>
          <UserButton />
          
        </SignedIn>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
      </nav>
    </header>
  );
}