"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";


export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here (API, etc)
    setSubmitted(true);
  };

  return (
    <section className="bg-indigo-50 py-12">
      <div className="max-w-lg mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Join Us!</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Join us in creating confident, curious learners—anytime, anywhere.
        </p>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 items-center">
        <div className="w-full flex flex-col items-center text-center">
            <Label htmlFor="email" className="text-md text-indigo-700">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full max-w-sm text-center"
              required
            />
          </div>
          <Button type="submit" className="w-full md:w-auto bg-indigo-600 text-white hover:bg-indigo-700 mt-2">
            {submitted ? "Thank You!" : "Join Waitlist"}
          </Button>
        </form>
        {submitted && (
          <div className="text-green-600 font-medium mt-4">
            You’ve been added to the waitlist!
          </div>
        )}
      </div>
    </section>
  );
}
