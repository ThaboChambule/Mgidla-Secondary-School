"use client";
import Footer from "@/components/footer";
import Nav from "@/components/navbar";

export default function Mission() {
  return (
    <>
      <Nav />
      <main className="p-8 bg-gray-100">
        <section id="showcase" className="mb-16">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Mission</h1>
            <p className="text-lg text-gray-700 leading-relaxed">Empowering students through education and community engagement.</p>
          </div>
        </section>

        <section id="mission" className="mb-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our mission is to place teaching and learning first, give educators opportunities to develop and improve their teaching skills, foster inclusive decision-making processes, modernize and develop school premises, and share resources with the whole community.
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Our Journey</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Mgidla Secondary School community has made remarkable strides in its ambitious project to renovate and beautify the school, addressing longstanding challenges of overcrowding and inadequate floor space. Faced with these difficulties, the school governing body, senior management team, teachers, and learners collectively embarked on a transformative journey to revamp the institution.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Notably, significant progress has been achieved through internal fundraising efforts and self-initiated projects, undertaken without reliance on departmental assistance. While substantial advancements have been made, further support is crucial to realize two pivotal objectives: establishing a fully-equipped science laboratory and constructing a media centre.
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Our Goals</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Science Laboratory:</strong> The absence of a science lab has hindered student performance in science subjects, as practical components are often neglected. Establishing a fully-equipped science laboratory is essential to enhance our students&apos; understanding and performance in these subjects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Media Centre:</strong> A media centre would foster the growth of humanities students, nurturing their exceptional confidence and potential for future careers in media. We eagerly seek additional partnerships and resources to bring these vital facilities to fruition, enhancing our students&apos; educational experiences and empowering them to reach their full potential.
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Gratitude and Progress</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Chairperson of the Fundraising Committee wishes to extend heartfelt gratitude to Dr. Christina Cappy and her team for their generous contribution to our school&apos;s renovation project. Their timely donation has been instrumental in driving progress, enabling us to commence construction of the administrative block.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are thrilled to report that the structure is nearing completion, with only the roofing remaining. This significant milestone would not have been achievable without Dr. Cappy&apos;s support. Her commitment to enhancing education has made a tangible impact on our school community. We look forward to continuing our partnership and securing additional support to realize our ultimate goal: providing a comprehensive learning environment for our students.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}