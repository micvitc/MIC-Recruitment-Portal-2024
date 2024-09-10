"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { CiWarning } from "react-icons/ci";
import { Editor } from "novel";
// import EditorComp from "./EditorComp";
export default function MailerComp() {
    const selectedLength = 10;
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">Send Custom Mail</Button>
            </DialogTrigger>
            <DialogContent className="w-fit pr-10">
                <DialogHeader>
                    <DialogTitle>Send Custom Mail</DialogTitle>
                    <DialogDescription>
                        Send customized mails to {selectedLength} selected
                        recipients.
                    </DialogDescription>
                </DialogHeader>
                {selectedLength !== 0 ? (
                    <div className="flex flex-col gap-3">
                        <Editor />
                        <DialogFooter>
                            <Button variant="outline">Send Mail</Button>
                        </DialogFooter>
                    </div>
                ) : (
                    <p className="flex gap-3 items-center justify-start font-light text-md text-red-500">
                        <CiWarning /> No recipient selected
                    </p>
                )}
            </DialogContent>
        </Dialog>
    );
}
