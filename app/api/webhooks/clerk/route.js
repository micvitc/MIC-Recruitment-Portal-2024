import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { createUser } from "../../../../lib/actions/user.action";

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error("WEBHOOK_SECRET is not set.");
    return new Response("Internal Server Error", {
      status: 500,
    });
  }

  // Extract headers from the request
  const headers = req.headers;
  const svix_id = headers.get("svix-id");
  const svix_timestamp = headers.get("svix-timestamp");
  const svix_signature = headers.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error("Missing svix headers");
    return new Response(
      "Bad Request: Missing svix headers",
      {
        status: 400,
      }
    );
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  try {
    const evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });

    const { id } = evt.data;
    const eventType = evt.type;

    if (eventType === "user.created") {
      console.log("User Creation Event");
      const { id, email_addresses, image_url } = evt.data;
      const user = {
        clerkId: id,
        email: email_addresses[0].email,
        photo: image_url,
      };

      const newUser = await createUser(user);

      if (newUser) {
        await clerkClient.users.updateUserMetadata(id, {
          publicMetadata: {
            userId: newUser._id,
          },
        });
      }
      return NextResponse.json({
        message: "New user created",
        user: newUser,
      });
    }

    console.log(
      `Webhook with ID: ${id} and type: ${eventType}`
    );
    return new Response("", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response(
      "Bad Request: Error verifying webhook",
      {
        status: 400,
      }
    );
  }
}
