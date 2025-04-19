
// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import "@styles/globals.css"
// import { getSession, signOut } from "next-auth/react"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [showDropdown, setShowDropdown] = useState(false)
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

//   const [toggleTheme, setToggleTheme] = useState(null)
//   const [session, setSession] = useState(null)

//   useEffect(() => {
//     const fetchSession = async () => {
//       const sessionData = await getSession()
//       console.log("Session Data:", sessionData) // Check the session data in the console
//       setSession(sessionData)
//     }

//     fetchSession()
//   }, [])

//   return (
//     <div>
//     <nav className="bg-[#003559] shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Left Side: Logo & Navigation */}
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//               <Link href="#" className="text-xl font-bold text-white">
//                 Doculus
//               </Link>
//             </div>
//             <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//               <Link
//                 href="/home"
//                 className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#061A40]"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/departments?type=uni"
//                 className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#006DAA]"
//               >
//                 Department
//               </Link>
//               <Link
//                 href="/departments?type=admin"
//                 className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#006DAA]"
//               >
//                 Admin
//               </Link>
//               <Link
//                 href="/tutorial"
//                 className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#006DAA]"
//               >
//                 Tutorial
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#006DAA]"
//               >
//                 About
//               </Link>
//             </div>
//           </div>

//           {/* Right Side: Toggle Button, Profile */}
//           <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             {/* Dark Mode Toggle Button */}
//             <button
//               onClick={toggleTheme}
//               className="p-2 mr-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
//               aria-label="Toggle dark mode"
//             >
//               {theme === 'light' ? (
//                 <Moon className="w-6 h-6 text-gray-800 dark:text-white" />
//               ) : (
//                 <Sun className="w-6 h-6 text-gray-800 dark:text-white" />
//               )}
//             </button>

//             {/* Profile Dropdown (Desktop) */}
//             <div className="ml-3 relative">
//               <div>
//                 <button
//                   onClick={() => setShowDropdown(!showDropdown)}
//                   className="bg-white dark:bg-gray-700 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   id="user-menu"
//                   aria-expanded="false"
//                   aria-haspopup="true"
//                 >
//                   <span className="sr-only">Open user menu</span>
//                   <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
//                     <svg
//                       className="h-full w-full text-gray-300"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                     </svg>
//                   </span>
//                 </button>
//               </div>
//               {showDropdown && (
//                 <div
//                   className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-[#061A40] ring-1 ring-black ring-opacity-5 focus:outline-none"
//                   role="menu"
//                   aria-orientation="vertical"
//                   aria-labelledby="user-menu"
//                 >
//                   <Link
//                     href="/profile"
//                     className="block px-4 py-2 text-sm text-white hover:bg-[#006DAA]"
//                     role="menuitem"
//                   >
//                     Profile
//                   </Link>
//                   <Link
//                     href="/change-password"
//                     className="block px-4 py-2 text-sm text-white hover:bg-[#006DAA]"
//                     role="menuitem"
//                   >
//                     Change Password
//                   </Link>
//                   {/* <Link
//                     href="/forgot-password"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     role="menuitem"
//                   >
//                     Forgot Password
//                   </Link> */}
//                   <button
//                     onClick={() => signOut()}
//                     className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#006DAA]"
//                     role="menuitem"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile Controls */}
//           <div className="-mr-2 flex items-center sm:hidden">
//             {/* Dark Mode Toggle Button (Mobile) */}
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-full mr-2 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
//               aria-label="Toggle dark mode"
//             >
//               {theme === 'light' ? (
//                 <Moon className="w-6 h-6 text-gray-800 dark:text-white" />
//               ) : (
//                 <Sun className="w-6 h-6 text-gray-800 dark:text-white" />
//               )}
//             </button>

//             {/* Mobile Menu Toggle Button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="bg-white dark:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//               aria-controls="mobile-menu"
//               aria-expanded={isOpen}
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="sm:hidden bg-[#0353A4]" id="mobile-menu">
//           <div className="pt-2 pb-3 space-y-1">
//             <Link
//               href="/home"
//               className="text-white hover:bg-[#006DAA] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Home
//             </Link>
//             <Link
//               href="/departments?type=uni"
//               className="text-white hover:bg-[#006DAA] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Department
//             </Link>
//             <Link
//               href="/departments?type=admin"
//               className="text-white hover:bg-[#006DAA] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Admin
//             </Link>
//             <Link
//               href="/about"
//               className="text-white hover:bg-[#006DAA] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               About
//             </Link>
//             <Link
//               href="/tutorial"
//               className="text-white hover:bg-[#006DAA] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Tutorial
//             </Link>
//           </div>
//           <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
//             <div className="flex items-center px-4">
//               <div className="flex-shrink-0">
//                 <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
//                   <svg
//                     className="h-full w-full text-gray-300"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                   </svg>
//                 </span>
//               </div>
//               <div className="ml-3">
//                 <div className="text-base font-medium text-white">{session?.user?.email}</div>
//               </div>
//               <button
//                 onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
//                 className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 <span className="sr-only">Open user menu</span>
//                 <svg
//                   className={`h-6 w-6 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//             </div>
//             {mobileDropdownOpen && (
//               <div className="mt-3 space-y-1">
//                 <Link href="/profile" className="block px-4 py-2 text-base font-medium text-white hover:bg-[#006DAA]">
//                   Profile
//                 </Link>
//                 <Link
//                   href="/change-password"
//                   className="block px-4 py-2 text-base font-medium text-white hover:bg-[#006DAA]"
//                 >
//                   Change Password
//                 </Link>
//                 {/* <Link
//                   href="/forgot-password"
//                   className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
//                 >
//                   Forgot Password
//                 </Link> */}
//                 <button
//                   onClick={() => signOut()}
//                   className="block w-full text-left px-4 py-2 text-base font-medium text-white hover:bg-[#006DAA]"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   </div>
//   );
// }















// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import "@styles/globals.css"
// import { getSession, signOut } from "next-auth/react"
// import { Moon, Sun } from "react-feather" // Assuming you're using react-feather for icons

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [showDropdown, setShowDropdown] = useState(false)
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
//   const [session, setSession] = useState(null)
//   const [theme, setTheme] = useState("light") // Default theme is light

//   // Fetch session data
//   useEffect(() => {
//     const fetchSession = async () => {
//       const sessionData = await getSession()
//       setSession(sessionData)
//     }
//     fetchSession()
//   }, [])

//   // Toggle theme function
//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light"
//     setTheme(newTheme)
//     localStorage.setItem("theme", newTheme) // Save theme preference to localStorage
//   }

//   // Apply theme to the document
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light"
//     setTheme(savedTheme)
//     document.documentElement.setAttribute("data-theme", savedTheme)
//   }, [])

//   // Update the document when the theme changes
//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme)
//   }, [theme])

//   return (
//     <nav className="bg-secondary text-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//               <Link href="#" className="text-xl font-bold text-white">
//                 Doculus
//               </Link>
//             </div>
//             <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//               <Link href="/home" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
//                 Home
//               </Link>
//               <Link href="/departments?type=uni" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
//                 Department
//               </Link>
//               <Link href="/departments?type=admin" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
//                 Admin
//               </Link>
//               <Link href="/tutorial" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
//                 Tutorial
//               </Link>
//               <Link href="/about" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
//                 About
//               </Link>
//             </div>
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             <div className="ml-3 relative">
//               <div>
//                 <button
//                   onClick={() => setShowDropdown(!showDropdown)}
//                   className="bg-primary flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   id="user-menu"
//                   aria-expanded="false"
//                   aria-haspopup="true"
//                 >
//                   <span className="sr-only">Open user menu</span>
//                   <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
//                     <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                     </svg>
//                   </span>
//                 </button>
//               </div>
//               {showDropdown && (
//                 <div
//                   className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-[#061A40] ring-1 ring-black ring-opacity-5 focus:outline-none"
//                   role="menu"
//                   aria-orientation="vertical"
//                   aria-labelledby="user-menu"
//                 >
//                   <Link
//                     href="/profile"
//                     className="block px-4 py-2 text-sm text-white hover:bg-[#006DAA]"
//                     role="menuitem"
//                   >
//                     Profile
//                   </Link>
//                   <Link
//                     href="/change-password"
//                     className="block px-4 py-2 text-sm text-white hover:bg-[#006DAA]"
//                     role="menuitem"
//                   >
//                     Change Password
//                   </Link>
                
//                   <button
//                     onClick={() => signOut()}
//                     className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#006DAA]"
//                     role="menuitem"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="-mr-2 flex items-center sm:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="sm:hidden bg-[#0353A4]" id="mobile-menu">
//           <div className="pt-2 pb-3 space-y-1">
//             <Link href="/home" className="text-white hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
//               Home
//             </Link>
//             <Link href="/departments?type=uni" className="text-white hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
//               Department
//             </Link>
//             <Link href="/departments?type=admin" className="text-white hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
//               Admin
//             </Link>
//             <Link href="/about" className="text-white hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
//               About
//             </Link>
//             <Link href="/tutorial" className="text-white hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
//               Tutorial
//             </Link>
//           </div>
//           <div className="pt-4 pb-3 border-t border-gray-200">
//             <div className="flex items-center px-4">
//               <div className="flex-shrink-0">
//                 <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
//                   <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                   </svg>
//                 </span>
//               </div>
//               <div className="ml-3">
//                 <div className="text-base font-medium text-white">{session?.user?.email}</div>
//               </div>
//               <button
//                 onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
//                 className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 <span className="sr-only">Open user menu</span>
//                 <svg
//                   className={`h-6 w-6 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//             </div>
//             {mobileDropdownOpen && (
//               <div className="mt-3 space-y-1">
//                 <Link href="/profile" className="block px-4 py-2 text-base font-medium text-white hover:bg-[#006DAA]">
//                   Profile
//                 </Link>
//                 <Link
//                   href="/change-password"
//                   className="block px-4 py-2 text-base font-medium text-white hover:bg-[#006DAA]"
//                 >
//                   Change Password
//                 </Link>
               
