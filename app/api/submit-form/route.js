import { connect } from "@/lib/db";
import FormData from "@/lib/modals/form.modal";

export async function POST(req) {
  try {
    await connect();
    const data = await req.json();

    // Separate department from questions
    const { Department, Questions, ...formFields } = data;

    const newForm = new FormData({
      ...formFields,
      Department, // Add department to top level
      Questions, // Add questions to top level
    });

    await newForm.save();
    return new Response(
      JSON.stringify({
        message: "Form submitted successfully!",
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error submitting form" }),
      { status: 500 }
    );
  }
}
