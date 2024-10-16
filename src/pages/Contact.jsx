import React from "react";

const Contact = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-gray-100">
      <h1 className="text-center text-4xl font-extrabold text-[#4caf50] mb-8">
        Get in Touch with Us
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Have questions about Kaleido UX or need support? We’re here to help!
        Drop us a message, and we’ll get back to you as soon as possible.
      </p>
      <form className="mt-8 max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Your Full Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Email Address</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Message</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="w-full bg-[#4caf50] text-white py-2 rounded-md hover:bg-[#388e3c] transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
