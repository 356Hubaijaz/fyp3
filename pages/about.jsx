// "use client";
// import Navbar from '@components/Navbar'
// import Footer from '@components/Footer'

// export default function About() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         <div className="px-4 py-6 sm:px-0">
//           <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          
//         </div>
//       </main>
//       <Footer />
//     </div>
//   )
// }








// "use client";
// import { useState } from "react";
// import { MailIcon, ShieldIcon, UsersIcon, TrendingUpIcon, CheckCircleIcon, ArrowRightIcon, PlusIcon, MinusIcon } from "lucide-react";
// import Navbar from "@components/Navbar"; // Assuming you have a Navbar component
// import Footer from "@components/Footer"; // Assuming you have a Footer component

// export default function AboutPage() {
//   const [activeFeature, setActiveFeature] = useState("smart");
//   const [openFAQ, setOpenFAQ] = useState(null);

//   const features = {
//     smart: {
//       title: "Smart Categorization",
//       description:
//         "Our AI-powered system automatically organizes your inbox, saving you hours each week.",
//       benefits: ["Reduce email overwhelm", "Focus on high-priority messages", "Never miss important emails"],
//     },
//     search: {
//       title: "Lightning-Fast Search",
//       description:
//         "Find any email or attachment in milliseconds with our advanced search capabilities.",
//       benefits: ["Instant information retrieval", "Search within attachments", "Natural language queries"],
//     },
//     automation: {
//       title: "Powerful Automation",
//       description:
//         "Create custom workflows that handle repetitive tasks automatically.",
//       benefits: ["Streamline your workflow", "Reduce human error", "Increase productivity"],
//     },
//     collaboration: {
//       title: "Seamless Collaboration",
//       description: "Work together effortlessly with shared inboxes and team features.",
//       benefits: ["Improve team communication", "Delegate tasks easily", "Maintain accountability"],
//     },
//   };

//   const faqs = [
//     {
//       question: "How secure is your Mail Management System?",
//       answer:
//         "We prioritize your data security. Our system uses end-to-end encryption, two-factor authentication, and regular security audits to ensure your emails and personal information remain protected at all times.",
//     },
//     {
//       question: "Can I integrate with other tools I use?",
//       answer:
//         "Our Mail Management System seamlessly integrates with popular productivity tools, CRMs, and project management software. This ensures that your email communication fits perfectly into your existing workflow.",
//     },
//     {
//       question: "Is it suitable for both individuals and teams?",
//       answer:
//         "Yes, our system is designed to scale from individual users to large teams. Whether you're a freelancer managing your own inbox or part of a large organization with complex communication needs, our features adapt to your requirements.",
//     },
//     {
//       question: "How does the AI-powered categorization work?",
//       answer:
//         "Our AI analyzes the content, sender, and context of your emails to automatically sort them into relevant categories. It learns from your behavior over time, continuously improving its accuracy. You can also customize the categories and rules to fit your specific needs.",
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-white">
//       <Navbar /> {/* Navbar component */}

