"use client";
import Footer from "@/components/footer";
import Nav from "@/components/navbar";
import Slideshow from "@/components/slideshow";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <Slideshow />
      <main className="p-8 bg-gray-100">
        <section id="section1" className="mb-16">
          <div id="div1" className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Mgidla Secondary School</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nestled in the heart of the Mhlungwane Area, Vryheid, Mgidla Secondary School stands as a beacon of education
              and community spirit in the rural area of KwaZulu-Natal Province, South Africa. As a public secondary school,
              we are dedicated to nurturing the potential of every student through a balanced approach to academics, sports,
              and cultural activities. While words can provide a glimpse into our vibrant school life, a visit will truly let you
              experience the warmth and dedication of our community.
            </p>
          </div>
          <div className="flex justify-center">
            <Image id="mgidla1" src="/images/mgidla1.png" alt="learners" width={600} height={300} className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section id="section2" className="mb-16">
          <div className="flex justify-center mb-8">
            <Image id="mgidla2" src="/images/mgidla4.png" alt="learners" width={600} height={300} className="rounded-lg shadow-lg" />
          </div>
          <div id="div2" className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Philosophies</h1>
            <ul id="philo" className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
              <li>To provide our pupils with the very best opportunities to develop their full potential.</li>
              <li>To instill sound moral values and a strong sense of self-belief in our pupils.</li>
              <li>To achieve excellence in both academic and extra-mural activities.</li>
              <li>To attract and retain the services of the very best staff.</li>
              <li>To foster a dynamic partnership between parents, teachers, and pupils.</li>
            </ul>
          </div>
        </section>

        <section id="section3" className="mb-16">
          <div id="div3" className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Mgidla Secondary School</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mgidla Secondary School is a hub of excellence – providing a safe, secure, disciplined, and nurturing
              environment for all our students. As a proud public secondary school, we uphold a strong foundation
              of traditions and values that have been integral to our community since our establishment. We are
              committed to fostering academic achievement, personal growth, and community involvement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to place teaching and learning first, give educators opportunities to develop and improve their teaching skills,
              inclusive decision-making processes. Modernising and developing school premises and sharing resources with the whole community.
            </p>
          </div>
          <div className="flex justify-center">
            <Image id="mgidla3" src="/images/mgidla3.png" alt="mgidla" width={600} height={300} className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section id="section4" className="mb-16">
          <section id="principal-message" className="mb-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Message from the Principal</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Mgidla Secondary School! Our mission is to provide a nurturing environment where students can excel
                academically and personally. We are committed to fostering a community of learners who are prepared to meet the
                challenges of the future.
              </p>
            </div>
          </section>
          <section id="upcoming-events" className="mb-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                <li>Science Fair - October 15, 2024</li>
                <li>Sports Day - November 10, 2024</li>
                <li>Parent-Teacher Meeting - December 5, 2024</li>
              </ul>
            </div>
          </section>
          <section id="testimonials" className="mb-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h1>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "Mgidla Secondary School has provided me with the best education and opportunities to grow."
              </blockquote>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "The teachers here are very supportive and always encourage us to do our best."
              </blockquote>
            </div>
          </section>
        </section>
      </main>
      <Footer/>
    </>
  );
}

