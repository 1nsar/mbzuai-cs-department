"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  return (
    <section
      id="overview"
      className="relative flex flex-col h-svh justify-between overflow-hidden bg-white border-b border-border/60"
    >
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative z-10">
        <Pill className="mb-6">MBZUAI CS DEPARTMENT</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient text-black">
          Driving AI discovery at <br />
          <i className="font-light">MBZUAI</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-black text-balance mt-8 max-w-[440px] mx-auto">
          Join the Computer Science Department to explore pioneering research,
          graduate programs, and partnerships shaping the future of artificial
          intelligence
        </p>

        <Link
          className="contents max-sm:hidden"
          href="http://mbzuai.ac.ae"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Visit Department Page
          </Button>
        </Link>
        <Link
          className="contents sm:hidden"
          href="http://mbzuai.ac.ae"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Visit Department Page
          </Button>
        </Link>
      </div>
    </section>
  );
}
