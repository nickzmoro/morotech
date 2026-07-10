import Image from "next/image";

import StarIcon from "@/assets/icons/star-icon.svg";

import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { BlurFade } from "../ui/blur-fade";

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <BlurFade direction="up">
      <div className="mb-8 flex w-fit items-center gap-2.5 rounded-full border border-white/8 bg-white/5 py-1.5 pr-3.5 pl-2 backdrop-blur-3xl select-none">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/8">
          <Image src={StarIcon} alt="Star" className="h-4 w-4" />
        </div>
        <AnimatedShinyText className="font-heading text-sm font-normal tracking-[-1.5%] text-white/60">
          {text}
        </AnimatedShinyText>
      </div>
    </BlurFade>
  );
}
