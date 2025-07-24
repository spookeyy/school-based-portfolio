"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Users, Star } from "lucide-react"

export default function ChildhoodPage() {
  const [activeMemory, setActiveMemory] = useState(0)

  const memories = [
    {
      title: "Growing Up in Nairobi",
      description:
        "My childhood in the vibrant city of Nairobi was filled with adventure and discovery. From the bustling streets to the warm community spirit, every day was a new learning experience.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Family Bonds",
      description:
        "My family has been the cornerstone of my development. Their unwavering support, wisdom, and love shaped my values and gave me the confidence to pursue my dreams.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Early Love for Technology",
      description:
        "I remember being fascinated by computers and technology from a young age. This curiosity would later blossom into my passion for software engineering.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMemory((prev) => (prev + 1) % memories.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">My Childhood</h1>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Where It All <span className="text-orange-600">Began</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My childhood in Nairobi was a tapestry of experiences that shaped who I am today. From family traditions
              to early discoveries, these formative years laid the foundation for my journey.
            </p>
          </div>

          {/* Memory Carousel */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={memories[activeMemory].image || "/placeholder.svg"}
                    alt={memories[activeMemory].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{memories[activeMemory].title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{memories[activeMemory].description}</p>
                  <div className="flex space-x-2 mt-6">
                    {memories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveMemory(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === activeMemory ? "bg-orange-600" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Influences */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Family Values</h3>
              </div>
              <p className="text-gray-600">
                My family instilled in me the importance of hard work, respect, and community service. These values
                continue to guide my decisions and aspirations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Community Spirit</h3>
              </div>
              <p className="text-gray-600">
                Growing up in Nairobi taught me the power of community. The spirit of Ubuntu - "I am because we are" -
                became a fundamental part of my worldview.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Star className="w-8 h-8 text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Early Dreams</h3>
              </div>
              <p className="text-gray-600">
                Even as a child, I dreamed of using technology to solve problems and help others. These early
                aspirations planted the seeds for my current academic journey.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Childhood Milestones</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-4 h-4 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Early Years (2000-2005)</h4>
                  <p className="text-gray-600">
                    Born and raised in Nairobi, surrounded by loving family and vibrant community
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Primary School (2006-2013)</h4>
                  <p className="text-gray-600">
                    Discovered my love for mathematics and science, participated in school competitions
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">First Computer Experience (2010)</h4>
                  <p className="text-gray-600">
                    First encounter with computers sparked my interest in technology and programming
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-16">
            <Link href="/" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous: Home
            </Link>
            <Link href="/education" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
              Next: Education
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
