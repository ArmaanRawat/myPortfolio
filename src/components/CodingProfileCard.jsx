import { motion } from "motion/react";

const CodingProfileCard = ({ platform, username, profileUrl, logo }) => (
  <motion.div
    whileHover={{
      scale: 1.08,
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="flex flex-col items-center bg-gradient-to-br from-midnight to-navy border border-white/10 rounded-2xl shadow-md p-6 w-64 cursor-pointer">
    <img
      src={logo}
      alt={platform + " logo"}
      className="w-16 h-16 mb-4 rounded-full bg-white/10"
    />
    <h3 className="text-xl font-semibold text-white mb-1">{platform}</h3>
    <p className="text-neutral-400 mb-4">{username}</p>
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 mt-auto font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
      View Profile
    </a>
  </motion.div>
);

export default CodingProfileCard;
