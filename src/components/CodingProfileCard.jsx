import { motion as Motion } from "motion/react";

const CodingProfileCard = ({ platform, username, profileUrl, logo }) => (
  <Motion.div
    whileHover={{
      y: -6,
      boxShadow: "0 24px 80px rgba(15, 23, 42, 0.16)",
    }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="glass-panel flex cursor-pointer flex-col items-center rounded-[1.5rem] p-6 text-center">
    <img
      src={logo}
      alt={platform + " logo"}
      className="mb-4 h-16 w-16 rounded-2xl border border-white/70 bg-white/60 p-3"
    />
    <h3 className="font-display mb-1 text-xl font-semibold text-neutral-950">
      {platform}
    </h3>
    <p className="mb-5 text-neutral-500">{username}</p>
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-flex h-10 items-center rounded-full bg-emerald-700 px-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-800">
      View Profile
    </a>
  </Motion.div>
);

export default CodingProfileCard;
