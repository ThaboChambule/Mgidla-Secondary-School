"use client";
import Footer from "@/components/footer";
import Nav from "@/components/navbar";
import Slideshow from "@/components/slideshow";
import Image from "next/image";

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
            <li><strong>Apply Online:</strong> Submit your application through the institution's online portal.</li>
            <li><strong>Interviews:</strong> Prepare for and attend interviews if required.</li>
            <li><strong>Financial Aid:</strong> Explore scholarships, bursaries, and student loans to fund your education.</li>
          </ol>
        </section>

        <section id="links" className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Links to Tertiary Institutions in South Africa</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
            <li><a href="https://www.uct.ac.za/" className="text-blue-500 hover:underline">University of Cape Town</a></li>
            <li><a href="https://www.wits.ac.za/" className="text-blue-500 hover:underline">University of the Witwatersrand</a></li>
            <li><a href="https://www.sun.ac.za/" className="text-blue-500 hover:underline">Stellenbosch University</a></li>
            <li><a href="https://www.up.ac.za/" className="text-blue-500 hover:underline">University of Pretoria</a></li>
            <li><a href="https://www.ufs.ac.za/" className="text-blue-500 hover:underline">University of the Free State</a></li>
            <li><a href="https://www.nwu.ac.za/" className="text-blue-500 hover:underline">North-West University</a></li>
            <li><a href="https://www.ru.ac.za/" className="text-blue-500 hover:underline">Rhodes University</a></li>
            <li><a href="https://www.uwc.ac.za/" className="text-blue-500 hover:underline">University of the Western Cape</a></li>
            <li><a href="https://www.unisa.ac.za/" className="text-blue-500 hover:underline">University of South Africa</a></li>
            <li><a href="https://www.uj.ac.za/" className="text-blue-500 hover:underline">University of Johannesburg</a></li>
            <li><a href="https://www.nmu.ac.za/" className="text-blue-500 hover:underline">Nelson Mandela University</a></li>
            <li><a href="https://www.tut.ac.za/" className="text-blue-500 hover:underline">Tshwane University of Technology</a></li>
            <li><a href="https://www.dut.ac.za/" className="text-blue-500 hover:underline">Durban University of Technology</a></li>
            <li><a href="https://www.cput.ac.za/" className="text-blue-500 hover:underline">Cape Peninsula University of Technology</a></li>
            <li><a href="https://www.ufh.ac.za/" className="text-blue-500 hover:underline">University of Fort Hare</a></li>
            <li><a href="https://www.ul.ac.za/" className="text-blue-500 hover:underline">University of Limpopo</a></li>
            <li><a href="https://www.unizulu.ac.za/" className="text-blue-500 hover:underline">University of Zululand</a></li>
            <li><a href="https://www.univen.ac.za/" className="text-blue-500 hover:underline">University of Venda</a></li>
            <li><a href="https://www.vut.ac.za/" className="text-blue-500 hover:underline">Vaal University of Technology</a></li>
            <li><a href="https://www.cut.ac.za/" className="text-blue-500 hover:underline">Central University of Technology</a></li>
            <li><a href="https://www.spu.ac.za/" className="text-blue-500 hover:underline">Sol Plaatje University</a></li>
            <li><a href="https://www.ump.ac.za/" className="text-blue-500 hover:underline">University of Mpumalanga</a></li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
