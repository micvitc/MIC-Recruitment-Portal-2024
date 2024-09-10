import { connect } from "@/lib/db";
import FormData from "@/lib/modals/form.modal";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    const department = searchParams.get("department");

    if (!email || !department) {
        return new Response(
            JSON.stringify({ error: "Missing email or department" }),
            { status: 400 }
        );
    }

    try {
        await connect();
        const count = await FormData.countDocuments({
            Email: email,
            Department: department,
        });

        return new Response(
            JSON.stringify({ submitted: count > 0 }),
            { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Database query failed" }),
            { status: 500 }
        );
    }
}
