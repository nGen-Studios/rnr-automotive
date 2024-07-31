import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request: any) {
  console.log("dealing with request");
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

  // create transporter object
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      type: "OAuth2",
      user: process.env.NEXT_PUBLIC_EMAIL,
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      refreshToken: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
      accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    },
  });
  console.log(process.env.NEXT_PUBLIC_EMAIL);

  try {
    const mail = await transporter.sendMail({
      to: process.env.NEXT_PUBLIC_EMAIL,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
            <p>Name: ${name} </p>
            <p>Last name: ${lastname} </p>
            <p>Number: ${number} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });

    sendData();

    return NextResponse.json(
      { message: "Success: email was sent", formData: { ...formData } },
      { status: 200 }
    );
  } catch (error) {
    console.log({
      auth: {
        type: "OAuth2",
        user: process.env.NEXT_PUBLIC_EMAIL,
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        refreshToken: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
        accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
      },
    });
    console.log(error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE" },
      { status: 500 }
    );
  }
}
