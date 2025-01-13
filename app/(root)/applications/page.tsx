"use client";
import Footer from "@/components/footer";
import Nav from "@/components/navbar";
// Removing unused imports
// import Slideshow from "@/components/slideshow";
// import Image from "next/image";

export default function Applications() {
  return (
    <>
      <Nav />
      <main className="p-8 bg-gray-100">
        <section id="paths" className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Different Paths After Grade 12</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            After completing Grade 12, learners have several options to consider:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
            <li><strong>University:</strong> Pursue a degree in various fields such as science, engineering, arts, and more.</li>
            <li><strong>Vocational Training:</strong> Enroll in technical and vocational education and training (TVET) colleges for practical skills.</li>
            <li><strong>Gap Year:</strong> Take a year off to travel, volunteer, or gain work experience before continuing education.</li>
            <li><strong>Learnerships and Internships:</strong> Gain practical work experience while studying part-time.</li>
            <li><strong>Starting a Business:</strong> For entrepreneurial-minded students, starting a small business can be a viable option.</li>
            <li><strong>Entering the Workforce:</strong> Begin working immediately in entry-level positions to gain experience and financial independence.</li>
          </ul>
        </section>

        <section id="careers" className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Career Fields</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Explore various career fields to find one that aligns with your interests and strengths:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
            <li><strong>Health Sciences:</strong> Careers in medicine, nursing, pharmacy, and other health-related fields.</li>
            <li><strong>Engineering:</strong> Specializations in civil, mechanical, electrical, and other engineering disciplines.</li>
            <li><strong>Information Technology:</strong> Careers in software development, cybersecurity, data analysis, and more.</li>
            <li><strong>Business and Finance:</strong> Opportunities in accounting, marketing, management, and finance.</li>
            <li><strong>Arts and Humanities:</strong> Careers in literature, history, philosophy, and the arts.</li>
            <li><strong>Social Sciences:</strong> Fields such as psychology, sociology, and political science.</li>
            <li><strong>Education:</strong> Teaching and educational administration roles.</li>
          </ul>
        </section>

        <section id="guide" className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Guide to Tertiary Applications</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Follow these steps to apply for tertiary education:
          </p>
          <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed space-y-2">
            <li><strong>Research:</strong> Identify institutions and programs that match your interests and career goals.</li>
            <li><strong>Prepare Documents:</strong> Gather necessary documents such as academic transcripts, identification, and letters of recommendation.</li>
            <li><strong>Personal Statement:</strong> Write a compelling personal statement that highlights your achievements and aspirations.</li>
            <li><strong>Apply Online:</strong> Submit your application through the institution&apos;s online portal.</li>
            <li><strong>Interviews:</strong> Prepare for and attend interviews if required.</li>
            <li><strong>Financial Aid:</strong> Explore scholarships, bursaries, and student loans to fund your education.</li>
          </ol>
        </section>

        {/* Rest of the code remains the same */}
        
        <section id="links" className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Links to Tertiary Institutions in South Africa</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
            <li><a href="https://www.uct.ac.za/" className="text-blue-500 hover:underline">University of Cape Town</a></li>
            {/* Rest of the university links remain the same */}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
