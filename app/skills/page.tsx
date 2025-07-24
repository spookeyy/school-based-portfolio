"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Code, Palette, Music, Trophy, Star } from "lucide-react"

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("technical")

  const technicalSkills = [
    { name: "JavaScript", level: 85, icon: "🟨" },
    { name: "Python", level: 80, icon: "🐍" },
    { name: "Java", level: 75, icon: "☕" },
    { name: "React", level: 70, icon: "⚛️" },
    { name: "Node.js", level: 65, icon: "🟢" },
    { name: "SQL", level: 78, icon: "🗄️" },
    { name: "Git", level: 82, icon: "📝" },
    { name: "HTML/CSS", level: 90, icon: "🎨" },
  ]

  const softSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Team Collaboration", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Leadership", level: 75 },
    { name: "Time Management", level: 88 },
    { name: "Critical Thinking", level: 87 },
  ]

  const hobbies = [
    {
      title: "Coding Projects",
      description: "Building web applications and mobile apps in my free time",
      icon: <Code className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Digital Art",
      description: "Creating digital illustrations and UI/UX designs",
      icon: <Palette className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Music Production",
      description: "Composing and producing electronic music using DAWs",
      icon: <Music className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Competitive Programming",
      description: "Participating in coding competitions and algorithm challenges",
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/education" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Education
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Skills & Talents</h1>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Skills & <span className="text-purple-600">Talents</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my technical abilities, soft skills, and creative talents that I've developed throughout my
              academic journey and personal projects.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setActiveCategory("technical")}
                className={`px-6 py-3 rounded-full transition-colors ${
                  activeCategory === "technical" ? "bg-purple-600 text-white" : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Technical Skills
              </button>
              <button
                onClick={() => setActiveCategory("soft")}
                className={`px-6 py-3 rounded-full transition-colors ${
                  activeCategory === "soft" ? "bg-purple-600 text-white" : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Soft Skills
              </button>
            </div>
          </div>

          {/* Technical Skills */}
          {activeCategory === "technical" && (
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-purple-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Soft Skills */}
          {activeCategory === "soft" && (
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-purple-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Showcase */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Web Application Project"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Student Management System</h3>
                <p className="text-gray-600 mb-4">
                  A full-stack web application built with React and Node.js for managing student records and academic
                  information.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Mobile App Project"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Parcel Deliver Web Application</h3>
                <p className="text-gray-600 mb-4">
                  A dynamic web application to manage parcel tracking in real time and update both the buyer and the seller the current status of each parcel until successfully delivered,
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React Native</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Firebase</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies & Interests */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Hobbies & Interests</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {hobbies.map((hobby, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0">{hobby.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{hobby.title}</h3>
                      <p className="text-gray-600">{hobby.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Achievements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Dean's List</h3>
                <p className="text-gray-600 text-sm">Achieved academic excellence in current semester</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Coding Competition</h3>
                <p className="text-gray-600 text-sm">2nd place in university programming contest</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Open Source</h3>
                <p className="text-gray-600 text-sm">Contributed to 5+ open source projects</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Link href="/education" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous: Education
            </Link>
            <Link
              href="/aspirations"
              className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
            >
              Next: Future Aspirations
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
