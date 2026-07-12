import Image from "next/image";

import StarIconBlue from "@/assets/icons/star-blue-icon.svg";
import StarIcon from "@/assets/icons/star-icon.svg";

import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { BlurFade } from "../ui/blur-fade";

interface BadgeProps {
  text: string;
  inView?: boolean;
  variant?: "default" | "blue";
  className?: string;
}

export default function Badge({
  text,
  inView = false,
  variant = "default",
  className,
}: BadgeProps) {
  const isBlue = variant === "blue";
  return (
    <BlurFade direction="up" inView={inView} className={className}>
      <div
        className={`mb-8 flex w-fit items-center gap-2.5 rounded-full border py-1.5 pr-3.5 pl-2 backdrop-blur-3xl select-none ${
          isBlue
            ? "border-blue-500/20 bg-blue-500/10"
            : "border-white/8 bg-white/5"
        }`}
      >
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full ${
            isBlue ? "bg-blue-600/30" : "bg-white/8"
          }`}
        >
          <Image
            src={isBlue ? StarIconBlue : StarIcon}
            alt="Star"
            className="h-4 w-4"
          />
        </div>
        <AnimatedShinyText
          className={`font-heading text-sm font-normal tracking-[-1.5%] ${
            isBlue ? "text-primary dark:text-primary" : "text-white/60"
          }`}
        >
          {text}
        </AnimatedShinyText>
      </div>
    </BlurFade>
  );
}
