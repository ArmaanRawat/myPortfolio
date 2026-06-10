import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  gitLink,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="glass-panel group flex flex-col gap-6 rounded-[1.5rem] p-5 transition hover:-translate-y-1 hover:bg-white/75 md:flex-row md:items-center md:justify-between md:p-6"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}>
        <div className="min-w-0">
          <p className="font-display text-2xl font-semibold text-neutral-950">
            {title}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm font-medium text-emerald-800">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-1">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 text-sm font-semibold text-white transition group-hover:bg-emerald-700">
          Read More
          <img src="/assets/arrow-right.svg" className="w-5 invert" />
        </button>
      </div>
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          gitLink={gitLink}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
