"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import HomePage from "./Home";
import Applicant from "./Applicant";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};
const DRAG_BUFFER = 50;
const pages = [
  {
    name: "Home",
    jsx: <HomePage />,
  },
  {
    name: "Steve Slapshot",
    jsx: (
      <Applicant
        name={"Steve Slapshot"}
        age={"11"}
        salary={"Two wax candles"}
        availability={"No"}
        about={
          `Hello I like to play with mud, sometimes I eat the mud but it tastes funny, my mom says I am special and therefor I am looking for a job, I moderate a discord channel and I have lots of kittens, Meow!
          I therefor think that I would be a good developer because I like computers.`
        }
        skills={[{ skillName: "Mud playing", value: 87 }]}
        quickFacts={["Likes mud"]}
        requirements={["Mud"]}
      />
    ),
  },
  {
    name: "Robert Ross",
    jsx: (
      <Applicant
        name={"Robert Rose"}
        age={"54"}
        salary={"$90.000"}
        availability={"When I feel like it"}
        about={
          `I am the epitome of software mastery, boasting over 30 years of experience. I cut my teeth on DOS and Assembly, and have since conquered every language and technology in existence. My brilliance knows no bounds.`
        }
        skills={[
          {
            skillName: "Assembly Language",
            value: 100
          },
          {
            skillName: "C/C++",
            value: 98
          },
          {
            skillName: "Python",
            value: 95
          },
          {
            skillName: "Java",
            value: 90
          },
          {
            skillName: "JavaScript",
            value: 88
          },
          {
            skillName: "HTML/CSS",
            value: 85
          },
          {
            skillName: "SQL",
            value: 85
          },
          {
            skillName: "Social",
            value: 12
          }
        ]}
        quickFacts={[
          "Likes old cars",
          "Enjoys fine tobacco",
          "Can't take criticism",
          "Believes in the superiority of Emacs over Vim",
          "Thinks object-oriented programming is for amateurs",
          "Prefers coding in binary just for fun"
        ]}
        requirements={[
          "Must have my own office. Yes, my own building.",
          "Will not accept criticism",
          "Everyone must bow down before me when I arrive",
          "Must have unlimited access to the finest cigars and whiskey",
          "Preferably, a personal assistant to anticipate my every need",
          "Absolutely no interruptions during my coding sessions"
        ]}
      />
    ),
  },
];

export default function Hero() {
  const [pageIndex, setPageIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    // if user presses right or left key, change page, use effect
    const onKeyDown = (e: KeyboardEvent) => {
      // return early if there are no pages ahead or behind and we are at the end or start
      if (
        (e.key === "ArrowRight" && pageIndex === pages.length - 1) ||
        (e.key === "ArrowLeft" && pageIndex === 0) ||
        (e.key !== "ArrowRight" && e.key !== "ArrowLeft")
      ) {
        return;
      }

      if (e.key === "ArrowRight" && pageIndex < pages.length - 1) {
        setPageIndex((pv) => pv + 1);
      } else if (e.key === "ArrowLeft" && pageIndex > 0) {
        setPageIndex((pv) => pv - 1);
      }
    };
    const onScroll = (e: WheelEvent) => {
      e.preventDefault();
      // Same as above, scroll up = increase pageIndex, scroll down = decrease pageIndex
      if (e.deltaY > 0 && pageIndex < pages.length - 1) {
        setPageIndex((pv) => pv + 1);
      } else if (e.deltaY < 0 && pageIndex > 0) {
        setPageIndex((pv) => pv - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("wheel", onScroll);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("wheel", onScroll);
    };
  }, [pageIndex]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && pageIndex < pages.length - 1) {
      setPageIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && pageIndex > 0) {
      setPageIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-x-hidden ">
      <Progress
        value={((pageIndex + 1) / pages.length) * 100}
        className="absolute top-0 h-[4px]"
      />

      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${pageIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex relative cursor-grab active:cursor-grabbing"
      >
        <Pages pageIndex={pageIndex} />
      </motion.div>
      <Dots pageIndex={pageIndex} setPageIndex={setPageIndex} />
    </div>
  );
}

const Pages = ({ pageIndex }: { pageIndex: number }) => {
  return (
    <>
      {pages.map((pages: { name: string; jsx: JSX.Element }, i: number) => {
        return (
          <motion.div
            key={i}
            animate={{
              scale: pageIndex === i ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-screen shrink-0 h-screen"
          >
            {pages.jsx}
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({
  pageIndex,
  setPageIndex,
}: {
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="md:flex hidden w-full justify-center gap-4 absolute bottom-2 z-10">
      {pages.map((page, i) => {
        return (
          <TooltipProvider delayDuration={0} key={i}>
            <Tooltip>
              <TooltipTrigger>
                <div
                  key={i}
                  onClick={() => setPageIndex(i)}
                  className={`h-3 w-3 rounded-full transition-all hover:cursor-pointer  hover:scale-150 ${
                    i === pageIndex ? "bg-primary scale-150" : "bg-primary/50"
                  }`}
                />
              </TooltipTrigger>
              <TooltipContent className="mb-2.5">{page.name}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};
