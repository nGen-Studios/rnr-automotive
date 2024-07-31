import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/reviews.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    return NextResponse.json({ ...responseData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "COULD NOT GET REVIEW" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const requestData = await request.json();
  console.log(requestData);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/reviews.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    return NextResponse.json({ ...responseData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "COULD NOT SEND REVIEW" },
      { status: 500 }
    );
  }
}
