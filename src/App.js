// import React from 'react';

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       {/* Top Bar */}
//       <nav className="bg-white shadow-md">
//         <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center">
//               <img src="/logo.png" alt="Logo" className="h-8 w-auto sm:h-10" />
//               <span className="ml-4 text-xl font-bold text-yellow-400">Bioscope Journeys</span>
//             </div>
//             <div>
//               <ul className="flex space-x-8">
//                 <li><a href="#home" className="text-gray-800 hover:text-yellow-500">Home</a></li>
//                 <li><a href="#themes" className="text-gray-800 hover:text-yellow-500">Travel Themes</a></li>
//                 <li><a href="#values" className="text-gray-800 hover:text-yellow-500">Values</a></li>
//                 <li><a href="#contact" className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500">Connect</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>

//      {/* Hero Section */}
// <div className="relative bg-cover bg-center  h-96 flex justify-center items-center text-white">
//   <video
//     className="absolute inset-0 h-full w-full object-cover opacity-90"
//     autoPlay
//     loop
//     muted
//     playsInline
//   >
//     <source src="/videosample2.mp4" type="video/mp4" />
//     {/* Your browser does not support the video tag. */}
//   </video>
//   <h1 className="text-4xl font-extrabold z-10 font-siro">
//   Wonder that is India
// </h1>
// </div>


//       {/* Quote Section */}
//       <div className="py-12 bg-white text-center">
//         <h2 className="text-3xl font-bold text-yellow-400">The world is a book, and those who do not travel, read only a page</h2>
//         <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">India is a miniature world, a planet by itself, as diverse as any land can be...</p>
//       </div>

//       {/* Themes Section */}
//       <div id="themes" className="py-12 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-2xl font-bold text-center text-yellow-400 mb-8">Explore India through these themes</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {['Culture', 'Wildlife', 'Active', 'Celebrations', 'Wellness', 'Women Travel'].map((theme, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
//                 <img src={`/${theme.toLowerCase()}.jpg`} alt={theme} className="w-full h-40 object-cover rounded-t-lg" />
//                 <h3 className="text-xl font-bold text-gray-800 mt-4">{theme}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Special Interest Section */}
//       <div className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-2xl font-bold text-yellow-400 mb-6">Special Interest</h2>
//           <button className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500">Discover</button>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div id="contact" className="bg-gray-100 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between">
//             <div className="mb-8 md:mb-0 md:w-1/3">
//               <h3 className="text-xl font-bold text-gray-800">Reach Us</h3>
//               <p className="text-gray-600">HQ: 218-219, MG Road, Gurgaon</p>
//               <p className="text-gray-600">Phone: +91-124-4974679</p>
//               <p className="text-gray-600">Email: contact@PeriplusTravel.com</p>
//             </div>
//             <div className="md:w-2/3">
//               <h3 className="text-xl font-bold text-gray-800">Could we call you? Please fill out the form.</h3>
//               <form className="mt-6 space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full p-3 rounded-md border border-gray-300"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full p-3 rounded-md border border-gray-300"
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone"
//                   className="w-full p-3 rounded-md border border-gray-300"
//                 />
//                 <textarea
//                   placeholder="Message"
//                   className="w-full p-3 rounded-md border border-gray-300 h-32"
//                 />
//                 <button className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500">Send</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p>© 2023 Bioscope Travel. All Rights Reserved. | Terms & Conditions</p>
//         </div>
//       </footer>
//     </div>
//   );
// }


import React from 'react';
import { useState } from "react";


export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);


  const days = [
    {
      title: "Day 1: Arrival & Sightseeing",
      description: "Explore India Gate, Rashtrapati Bhavan, Humayun's Tomb, and Qutub Minar. Enjoy dinner at Connaught Place.",
    },
    {
      title: "Day 2: Cultural Exploration",
      description: "Visit Red Fort, Jama Masjid, Chandni Chowk, and Akshardham Temple for a light show.",
    },
    {
      title: "Day 3: Shopping & Departure",
      description: "Shop at Dilli Haat, Sarojini Nagar, and Janpath Market before departure.",
    },
  ];



  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-siro">
      {/* Top Bar */}
    <nav className="fixed w-full z-50 bg-white bg-opacity-80 shadow-md backdrop-filter backdrop-blur-lg mt-0">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto sm:h-10" />
            <span className="ml-4 text-xl font-bold text-yellow-400 transition-transform duration-300 transform hover:scale-105 ">Bioscope Journeys</span>
          </div>

          {/* Hamburger icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a href="#home" className="text-gray-800 hover:text-yellow-500 transition duration-300 ease-in-out">
                  Home
                </a>
              </li>
              <li>
                <a href="#themes" className="text-gray-800 hover:text-yellow-500 transition duration-300 ease-in-out">
                  Explore
                </a>
              </li>
              <li>
                <a href="#values" className="text-gray-800 hover:text-yellow-500 transition duration-300 ease-in-out">
                  About us
                </a>
              </li>
              <li>
                <a href="#contact" className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300 ease-in-out">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4 pb-4`}>
          <ul className="space-y-4">
            <li>
              <a href="#home" className="text-gray-800 hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#themes" className="text-gray-800 hover:text-yellow-500">
              Explore
              </a>
            </li>
            <li>
              <a href="#values" className="text-gray-800 hover:text-yellow-500">
              About us
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-800 hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

     {/* Hero Section */}
     <>
     {/* Video Background Section */}
