import CodingProfileCard from "../components/CodingProfileCard";

const Coding = () => (
  <section className="section-shell bg-[#f7f5ef]" id="coding">
    <div className="section-inner">
      <p className="section-kicker">Problem Solving</p>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <h2 className="text-heading">Competitive thinking, product execution.</h2>
        <div className="glass-panel rounded-[1.5rem] p-6">
          <p className="text-base leading-8 text-neutral-600">
            As Competitive Lead for Google Developers Group on campus, I helped
            foster a coding culture through workshops, hackathons, and coding
            competitions while sharpening my engineering and leadership skills.
          </p>
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <CodingProfileCard
          platform="Codeforces"
          username="Armaan_rawat11"
          profileUrl="https://codeforces.com/profile/Armaan_rawat11"
          logo="/assets/logos/codeforces.svg"
        />
        <CodingProfileCard
          platform="LeetCode"
          username="cactusXjack11"
          profileUrl="https://leetcode.com/u/cactusXjack11/"
          logo="/assets/logos/leetcode.svg"
        />
        <CodingProfileCard
          platform="CodeChef"
          username="armaanrawat005"
          profileUrl="https://www.codechef.com/users/armaanrawat005"
          logo="/assets/logos/codechef.svg"
        />
      </div>
    </div>
  </section>
);

export default Coding;
