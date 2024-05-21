import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-700  py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-4">Our Team</p>
        <ul className="flex justify-center space-x-8">
          <li className="">
            <p className="hover:text-green-400">Dev</p>
          </li>
          <li className="">
            <p className="hover:text-green-400">Shivam</p>
          </li>
          <li className="">
            <p className="hover:text-green-400">Ananya</p>
          </li>
        </ul>
        <p className="mt-4 text-xs ">&copy; {new Date().getFullYear()} Food Fusion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
