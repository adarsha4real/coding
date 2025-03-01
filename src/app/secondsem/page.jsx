'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Client, Storage, ID, Permission, Role } from 'appwrite';

const Explore = () => {
  const [resources, setResources] = useState([]);
  const [selectedpdf, setSelectedpdf] = useState(null);

  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('67bec974003d56663d8a'); // Your Project ID
  
  const storage = new Storage(client);

  const PdfViewerModal = ({ pdfUrl, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-11/12 h-5/6 rounded-lg overflow-hidden relative">
        {/* Close button at the top corner */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* PDF iframe for viewing */}
        <iframe src={pdfUrl} className="w-full h-full" title="PDF Viewer" />
      </div>
    </div>
  );

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const result = await storage.createFile(
          '667c16fad003296f68c47', // Your bucket ID
          ID.unique(),
          file,
          [Permission.read(Role.any())] // Allow anyone to read the file
        );
        console.log('Upload successful:', result);
        fetchResources(); // Refresh the list after upload
      } catch (error) {
        console.log('Upload error:', error);
      }
    }
  };
  
  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await storage.listFiles('67c16fad003296f68c47');
      const files = response.files.map(file => ({
        id: file.$id,
        name: file.name,
        faculty: "Faculty Name",
        semester: file.$metadata?.semester || "Unknown",
        // Generate PDF thumbnail URL using Appwrite's getFilePreview
        thumbnailUrl: storage.getFilePreview('67c16eff000e31782c72', file.$id, 400, 300, 'center', 100),
        viewUrl: storage.getFileView('67c16fad003296f68c47', file.$id),
        downloadUrl: storage.getFileDownload('67c16fad003296f68c47', file.$id),
      }));
      setResources(files);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4 relative">
        <div className="fixed bottom-8 right-68 z-50">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="hidden"
            id="pdf-upload"
          />
          <label
            htmlFor="pdf-upload"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 cursor-pointer shadow-lg flex items-center justify-center w-16 h-16 transition-all duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </label>
        </div>
      </div>
        
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Explore Resources for 2nd sem</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="relative h-48 w-full cursor-pointer"
                onClick={() => setSelectedpdf(item.viewUrl)}
              >
                {/* PDF Thumbnail from Appwrite */}
                <div className="relative h-48 w-full cursor-pointer" onClick={() => setSelectedpdf(item.viewUrl)}>
  <img
    src= 'https://t3.ftcdn.net/jpg/02/26/42/06/360_F_226420649_vlXjp3JyUrnW5EHY00dvhbqkVdUfyafj.jpg'
    alt={item.name}
    className="w-full h-full object-cover"
  />
  {/* Rest of your code */}
</div>
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white bg-blue-500 bg-opacity-90 p-2 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-4">Faculty: {item.faculty}</p>
                <p className="text-gray-600 mb-4">Semester: {item.semester}</p>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(item.downloadUrl, '_blank');
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="container mx-auto p-8"></div> 
      </div>
      
      {selectedpdf && <PdfViewerModal pdfUrl={selectedpdf} onClose={() => setSelectedpdf(null)} />}
    </div>
  );
};

export default Explore;
