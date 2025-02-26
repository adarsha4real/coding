'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Syllabus() {
  const [dropdowns, setDropdowns] = useState({
    electronics: false,
    computer: false
  })
  const [selectedSemester, setSelectedSemester] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState(null)

  const toggleDropdown = (menu) => {
    setDropdowns(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }))
  }

  const handleSemesterClick = (department, semester) => {
    setSelectedDepartment(department)
    setSelectedSemester(semester)
  }

  const renderMainContent = () => {
    if (!selectedSemester) {
      return (
        <>
          <h1 className="text-3xl font-bold mb-6">Welcome to Our Course Portal</h1>
          <div className="space-y-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
          </div>
        </>
      )
    }
        
    return (
      <>
        <h1 className="text-3xl font-bold mb-6">
          {selectedDepartment} - Semester {selectedSemester}
        </h1>
        <div className="space-y-6">
          <p>This is the syllabus content for {selectedDepartment} department, semester {selectedSemester}</p>

          {
            selectedSemester === 1 && selectedDepartment === 'Electronics' && (
              <div className="space-y-2">
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Drawing</h3>
                  <p className="text-gray-600">Engineering drawing fundamentals and techniques</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Math</h3>
                  <p className="text-gray-600">Advanced mathematics and calculus</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Digital Electronics</h3>
                  <p className="text-gray-600">Digital electronics and logic design</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Basic Electrical</h3>
                  <p className="text-gray-600">engineering electrical subject</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Physics</h3>
                  <p className="text-gray-600">engineering physics I</p>
                </div>
              </div>
            )
          }
          {
            selectedSemester === 2 && selectedDepartment === 'Electronics' && (
              <div className="space-y-2">
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Network Analysis</h3>
                  <p className="text-gray-600">Circuit analysis and network theorems</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Mathematics II</h3>
                  <p className="text-gray-600">Advanced calculus and linear algebra</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Electronic Devices</h3>
                  <p className="text-gray-600">Semiconductor devices and circuits</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Digital Electronics</h3>
                  <p className="text-gray-600">Logic gates and boolean algebra</p>
                </div>
              </div>
            )
          }{
            selectedSemester === 3 && selectedDepartment === 'Electronics' && (
              <div className="space-y-2">
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">control system</h3>
                  <p className="text-gray-600">control system in engineering</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Mathematics II</h3>
                  <p className="text-gray-600">Advanced calculus and linear algebra</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">EMX</h3>
                  <p className="text-gray-600">electromagnetics</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">EDC</h3>
                  <p className="text-gray-600">electronic device and circuit</p>
                </div>
              </div>
            )
          }{
            selectedSemester === 4 && selectedDepartment === 'Electronics' && (
              <div className="space-y-2">
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Numerical method</h3>
                  <p className="text-gray-600">numericals on engineering</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Mathematics IV</h3>
                  <p className="text-gray-600">Advanced calculus and linear algebra</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">CG</h3>
                  <p className="text-gray-600">computer graphics</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">DSA</h3>
                  <p className="text-gray-600">data structure and algorithms</p>
                </div>
              </div>
            )
          }{
            selectedSemester === 5 && selectedDepartment === 'Electronics' && (
              <div className="space-y-2">
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">filter design</h3>
                  <p className="text-gray-600">filter analysis and network theorems</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Economics</h3>
                  <p className="text-gray-600">Advanced economics and linear algebra</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">DBMS</h3>
                  <p className="text-gray-600">database management systems</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">operating system</h3>
                  <p className="text-gray-600">Logic gates and boolean algebra</p>
                </div>
              </div>
            )
          }
          {
            selectedSemester === 1 && selectedDepartment === 'Computer' && (
              <div className="space-y-2">
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Object Oriented Programming</h3>
                  <p className="text-gray-600">Programming concepts and methodologies</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Mathematics II</h3>
                  <p className="text-gray-600">Advanced calculus and linear algebra</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Data Structures</h3>
                  <p className="text-gray-600">Basic data structures and algorithms</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Digital Logic Design</h3>
                  <p className="text-gray-600">Boolean algebra and logic circuits</p>
                </div>
              </div>
            )
          }
          {
            selectedSemester === 2 && selectedDepartment === 'Computer' && (
              <div className="space-y-2">
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Data Structures</h3>
                  <p className="text-gray-600">Advanced data structures and algorithms</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Computer Architecture</h3>
                  <p className="text-gray-600">Computer organization and design</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Digital Signal Processing</h3>
                  <p className="text-gray-600">Signal analysis and processing</p>
                </div>
              </div>
            )
          }
          {
            selectedSemester === 3 && selectedDepartment === 'Computer' && (
              <div className="space-y-2">
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Operating Systems</h3>
                  <p className="text-gray-600">OS concepts and implementation</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Database Management</h3>
                  <p className="text-gray-600">Database design and SQL</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Computer Networks</h3>
                  <p className="text-gray-600">Network protocols and architecture</p>
                </div>
              </div>
            )
          }
          {
            selectedSemester === 4 && selectedDepartment === 'Computer' && (
              <div className="space-y-2">
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Software Engineering</h3>
                  <p className="text-gray-600">Software development lifecycle</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Artificial Intelligence</h3>
                  <p className="text-gray-600">AI concepts and applications</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">Web Technologies</h3>
                  <p className="text-gray-600">Web development and frameworks</p>
                </div>
              </div>
            )
          }{
            selectedSemester === 5 && selectedDepartment === 'Computer' && (
              <div className="space-y-2">
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">CN</h3>
                  <p className="text-gray-600">computer network</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">DBMS</h3>
                  <p className="text-gray-600">database management system</p>
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                  <h3 className="font-semibold">embeded system</h3>
                  <p className="text-gray-600">embeded knowledge</p>
                </div>
              </div>
            )
          }
        </div>
      </>
    )
  } 
   return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-gray-800 text-white p-4">
        <div className="mb-4">
          <button
            onClick={() => toggleDropdown('electronics')}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            Electronics ▼
          </button>
          {dropdowns.electronics && (
            <div className="ml-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div 
                  key={item} 
                  className="p-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSemesterClick('Electronics', item)}
                >
                  {item} semester
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-4">
          <button
            onClick={() => toggleDropdown('computer')}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            Computer ▼
          </button>
          {dropdowns.computer && (
            <div className="ml-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div 
                  key={item} 
                  className="p-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSemesterClick('Computer', item)}
                >
                  {item} semester
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

     {/* Main Content */}
      <div className="flex-1 p-8">
        {renderMainContent()}
      </div>
    </div>
  )
}
