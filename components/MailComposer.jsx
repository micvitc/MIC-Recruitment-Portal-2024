"use client";
import { useState } from "react";
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
import { Input } from "./ui/input";

export default function MailComposer({ recipients, handleRowSelection }) {
    const [payloadData, setPayloadData] = useState({
        subject: "",
        body: "",
    });
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Custom Mail</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Send Custom Mail</DialogTitle>
                    <DialogDescription>
                        Send customized mails to {recipients} selected
                        recipients.
                    </DialogDescription>
                </DialogHeader>
                {recipients !== 0 ? (
                    <div className="flex flex-col gap-3 justify-between">
                        <div>
                            <Input
                                placeholder="Subject"
                                onChange={(e) =>
                                    setPayloadData({
                                        ...payloadData,
                                        subject: e.target.value,
                                    })
                                }
                            />
                            <Input
                                placeholder="Body"
                                onChange={(e) =>
                                    setPayloadData({
                                        ...payloadData,
                                        body: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <DialogFooter>
                            <Button
                                type="submit"
                                onClick={() => handleRowSelection(payloadData)}
                            >
                                Send Mail
                            </Button>
                        </DialogFooter>
                    </div>
                ) : (
                    <p>
                        <p className="flex gap-3 items-center justify-start font-light text-md text-red-500">
                            <CiWarning /> No recipients selected
                        </p>
                    </p>
                )}
            </DialogContent>
        </Dialog>
    );
}