//       <header className="bg-sky-600 text-white py-8">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-2">Revolutionize Your Inbox</h1>
//           <p className="text-xl text-sky-100">Experience the future of email management</p>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-12">
//         {/* Why Choose Our System Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-semibold text-sky-800 mb-6">
//             Why Choose Our Mail Management System?
//           </h2>
//           <p className="text-xl text-gray-700 mb-8">
//             In today's fast-paced digital world, email overload is a real problem. Our system is designed to give you back control of your inbox, boost your productivity, and reduce stress.
//           </p>
//           <div className="grid md:grid-cols-2 gap-6">
//             {Object.entries(features).map(([key, feature]) => (
//               <div
//                 key={key}
//                 className={`cursor-pointer transition-all p-6 rounded-lg ${
//                   activeFeature === key ? "bg-sky-100 shadow-lg" : "bg-white hover:shadow-md"
//                 }`}
//                 onClick={() => setActiveFeature(key)}
//               >
//                 <h3 className="text-2xl font-semibold text-sky-800 mb-2">{feature.title}</h3>
//                 <p className="text-gray-600 mb-4">{feature.description}</p>
//                 <ul className="space-y-2">
//                   {feature.benefits.map((benefit, index) => (
//                     <li key={index} className="flex items-center">
//                       <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                       <span>{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Frequently Asked Questions Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-semibold text-sky-800 mb-6">
//             Frequently Asked Questions
//           </h2>
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div key={index} className="border-b border-gray-200 pb-4">
//                 <button
//                   className="flex justify-between items-center w-full text-left"
//                   onClick={() => toggleFAQ(index)}
//                   aria-expanded={openFAQ === index}
//                 >
//                   <h3 className="text-xl font-semibold text-sky-700">{faq.question}</h3>
//                   {openFAQ === index ? (
//                     <MinusIcon className="h-6 w-6 text-sky-600" />
//                   ) : (
//                     <PlusIcon className="h-6 w-6 text-sky-600" />
//                   )}
//                 </button>
//                 {openFAQ === index && (
//                   <p className="text-gray-600 mt-2 transition-all">{faq.answer}</p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Call to Action Section */}
//         <section className="text-center mb-16">
//           <h2 className="text-3xl font-semibold text-sky-800 mb-6">
//             Ready to Transform Your Email Experience?
//           </h2>
//           <p className="text-xl text-gray-700 mb-8">
//             Join thousands of satisfied users who have reclaimed control of their inboxes and boosted their productivity.
//           </p>
//           <a
//             href="/home"
//             className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors"
//           >
//             Start Your Free Trial
//             <ArrowRightIcon className="ml-2 h-5 w-5" />
//           </a>
//         </section>
//       </main>

//       <Footer /> {/* Footer component */}
//     </div>
//   );
// }















"use client"

import { useState } from "react"
import {
  CheckCircleIcon,
  PlusIcon,
  MinusIcon,
  Mail,
  FileText,
  Clock,
  Users,
  Search,
  Shield,
  Building,
  BookOpen,
  ChevronRight,
} from "lucide-react"
import Navbar from "@components/Navbar"
import Footer from "@components/Footer"

