import React from 'react';

function FeaturesSection() {
  return (
    <div className="py-10 text-center">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">Awesome Features</h2>
      <p className="text-gray-500 mb-8">Get ready to unlock the best level of features</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Plagiarism Checker</h3>
          <p className="text-sm text-gray-500">Get accurate results with our plagiarism checker.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Free Publication</h3>
          <p className="text-sm text-gray-500">Publish your work for free on our platform.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Provide Test Data and PPT</h3>
          <p className="text-sm text-gray-500">Access test data and presentations.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Support Provided</h3>
          <p className="text-sm text-gray-500">We offer support for all users.</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
