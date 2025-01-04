import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span className="text-xl font-semibold">
          <span className="text-indigo-500">CS</span> |{" "}
          <span className="text-pink-500">PF</span>
        </span>
        <p className="text-slate-400 mt-4 md:mt-0">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
