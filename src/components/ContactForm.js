import React from "react";

function ContactForm() {
  return (
    <div className="py-10 px-5 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
      <div className="max-w-xl mx-auto">
        <form className="grid grid-cols-1 gap-6">
          <input type="text" placeholder="Full Name" className="p-3 border rounded-md" />
          <input type="email" placeholder="Email" className="p-3 border rounded-md" />
          <input type="tel" placeholder="Phone" className="p-3 border rounded-md" />
          <textarea placeholder="Message" rows="4" className="p-3 border rounded-md"></textarea>
          <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
