import React from "react";
import { Menu, GraduationCap, Book, FileText, Calendar } from "lucide-react";

const App = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6">
        <div className="flex items-center">
          <span className="text-purple-600 text-2xl">🏠</span>
          <span className="text-gray-400 text-sm ml-1">The Assigner</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm md:px-6 md:py-2">
            Login
          </button>
          <Menu className="w-6 h-6 text-gray-600" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 md:p-8 rounded-lg mx-4 md:mx-8">
          <h1 className="text-xl font-semibold mb-2 md:text-2xl">
            Navigate Your Academic Journey
          </h1>
          <p className="text-sm mb-4 md:text-base">
            Providing high-quality and comprehensive assistance with outstanding results.
          </p>
          <img
            src="/api/placeholder/400/200"
            alt="Student illustration"
            className="w-full object-cover rounded-lg"
          />
        </div>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-between px-8 py-4 text-center text-sm md:px-16 md:text-base">
          <div>
            <p className="font-bold">700+</p>
            <p className="text-gray-500">Students</p>
          </div>
          <div>
            <p className="font-bold">320+</p>
            <p className="text-gray-500">Resources</p>
          </div>
          <div>
            <p className="font-bold">150+</p>
            <p className="text-gray-500">Users</p>
          </div>
        </div>
      </section>

      {/* IELTS Section */}
<section className="bg-purple-100 m-4 p-6 rounded-lg md:flex md:justify-between md:items-center md:p-8 md:m-8">
  <div className="md:w-2/3">
    <h2 className="text-lg font-semibold text-purple-800 md:text-xl">IELTS Preparation</h2>
    <p className="text-sm text-purple-600 mt-1 md:text-base">
      Support and Live Learning Opportunities
    </p>
    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg mt-4 text-sm md:text-base md:px-6 md:py-3">
      Enroll Now
    </button>
  </div>
  
  {/* Image with Custom Box Shadow */}
  <img
    src="D:\my-academic-site\public\images.png"  // Replace with your custom image path
    alt="IELTS"
    className="w-24 h-24 object-cover rounded-lg md:w-32 md:h-32 shadow-md md:shadow-lg" // shadow-md for small shadow, shadow-lg for larger shadow
    style={{
      boxShadow: "0px 4px 4px 0px #00000040" // Custom box-shadow style
    }}
  />
</section>

      {/* Features Section */}
      <section className="px-4 py-6 md:px-8 md:py-10">
        <h2 className="text-lg font-semibold mb-4 md:text-xl">Awesome Features</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <FileText className="w-6 h-6 text-purple-600 mb-2" />
            <h3 className="text-sm font-medium">Plagiarism Checker</h3>
            <p className="text-xs text-gray-500 mt-1">
              Access to professional tools
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Book className="w-6 h-6 text-purple-600 mb-2" />
            <h3 className="text-sm font-medium">Free Publications</h3>
            <p className="text-xs text-gray-500 mt-1">
              Books and PDF resources
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <GraduationCap className="w-6 h-6 text-purple-600 mb-2" />
            <h3 className="text-sm font-medium">Paraphraser</h3>
            <p className="text-xs text-gray-500 mt-1">
              Advanced writing tools
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Book className="w-6 h-6 text-purple-600 mb-2" />
            <h3 className="text-sm font-medium">Free Books</h3>
            <p className="text-xs text-gray-500 mt-1">
              Access study materials
            </p>
          </div>
          {/* New Feature: Study Planner */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Calendar className="w-6 h-6 text-purple-600 mb-2" />
            <h3 className="text-sm font-medium">Study Planner</h3>
            <p className="text-xs text-gray-500 mt-1">
              Plan and manage your study sessions
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-6 md:px-8 md:py-10">
        <h2 className="text-lg font-semibold mb-4 md:text-xl">Our Services</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium">Assignment</h3>
            <p className="text-yellow-400 text-sm mt-1">⭐️⭐️⭐️⭐️⭐️</p>
          </div>
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100" />
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="px-4 py-6 md:px-8 md:py-10">
        <h2 className="text-lg font-semibold mb-2 md:text-xl">Our Assistance's Advantages</h2>
        <p className="text-sm text-gray-500 mb-4 md:text-base">
          The Assigner wants to build a strong foundation that will enable students to soar to achievement.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-red-700 text-sm font-medium">No Plagiarism</h3>
            <p className="text-xs text-gray-600 mt-1">
              100% original answers that lessen the probability of receiving a bad grade.
            </p>
          </div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-red-50 p-4 rounded-lg" />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-6 md:px-8 md:py-10">
        <h2 className="text-lg font-semibold mb-4 md:text-xl">FAQs</h2>
        <div className="space-y-2">
          {[
            "What services are available on our website?",
            "How can we guarantee the caliber of the assignments?",
            "What distinguishes our company from other firms?",
            "Does utilizing our service have any limitations?",
            "How can consumers access our website's news and updates?"
          ].map((question, index) => (
            <details key={index} className="bg-white shadow-sm rounded-lg">
              <summary className="p-4 text-sm font-medium cursor-pointer flex justify-between items-center">
                {question}
                <span className="text-gray-400">▼</span>
              </summary>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="h-20 bg-gradient-to-r from-purple-500 to-pink-500 mt-8" />
    </div>
  );
};

export default App;
