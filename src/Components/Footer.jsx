import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">IELTSPro</h3>
          <p className="text-gray-400">
            Helping students achieve their dream IELTS scores since 2025.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-gray-400">📞 +91 9874563210</p>
          <p className="text-gray-400">✉️ info@ieltspro.com</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        © 2025 IELTSPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
