import nodemailer from "nodemailer";
import { reviews } from "@/constants";
const transporter = nodemailer.createTransport({
    service: "gmail", // or your preferred email service
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export async function POST(req) {
    const { recipients, paylaodData } = await req.json();

    if (!recipients || recipients.length === 0) {
        return new Response(
            JSON.stringify({ error: "No recipients provided" }),
            { status: 400 }
        );
    }

    try {
        console.log("Recipients : ", recipients);
        for (const recipient of recipients) {
            if (recipient === recipients[recipients.length - 1]) {
                continue;
            }
            const dept = reviews.find(
                (item) => item.name === recipient.Department
            );
            const mailOptions = {
                from: process.env.EMAIL_USERNAME,
                to: recipient.Email,
                subject: paylaodData.subject,
                html: `
                <div>
                ${paylaodData.body}
                </div>
                `,
            };

            await transporter.sendMail(mailOptions);
        }

        return new Response(
            JSON.stringify({ message: "Emails sent successfully" }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending emails:", error);
        return new Response(
            JSON.stringify({ error: "Failed to send emails" }),
            { status: 500 }
        );
    }
}

{
    /* <div style="font-family: Times New Roman, serif; color: #333; font-size: 15px;">
            <p>Dear ${recipient.Name},</p>
            <p>We are pleased to invite you to an interview with <strong>${recipient.Department} Department at MIC</strong>.</p>
            <p>Please find the details below:</p>
            <p>${paylaodData.body}</p>
            <ul>
              <li><strong>Link:</strong> ${dept.invite}</li>
              <li><strong>Date:</strong> ${dept.date}</li>
            </ul>
            <p>We look forward to your response and hope to meet you soon.</p>
            <p>Sincerely,<br/><strong>Microsoft Innovations Club</strong></p>
            </br>
          </div> */
}
