"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./modal";
import PulsatingButton from "./pulsating-button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    emailjs
      .send(
        "service_q6awueq",
        "template_w23jc07",
        { name, email, message },
        "nItHFoxNZ3UJlKo3c"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setIsModalOpen(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email sending error:", error);
          setError(
            "An error occurred while sending the message. Please try again."
          );
        }
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-left font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-full"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-left font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-full" 
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-left font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-full" 
          ></textarea>
        </div>
        <PulsatingButton
                type="submit"
                pulseColor="#808080"
                className="w-full bg-black text-white py-2"
              >
                Send
              </PulsatingButton>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Success"
      >
        <p>Your message has been sent successfully!</p>
      </Modal>
    </div>
  );
};

export default ContactForm;
