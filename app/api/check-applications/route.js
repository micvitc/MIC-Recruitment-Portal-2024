import { NextResponse } from "next/server";
import { connect } from "@/lib/db";
import FormData from "@/lib/modals/form.modal";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { message: "Email is required" },
      { status: 400 }
    );
  }

  try {
    await connect();
    const count = await FormData.countDocuments({
      Email: email,
    });

    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error("Error checking applications:", error);
    return NextResponse.json(
      {
        message:
          "Internal server error inside check-applications dir",
      },
      { status: 500 }
    );
  }
}
