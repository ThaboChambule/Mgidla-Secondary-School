"use client";
import React from 'react';
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function Admissions() {
  return (
    <>
      <Nav />
      <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8">
          <section id="overview" className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-4">
              Admission Overview
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to Mgidla Secondary School's admissions page. We are excited to welcome new students for the 2025 academic year. Below you will find all the necessary information to complete your application process.
            </p>
          </section>

          <section id="applications" className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-green-500 pb-4">
              2025 Applications
            </h2>
            <p className="text-xl text-blue-600 font-medium mb-4">
              2025 Online Admissions Applications:
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Required supporting documents for Grade 8 applicants:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc pl-6 mb-6">
              <li>Certified copy of child's birth certificate</li>
              <li>Certified copies of parents' IDs or Passports</li>
              <li>
                Proof of home address:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    <strong>Home Owner:</strong> A municipal account (not older than 3 months) in the name of the applicant's parent, bearing the full residential address OR the Deed of Sale documents complete with revenue stamp.
                  </li>
                  <li>
                    <strong>Renting:</strong> A valid Lease Agreement signed by the landlord and tenant (not older than 3 months) bearing the full physical residential address.
                  </li>
                  <li>
                    Municipal account (not older than 3 months) in the name of the landlord (homeowner) bearing the full physical residential address.
                  </li>
                </ul>
              </li>
              <li>Proof of work address (if using your work address for the application)</li>
              <li>Learner's latest Grade 7 school report</li>
              <li>Refugee Permit/Asylum Seeker Permit/Permanent Residence Permit/Study Permit for non-South African Citizens only</li>
            </ul>
          </section>

          <section id="fees" className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-500 pb-4">
              School Fees
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                Mgidla Secondary School is a public school classified as Quintile 2 as a no-fee institution, there are no tuition fees for students attending this school. This quintile level school is eligible to receive up to R1,602 per learner from the Department of Education to cover operational expenses and educational resources.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}