export default function AboutPage() {
  const [activeFeature, setActiveFeature] = useState("smart")
  const [openFAQ, setOpenFAQ] = useState(null)

  const features = [
    {
      id: "smart",
      title: "Smart Document Routing",
      description: "Automatically route documents to the right departments",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
    {
      id: "search",
      title: "Powerful Search",
      description: "Find any document in seconds with advanced search",
      icon: <Search className="h-6 w-6" />,
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    },
    {
      id: "automation",
      title: "Workflow Automation",
      description: "Streamline approvals and document processing",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-gradient-to-br from-[#3B5FE3] to-blue-600",
    },
    {
      id: "security",
      title: "Enterprise Security",
      description: "Keep university documents secure and compliant",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-gradient-to-br from-[#3B5FE3] to-red-600",
    },
  ]

  const departments = [
    {
      name: "Academic Affairs",
      description: "Course materials and faculty communications",
      icon: <BookOpen className="h-6 w-6 text-[#3B5FE3]" />,
    },
    {
      name: "Administration",
      description: "Institutional correspondence and records",
      icon: <Building className="h-6 w-6 text-[#3B5FE3]" />,
    },
    {
      name: "Student Services",
      description: "Student communications and records",
      icon: <Users className="h-6 w-6 text-[#3B5FE3]" />,
    },
    {
      name: "Research Departments",
      description: "Grant documents and research correspondence",
      icon: <Mail className="h-6 w-6 text-[#3B5FE3]" />,
    },
  ]

  const faqs = [
    {
      question: "How secure is the document management system?",
      answer:
        "Our system uses role-based access controls, encryption, and comprehensive audit logs to ensure all university documents remain secure and compliant with educational data protection regulations.",
    },
    {
      question: "Can it integrate with existing university systems?",
      answer:
        "Yes, our system integrates with common university management systems, student information systems, and learning management platforms.",
    },
    {
      question: "How does it handle different department needs?",
      answer:
        "Each department can customize their workflows, document types, and access permissions while maintaining a unified system across the university.",
    },
    {
      question: "What support do you provide?",
      answer:
        "We offer training for all staff, dedicated support for administrators, and comprehensive documentation to ensure smooth implementation.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative bg-[#1E213A] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#3B5FE3]/30 to-purple-500/20 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#3B5FE3]/20 to-blue-500/10 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Modern Document Management for <span className="text-[#3B5FE3]">Universities</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Streamline communication, enhance collaboration, and improve efficiency across all departments
            </p>
            {/* <div className="flex flex-wrap gap-4">
              <a
                href="/demo"
                className="px-6 py-3 bg-[#3B5FE3] text-white rounded-lg hover:bg-[#3051C6] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Request Demo
              </a>
              <a
                href="/learn-more"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Learn More
              </a>
            </div> */}
          </div>
        </div>
      </header>

      <main>
        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#111827] mb-3">Powerful Features</h2>
              <p className="text-[#6B7280] max-w-2xl mx-auto">
                Our mail management system is designed specifically for the unique needs of university departments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`${feature.color} p-6 flex justify-center items-center`}>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-[#3B5FE3] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[#6B7280]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[#F3F4F6]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-[#111827] mb-6">Benefits for Your University</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-[#3B5FE3]/10">
                      <CheckCircleIcon className="h-5 w-5 text-[#3B5FE3]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827]">75% Faster Document Processing</h3>
                      <p className="text-[#6B7280]">
                        Automated routing and approvals dramatically reduce processing time
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-[#3B5FE3]/10">
                      <CheckCircleIcon className="h-5 w-5 text-[#3B5FE3]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827]">Enhanced Interdepartmental Collaboration</h3>
                      <p className="text-[#6B7280]">
                        Share documents securely between departments with complete tracking
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-[#3B5FE3]/10">
                      <CheckCircleIcon className="h-5 w-5 text-[#3B5FE3]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827]">Improved Compliance & Security</h3>
                      <p className="text-[#6B7280]">
                        Meet educational data protection requirements with robust security
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B5FE3]/10 to-transparent rounded-xl"></div>
                <div className="relative bg-white rounded-xl shadow-lg p-8 border border-[#F3F4F6]">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-[#111827]">Document Processing</h3>
                    <span className="text-[#3B5FE3] font-bold">75% Faster</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-[#6B7280]">Traditional Process</span>
                        <span className="text-[#6B7280]">4 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-400 h-2 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-[#6B7280]">With Doculus</span>
                        <span className="text-[#6B7280]">1 day</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#3B5FE3] h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#111827] mb-3">Serving All University Departments</h2>
              <p className="text-[#6B7280] max-w-2xl mx-auto">
                Our system adapts to the unique needs of each department while maintaining a unified platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-[#3B5FE3] border border-[#F3F4F6] group"
                >
                  <div className="p-3 rounded-lg bg-[#F3F4F6] inline-flex mb-4 group-hover:bg-[#3B5FE3]/10 transition-colors">
                    {dept.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#111827] mb-2">{dept.name}</h3>
                  <p className="text-[#6B7280]">{dept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-[#F3F4F6]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#111827] mb-3">Frequently Asked Questions</h2>
              <p className="text-[#6B7280] max-w-2xl mx-auto">
                Everything you need to know about our university mail management system
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    className="flex justify-between items-center w-full text-left p-6"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openFAQ === index}
                  >
                    <h3 className="text-lg font-semibold text-[#111827]">{faq.question}</h3>
                    <div
                      className={`p-1 rounded-full ${openFAQ === index ? "bg-[#3B5FE3]/10" : "bg-[#F3F4F6]"} transition-colors`}
                    >
                      {openFAQ === index ? (
                        <MinusIcon className="h-5 w-5 text-[#3B5FE3]" />
                      ) : (
                        <PlusIcon className="h-5 w-5 text-[#6B7280]" />
                      )}
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6 text-[#6B7280] animate-in fade-in duration-200">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-[#1E213A] text-white rounded-2xl overflow-hidden shadow-xl relative">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#3B5FE3]/30 to-purple-500/20 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#3B5FE3]/20 to-blue-500/10 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
              </div>

              {/* <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-4">Ready to Transform Document Management?</h2>
                  <p className="text-xl text-gray-300">
                    Join leading universities that have streamlined their administrative processes
                  </p>
                </div>
                <div>
                  <a
                    href="/demo"
                    className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-[#3B5FE3] rounded-lg hover:bg-[#3051C6] transition-all transform hover:scale-105 shadow-lg"
                  >
                    Schedule a Demo
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

