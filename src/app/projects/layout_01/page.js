'use client';

import Image from "next/image";

export default function TravelStatsLayout() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main Image Container */}
      <div className="relative">
        <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg shadow-lg"><Image src={"/layouts/passport-example.jpg"} alt="layout" fill/></div>
        
        {/* Students Guided Badge - Top Right */}
        <div className="absolute top-4 right-4 bg-white rounded-full shadow-lg flex items-center gap-3 px-5 py-3">
          <div className="bg-blue-500 rounded-full p-2.5">
            <svg 
              className="w-6 h-6 text-white" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">1,000 +</div>
            <div className="text-sm text-gray-600">Students Guided</div>
          </div>
        </div>

        {/* Years Badge - Bottom Left */}
        <div className="absolute bottom-0 left-0 flex flex-col">
          {/* Blue Triangle with white border effect */}
          <div className="relative w-32 h-32">
            {/* White background creating border effect */}
            <div className="absolute inset-0 bg-white" style={{
              clipPath: 'polygon(0 0, 0 990%, 100% 100%)'
            }}></div>
            
            {/* Blue Triangle - slightly smaller to show white border */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-blue-600" style={{
              clipPath: 'polygon(0 2px, 0 100%, calc(100% - 2px) 100%)'
            }}>
              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-4 pb-6">
                <div className="text-white text-4xl font-bold mb-1">3+</div>
              </div>
            </div>
          </div>
          
          {/* Golden years text */}
          <div className="bg-white px-4 py-2.5 shadow-sm">
            <p className="text-gray-800 font-semibold text-sm whitespace-nowrap">
              Golden years {"we've"} passed!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}