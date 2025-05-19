import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(request: any) {
  const formData = await request.formData();
  const name = formData.get("name");
  const lastname = formData.get("lastname");
  const number = formData.get("number");
  const email = formData.get("email");
  const message = formData.get("message");

  async function sendData() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DATABASE_URL}/emails.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            lastname: formData.get("lastname"),
            number: formData.get("number"),
            email: formData.get("email"),
            message: formData.get("message"),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function sendEmail() {
    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_HOST_SMTP, // Replace with your SMTP server
      port: 465, // Use 465 for secure connection or 587 for TLS
      secure: true, // Set to true if using port 465
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL, // Your email address
        pass: process.env.NEXT_PUBLIC_PASSWORD, // Your email password or app-specific password
      },
    });

    // Set up email data
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL, // Sender address
      replyTo: email,
      to: process.env.NEXT_PUBLIC_EMAIL, // List of recipients
      subject: `Website activity from ${email}`, // Subject line
      text: "Hello world?", // Plain text body
      html: `
            <p>Name: ${name} </p>
            <p>Last name: ${lastname} </p>
            <p>Number: ${number} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `, // HTML body
    };

    try {
      // Send the email
      const info = await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error occurred:", error);
    }
    await sendData();
  }

  // Run the function
  sendEmail();

  return NextResponse.json(
    { message: "Success: email was sent" },
    { status: 200 }
  );
}
