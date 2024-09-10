"use client";
import React from "react";
import NavBar from "@/components/NavBar";

// Grid Component
import { BentoCard } from "@/components/magicui/bento-grid";
import { PiGlobeThin } from "react-icons/pi";
import { PiAndroidLogoThin } from "react-icons/pi";

import DeptHero from "@/components/DeptHero";

const features = [
    {
        Icon: PiAndroidLogoThin,
        name: "App Development",
        description:
            "Designing and coding applications for mobile devices and computers",
        href: "/7349e360-afdf-476d-9af8-20d680067f0b",
        cta: "Join Department",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: PiGlobeThin,
        name: "Web Development",
        description:
            "Creating and maintaining websites, involving frontend, backend, and database management",
        href: "/2bd84c7a-ee2a-48b7-9568-6a4b094d3618",
        cta: "Join Department",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
];

const page = () => {
    return (
        <div>
            <NavBar />
            <DeptHero dept={{ name: "Development Departments" }} />

            <div className="m-5 flex gap-5 items-center justify-center">
                <BentoCard key={features[0].name} {...features[0]} />
                <BentoCard key={features[1].name} {...features[1]} />
            </div>
        </div>
    );
};

export default page;
