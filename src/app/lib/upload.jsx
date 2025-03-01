import React from 'react'

const upload = () => {
  return (
    <div className="container mx-auto p-8 relative">
   
      <div className="fixed bottom-8 right-8 z-50">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
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
  )
}

export default upload