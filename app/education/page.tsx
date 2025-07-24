"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, GraduationCap, Award, BookOpen, Calendar } from "lucide-react"

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState("current")

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/childhood" className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Childhood
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">My Education</h1>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Academic <span className="text-green-600">Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My educational path has been a continuous journey of discovery, growth, and achievement. From primary
              school in Nairobi to pursuing Software Engineering at Zetech University.
            </p>
          </div>

          {/* Current Education Highlight */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white mb-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Currently Studying at Zetech University</h2>
                <p className="text-lg mb-4">
                  Bachelor of Software Engineering (BSE) - Admission Number: BSE-01-0219/2024
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/20 rounded-full px-4 py-2">
                    <span className="font-semibold">Year: 2024</span>
                  </div>
                  <div className="bg-white/20 rounded-full px-4 py-2">
                    <span className="font-semibold">Program: Software Engineering</span>
                  </div>
                  <div className="bg-white/20 rounded-full px-4 py-2">
                    <span className="font-semibold">Status: Active Student</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <img
                  src="/zetechpage.png?height=200&width=300"
                  alt="Zetech University"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Educational Timeline</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-600"></div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-green-600 font-semibold">2024 - Present</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Zetech University</h3>
                    <p className="text-gray-600 mb-3">Bachelor of Software Engineering (BSE)</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Admission Number: BSE-01-0219/2024</li>
                      <li>• Focus on software development, algorithms, and system design</li>
                      <li>• Active participation in coding competitions and tech clubs</li>
                      <li>• Developing practical skills in various programming languages</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-semibold">2016 - 2019</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Secondary School</h3>
                    <p className="text-gray-600 mb-3">Kenya Certificate of Secondary Education (KCSE)</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Excelled in Mathematics and Sciences</li>
                      <li>• Participated in computer club and programming competitions</li>
                      <li>• Developed leadership skills through various school activities</li>
                      <li>• Achieved grades that qualified me for university admission</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-orange-600 mr-2" />
                      <span className="text-orange-600 font-semibold">2007 - 2015</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Primary School</h3>
                    <p className="text-gray-600 mb-3">Kenya Certificate of Primary Education (KCPE)</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Strong foundation in core subjects</li>
                      <li>• First exposure to computers and basic programming</li>
                      <li>• Active in school debates and academic competitions</li>
                      <li>• Developed critical thinking and problem-solving skills</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Coursework */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Current Coursework</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Internet Programming</span>
                  <span className="text-green-600 font-semibold">A</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Object-Oriented Programming</span>
                  <span className="text-green-600 font-semibold">B</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Database Systems</span>
                  <span className="text-green-600 font-semibold">B</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Data Structures & Algorithms</span>
                  <span className="text-green-600 font-semibold">A</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Extracurricular Activities</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Programming Club Member</h4>
                    <p className="text-gray-600 text-sm">Active participant in coding challenges and hackathons</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Tech Innovation Society</h4>
                    <p className="text-gray-600 text-sm">Contributing to technology solutions for local problems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Peer Tutoring</h4>
                    <p className="text-gray-600 text-sm">Helping fellow students with programming concepts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Link href="/childhood" className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous: Childhood
            </Link>
            <Link href="/skills" className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
              Next: Skills & Talents
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
