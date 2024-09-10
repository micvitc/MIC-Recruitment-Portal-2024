// React import
import React from "react";

// Component imports
import NavBar from "@/components/NavBar";
import Departments from "@/components/Departments";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Home = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Departments />
            <Footer />
        </div>
    );
};

export default Home;
