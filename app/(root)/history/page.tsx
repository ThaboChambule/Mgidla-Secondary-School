"use client";
import Footer from "@/components/footer";
import Nav from "@/components/navbar";

export default function History() {
  return (
    <>
      <Nav />
      <main className="p-8 bg-gray-100">
        <section id="showcase" className="mb-16">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our History</h1>
            <p className="text-lg text-gray-700 leading-relaxed">Tracing the journey of Mgidla Secondary School.</p>
          </div>
        </section>

        <section id="history" className="mb-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Our Beginnings</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mgidla Secondary School was founded with a vision to provide quality education to the local community. Over the years, the school has grown from a small institution to a well-respected educational establishment, known for its commitment to excellence and community involvement.
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Renovation and Beautification</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In recent years, the Mgidla Secondary School community has made remarkable strides in its ambitious project to renovate and beautify the school. This initiative was driven by the need to address longstanding challenges of overcrowding and inadequate floor space. The school governing body, senior management team, teachers, and learners collectively embarked on a transformative journey to revamp the institution.
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Fundraising and Self-Initiated Projects</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Significant progress has been achieved through internal fundraising efforts and self-initiated projects, undertaken without reliance on departmental assistance. These efforts have not only improved the physical infrastructure of the school but also fostered a sense of pride and ownership among the students and staff.
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Community Involvement</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The success of Mgidla Secondary School is also attributed to the strong involvement of the local community. Parents, alumni, and local businesses have played a crucial role in supporting the school's initiatives, ensuring that the students receive the best possible education and opportunities.
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Future Plans</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Looking ahead, Mgidla Secondary School aims to continue its legacy of excellence by further enhancing its facilities, expanding its academic programs, and fostering a culture of innovation and inclusivity. The school is committed to preparing its students for the challenges of the future and ensuring that they become responsible and successful members of society.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