//                 <button
//                   onClick={() => signOut()}
//                   className="block w-full text-left px-4 py-2 text-base font-medium text-white hover:bg-[#006DAA]"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }



















// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import "@styles/globals.css"
// import { getSession, signOut } from "next-auth/react"
// import { Moon, Sun } from "react-feather" // Assuming you're using react-feather for icons

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [showDropdown, setShowDropdown] = useState(false)
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
//   const [session, setSession] = useState(null)
//   const [theme, setTheme] = useState("light") // Default theme is light

//   // Fetch session data
//   useEffect(() => {
//     const fetchSession = async () => {
//       const sessionData = await getSession()
//       setSession(sessionData)
//     }
//     fetchSession()
//   }, [])

//   // Toggle theme function
//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light"
//     setTheme(newTheme)
//     localStorage.setItem("theme", newTheme) // Save theme preference to localStorage
//   }

//   // Apply theme to the document
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light"
//     setTheme(savedTheme)
//     document.documentElement.setAttribute("data-theme", savedTheme)
//   }, [])

//   // Update the document when the theme changes
//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme)
//   }, [theme])

//   return (
//     <nav className="bg-[#1E213A] text-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//               <Link href="#" className="text-xl font-bold text-white hover:text-[#3B5FE3] transition-colors">
//                 Doculus
//               </Link>
//             </div>
//             <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//               <Link
//                 href="/home"
//                 className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#3B5FE3] hover:text-[#3B5FE3] transition-colors"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/departments?type=uni"
//                 className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#3B5FE3] hover:text-[#3B5FE3] transition-colors"
//               >
//                 Department
//               </Link>
//               <Link
//                 href="/departments?type=admin"
//                 className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#3B5FE3] hover:text-[#3B5FE3] transition-colors"
//               >
//                 Admin
//               </Link>
//               <Link
//                 href="/tutorial"
//                 className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#3B5FE3] hover:text-[#3B5FE3] transition-colors"
//               >
//                 Tutorial
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#3B5FE3] hover:text-[#3B5FE3] transition-colors"
//               >
//                 About
//               </Link>
//             </div>
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             <div className="ml-3 relative">
//               <div>
//                 <button
//                   onClick={() => setShowDropdown(!showDropdown)}
//                   className="bg-[#3B5FE3] flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B5FE3]"
//                   id="user-menu"
//                   aria-expanded="false"
//                   aria-haspopup="true"
//                 >
//                   <span className="sr-only">Open user menu</span>
//                   <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
//                     <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                     </svg>
//                   </span>
//                 </button>
//               </div>
//               {showDropdown && (
//                 <div
//                   className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-[#1E213A] ring-1 ring-black ring-opacity-5 focus:outline-none"
//                   role="menu"
//                   aria-orientation="vertical"
//                   aria-labelledby="user-menu"
//                 >
//                   <Link
//                     href="/profile"
//                     className="block px-4 py-2 text-sm text-white hover:bg-[#3B5FE3]"
//                     role="menuitem"
//                   >
//                     Profile
//                   </Link>
//                   <Link
//                     href="/change-password"
//                     className="block px-4 py-2 text-sm text-white hover:bg-[#3B5FE3]"
//                     role="menuitem"
//                   >
//                     Change Password
//                   </Link>

