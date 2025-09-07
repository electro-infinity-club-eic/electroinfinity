const Footer = () => {
  return (
    <footer className="relative bg-[#0a162d] text-blue-100 text-center p-6 mt-16 border-t border-cyan-400/30">
      <p className="text-sm tracking-wide">
        © {new Date().getFullYear()} <span className="text-cyan-300 font-semibold">Electro Infinity Club</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
