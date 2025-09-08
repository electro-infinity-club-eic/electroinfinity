// src/components/team/TeamCard.tsx
import React, { useState } from "react";
import { Member } from "../../data/team/types";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type Props = { member: Member };

const TeamCard: React.FC<Props> = ({ member }) => {
  const [expanded, setExpanded] = useState(false);

  const isFaculty =
    member.name.includes("Tiwari") || member.name.includes("Ajgar") || member.name.includes("Botre");

  const bio =
  member.name.includes("Tiwari")
    ? "Dr. K.S.Tiwari completed her graduation in 1999 from RKN. She completed her M.Tech and PhD from VNIT Nagpur and has more than 20 years of teaching experience. She is a life member of several reputed bodies like ISTE, IETE, IAENG, RST and has credit to publications in several reputed journals. Her area of expertise is VLSI, Digital Design and Rough set theory."
    : member.name.includes("Ajgar")
    ? "Prof. Yogita Ajgar completed her graduation in 2001 from Pune University and M.E. from PICT college, Pune. She is pursuing her PhD in the field of Machine learning and has more than 15 years of teaching experience. She is a life member of several reputed bodies like ISTE, IETE. Her area of expertise is Microwave and Communication."
    : member.name.includes("Botre")
    ? "I'm an alumnus of the 2023 Electronics & Telecommunication batch. I founded the Electro Infinity Club to create a platform for students to explore electronics beyond the classroom. During my time at college, I focused on building a community of innovation, collaboration, and hands-on learning. Currently, I am pursuing my master’s in the USA, continuing my journey of blending technology with management. For me, this club represents a space where ideas turn into reality and students grow into future innovators."
    : "";

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-cyan-400/30 transition duration-300 w-72"
    >
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-300 mb-4">
        <img
          src={member.image || "/team/placeholder.jpg"}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-2xl font-bold text-gray-800">{member.name}</h4>
      <p className="text-gray-600 text-lg mt-1">{member.role}</p>
      {member.deptOrBranch && (
        <p className="text-gray-500 text-sm">{member.deptOrBranch}</p>
      )}

      {/* Faculty Bio */}
      {isFaculty && bio && (
        <div className="mt-4 text-sm text-gray-600">
          {expanded ? bio : `${bio.substring(0, 100)}...`}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-cyan-600 font-semibold ml-2 hover:underline"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        </div>
      )}

      {/* Social Icons */}
      {(member.social?.linkedin ||
        member.social?.github ||
        member.social?.instagram ||
        member.social?.email) && (
        <div className="flex items-center gap-4 mt-4 text-xl text-gray-700">
          {member.social?.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
          )}
          {member.social?.github && (
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition"
            >
              <FaGithub />
            </a>
          )}
          {member.social?.instagram && (
            <a
              href={member.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          )}
          {member.social?.email && (
            <a
              href={`mailto:${member.social.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <MdEmail />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default TeamCard;