//                   <button
//                     onClick={() => signOut()}
//                     className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#3B5FE3]"
//                     role="menuitem"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//               {/* <button
//                 onClick={toggleTheme}
//                 className="ml-3 p-2 rounded-full bg-[#F3F4F6] text-[#111827] hover:text-[#3B5FE3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B5FE3]"
//               >
//                 {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
//               </button> */}
//             </div>
//           </div>
//           <div className="-mr-2 flex items-center sm:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="bg-[#F3F4F6] inline-flex items-center justify-center p-2 rounded-md text-[#111827] hover:text-[#3B5FE3] hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3B5FE3]"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="sm:hidden bg-[#1E213A]" id="mobile-menu">
//           <div className="pt-2 pb-3 space-y-1">
//             <Link
//               href="/home"
//               className="text-white hover:bg-[#F3F4F6] hover:text-[#111827] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Home
//             </Link>
//             <Link
//               href="/departments?type=uni"
//               className="text-white hover:bg-[#F3F4F6] hover:text-[#111827] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Department
//             </Link>
//             <Link
//               href="/departments?type=admin"
//               className="text-white hover:bg-[#F3F4F6] hover:text-[#111827] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Admin
//             </Link>
//             <Link
//               href="/about"
//               className="text-white hover:bg-[#F3F4F6] hover:text-[#111827] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               About
//             </Link>
//             <Link
//               href="/tutorial"
//               className="text-white hover:bg-[#F3F4F6] hover:text-[#111827] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Tutorial
//             </Link>
//           </div>
//           <div className="pt-4 pb-3 border-t border-gray-200">
//             <div className="flex items-center px-4">
//               <div className="flex-shrink-0">
//                 <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
//                   <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                   </svg>
//                 </span>
//               </div>
//               <div className="ml-3">
//                 <div className="text-base font-medium text-white">{session?.user?.email}</div>
//               </div>
//               <button
//                 onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
//                 className="ml-auto flex-shrink-0 bg-[#F3F4F6] p-1 rounded-full text-[#111827] hover:text-[#3B5FE3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B5FE3]"
//               >
//                 <span className="sr-only">Open user menu</span>
//                 <svg
//                   className={`h-6 w-6 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//             </div>
//             {mobileDropdownOpen && (
//               <div className="mt-3 space-y-1">
//                 <Link href="/profile" className="block px-4 py-2 text-base font-medium text-white hover:bg-[#3B5FE3]">
//                   Profile
//                 </Link>
//                 <Link
//                   href="/change-password"
//                   className="block px-4 py-2 text-base font-medium text-white hover:bg-[#3B5FE3]"
//                 >
//                   Change Password
//                 </Link>

//                 <button
//                   onClick={() => signOut()}
//                   className="block w-full text-left px-4 py-2 text-base font-medium text-white hover:bg-[#3B5FE3]"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }



















// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import "@styles/globals.css"
// import { getSession, signOut } from "next-auth/react"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [showDropdown, setShowDropdown] = useState(false)
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
//   const [session, setSession] = useState(null)
//   const [theme, setTheme] = useState("light") // Default theme is light

//   // Fetch session data
//   useEffect(() => {
//     const fetchSession = async () => {
//       const sessionData = await getSession()
//       setSession(sessionData)
//     }
//     fetchSession()
//   }, [])

//   // Toggle theme function
//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light"
//     setTheme(newTheme)
//     localStorage.setItem("theme", newTheme) // Save theme preference to localStorage
//   }

//   // Apply theme to the document
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light"
//     setTheme(savedTheme)
//     document.documentElement.setAttribute("data-theme", savedTheme)
//   }, [])

//   // Update the document when the theme changes
//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme)
//   }, [theme])

