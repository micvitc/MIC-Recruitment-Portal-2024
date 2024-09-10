"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { AiOutlineNotification } from "react-icons/ai";
import { PiArrowRightThin } from "react-icons/pi";

const PopupComp = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-fit h-fit">
                <DialogHeader>
                    <DialogTitle>Preference Notice</DialogTitle>
                    <DialogDescription>
                        This information is crucial for applying for departments
                        at Microsoft Innovations Club.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col justify-center items-start gap-1">
                    <p className="flex gap-1 items-center justify-center">
                        <PiArrowRightThin />
                        The first department enrolled will be considered as your
                        first preference.
                    </p>
                    <p className="flex gap-1 items-center justify-center">
                        <PiArrowRightThin />
                        You can at most enroll for two departments.
                    </p>
                </div>
                <Button
                    className="mt-1"
                    onClick={() => {
                        onClose(); // Close the dialog when clicked
                    }}
                >
                    Got it
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default PopupComp;
