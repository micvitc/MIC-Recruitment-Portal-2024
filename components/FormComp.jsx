import React, { useState, useEffect } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Loader } from "lucide-react";
import { QuestionnaireData } from "@/constants";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import DeptHero from "@/components/DeptHero";

const FormComp = ({ dept }) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { isLoaded, user } = useUser();
    const router = useRouter();
    const [alreadySubmitted, setAlreadySubmitted] = useState(false);
    const [loading, setLoading] = useState(true);

    const [photoQs, setPhotoQs] = useState(false);

    let questionData = QuestionnaireData.filter(
        (qd) => qd.department === dept.name
    )[0].questions;

    if (dept.name === "Photography") {
        if (!photoQs) {
            questionData = questionData.photography;
        } else {
            questionData = questionData.videography;
        }
    }

    const schemaObj = {
        Name: z.string(),
        RegistrationNumber: z.string(),
        Email: z.string(),
        Phone: z
            .string()
            .min(1, "Phone is required")
            .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
        Reason: z.string().min(1, "Reason is required"),
        Projects: z.string().min(1, "Projects is required"),
    };

    questionData.forEach((qd) => {
        schemaObj[qd] = z.string().optional();
    });

    const formSchema = z.object(schemaObj);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Name: "",
            RegistrationNumber: "",
            Email: "",
            Phone: "",
            Reason: "",
            Projects: "",
        },
    });

    useEffect(() => {
        if (isLoaded && user) {
            const fullName = user.fullName;
            const nameLength = fullName.split(" ").length;
            const regNo = fullName.split(" ")[nameLength - 1];
            const name = fullName.split(" ").slice(0, 2).join(" ");
            const email = user.primaryEmailAddress.emailAddress;

            form.setValue("Name", name);
            form.setValue("RegistrationNumber", regNo);
            form.setValue("Email", email);

            async function checkSubmission() {
                const res = await fetch(
                    `/api/check-department-submission?email=${email}&department=${dept.name}`
                );
                const data = await res.json();
                setAlreadySubmitted(data.submitted);
                setLoading(false);
            }

            checkSubmission();
        }
    }, [isLoaded, user, dept.name, form]);

    const handleSubmit = async (values) => {
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            const email = values.Email;
            console.log("Email is: ", email);
            const checkResponse = await fetch(
                `/api/check-applications?email=${email}`
            );
            const { count } = await checkResponse.json();

            if (count >= 2) {
                setErrorMessage(
                    "You can only submit applications to two departments."
                );
                setIsSubmitting(false);
                return;
            }

            const formData = {
                ...values,
                Department: dept.name,
                Questions: questionData.reduce((acc, qd) => {
                    acc[qd] = values[qd];
                    return acc;
                }, {}),
            };

            const response = await fetch("/api/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push("/");
            } else {
                const data = await response.json();
                setErrorMessage(`Error: ${data.message}`);
            }
        } catch (error) {
            setErrorMessage("An error occurred while submitting the form.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center m-10">
                <Loader size={25} className="animate-spin" />
            </div>
        );
    }

    if (alreadySubmitted) {
        return (
            <div className="flex justify-center items-center m-10">
                <p>Your response has been recorded.</p>
            </div>
        );
    }

    return (
        <div>
            <DeptHero dept={dept} photoQs={photoQs} setPhotoQs={setPhotoQs} />
            <div className="flex flex-col justify-center items-center m-10">
                <Form {...form}>
                    <form
                        className="flex flex-col gap-5 min-w-[30%] max-w-[50vh]"
                        onSubmit={form.handleSubmit(handleSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="Name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 dark:text-gray-300">
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter your name"
                                            disabled
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 dark:text-lightRed" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="RegistrationNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 dark:text-gray-300">
                                        Registration Number
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter your registration number"
                                            disabled
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 dark:text-lightRed" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="Email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 dark:text-gray-300">
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter your college email"
                                            disabled
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 dark:text-lightRed" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="Phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 dark:text-gray-300">
                                        Phone Number
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your phone number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 dark:text-lightRed" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="Reason"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 dark:text-gray-300">
                                        Why do you want to join the{" "}
                                        {dept.name === "Photography"
                                            ? "this"
                                            : dept.name}{" "}
                                        department?
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter your reason"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 dark:text-lightRed" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="Projects"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 dark:text-gray-300">
                                        What projects have you worked on?
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter project / github link"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 dark:text-lightRed" />
                                </FormItem>
                            )}
                        />
                        {questionData.map((qd) => (
                            <FormField
                                key={qd}
                                control={form.control}
                                name={qd}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 dark:text-gray-300">
                                            {qd}
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter your response"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 dark:text-lightRed" />
                                    </FormItem>
                                )}
                            />
                        ))}

                        <Button className="w-full" type="submit">
                            {isSubmitting ? (
                                <>
                                    <Loader
                                        size={20}
                                        className="animate-spin mr-1"
                                    />
                                    Submitting...
                                </>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                        {errorMessage && (
                            <p className="text-red-500 dark:text-lightRed mt-2">
                                {errorMessage}
                            </p>
                        )}
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default FormComp;
