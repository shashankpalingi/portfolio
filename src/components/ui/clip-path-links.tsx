import React from "react";
import {
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiRender,
  SiNetlify,
  SiGit,
  SiGithub,
  SiFigma,
  SiFramer,
} from "react-icons/si";
import { useAnimate } from "framer-motion";

export const ClipPathLinks = () => {
  return (
    <div className="divide-y border divide-border border-border">
      <div className="grid grid-cols-4 divide-x divide-border">
        <LinkBox Icon={SiCplusplus} href="https://isocpp.org/" />
        <LinkBox Icon={SiJavascript} href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
        <LinkBox Icon={SiHtml5} href="https://developer.mozilla.org/en-US/docs/Web/HTML" />
        <LinkBox Icon={SiCss} href="https://developer.mozilla.org/en-US/docs/Web/CSS" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-border">
        <LinkBox Icon={SiReact} href="https://react.dev/" />
        <LinkBox Icon={SiNextdotjs} href="https://nextjs.org/" />
        <LinkBox Icon={SiTypescript} href="https://www.typescriptlang.org/" />
        <LinkBox Icon={SiTailwindcss} href="https://tailwindcss.com/" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-border">
        <LinkBox Icon={SiNodedotjs} href="https://nodejs.org/" />
        <LinkBox Icon={SiFastapi} href="https://fastapi.tiangolo.com/" />
        <LinkBox Icon={SiMongodb} href="https://www.mongodb.com/" />
        <LinkBox Icon={SiMysql} href="https://www.mysql.com/" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-border">
        <LinkBox Icon={SiSupabase} href="https://supabase.com/" />
        <LinkBox Icon={SiFirebase} href="https://firebase.google.com/" />
        <LinkBox Icon={SiRender} href="https://render.com/" />
        <LinkBox Icon={SiNetlify} href="https://www.netlify.com/" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-border">
        <LinkBox Icon={SiGit} href="https://git-scm.com/" />
        <LinkBox Icon={SiGithub} href="https://github.com/" />
        <LinkBox Icon={SiFigma} href="https://www.figma.com/" />
        <LinkBox Icon={SiFramer} href="https://www.framer.com/" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "left" | "right" | "top" | "bottom";

const ENTRANCE_KEYFRAMES: Record<Side, string[]> = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: Record<Side, string[]> = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

type LinkBoxProps = {
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
};

const LinkBox = ({ Icon, href }: LinkBoxProps) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent): Side => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="glass-card relative grid h-14 w-full place-content-center sm:h-18 md:h-24 text-foreground"
    >
      <Icon className="text-xl sm:text-3xl md:text-4xl" />

      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-black text-white transition-colors duration-300"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};
