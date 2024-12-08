"use client";
import Image from "next/image";
import Footer from "@/components/footer";
import Nav from "@/components/navbar";

const ResourceCard = ({ 
  imageSrc, 
  title, 
  description 
}: { 
  imageSrc: string, 
  title: string, 
  description: string 
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="relative h-48 w-full">
      <Image 
        src={imageSrc} 
        alt={title} 
        fill 
        className="object-cover" 
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const SocialShareButton = ({ 
  href, 
  icon, 
  alt 
}: { 
  href: string, 
  icon: string, 
  alt: string 
}) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="mx-2 hover:opacity-75 transition-opacity"
  >
    <Image 
      src={icon} 
      alt={alt} 
      width={32} 
      height={32} 
    />
  </a>
);

export default function Grade12Resources() {
  const socialPlatforms = [
    { 
      href: "https://www.facebook.com/sharer/sharer.php?u=YOUR_URL", 
      icon: "/images/facebook-logo.png", 
      alt: "Facebook" 
    },
    { 
      href: "https://twitter.com/intent/tweet?url=YOUR_URL", 
      icon: "/images/x-logo.png", 
      alt: "X" 
    },
    { 
      href: "https://www.linkedin.com/shareArticle?mini=true&url=YOUR_URL", 
      icon: "/images/linkedin-logo.png", 
      alt: "LinkedIn" 
    },
    { 
      href: "https://api.whatsapp.com/send?text=YOUR_URL", 
      icon: "/images/whatsapp.png", 
      alt: "WhatsApp" 
    },
    { 
      href: "https://www.instagram.com/?url=YOUR_URL", 
      icon: "/images/instagram-logo.png", 
      alt: "Instagram" 
    }
  ];

  const lessonResources = [
    { 
      imageSrc: "/images/subjectsupport.jpg", 
      title: "Grade 12 Subject Support", 
      description: "Subject-specific resources are available below to help Grade 12 Learners" 
    },
    { 
      imageSrc: "/images/revision.jpg", 
      title: "Grade 12 Subject Revision", 
      description: "Subject-specific resources to help Grade 12 learner with curriculum and assessment requirements" 
    },
    { 
      imageSrc: "/images/tutor.jpg", 
      title: "Grade 12 Tutor Support", 
      description: "See these tutoring websites to help prepare for the exams" 
    },
    { 
      imageSrc: "/images/lessons.jpg", 
      title: "Weekly Lessons", 
      description: "Weekly lessons with embedded activities and resources for remote, blended and self-directed learning" 
    },
    { 
      imageSrc: "/images/time.jpg", 
      title: "Time Management", 
      description: "Read these time management tips for a successful future" 
    },
    { 
      imageSrc: "/images/winter.jpg", 
      title: "Winter School Holiday Programme", 
      description: "Winter school holiday programme" 
    },
    { 
      imageSrc: "/images/memory.jpg", 
      title: "Memory Skills and Tools", 
      description: "Improve your memory for learning with these skills and tools" 
    },
    { 
      imageSrc: "/images/study.jpg", 
      title: "FET Study Guides", 
      description: "Use these study guides and booklets to help prepare you for the exams" 
    }
  ];

  const examPreparationResources = [
    { 
      imageSrc: "/images/assessment.jpg", 
      title: "2024 Practical Assessment Tasks", 
      description: "Download the PATs for the practical subjects as prescribed by the DBE" 
    },
    { 
      imageSrc: "/images/selfstudy.jpg", 
      title: "DBE Self-Study Guides", 
      description: "Guides providing notes, examples, problem-solving exercises with solutions" 
    },
    { 
      imageSrc: "/images/papers.jpg", 
      title: "FET Common Papers", 
      description: "Examples of what learners can expect in their exam" 
    },
    { 
      imageSrc: "/images/guide.jpg", 
      title: "FET Study Guides", 
      description: "Use these study guides and booklets to help prepare for the exams" 
    },
    { 
      imageSrc: "/images/timetable.jpg", 
      title: "NSC Exam Timetables", 
      description: "See the NSC exam timetables" 
    },
    { 
      imageSrc: "/images/exam2.jpg", 
      title: "NSC Past Exam Papers & Memos", 
      description: "Download NSC past examination papers for 2016-2020 with memos and answer books" 
    },
    { 
      imageSrc: "/images/questions.jpeg", 
      title: "Frequently Asked Questions (NSC)", 
      description: "Find the most commonly asked questions and answers regarding the National Senior Certificate" 
    },
    { 
      imageSrc: "/images/tips.jpg", 
      title: "Tips for Success 2024", 
      description: "Download this booklet for all the tips for success" 
    }
  ];

  const studyTipsResources = [
    { 
      imageSrc: "/images/memory2.jpg", 
      title: "Memory-5c's for Success", 
      description: "See the 5C's for success towards better learning" 
    },
    { 
      imageSrc: "/images/examday.jpg", 
      title: "On the Day of the Exam", 
      description: "Click here for exam day tips" 
    },
    { 
      imageSrc: "/images/studytips.jpg", 
      title: "Study Tips for Grade 12s", 
      description: "Study tips to help matriculants succeed in the grade 12 examination" 
    },
    { 
      imageSrc: "/images/Vocabulary.jpg", 
      title: "Vocabulary/Terminology in Exam Questions", 
      description: "Guide to correctly understand what the examiner is asking" 
    }
  ];

  const additionalResources = [
    { 
      imageSrc: "/images/Certificate.jpg", 
      title: "Amended Senior Certificate", 
      description: "Adults qualifying to write the 2024 Senior Certificate examination must register" 
    },
    { 
      imageSrc: "/images/coding.jpg", 
      title: "Coding and Robotics", 
      description: "DBE Digital Skills Curriculum resources for finding your inner coder" 
    },
    { 
      imageSrc: "/images/prepare.jpg", 
      title: "eAssessment Preparation", 
      description: "Online exams to practice and prepare for National Senior Certificate" 
    },
    { 
      imageSrc: "/images/textbook.jpg", 
      title: "Textbooks", 
      description: "Discover and download textbooks aimed at grades 4-12" 
    }
  ];

  return (
    <>
      <Nav />
      <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Resources to Support Grade 12 Learning and Teaching
            </h1>
            <p className="text-xl text-gray-600">
              Taking care of curriculum as well as enrichment needs
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex items-center">
              <span className="mr-4 text-gray-700 font-semibold">Share this content</span>
              {socialPlatforms.map((platform, index) => (
                <SocialShareButton 
                  key={index} 
                  href={platform.href} 
                  icon={platform.icon} 
                  alt={platform.alt} 
                />
              ))}
            </div>
          </div>

          <section className="mb-12">
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-6">
              Here is a collection of resources to support learning and teaching in grade 12. 
              The resources span a variety of topics to keep learning fresh and exciting. 
              These resources walk hand in hand with CAPS (Curriculum and Assessment Policy).
            </p>
            <blockquote className="text-center italic text-lg text-gray-600 max-w-2xl mx-auto">
              "They cannot stop me. I will get my education, if it is in the home, school, or anyplace."
              <br />
              - Malala Yousafzai
            </blockquote>
          </section>

          {[
            { title: "LESSONS", resources: lessonResources },
            { title: "EXAM PREPARATION", resources: examPreparationResources },
            { title: "STUDY TIPS & TOOLS", resources: studyTipsResources },
            { title: "ADDITIONAL RESOURCES", resources: additionalResources }
          ].map(({ title, resources }) => (
            <section key={title} className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource, index) => (
                  <ResourceCard 
                    key={index}
                    imageSrc={resource.imageSrc}
                    title={resource.title}
                    description={resource.description}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}