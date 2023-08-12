import React from "react";

const Contact = () => {
  return (
    <div className="py-24">
      <div className="containers ">
        <div className="w-full text-left">
          <button className="py-1 px-2 bg-[#3B3C40]  text-[#959595]">
            Contact
          </button>
          <h2 className="font-[800] text-white mt-4">Get in Touch</h2>
        </div>
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14587.826501841297!2d90.70603053321322!3d23.926589956808304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754304ce44c5b21%3A0xce082a3c68682738!2sNarsingdi!5e0!3m2!1sen!2sbd!4v1691862974069!5m2!1sen!2sbd"
            className="w-full h-[350px]"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* contact form */}

        <form className="controlForm mt-24">
          <input type="text" placeholder="Name" />
          <input type="text" className="my-6" placeholder="Email" />
          <textarea
            rows="5"
            className="w-full"
            placeholder="Write Message"
          ></textarea>
          <button className="py-3 px-8 mt-8 bg-white font-[500] text-black">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
