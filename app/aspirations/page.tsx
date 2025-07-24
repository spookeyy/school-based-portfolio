"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Target, Rocket, Globe, Heart, Lightbulb, Users } from "lucide-react"

export default function AspirationsPage() {
  const [activeGoal, setActiveGoal] = useState(0)

  const goals = [
    {
      title: "Software Engineering Excellence",
      description:
        "Become a world-class software engineer specializing in full-stack development and system architecture",
      timeline: "2-3 years",
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Tech Entrepreneurship",
      description: "Launch a technology startup that addresses real problems in the African market",
      timeline: "5-7 years",
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "Community Impact",
      description: "Establish coding bootcamps and mentorship programs for underprivileged youth in Kenya",
      timeline: "3-5 years",
      icon: <Users className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Global Recognition",
      description: "Contribute to major open-source projects and speak at international tech conferences",
      timeline: "4-6 years",
      icon: <Globe className="w-8 h-8 text-purple-600" />,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGoal((prev) => (prev + 1) % goals.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/skills" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Skills
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Future Aspirations</h1>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Future <span className="text-indigo-600">Aspirations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My vision for the future is driven by a passion for technology, innovation, and making a positive impact.
              Here are the goals and dreams that guide my journey forward.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
            <div className="text-center">
              <Target className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">My Vision</h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                "To become a leading software engineer and technology entrepreneur who bridges the digital divide in
                Africa, creating innovative solutions that empower communities and drive economic growth while
                maintaining a global perspective on technology's potential for positive change."
              </p>
            </div>
          </div>

          {/* Goals Carousel */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Goals</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  {goals[activeGoal].icon}
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-800">{goals[activeGoal].title}</h3>
                    <span className="text-indigo-600 font-semibold">Timeline: {goals[activeGoal].timeline}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{goals[activeGoal].description}</p>
                <div className="flex space-x-2">
                  {goals.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveGoal(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeGoal ? "bg-indigo-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Career Roadmap */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Career Roadmap</h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-600 hidden md:block"></div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-bold">2024</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Bachelor's Degree</h3>
                    <p className="text-gray-600 mb-3">
                      Graduate from Zetech University with honors in Software Engineering
                    </p>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Maintain GPA above 3.7</li>
                      <li>• Complete capstone project</li>
                      <li>• Secure internship at tech company</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-bold">2025</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Junior Software Developer</h3>
                    <p className="text-gray-600 mb-3">Start career at a reputable tech company or startup</p>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Gain 2+ years of professional experience</li>
                      <li>• Specialize in full-stack development</li>
                      <li>• Contribute to open-source projects</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-bold">2027</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Senior Developer & Team Lead</h3>
                    <p className="text-gray-600 mb-3">Advance to senior role with leadership responsibilities</p>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Lead development teams</li>
                      <li>• Mentor junior developers</li>
                      <li>• Architect complex systems</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-bold">2030</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Tech Entrepreneur</h3>
                    <p className="text-gray-600 mb-3">Launch my own technology startup</p>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Develop innovative solutions for African markets</li>
                      <li>• Build and lead a diverse team</li>
                      <li>• Secure funding and scale operations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Areas */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Technology Innovation</h3>
              <p className="text-gray-600">
                Develop cutting-edge software solutions that solve real-world problems and improve people's lives
                through technology.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Social Impact</h3>
              <p className="text-gray-600">
                Create programs and initiatives that provide technology education and opportunities to underserved
                communities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Build solutions with global impact while maintaining strong roots in African innovation and
                problem-solving approaches.
              </p>
            </div>
          </div>

          {/* Personal Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Personal Mission Statement</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                "I am committed to using my skills in software engineering to create meaningful change in the world. My
                mission is to develop innovative technology solutions that address pressing challenges in Africa and
                beyond, while fostering the next generation of tech leaders through mentorship and education."
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Innovation</h4>
                  <p className="text-gray-600 text-sm">
                    Continuously pushing the boundaries of what's possible with technology
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Impact</h4>
                  <p className="text-gray-600 text-sm">
                    Creating solutions that make a real difference in people's lives
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Integrity</h4>
                  <p className="text-gray-600 text-sm">
                    Maintaining ethical standards and transparency in all endeavors
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Link href="/skills" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous: Skills & Talents
            </Link>
            <Link href="/contact" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              Next: Contact Information
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
