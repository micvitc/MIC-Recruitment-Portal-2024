'use client';
// React imports
import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AllDepartments from "@/components/AllDepartments";
import PopupComp from "@/components/PopupComp"; 

const DepartmentsListPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {

    const hasSeenPopup = localStorage.getItem("hasSeenDepartmentsPopup");

    if (!hasSeenPopup) {
      setIsDialogOpen(true);
      localStorage.setItem("hasSeenDepartmentsPopup", "true"); 
    }
  }, []);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <NavBar />
      <span className="hidden">
      {isDialogOpen && <PopupComp isOpen={isDialogOpen} onClose={handleDialogClose} />}
      </span>
      <AllDepartments />
      <Footer />
    </div>
  );
};

export default DepartmentsListPage;
