import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bottom-0 bg-gradient-to-l from-grey to-black">
      <div className="flex justify-center space-x-4 p-4">
        <div className="text-center flex flex-col items-center">
          <div className="rounded-full bg-blue p-4">
            <FaFacebook size={16} color="white" />
          </div>
        </div>

        <div className="text-center flex flex-col items-center">
          <div className="rounded-full bg-blue p-4">
            <FaTwitter size={16} color="white" />
          </div>
        </div>

        <div className="text-center flex flex-col items-center">
          <div className="rounded-full bg-blue p-4">
            <FaPinterest size={16} color="white" />
          </div>
        </div>

        <div className="text-center flex flex-col items-center">
          <div className="rounded-full bg-blue p-4">
            <FaLinkedin size={16} color="white" />
          </div>
        </div>

        <div className="text-center flex flex-col items-center">
          <div className="rounded-full bg-blue p-4">
            <FaGoogle size={16} color="white" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-blue text-sm text-center p-2">
          &copy; {currentYear} PRP. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
