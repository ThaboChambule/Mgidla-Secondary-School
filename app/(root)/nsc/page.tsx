"use client";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function MatricPassLevels() {
  return (
    <>
      <Nav />
      <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Pass Levels Section */}
          <section>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              What Are The Levels of Passing Matric?
            </h1>
            <p className="text-lg text-gray-700 text-center mb-8">
              There are four levels of passing Matric. Each Level has a certain percentile you will be required to meet. 
              Even though these pass levels are all considered a Matric pass.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="p-4 text-left">Pass Type</th>
                    <th className="p-4 text-left">Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Bachelor&apos;s Degree Pass",
                      requirements: [
                        "A minimum of 40% in your Home Language",
                        "A minimum of 50% in four subjects",
                        "A minimum of 30% in two other subjects"
                      ]
                    },
                    {
                      type: "Diploma Pass",
                      requirements: [
                        "A minimum of 40% in your Home Language",
                        "A minimum of 40% in four subjects",
                        "A minimum of 30% in two other subjects"
                      ]
                    },
                    {
                      type: "Higher Certificate Pass",
                      requirements: [
                        "A minimum of 40% in your Home Language",
                        "A minimum of 40% in two subjects",
                        "A minimum of 30% in four other subjects"
                      ]
                    },
                    {
                      type: "National Senior Certificate Pass",
                      requirements: [
                        "A minimum of 40% in your Home Language",
                        "A minimum of 30% in two other subjects",
                        "A minimum of 30% in three subjects",
                        "You can fail one subject"
                      ]
                    }
                  ].map((passLevel, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100 transition-colors">
                      <td className="p-4 font-semibold text-gray-800">{passLevel.type}</td>
                      <td className="p-4">
                        <ul className="list-disc list-inside text-gray-700">
                          {passLevel.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Matric Symbols Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Matric Symbols Table
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-green-500 text-white">
                  <tr>
                    <th className="p-4 text-left">Matric Symbol</th>
                    <th className="p-4 text-left">Marks Achieved</th>
                    <th className="p-4 text-left">Description</th>
                    <th className="p-4 text-left">APS Score</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { symbol: 'A', marks: '80-100%', desc: 'Outstanding Achievement', aps: 7 },
                    { symbol: 'B', marks: '70-79%', desc: 'Meritorious Achievement', aps: 6 },
                    { symbol: 'C', marks: '60-69%', desc: 'Substantial Achievement', aps: 5 },
                    { symbol: 'D', marks: '50-59%', desc: 'Adequate Achievement', aps: 4 },
                    { symbol: 'E', marks: '40-49%', desc: 'Moderate Achievement', aps: 3 },
                    { symbol: 'F', marks: '30-39%', desc: 'Elementary Achievement', aps: 2 },
                    { symbol: 'G', marks: '0-29%', desc: 'Not Achieved', aps: 1 }
                  ].map((row, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100 transition-colors">
                      <td className="p-4 font-bold text-gray-800">{row.symbol}</td>
                      <td className="p-4 text-gray-700">{row.marks}</td>
                      <td className="p-4 text-gray-700">{row.desc}</td>
                      <td className="p-4 text-gray-700">{row.aps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* APS Calculation Section */}
          <section>
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              How Do I Calculate My APS?
            </h1>
            <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
              <p className="text-lg text-gray-700">
                Your subjects&apos; percentages are converted to points ranging from 1-7. The lowest APS score is converted to 1 
                and represents the range between 0% and 29%. Whereas the highest score 7, represents the range from 80% -100%. 
                Before you learn to calculate the score, ask yourself this, what is the APS score used for?
              </p>
              <p className="text-lg text-gray-700">
                This system is used by universities when they consider your application. These points will be compared to 
                the entry requirements for the qualification you want to apply for. Summing up the points from all your 
                high-credit subjects, the total will be considered and measured against the tertiary qualification.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-lg font-semibold text-gray-800 mb-4">
                  Take this time to go over the table we provided and consider this example:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>English First Additional Language – 74% = 6 points</li>
                  <li>Tshivenda Home Language – 72% = 6 points</li>
                  <li>Agricultural Sciences – 56% = 4 points</li>
                  <li>Life Sciences – 85% = 7 points (Distinction)</li>
                  <li>Geography – 76% = 6 points</li>
                  <li>Mathematics – 53% = 4 points</li>
                  <li>Life Orientation – 65% = (We do not include L.O in APS calculations)</li>
                </ul>
                <p className="text-xl font-bold text-green-600">
                  Your Total: 6 + 6 + 4 + 7 + 6 + 4 = 33 APS Score
                </p>
              </div>

              <p className="text-lg text-gray-700">
                So if you meet the requirements, you will be accepted. If your APS score does not match the programme you 
                are interested in, you could consider a lower qualification. Some universities allow you the option to choose 
                a backup qualification. Be sure to always be well-versed with the qualifications criteria you are interested in. 
                Add a second option if you are still unsure about your eligibility for the university programme.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}