import CodingProfileCard from "../components/CodingProfileCard";

const Coding = () => (
  <section className="c-space mt-20 md:mt-30 mb-20 md:mb-30" id="coding">
    <h2 className="text-heading">Problem Solving</h2>
    <div className="mt-8 mb-12 max-w-3xl text-lg text-neutral-300">
      <p className="mb-4">
        As the <strong> Competitive Lead</strong> for the{" "}
        <strong> Google Developers Group (GDG) on campus</strong>, I have had
        the privilege of fostering a vibrant coding culture. My journey in this
        role has underscored the importance of collaboration and effective
        communication, both within my team and the wider student community.
      </p>
      <p className="mb-4">
        Together with my team, I have organized online workshops, hackathons,
        and various coding competitions, all aimed at boosting the coding
        culture in our college. These experiences have not only honed my
        technical skills but also strengthened my leadership and organizational
        abilities.
      </p>
    </div>
    <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
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
  </section>
);

export default Coding;
