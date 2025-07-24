"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, MapPin, GraduationCap, Heart } from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Meshack Kataboi</h1>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/childhood" className="text-gray-600 hover:text-blue-600 transition-colors">
                Childhood
              </Link>
              <Link href="/education" className="text-gray-600 hover:text-blue-600 transition-colors">
                Education
              </Link>
              <Link href="/skills" className="text-gray-600 hover:text-blue-600 transition-colors">
                Skills
              </Link>
              <Link href="/aspirations" className="text-gray-600 hover:text-blue-600 transition-colors">
                Future
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-8">
              <img
                src="/MyAIPhoto.png?height=200&width=200"
                alt="Meshack Kataboi"
                className="w-48 h-48 rounded-full mx-auto shadow-lg object-cover"
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Hello, I'm <span className="text-blue-600">Meshack Kataboi</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A passionate Software Engineering student from Nairobi, Kenya, currently pursuing my dreams at Zetech
              University. Welcome to my digital journey of growth, learning, and aspirations.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
                <MapPin className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
                <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Zetech University</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
                <Heart className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-gray-700">Software Engineering</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">My Mission</h3>
                <p className="text-gray-600">
                  To leverage technology and innovation to solve real-world problems and make a positive impact in my
                  community and beyond.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">My Vision</h3>
                <p className="text-gray-600">
                  To become a leading software engineer who bridges the gap between technology and social impact,
                  particularly in Africa.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">My Values</h3>
                <p className="text-gray-600">
                  Innovation, integrity, continuous learning, and community empowerment guide everything I do in my
                  personal and professional life.
                </p>
              </div>
            </div>

            <Link
              href="/childhood"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              Explore My Journey
              <ChevronDown className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
              <div className="text-gray-600">Current Year of Study</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">BSE</div>
              <div className="text-gray-600">Software Engineering</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">01-0219</div>
              <div className="text-gray-600">Admission Number</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
              <div className="text-gray-600">Dreams & Aspirations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
