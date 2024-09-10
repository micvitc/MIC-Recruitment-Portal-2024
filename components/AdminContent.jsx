"use client";
import React from "react";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";
import DataTable from "./DataTable";

const AdminContent = ({ applicants }) => {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) {
        return null;
    }

    const isAdmin = user?.publicMetadata?.role === "admin";
    console.log(isAdmin);

    if (!isSignedIn) {
        return <RedirectToSignIn />;
    } else {
        if (!isAdmin) {
            return (
                <div className="flex items-center justify-center h-[88vh] p-4 text-center">
                    Access Denied! You are not authorized to view this webpage.
                </div>
            );
        }
    }

    return <DataTable data={applicants} />;
};

export default AdminContent;
