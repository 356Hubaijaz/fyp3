
// "use client";

// // pages/departments.js
// import Departments from "@components/Departments";
// import Navbar from "@components/Navbar";
// import Footer from "@components/Footer";

// const DepartmentPage = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow sm:px-6 lg:px-8 ">
        
//           <h1 className="text-3xl font-bold text-gray-900"></h1>
//           <Departments />
        
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default DepartmentPage;





















"use client"

// pages/departments.js
import Departments from "@components/Departments"
import Navbar from "@components/Navbar"
import Footer from "@components/Footer"

const DepartmentPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[#111827] mb-6"></h1>
          <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-sm">
            <Departments />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default DepartmentPage
