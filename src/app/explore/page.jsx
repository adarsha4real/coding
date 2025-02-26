'use client';
import React from 'react';
import Image from 'next/image';

const Explore = () => {
  // Sample data - replace with your database fetch
  const items = [
    {
      id: 1,
      name: "Digital Electronics",
      faculty: "Prof. Sarah Johnson",
      image: "/images/electronics.jpg",
      downloadUrl: "/files/electronics-notes.pdf"
    },
    {
      id: 2,
      name: "Computer Networks",
      faculty: "Dr. Michael Chen",
      image: "/images/networks.jpg",
      downloadUrl: "/files/networks-notes.pdf"
    },
    // Add more items as needed
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Explore Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">Faculty: {item.faculty}</p>
              
              <button 
                onClick={() => window.open(item.downloadUrl, '_blank')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
