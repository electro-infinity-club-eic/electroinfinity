// src/components/team/YearTabs.tsx
import React from "react";
import { motion } from "framer-motion";

type Props = {
  years: string[];
  activeYear: string;
  onChange: (year: string) => void;
};

const YearTabs: React.FC<Props> = ({ years, activeYear, onChange }) => {
  return (
    <div className="flex justify-center gap-4 mt-10 flex-wrap">
      {years.map((year) => (
        <motion.button
          key={year}
          onClick={() => onChange(year)}
          whileHover={{ scale: 1.05 }}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeYear === year
              ? "bg-cyan-400 text-[#0f1f3d]"
              : "bg-white/10 text-white hover:bg-cyan-300 hover:text-[#0f1f3d]"
          }`}
        >
          {year}
        </motion.button>
      ))}
    </div>
  );
};

export default YearTabs;
