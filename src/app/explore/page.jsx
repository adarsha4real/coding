'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Client, Storage } from 'appwrite';
import upload from '../lib/upload';

const Explore = () => {
  const [resources, setResources] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState('');
  const [pendingFile, setPendingFile] = useState(null);
  const [showSemesterModal, setShowSemesterModal] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [botMessage, setBotMessage] = useState('');

  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67bec974003d56663d8a');
  
  const storage = new Storage(client);

  const semesterBuckets = {
    '1': '67bf43a6000a31271db4',
    '2': '67bf43a6000a31271db4',
    '3': '67bf43a6000a31271db4',
    '4': '67bf43a6000a31271db4',
    '5': '67bf43a6000a31271db4'
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPendingFile(file);
      setShowSemesterModal(true);
    }
  };

  const handleUpload = async () => {
    if (pendingFile && selectedNumber) {
      try {
        const bucketId = semesterBuckets[selectedNumber];
        const metadata = {
          semester: selectedNumber
        };
        
        await storage.createFile(
          bucketId,
          'unique()',
          
          pendingFile,
        [
            'read=user:*',
            'write=user:*'
          ],
          metadata
        );
        
        fetchResources();
        setShowSemesterModal(false);
        setPendingFile(null);
        setSelectedNumber('');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const SemesterModal = () => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${showSemesterModal ? '' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h3 className="text-xl font-bold mb-4">Select Semester Number</h3>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((number) => (
            <label key={number} className="flex items-center space-x-2">
              <input
                type="radio"
                name="semesterNumber"
                value={number}
                checked={selectedNumber === number.toString()}
                onChange={(e) => setSelectedNumber(e.target.value)}
                className="form-radio"
              />
              <span>Semester {number}</span>
            </label>
          ))}
        </div>
        <div className="mt-4 flex space-x-2">
          <button
            onClick={handleUpload}
            disabled={!selectedNumber}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Upload
          </button>
          <button
            onClick={() => {
              setShowSemesterModal(false);
              setPendingFile(null);
              setSelectedNumber('');
            }}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  const fetchResources = async () => {
    try {
      const response = await storage.listFiles('67bf43a6000a31271db4');
      const files = response.files.map(file => ({
        id: file.$id,
        name: file.name,
        faculty: "Faculty Name",
        semester: file.$metadata?.semester || "Unknown",
        image: `/images/pdf-thumbnail.jpg`,
        downloadUrl: storage.getFileDownload('67bf43a6000a31271db4', file.$id)
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
        <h1 className="text-3xl font-bold mb-8">Explore Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item) => (
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
                <p className="text-gray-600 mb-4">Semester: {item.semester}</p>
                
                <button 
                  onClick={() => window.open(item.downloadUrl, '_blank')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="container mx-auto p-8">
        </div> 
      </div>
      <SemesterModal />
    </div>
  );
};

export default Explore;
