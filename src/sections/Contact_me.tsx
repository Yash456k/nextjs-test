import React from 'react';

const ContactMe = () => {
  return (
    <section
      id="contact_us"
      className="py-16 px-6 bg-gray-50 flex flex-col items-center"
    >
      <div className="w-full max-w-screen-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Contact Us
        </h2>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Akaay Dental Care
            </h3>
            <p className="text-gray-600">
              106, HR Elanza, Vikas Gruh Road, Paldi, Ahmedabad - 07
            </p>
            <p className="text-gray-600">
              Phone:{' '}
              <a href="tel:+918488071383" className="text-blue-500">
                +91 84880 71383
              </a>
            </p>
            <p className="text-gray-600">
              Email:{' '}
              <a href="mailto:akaaydental@gmail.com" className="text-blue-500">
                akaaydental@gmail.com
              </a>
            </p>

            <h4 className="text-lg font-semibold text-gray-700">
              Working Hours:
            </h4>
            <p className="text-gray-600">Morning: 10:00 AM - 1:30 PM</p>
            <p className="text-gray-600">Evening: 4:30 PM - 8:30 PM</p>
          </div>

          {/* Google Map */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.1868133778491!2d72.5596805385897!3d23.010049894795635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85b16a25c733%3A0xc233b2ac577466d4!2sAkaay%20Dental%20Care!5e0!3m2!1sen!2sin!4v1736075149680!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="border-0 rounded-lg"
              loading="lazy"
              title="Akaay Dental Care Location"
            ></iframe>
          </div>
        </div>

        {/* Optional: Add a contact form */}
        {/* <form className="bg-white p-8 rounded-lg shadow-lg">
          // Form fields here
        </form> */}
      </div>
    </section>
  );
};

export default ContactMe;
