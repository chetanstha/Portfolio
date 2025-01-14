// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// import React from "react";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// // React component for the email body
// function EmailTemplate({ subject, message }) {
//   return (
//     <>
//       <h1>{subject}</h1>
//       <p>Thank you for contacting us!</p>
//       <p>New message submitted:</p>
//       <p>{message}</p>
//     </>
//   );
// }

// export async function POST(req) {
//   const { email, subject, message } = await req.json();
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, email],
//       subject: subject,
//       react: <EmailTemplate subject={subject} message={message} />, // Pass the React component
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error: error.message });
//   }
// }


import { NextResponse } from "next/server";

export async function POST(req) {
  // Parse the request data
  const { email, subject, message } = await req.json();

  console.log("API called with:", { email, subject, message });

  // Return a dummy success response
  return NextResponse.json({
    message: "Email functionality is temporarily disabled.",
    status: "success",
    details: { email, subject, message }, // Echo back the received data for debugging
  });
}
