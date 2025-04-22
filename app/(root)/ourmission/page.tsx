"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  BookOpen,
  Layers,
  ChevronRight,
  School,
  Flask,
} from "lucide-react";
import Footer from "@/components/footer";
import Nav from "@/components/navbar";

// Section Header component
const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center mb-12">
    <div className="inline-block">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-blue-900 mb-2 tracking-tight relative inline-block"
      >
        {title}
        <motion.span
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute bottom-0 left-0 h-1 bg-blue-500 rounded-full"
        />
      </motion.h2>
    </div>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xl text-gray-600 max-w-3xl mx-auto mt-4"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// Mission Card Component
const MissionCard = ({
  title,
  description,
  icon,
  delay = 0,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: delay, duration: 0.5 }}
    whileHover={{
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    }}
    className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500"
  >
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

// Goal Card Component
const GoalCard = ({
  title,
  description,
  icon,
  image,
  colorClass = "from-blue-600 to-blue-800",
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  colorClass?: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="rounded-xl overflow-hidden shadow-xl"
  >
    <div className="relative h-48">
      <Image src={image} alt={title} fill className="object-cover" />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-80`}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white p-4 text-center">
          <div className="bg-white/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
        </div>
      </div>
    </div>
    <div className="p-6 bg-white">
      <p className="text-gray-700">{description}</p>
    </div>
  </motion.div>
);

// Progress Item
const ProgressItem = ({
  title,
  progress,
  color,
}: {
  title: string;
  progress: number;
  color: string;
}) => (
  <div className="mb-8">
    <div className="flex justify-between mb-2">
      <h4 className="font-bold text-gray-800">{title}</h4>
      <span className="text-gray-600">{progress}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-2.5 rounded-full ${color}`}
      ></motion.div>
    </div>
  </div>
);

export default function Mission() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/mgidla1.png"
            alt="Mgidla Secondary School Mission"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-blue-950/50 flex items-center">
            <div className="container mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-2xl text-white"
              >
                <h1 className="text-5xl font-bold mb-4">Our Mission</h1>
                <p className="text-xl mb-8">
                  Empowering students through education and community
                  engagement.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <main className="py-16">
        {/* Mission Statement */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Our Core Mission
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our mission is to place teaching and learning first, give
                educators opportunities to develop and improve their teaching
                skills, foster inclusive decision-making processes, modernize
                and develop school premises, and share resources with the whole
                community.
              </p>
              <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            </motion.div>
          </div>
        </section>

        {/* Our Mission Pillars */}
        <section className="container mx-auto px-4 mb-20">
          <SectionHeader
            title="Mission Pillars"
            subtitle="The five key principles that drive our educational approach"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <MissionCard
              icon={<BookOpen className="w-12 h-12" />}
              title="Quality Education"
              description="Prioritizing teaching and learning with rigorous academic standards to help every student reach their potential."
              delay={0.1}
            />
            <MissionCard
              icon={<Layers className="w-12 h-12" />}
              title="Teacher Development"
              description="Providing educators with opportunities to enhance their teaching skills and professional growth."
              delay={0.2}
            />
            <MissionCard
              icon={<Lightbulb className="w-12 h-12" />}
              title="Inclusive Decision Making"
              description="Fostering a culture where all stakeholders have a voice in the school's direction and policies."
              delay={0.3}
            />
          </div>
        </section>

        {/* Our Journey */}
        <section className="bg-blue-50 py-20 mb-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Our Journey"
              subtitle="The remarkable strides our school community has made"
            />
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Mgidla Secondary School community has made remarkable
                  strides in its ambitious project to renovate and beautify the
                  school, addressing longstanding challenges of overcrowding and
                  inadequate floor space.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Faced with these difficulties, the school governing body,
                  senior management team, teachers, and learners collectively
                  embarked on a transformative journey to revamp the
                  institution.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Notably, significant progress has been achieved through
                  internal fundraising efforts and self-initiated projects,
                  undertaken without reliance on departmental assistance.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">
                    Progress on Key Initiatives
                  </h3>
                  <ProgressItem
                    title="Campus Renovation"
                    progress={85}
                    color="bg-blue-600"
                  />
                  <ProgressItem
                    title="Classroom Modernization"
                    progress={75}
                    color="bg-green-600"
                  />
                  <ProgressItem
                    title="Sports Facilities"
                    progress={60}
                    color="bg-yellow-500"
                  />
                  <ProgressItem
                    title="Science Laboratory"
                    progress={40}
                    color="bg-purple-600"
                  />
                  <ProgressItem
                    title="Media Centre"
                    progress={30}
                    color="bg-pink-500"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Goals */}
        <section className="container mx-auto px-4 mb-20">
          <SectionHeader
            title="Our Goals"
            subtitle="Key objectives we're working to achieve"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <GoalCard
              title="Science Laboratory"
              description="The absence of a science lab has hindered student performance in science subjects, as practical components are often neglected. Establishing a fully-equipped science laboratory is essential to enhance our students' understanding and performance in these subjects."
              icon={<Flask className="w-10 h-10 text-white" />}
              image="/mgidla5.png"
              colorClass="from-blue-600 to-blue-800"
            />
            <GoalCard
              title="Media Centre"
              description="A media centre would foster the growth of humanities students, nurturing their exceptional confidence and potential for future careers in media. We eagerly seek additional partnerships and resources to bring these vital facilities to fruition, enhancing our students' educational experiences."
              icon={<School className="w-10 h-10 text-white" />}
              image="/mgidla3.png"
              colorClass="from-indigo-600 to-indigo-800"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-blue-300"></div>
              <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-blue-400"></div>
            </div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4"
              >
                Join Us in Our Mission
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-8 max-w-2xl mx-auto"
              >
                We invite parents, community members, businesses, and
                organizations to partner with us as we work to achieve these
                important goals for our students.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex justify-center space-x-4 flex-wrap"
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-white text-blue-800 rounded-md hover:bg-blue-50 transition-all shadow-lg font-medium"
                >
                  Contact Us
                </motion.a>
                <motion.a
                  href="/register"
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 border-2 border-white text-white rounded-md hover:bg-white/10 transition-all font-medium"
                >
                  Support Our School
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
