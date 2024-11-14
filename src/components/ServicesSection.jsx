import React from 'react';

function ServicesSection() {
  const services = [
    { title: "Assignment", rating: 4.5 },
    { title: "Dissertation", rating: 4.7 },
    { title: "Course Work", rating: 4.2 },
    { title: "Thesis", rating: 4.8 },
    { title: "Essay", rating: 4.0 },
    { title: "Research Paper", rating: 4.3 },
    { title: "PowerPoint Presentation", rating: 4.1 },
    { title: "Programming", rating: 4.6 },
    { title: "Case Study", rating: 4.4 },
    { title: "Speech Writing", rating: 4.5 },
    { title: "Term Paper Writing", rating: 4.6 },
    { title: "Creative Writing", rating: 4.3 }
  ];

  return (
    <div className="py-10 text-center">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">Our Services</h2>
      <p className="text-gray-500 mb-8">We offer some fantastic services</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-yellow-500">{'★'.repeat(Math.round(service.rating))}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
