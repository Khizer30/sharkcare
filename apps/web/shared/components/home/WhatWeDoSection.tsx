import type { IconType } from "react-icons";
import {
  HiOutlineCheck,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineUsers
} from "react-icons/hi2";

const ACCENT_GREEN = "#1F8707";

const pillars: {
  title: string;
  description: string;
  icon: IconType;
}[] = [
  {
    title: "Compassion",
    description: "Leading with empathy in every initiative we take on.",
    icon: HiOutlineHeart
  },
  {
    title: "Community Support",
    description: "Standing beside the communities where our people live and work.",
    icon: HiOutlineUsers
  },
  {
    title: "Outreach Initiatives",
    description: "Taking action directly to the people who need it most.",
    icon: HiOutlineGlobeAlt
  },
  {
    title: "Meaningful Action",
    description: "Turning good intentions into lasting, measurable impact.",
    icon: HiOutlineCheck
  }
];

export function WhatWeDoSection() {
  return (
    <section id="pillars" className="bg-[#F1F0EA]">
      <div className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,56px)] py-[clamp(72px,9vw,112px)]">
        <div className="mb-[clamp(40px,6vw,64px)] flex max-w-[560px] flex-col gap-3">
          <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#1F8707]">
            What We Do
          </span>
          <h2 className="font-heading text-[clamp(28px,3.4vw,38px)] leading-[1.2] font-medium text-[#000B3D]">
            Four ways we show up
          </h2>
        </div>
        <div className="sc-pillars-grid grid grid-cols-1 gap-5 min-[481px]:grid-cols-2 min-[961px]:grid-cols-4">
          {pillars.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="sc-pillar flex flex-col gap-3.5 rounded-[18px] border border-[rgba(0,11,61,0.08)] bg-white px-[22px] py-7"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "rgba(31,135,7,0.10)" }}
                aria-hidden
              >
                <Icon className="h-[22px] w-[22px]" style={{ color: ACCENT_GREEN }} strokeWidth={1.8} />
              </div>
              <h3 className="font-heading text-[19px] font-semibold text-[#000B3D]">{title}</h3>
              <p className="text-[14.5px] leading-relaxed text-[#565B6B]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
