"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <>
      <Nav />
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Image */}
        <div className="w-full h-[400px] relative">
          <Image 
            src="/images/mgidla3.png" 
            alt="Mgidla Secondary School" 
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-12 uppercase">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Location and Contact Information */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Google Maps Location
                </h2>
                <div className="w-full h-[450px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14077.667772025074!2d30.827825269775403!3d-28.10332270926732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef1cc4290d721c3%3A0xd0e43d37776ddda3!2sMgidla%20Secondary%20School!5e0!3m2!1sen!2sza!4v1727459611732!5m2!1sen!2sza" 
                    className="w-full h-full border-0 rounded-lg"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Physical Address
                  </h3>
                  <p className="text-gray-600">
                    Mhlungwane Area<br />
                    Vryheid<br />
                    3100
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Postal Address
                  </h3>
                  <p className="text-gray-600">
                    P.O. Box 1461<br />
                    Vryheid<br />
                    3100
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Contact Details
                  </h3>
                  <p className="text-gray-600">
                    Tel: 084 095 0018<br />
                    General Enquiries: info@mgidlasec.edu.za<br />
                    Admission Enquiries: admissions@mgidlasec.edu.za
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    Your message has been sent successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    There was an error sending your message. Please try again.
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions</option>
                    <option value="academics">Academics</option>
                    <option value="sports">Sports</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* School Hours and Terms */}
          <div className="mt-12 bg-white shadow-lg rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  School Hours
                </h2>
                <p className="text-gray-600">
                  Monday - Thursday: 07:00-17:00<br />
                  Friday: 07:00-16:00<br />
                  Weekends: Closed
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  School Terms 2024
                </h2>
                <p className="text-gray-600">
                  Term 1: 17 Jan - 20 Mar<br />
                  Term 2: 03 Apr - 14 Jun<br />
                  Term 3: 09 Jul - 20 Sept<br />
                  Term 4: 01 Oct - 13 Dec
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}