<div className="relative bg-cover bg-center h-96 flex justify-center items-center text-white">
  <video
    className="absolute inset-0 h-full w-full object-cover opacity-90 mt-16 bg-black"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videosample2.mp4" type="video/mp4" />
  </video>
  
  {/* Overlay for better text visibility */}
  {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

  <div className="relative z-10 text-center">
    <h1 className="text-4xl mt-40 font-extrabold transition-transform duration-300 transform hover:scale-105 text-shadow">
      Wonder that is India
    </h1>
    <p className="mt-4 text-lg opacity-80">Experience the magic of diverse cultures and breathtaking landscapes.</p>
    <a href="#explore" className="mt-6 inline-block bg-yellow-400 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-yellow-500 transition duration-300">
      Explore Now
    </a>
  </div>
</div>

<style jsx>{`
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
`}</style>


      {/* Quote Section */}
      <div className="py-12 bg-white text-center pl-16 pr-16">
        <h2 className="text-2xl mt-16 font-bold text-yellow-400 transition-colors duration-300 hover:text-yellow-500 ">
          The world is a book, and those who do not travel, read only a page
        </h2>
        <p className="mt-3 text-lg text-gray-700 max-w-3xl mx-auto transition-transform duration-300 transform hover:scale-105 ">
          India is a miniature world, a planet by itself, as diverse as any land can be...
        </p>
      </div>

      {/* Themes Section */}
      <div id="themes" className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-yellow-400 mb-8 transition-colors duration-300 hover:text-yellow-500">
            Explore India through these themes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    { name: 'Culture', img: '/culture.png' },
    { name: 'Wildlife', img: '/wildlife.jpeg' },
    { name: 'Tour Plans', img: '/tour_plans.jpeg' },
    { name: 'Celebrations', img: '/celebrations.jpeg' },
    { name: 'Locations', img: '/locations.jpeg' },
    { name: 'Travel', img: '/travel.jpeg' }
  ].map((theme, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-lg overflow-hidden relative h-72 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
    >
      <img
        src={theme.img}
        alt={theme.name}
        className="w-full h-full object-cover transition-transform duration-300"
      />
      <h3
        className="absolute inset-0 flex items-center justify-center text-2xl font-extrabold text-white opacity-0 transition-opacity duration-300 transform hover:opacity-100 bg-gradient-to-b from-transparent to-black p-2 text-center"
        style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
      >
        {theme.name}
      </h3>
    </div>
  ))}
</div>




        </div>
      </div>
    </>

      {/* Special Interest Section */}
      <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 transition-colors duration-300 hover:text-yellow-500">Delhi Travel Itinerary</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {days.map((day, index) => (
            <div
              key={index}
              className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-yellow-400 mb-2">{day.title}</h3>
              <p className="text-gray-800">{day.description}</p>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-yellow-400 opacity-0 hover:opacity-100 text-white flex items-center justify-center transition-opacity duration-300 p-2 rounded-lg">
              <h3 className="text-lg font-bold text-white-400 mb-2">{day.title}</h3>
              <p className="text-gray-800">{day.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500">
          Discover More
        </button>
      </div>
    </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gradient-to-b from-gray-100 to-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between">
      {/* Contact Info */}
      <div className="mb-8 mr-8 md:mb-0 md:w-1/3 bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:shadow-xl">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Reach Us</h3>
        <p className="text-gray-600">HQ: A-96, IInd Floor, Dwarka, New Delhi, India- 110077</p>
        <p className="text-gray-600">Phone: +91-9873879913</p>
        <p className="text-gray-600">Email: <a href="mailto:tours@bioscopejourneysindia.com" className="text-yellow-400 underline">tours@bioscopejourneysindia.com</a></p>
      </div>

      {/* Contact Form */}
      <div className="md:w-2/3 bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:shadow-xl">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Could we call you? Please fill out the form.</h3>
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none h-32"
          />
          <button className="bg-yellow-400 text-white px-6 py-3 rounded-md hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</div>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Bioscope Journeys. All Rights Reserved. | Terms & Conditions</p>
        </div>
      </footer>
    </div>
  );
}
