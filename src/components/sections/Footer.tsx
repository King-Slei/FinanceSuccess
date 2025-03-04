import React from "react";
import instagram from "@assets/instagram.png";
import facebook from "@assets/facebook.png";
import linkedin from "@assets/linkedin.png";
import background from "@assets/background.png";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

type FooterProps = {
  isHomePage?: boolean;
};

const Footer: React.FC<FooterProps> = ({isHomePage = false}) => {
  return (
    <>
      {/* Ready Section */}
      {!isHomePage && (<div
        className="bg-cover bg-center py-12 flex flex-col items-center text-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <motion.h2
          className="text-3xl font-bold text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
        >
          Ready To Get Started? Let’s Get in Touch
        </motion.h2>

        <motion.button
          className="mt-4 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
        >
          Contact Us
        </motion.button>
      </div>)}

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6 text-sm mb-4">
          <a href="#home" className="hover:underline">HOME</a>
          <a href="#about" className="hover:underline">ABOUT</a>
          <a href="#services" className="hover:underline">SERVICES</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="#tips" className="hover:underline">TIPS & TRICKS</a>
          <a href="#appointment" className="hover:underline">BOOK AN APPOINTMENT</a>
        </nav>

        {/* Copyright Text */}
        <p className="text-sm text-center mb-4">
          © Copyright 2025 VictorEziyi. All Rights Reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="bg-white p-2 rounded-md shadow-md">
            <img src={instagram} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" className="bg-white p-2 rounded-md shadow-md">
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="bg-white p-2 rounded-md shadow-md">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>

      </div>
    </footer>
    </>
  );
};

export default Footer;





// import React from "react";
// import instagram from "@assets/instagram.png";
// import facebook from "@assets/facebook.png";
// import linkedin from "@assets/linkedin.png";

// const Footer = () => {
//   return (
    // <footer className="bg-blue-900 text-white py-6 mt-16">
    //   <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
    //     {/* Navigation Links */}
    //     <nav className="flex flex-wrap justify-center space-x-6 text-sm mb-4">
    //       <a href="#home" className="hover:underline">HOME</a>
    //       <a href="#about" className="hover:underline">ABOUT</a>
    //       <a href="#services" className="hover:underline">SERVICES</a>
    //       <a href="#faq" className="hover:underline">FAQ</a>
    //       <a href="#tips" className="hover:underline">TIPS & TRICKS</a>
    //       <a href="#appointment" className="hover:underline">BOOK AN APPOINTMENT</a>
    //     </nav>

    //     {/* Copyright Text */}
    //     <p className="text-sm text-center mb-4">
    //       © Copyright 2025 VictorEziyi. All Rights Reserved.
    //     </p>

    //     {/* Social Media Icons */}
    //     <div className="flex space-x-4">
    //       <a href="#" className="bg-white p-2 rounded-md shadow-md">
    //         <img src={instagram} alt="Instagram" className="w-6 h-6" />
    //       </a>
    //       <a href="#" className="bg-white p-2 rounded-md shadow-md">
    //         <img src={facebook} alt="Facebook" className="w-6 h-6" />
    //       </a>
    //       <a href="#" className="bg-white p-2 rounded-md shadow-md">
    //         <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
    //       </a>
    //     </div>

    //   </div>
    // </footer>
//   );
// };

// export default Footer;