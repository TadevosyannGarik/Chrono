"use client";  

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";


interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    const pathname = usePathname();
    const isSignIn = pathname === "/sign-in"

    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <Image 
                        src="/logo.svg"
                        width={152}
                        height={56}
                        alt="Logo"
                    />
                    <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                        <Button variant="secondary">
                            {isSignIn ? "Sign Up" : "Sign In"}
                        </Button>
                    </Link>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default AuthLayout;