//   return (
//     <nav className="bg-white text-[#111827] shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//               <Link
//                 href="#"
//                 className="text-xl font-bold bg-gradient-to-r from-[#3B5FE3] to-[#1E213A] bg-clip-text text-transparent hover:from-[#3051C6] hover:to-[#161829] transition-colors"
//               >
//                 Doculus
//               </Link>
//             </div>
//             <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//               <Link
//                 href="/home"
//                 className="text-[#111827] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#3B5FE3] hover:text-[#3B5FE3] transition-colors"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/departments?type=uni"
//                 className="text-[#111827] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#3B5FE3] hover:text-[#3B5FE3] transition-colors"
//               >
//                 Department
//               </Link>
//               <Link
//                 href="/departments?type=admin"
//                 className="text-[#111827] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#3B5FE3] hover:text-[#3B5FE3] transition-colors"
//               >
//                 Admin
//               </Link>
//               <Link
//                 href="/tutorial"
//                 className="text-[#111827] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#3B5FE3] hover:text-[#3B5FE3] transition-colors"
//               >
//                 Tutorial
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-[#111827] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#3B5FE3] hover:text-[#3B5FE3] transition-colors"
//               >
//                 About
//               </Link>
//             </div>
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             <div className="ml-3 relative">
//               <div>
//                 <button
//                   onClick={() => setShowDropdown(!showDropdown)}
//                   className="bg-[#3B5FE3] flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B5FE3]"
//                   id="user-menu"
//                   aria-expanded="false"
//                   aria-haspopup="true"
//                 >
//                   <span className="sr-only">Open user menu</span>
//                   <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
//                     <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                     </svg>
//                   </span>
//                 </button>
//               </div>
//               {showDropdown && (
//                 <div
//                   className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
//                   role="menu"
//                   aria-orientation="vertical"
//                   aria-labelledby="user-menu"
//                 >
//                   <Link
//                     href="/profile"
//                     className="block px-4 py-2 text-sm text-[#111827] hover:bg-[#F3F4F6] hover:text-[#3B5FE3]"
//                     role="menuitem"
//                   >
//                     Profile
//                   </Link>
//                   <Link
//                     href="/change-password"
//                     className="block px-4 py-2 text-sm text-[#111827] hover:bg-[#F3F4F6] hover:text-[#3B5FE3]"
//                     role="menuitem"
//                   >
//                     Change Password
//                   </Link>

//                   <button
//                     onClick={() => signOut()}
//                     className="block w-full text-left px-4 py-2 text-sm text-[#111827] hover:bg-[#F3F4F6] hover:text-[#3B5FE3]"
//                     role="menuitem"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//               {/* <button
//                 onClick={toggleTheme}
//                 className="ml-3 p-2 rounded-full bg-[#F3F4F6] text-[#111827] hover:text-[#3B5FE3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B5FE3]"
//               >
//                 {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
//               </button> */}
//             </div>
//           </div>
//           <div className="-mr-2 flex items-center sm:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="bg-[#F3F4F6] inline-flex items-center justify-center p-2 rounded-md text-[#111827] hover:text-[#3B5FE3] hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3B5FE3]"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="sm:hidden bg-white" id="mobile-menu">
//           <div className="pt-2 pb-3 space-y-1">
//             <Link
//               href="/home"
//               className="text-[#111827] hover:bg-[#F3F4F6] hover:text-[#3B5FE3] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Home
//             </Link>
//             <Link
//               href="/departments?type=uni"
//               className="text-[#111827] hover:bg-[#F3F4F6] hover:text-[#3B5FE3] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Department
//             </Link>
//             <Link
//               href="/departments?type=admin"
//               className="text-[#111827] hover:bg-[#F3F4F6] hover:text-[#3B5FE3] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Admin
//             </Link>
//             <Link
//               href="/about"
//               className="text-[#111827] hover:bg-[#F3F4F6] hover:text-[#3B5FE3] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               About
//             </Link>
//             <Link
//               href="/tutorial"
//               className="text-[#111827] hover:bg-[#F3F4F6] hover:text-[#3B5FE3] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Tutorial
//             </Link>
//           </div>
//           <div className="pt-4 pb-3 border-t border-gray-200">
//             <div className="flex items-center px-4">
//               <div className="flex-shrink-0">
//                 <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
//                   <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                   </svg>
//                 </span>
//               </div>
//               <div className="ml-3">
//                 <div className="text-base font-medium text-[#111827]">{session?.user?.email}</div>
//               </div>
//               <button
//                 onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
//                 className="ml-auto flex-shrink-0 bg-[#F3F4F6] p-1 rounded-full text-[#111827] hover:text-[#3B5FE3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B5FE3]"
//               >
//                 <span className="sr-only">Open user menu</span>
//                 <svg
//                   className={`h-6 w-6 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//             </div>
//             {mobileDropdownOpen && (
//               <div className="mt-3 space-y-1">
//                 <Link
//                   href="/profile"
//                   className="block px-4 py-2 text-base font-medium text-[#111827] hover:bg-[#F3F4F6] hover:text-[#3B5FE3]"
//                 >
//                   Profile
//                 </Link>
//                 <Link
//                   href="/change-password"
//                   className="block px-4 py-2 text-base font-medium text-[#111827] hover:bg-[#F3F4F6] hover:text-[#3B5FE3]"
//                 >
//                   Change Password
//                 </Link>

//                 <button
//                   onClick={() => signOut()}
//                   className="block w-full text-left px-4 py-2 text-base font-medium text-[#111827] hover:bg-[#F3F4F6] hover:text-[#3B5FE3]"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }





















"use client"

import { useState, useEffect, useRef } from "react"
import ScanUpload from "./ScanUpload"
import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"
import { Upload, ScanLine, ChevronDown, FileText, Star, Folder, Share2 } from "lucide-react"

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const [action, setAction] = useState("")
  const [selectedMail, setSelectedMail] = useState(null)
  const [overDueMails, setOverDueMails] = useState([])
  const [showOverdueMails, setShowOverdueMails] = useState(false)
  const router = useRouter()
  const [displayText, setDisplayText] = useState("")
  const credibilityWords = ["Simple", "Efficient", "Secure"]
  const timeoutRef = useRef(null) // To store the timeout ID for cleanup

  // Effect for session check and fetching overdue mails
  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await getSession()
        if (!session) {
          router.push("/") // Redirect to home if no session
        }
      } catch (error) {
        console.error("Session check failed:", error)
      }
    }
    checkSession()

    // Fetch overdue mails
    async function fetchOverdueMails() {
      try {
        console.log("Fetching overdue mails...")
        const response = await fetch("http://localhost:3000/api/reminder", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        console.log("Response Status:", response.status)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        console.log("API Data:", data) // Debugging line
        setOverDueMails(data.overdueMails || []) // Ensure it's an array
      } catch (error) {
        console.error("Failed to fetch overdue mails", error)
      }
    }

    fetchOverdueMails()
  }, [router]) // Only re-run if router changes

  // Effect for typing animation
  useEffect(() => {
    const typingSpeed = 100 // Speed of typing each character (ms)
    const deletingSpeed = 50 // Speed of deleting each character (ms)
    const pauseDuration = 1500 // Pause duration after typing (ms)

    let currentIndex = 0 // Current word index
    let charIndex = 0 // Current character index
    let isTyping = true // Typing or deleting phase

    const typeOrDelete = () => {
      const currentWord = credibilityWords[currentIndex]

      if (isTyping) {
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.slice(0, charIndex + 1))
          charIndex++
          timeoutRef.current = setTimeout(typeOrDelete, typingSpeed)
        } else {
          // Finished typing, pause before deleting
          timeoutRef.current = setTimeout(() => {
            isTyping = false
            typeOrDelete()
          }, pauseDuration)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentWord.slice(0, charIndex - 1))
          charIndex--
          timeoutRef.current = setTimeout(typeOrDelete, deletingSpeed)
        } else {
          // Finished deleting, move to the next word
          currentIndex = (currentIndex + 1) % credibilityWords.length
          isTyping = true
          typeOrDelete()
        }
      }
    }

    // Start the typing effect
    typeOrDelete()

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, []) // No dependencies, runs once on mount

  const handleMailClick = (mail) => {
    setSelectedMail(mail) // Set the selected mail
  }

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value

    try {
      const response = await fetch(`http://localhost:3000/api/reminder/${selectedMail._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const updatedMail = await response.json()
      setOverDueMails((prevMails) => prevMails.map((mail) => (mail._id === updatedMail._id ? updatedMail : mail)))

      setSelectedMail(null)
    } catch (error) {
      console.error("Failed to update mail status:", error)
    }
  }

  const handleViewPDF = () => {
    if (selectedMail?.pdfUrl) {
      window.open(selectedMail.pdfUrl, "_blank") // Open PDF in a new tab
    } else {
      alert("No PDF available for this mail.")
    }
  }

  const handleOpenForm = (actionType) => {
    setAction(actionType)
    setShowForm(true)
  }

  return (
    <>
      {showForm ? (
        <div>
          {showForm && (
            <div>
              <ScanUpload action={action} onClose={() => setShowForm(false)} />
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />
          {/* Floating Box for Overdue Mails */}
          <div className="fixed bottom-5 right-5 z-50">
            <div
              className="bg-white border border-gray-200 rounded-lg shadow-lg cursor-pointer transition-all hover:shadow-xl"
              onClick={() => setShowOverdueMails(!showOverdueMails)}
            >
              <div
                className={`p-4 font-semibold text-lg flex justify-between items-center ${
                  showOverdueMails ? "border-b border-gray-100" : ""
                }`}
              >
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Overdue Mails
                  {overDueMails.length > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {overDueMails.length}
                    </span>
                  )}
                </span>
                {showOverdueMails && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowOverdueMails(false)
                    }}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
              {showOverdueMails && (
                <div className="max-h-80 overflow-y-auto p-2">
                  {overDueMails.length > 0 ? (
                    <ul className="divide-y divide-gray-100">
                      {overDueMails.map((mail) => (
                        <li
                          key={mail._id}
                          className="py-3 px-2 hover:bg-gray-50 rounded transition-colors cursor-pointer"
                          onClick={() => handleMailClick(mail)}
                        >
                          <div className="font-medium text-gray-800">{mail.subject}</div>
                          <div className="text-sm text-gray-500 mt-1 flex items-center">
                            <span
                              className={`inline-block w-2 h-2 rounded-full mr-2 ${
                                mail.status === "open"
                                  ? "bg-red-500"
                                  : mail.status === "in-progress"
                                    ? "bg-yellow-500"
                                    : "bg-green-500"
                              }`}
                            ></span>
                            Status: {mail.status}
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-center py-4 text-gray-500">No overdue mails found.</p>
                  )}
                </div>
              )}
            </div>
          </div>
          {selectedMail && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1001]">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
                <div className="bg-gradient-to-r from-[#1E213A] to-[#3B5FE3] text-white px-6 py-4">
                  <h2 className="text-xl font-semibold">Mail Details</h2>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <div className="bg-gray-50 p-3 rounded border border-gray-200">{selectedMail.subject}</div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      value={selectedMail.status}
                      onChange={handleStatusChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#3B5FE3] focus:border-[#3B5FE3]"
                    >
                      <option value="open">Open</option>
                      <option value="closed">Closed</option>
                      <option value="in-progress">In Progress</option>
                    </select>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={handleViewPDF}
                      className="px-4 py-2 bg-gradient-to-r from-[#1E213A] to-[#3B5FE3] text-white rounded-md hover:from-[#161829] hover:to-[#3051C6] focus:outline-none focus:ring-2 focus:ring-[#3B5FE3] focus:ring-offset-2"
                    >
                      View PDF
                    </button>
                    <button
                      onClick={() => setSelectedMail(null)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Hero Section with Background Circles */}
          <div className="relative flex-grow w-full flex flex-col items-center p-8 md:p-16 overflow-hidden">
            {/* Background Circles */}
            <div className="absolute right-0 top-1/4 w-64 h-64 rounded-full bg-[#F3F4F6] -z-10"></div>
            <div className="absolute right-20 top-1/2 w-32 h-32 rounded-full bg-[#F3F4F6] -z-10"></div>
            <div className="absolute right-10 bottom-10 w-48 h-48 rounded-full bg-[#F3F4F6] -z-10"></div>
            <div className="absolute right-1/4 top-20 w-80 h-80 rounded-full bg-[#F3F4F6]/70 -z-10"></div>
            <div className="absolute right-1/3 bottom-1/4 w-56 h-56 rounded-full bg-[#F3F4F6]/50 -z-10"></div>
            <div className="absolute left-0 top-1/3 w-72 h-72 rounded-full bg-[#F3F4F6]/60 -z-10"></div>
            <div className="absolute left-1/4 bottom-20 w-64 h-64 rounded-full bg-[#F3F4F6]/40 -z-10"></div>

            {/* Empty space to push content down */}
            <div className="h-[20vh]"></div>

            {/* Header Section - Positioned in the middle of the page */}
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-4 leading-tight">
                <span className="inline-block">Modern Document</span>
                <br />
                <span className="inline-block">Management Made </span>
                <span
                  className="inline-block bg-gradient-to-r from-[#1E213A] to-[#3B5FE3] bg-clip-text text-transparent relative"
                  style={{ minWidth: "120px", textAlign: "left" }}
                >
                  {displayText}
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#1E213A] to-[#3B5FE3] rounded-full"></span>
                </span>
              </h1>
              <p className="text-lg text-[#6B7280] mt-4">
                Streamline your workflow with our intelligent file management system.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => handleOpenForm("Upload")}
                  className="px-6 py-3 bg-gradient-to-r from-[#1E213A] to-[#3B5FE3] text-white rounded-lg shadow-md hover:from-[#161829] hover:to-[#3051C6] transition-all duration-300 text-lg font-medium flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <Upload className="h-5 w-5" />
                  Upload Files
                </button>
                <button
                  onClick={() => handleOpenForm("Scan")}
                  className="px-6 py-3 bg-white border border-[#E5E7EB] text-[#111827] rounded-lg shadow-md hover:bg-[#F3F4F6] transition-all duration-300 text-lg font-medium flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <ScanLine className="h-5 w-5" />
                  Scan
                </button>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center mt-16 mb-16 animate-bounce">
              <div className="p-2 bg-white rounded-full shadow-md">
                <ChevronDown className="h-6 w-6 text-[#3B5FE3]" />
              </div>
            </div>

            {/* Powerful Features Section */}
            <div className="w-full max-w-6xl mb-20 relative">
              <div className="absolute -right-10 -top-10 w-20 h-20 rounded-full bg-[#3B5FE3]/5 -z-10"></div>
              <div className="absolute -left-5 bottom-10 w-16 h-16 rounded-full bg-[#3B5FE3]/10 -z-10"></div>

              <div className="flex justify-center mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] relative inline-block">
                  Powerful Features
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#1E213A] to-[#3B5FE3] rounded-full"></div>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-[#1E213A]/5 to-[#3B5FE3]/10 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#3B5FE3]/5 rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:bg-[#3B5FE3]/10 transition-colors"></div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E213A] to-[#3B5FE3] rounded-full flex items-center justify-center relative z-10">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#111827] group-hover:text-[#3B5FE3] transition-colors">
                    Smart Organization
                  </h3>
                  <p className="text-[#6B7280] text-sm mt-2">AI-powered file categorization and tagging system</p>
                </div>
                <div className="bg-gradient-to-br from-[#1E213A]/5 to-[#3B5FE3]/10 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#3B5FE3]/5 rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:bg-[#3B5FE3]/10 transition-colors"></div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E213A] to-[#3B5FE3] rounded-full flex items-center justify-center relative z-10">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 3.055A9.001 9.001 0 1019.945 13H11V3.055z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#111827] group-hover:text-[#3B5FE3] transition-colors">
                    Advanced Analytics
                  </h3>
                  <p className="text-[#6B7280] text-sm mt-2">Detailed insights into your document usage and patterns</p>
                </div>
                <div className="bg-gradient-to-br from-[#1E213A]/5 to-[#3B5FE3]/10 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#3B5FE3]/5 rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:bg-[#3B5FE3]/10 transition-colors"></div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E213A] to-[#3B5FE3] rounded-full flex items-center justify-center relative z-10">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#111827] group-hover:text-[#3B5FE3] transition-colors">
                    Secure Sharing
                  </h3>
                  <p className="text-[#6B7280] text-sm mt-2">Enterprise-grade security for your sensitive documents</p>
                </div>
              </div>
            </div>

            {/* Quick Actions Section - Moved back after Powerful Features */}
            <div className="w-full max-w-6xl mb-20 relative">
              <div className="absolute -left-10 top-1/2 w-32 h-32 rounded-full bg-[#F3F4F6] -z-10"></div>
              <div className="absolute right-0 bottom-0 w-40 h-40 rounded-full bg-[#F3F4F6]/70 -z-10"></div>

              <div className="flex justify-center mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] relative inline-block">
                  Quick Actions
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#1E213A] to-[#3B5FE3] rounded-full"></div>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-[#1E213A]/5 to-[#3B5FE3]/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden group border border-[#F3F4F6]">
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-[#3B5FE3]/5 group-hover:bg-[#3B5FE3]/10 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E213A] to-[#3B5FE3] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-[#111827] group-hover:text-[#3B5FE3] transition-colors">
                      Recent Files
                    </h3>
                    <p className="text-[#6B7280] text-sm mt-2">Access your recently viewed documents</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#1E213A]/5 to-[#3B5FE3]/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden group border border-[#F3F4F6]">
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-[#3B5FE3]/5 group-hover:bg-[#3B5FE3]/10 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E213A] to-[#3B5FE3] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-[#111827] group-hover:text-[#3B5FE3] transition-colors">
                      Favorites
                    </h3>
                    <p className="text-[#6B7280] text-sm mt-2">View and manage your starred items</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#1E213A]/5 to-[#3B5FE3]/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden group border border-[#F3F4F6]">
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-[#3B5FE3]/5 group-hover:bg-[#3B5FE3]/10 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E213A] to-[#3B5FE3] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                      <Folder className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-[#111827] group-hover:text-[#3B5FE3] transition-colors">
                      Folders
                    </h3>
                    <p className="text-[#6B7280] text-sm mt-2">Browse through your organized folders</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#1E213A]/5 to-[#3B5FE3]/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden group border border-[#F3F4F6]">
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-[#3B5FE3]/5 group-hover:bg-[#3B5FE3]/10 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E213A] to-[#3B5FE3] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                      <Share2 className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-[#111827] group-hover:text-[#3B5FE3] transition-colors">
                      Shared
                    </h3>
                    <p className="text-[#6B7280] text-sm mt-2">See files shared with you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity Section */}
            <div className="w-full max-w-6xl mb-12 relative">
              <div className="absolute -right-5 top-10 w-16 h-16 rounded-full bg-[#3B5FE3]/5 -z-10"></div>

              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-[#111827] relative inline-block">
                  Recent Activity
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#1E213A] to-[#3B5FE3] rounded-full"></div>
                </h2>
                <button className="text-[#3B5FE3] hover:underline text-sm font-medium">View All</button>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-[#1E213A]/5 to-[#3B5FE3]/10 p-5 rounded-xl shadow-md flex items-center justify-between hover:shadow-lg transition-all duration-300 hover:from-[#1E213A]/10 hover:to-[#3B5FE3]/15 border border-[#F3F4F6]">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#1E213A] to-[#3B5FE3] rounded-full">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[#111827] font-medium">Q4 Report.pdf</p>
                      <p className="text-[#6B7280] text-sm">You uploaded this file</p>
                    </div>
                  </div>
                  <p className="text-[#6B7280] text-sm">2 minutes ago</p>
                </div>
                <div className="bg-gradient-to-br from-[#1E213A]/5 to-[#3B5FE3]/10 p-5 rounded-xl shadow-md flex items-center justify-between hover:shadow-lg transition-all duration-300 hover:from-[#1E213A]/10 hover:to-[#3B5FE3]/15 border border-[#F3F4F6]">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#1E213A] to-[#3B5FE3] rounded-full">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[#111827] font-medium">Project Proposal.docx</p>
                      <p className="text-[#6B7280] text-sm">Josh K. shared this file</p>
                    </div>
                  </div>
                  <p className="text-[#6B7280] text-sm">1 hour ago</p>
                </div>
                <div className="bg-gradient-to-br from-[#1E213A]/5 to-[#3B5FE3]/10 p-5 rounded-xl shadow-md flex items-center justify-between hover:shadow-lg transition-all duration-300 hover:from-[#1E213A]/10 hover:to-[#3B5FE3]/15 border border-[#F3F4F6]">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#1E213A] to-[#3B5FE3] rounded-full">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[#111827] font-medium">Meeting Notes.md</p>
                      <p className="text-[#6B7280] text-sm">Mike R. edited this file</p>
                    </div>
                  </div>
                  <p className="text-[#6B7280] text-sm">3 hours ago</p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}
