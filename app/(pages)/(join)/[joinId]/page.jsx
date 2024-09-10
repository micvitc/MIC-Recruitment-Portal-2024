"use client";
// React import
import React from "react";
import { useRouter } from "next/navigation";
// Constant import
import { reviews } from "@/constants/index";

// Component imports
import NavBar from "@/components/NavBar";
import FormComp from "@/components/FormComp";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const JoinDepartmentPage = ({ params }) => {
    const router = useRouter();
    const department = reviews.find((dept) => {
        return dept.id == params.joinId;
    });

    if (!department) {
        if (!params.joinId.startsWith("clerk_")) {
            toast.error("No Department Found");
        }
        router.push("/");
    } else {
        return (
            <div>
                <NavBar />
                <div>
                    <FormComp dept={department} />
                </div>
                <Footer />
            </div>
        );
    }
};

export default JoinDepartmentPage;
