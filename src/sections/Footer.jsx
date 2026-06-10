import { mySocials } from "../constants";
const Footer = () => {
  return (
    <footer className="w-full bg-[#f7f5ef] pb-6">
      <div className="section-inner">
        <div className="glass-panel flex flex-col items-center justify-between gap-5 rounded-[1.5rem] px-5 py-5 text-sm text-neutral-600 md:flex-row">
          <p className="font-display text-lg font-semibold text-neutral-950">
            Armaan Rawat
          </p>
          <div className="flex gap-3">
            {mySocials.map((social) => (
              <a
                href={social.href}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip flex h-10 w-10 items-center justify-center rounded-full transition hover:-translate-y-0.5 hover:bg-emerald-100/70">
                <img
                  src={social.icon}
                  className="h-5 w-5 brightness-0 transition"
                  alt={social.name}
                />
              </a>
            ))}
          </div>
          <p>2025 armaanrawat0055. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
