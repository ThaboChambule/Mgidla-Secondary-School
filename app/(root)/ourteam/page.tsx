"use client";
import Footer from "@/components/footer";
import Nav from "@/components/navbar";

export default function Staff() {
  return (
    <>
      <Nav />
      <main className="p-8 bg-gray-100">
        <section id="staff" className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">Our Staff</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A key to the enormous success of this school has been the stability of the teaching staff. With exceptional leadership over the years, the management team has ensured the school is staffed with committed and experienced educators who are experts in the field.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join our Team</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We are always looking for passionate and dedicated educators to join our team. If you are interested in becoming a part of our school community, please contact us for more information on available positions.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Senior Executive Staff</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
            <li>Mr B.S Chambule - Principal</li>
            <li>Mr N Xaba - Deputy Principal</li>
          </ul>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Heads of Department</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
            <li>Mr T.S Zulu</li>
            <li>Miss K Thwala</li>
            <li>Mrs K.L Ngobese</li>
          </ul>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">School Governing Body</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
            <li>Mrs OP Nxumalo</li>
            <li>Mr BI Zwane</li>
            <li>Miss IP Zulu</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
