"use client";
import { FormEvent, FormEventHandler, useState } from "react";
import BookingButton from "../Navigation/BookingButton";

export default function Contact() {
  const [showSuccessMessage, setshowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      // sendData();
      setshowSuccessMessage(true);
      setShowErrorMessage(false);
    } catch (err) {
      console.error(err);
      setShowErrorMessage(true);
      setshowSuccessMessage(false);
    }
  }

  return (
    <main className="border-4 rounded-lg border-primary w-2/3 h-auto tablet:mb-10 tablet:w-1/2 mobile:w-2/3">
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex items-center justify-between gap-5 tablet:flex-col tablet:items-start tablet:gap-0">
          <div className="w-1/2 tablet:w-full">
            <label className="text-xl" htmlFor="form-name">
              First name:
            </label>
            <br />
            <input
              id="form-name"
              required
              autoComplete="name"
              name="name"
              placeholder="First Name"
              className="w-full h-8 bg-primary font-sans pl-2 mb-5 placeholder-black/[0.6] tablet:w-full"
            />
          </div>
          <div className="w-1/2 tablet:w-full">
            <label className="text-xl" htmlFor="last-name">
              Last name:
            </label>
            <br />
            <input
              id="form-last-name"
              required
              autoComplete="last-name"
              name="lastname"
              placeholder="Last Name"
              className="w-full h-8 bg-primary font-sans pl-2 mb-5 placeholder-black/[0.6] tablet:w-full"
            />
          </div>
        </div>
        <label className="text-xl" htmlFor="form-number">
          Contact number:
        </label>
        <br />
        <input
          id="form-number"
          required
          autoComplete="number"
          name="number"
          pattern="^(\+27|27|0)[0-9]{2}( |-)?[0-9]{3}( |-)?[0-9]{4}( |-)?(x[0-9]+)?(ext[0-9]+)?"
          placeholder="000 000 0000"
          className="w-full h-8 bg-primary pl-2 font-sans mb-5 placeholder-black/[0.6]"
        />
        <br />
        <label className="text-xl" htmlFor="form-email">
          Email address:
        </label>
        <br />
        <input
          id="form-email"
          required
          autoComplete="email"
          name="email"
          type="email"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          placeholder="someone@gmail.com"
          className="w-full h-8 bg-primary pl-2 font-sans mb-5 placeholder-black/[0.6]"
        />
        <br />
        <label className="text-xl" htmlFor="form-message">
          Message:
        </label>
        <textarea
          id="form-message"
          required
          name="message"
          placeholder="What whould you like to ask us..."
          className="w-full h-20 bg-primary pl-2 font-sans mb-5 placeholder-black/[0.6]"
        />
        {showSuccessMessage && (
          <p className="text-base mb-5 text-center">
            Your message was sent! We will get back to you shortly!
          </p>
        )}
        {showErrorMessage && (
          <p>
            Your message failed to send please try again later or contact us.
            Thank you
          </p>
        )}
        <div className="w-full flex items-center justify-center mb-5 placeholder-black/[0.6]">
          <BookingButton
            disabled={showSuccessMessage ? true : false}
            type="submit"
            className="mr-5 tablet:p-5"
          >
            Send message
          </BookingButton>
        </div>
      </form>
    </main>
  );
}
