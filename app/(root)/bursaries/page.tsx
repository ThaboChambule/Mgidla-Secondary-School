"use client";
import Footer from "@/components/footer";
import Nav from "@/components/navbar";

export default function Bursaries() {
  return (
    <>
      <Nav />
      
      <main className="p-8 bg-gray-100">
        <section id="bursaries" className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Types of Bursaries</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Bursaries are financial awards given to students based on various criteria. Here are some common types:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
            <li><strong>Merit-Based Bursaries:</strong> Awarded to students with outstanding academic achievements.</li>
            <li><strong>Need-Based Bursaries:</strong> Given to students who demonstrate financial need.</li>
            <li><strong>Field-Specific Bursaries:</strong> Targeted at students pursuing specific fields of study, such as engineering or medicine.</li>
            <li><strong>Community-Based Bursaries:</strong> Provided by local organizations to support students from specific communities.</li>
            <li><strong>Company-Sponsored Bursaries:</strong> Offered by companies to support students who may later work for them.</li>
          </ul>
        </section>

        <section id="application-guide" className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">How to Apply for Bursaries</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Follow these steps to apply for bursaries:
          </p>
          <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed space-y-2">
            <li><strong>Research:</strong> Identify bursaries that match your qualifications and needs.</li>
            <li><strong>Prepare Documents:</strong> Gather necessary documents such as academic transcripts, proof of income, and letters of recommendation.</li>
            <li><strong>Write a Personal Statement:</strong> Highlight your achievements, goals, and why you deserve the bursary.</li>
            <li><strong>Submit Applications:</strong> Apply through the specified channels, ensuring all deadlines are met.</li>
            <li><strong>Follow Up:</strong> Check the status of your application and be prepared for interviews if required.</li>
          </ol>
        </section>

        <section id="funding-links" className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Links to Bursaries and Funding Opportunities in South Africa</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
            <li><a href="https://www.nsfas.org.za/" className="text-blue-500 hover:underline">National Student Financial Aid Scheme (NSFAS)</a></li>
            <li><a href="https://www.funzalushaka.doe.gov.za/" className="text-blue-500 hover:underline">Funza Lushaka Bursary Programme</a></li>
            <li><a href="https://www.careerwise.co.za/" className="text-blue-500 hover:underline">Career Wise Bursaries</a></li>
            <li><a href="https://www.bursaries-southafrica.co.za/" className="text-blue-500 hover:underline">Bursaries South Africa</a></li>
            <li><a href="https://www.sasolbursaries.com/" className="text-blue-500 hover:underline">Sasol Bursaries</a></li>
            <li><a href="https://www.shopriteholdings.co.za/" className="text-blue-500 hover:underline">Shoprite Bursaries</a></li>
            <li><a href="https://www.standardbank.com/" className="text-blue-500 hover:underline">Standard Bank Bursaries</a></li>
            <li><a href="https://www.nedbank.co.za/" className="text-blue-500 hover:underline">Nedbank Bursaries</a></li>
            <li><a href="https://www.oldmutual.com/" className="text-blue-500 hover:underline">Old Mutual Bursaries</a></li>
            <li><a href="https://www.absa.co.za/" className="text-blue-500 hover:underline">ABSA Bursaries</a></li>
            <li><a href="https://www.angloamerican.com/" className="text-blue-500 hover:underline">Anglo American Bursaries</a></li>
            <li><a href="https://www.miningqualificationsauthority.co.za/" className="text-blue-500 hover:underline">Mining Qualifications Authority (MQA) Bursaries</a></li>
            <li><a href="https://www.eskom.co.za/" className="text-blue-500 hover:underline">Eskom Bursaries</a></li>
            <li><a href="https://www.transnet.net/" className="text-blue-500 hover:underline">Transnet Bursaries</a></li>
            <li><a href="https://www.sanral.co.za/" className="text-blue-500 hover:underline">SANRAL Bursaries</a></li>
            <li><a href="https://www.dhet.gov.za/" className="text-blue-500 hover:underline">Department of Higher Education and Training Bursaries</a></li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
