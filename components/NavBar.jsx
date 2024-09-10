"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import {
    SignedOut,
    SignedIn,
    UserButton,
    SignInButton,
    useUser,
    useAuth,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { FaUser } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import PopupComp from "./PopupComp";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const NavBar = () => {
    const [showAuthElements, setShowAuthElements] = useState(false);
    const imgSize = 40;
    const { isLoaded, isSignedIn, user } = useUser();
    const { signOut } = useAuth();
    const router = useRouter();
    let hasShownToast = false;

    useEffect(() => {
        if (isLoaded) {
            setShowAuthElements(true);
        }
    }, [isLoaded]);

    const isAdmin = user?.publicMetadata?.role === "admin";
    useEffect(() => {
        if (isLoaded && user && !hasShownToast) {
            const email = user.primaryEmailAddress?.emailAddress;
            if (email && !email.endsWith("@vitstudent.ac.in")) {
                // Show toast error and sign out immediately
                toast.error("Please log in using your VIT email.");
                hasShownToast = true; // Set flag to prevent multiple toasts
                router.push("/");
                signOut();
            }
        }
    }, [isLoaded, user, router, signOut]);

    return (
        <div className="sticky top-0 z-50 backdrop-blur-sm border flex justify-between items-center p-5">
            <Link
                href={`/`}
                className="flex justify-between items-center gap-2"
            >
                <Image
                    src="/assets/images/mic-logo.jpg"
                    alt="mic-logo"
                    height={imgSize}
                    width={imgSize}
                    className="rounded-full"
                />
                <p className="tracking-tight hidden sm:block">
                    Microsoft Innovations Club
                </p>
                <p className="tracking-wide visible sm:hidden">MIC</p>
            </Link>
            <div className="flex gap-3">
                <PopupComp />
                <ThemeToggle />
                {showAuthElements && isSignedIn && isAdmin && (
                    <Link href={`/admin/`}>
                        <Button
                            className="rounded-full"
                            variant="outline"
                            size="icon"
                        >
                            <MdAdminPanelSettings />
                        </Button>
                    </Link>
                )}
                {showAuthElements && (
                    <>
                        <SignedOut>
                            <SignInButton>
                                <Button
                                    className="rounded-full"
                                    variant="outline"
                                    size="icon"
                                >
                                    <FaUser />
                                </Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;
