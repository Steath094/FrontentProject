import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between flex-wrap">
          {/* Left Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-4">Reach us</h2>
            <p className="mb-2">
              <i className="fas fa-phone-alt mr-2"></i> +1012 3456 789
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope mr-2"></i> demo@gmail.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt mr-2"></i> 132 Dartmouth Street, Boston,
              MA 02156, United States
            </p>
          </div>

          {/* Company Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-4">Company</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-500">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-500">Contact</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-500">Blogs</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-4">Legal</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-500">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-500">Terms & Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-500">Terms of Use</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-500">Refund Policy</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-500">Techlabz Keybox</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-500">Downloads</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-500">Forum</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-4">Join Our Newsletter</h2>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 flex-grow rounded-l-md bg-gray-700 text-gray-300"
              />
              <button
                type="submit"
                className="p-2 bg-yellow-500 hover:bg-yellow-600 rounded-r-md text-black font-bold"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 mt-2 text-sm">
              * Will send you weekly updates for better tool management.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
