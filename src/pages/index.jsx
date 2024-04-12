import { Euphoria_Script } from "next/font/google/index.js";
import { Exo } from "next/font/google/index.js";

import Image from "next/image";
import Nav from "@/app/components/Nav.jsx";
import Hero from "@/app/components/Hero.jsx";
import Promotion from "@/app/components/Promotion.jsx";
import Bestseller from "@/app/components/Bestseller.jsx";
import Commitment from "@/app/components/Commitment.jsx";
import Follow from "@/app/components/Follow.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-main relative">
      <Hero/>
      <Nav/>
      <Promotion/>
      <Bestseller/>
      <Commitment/>
      <Follow/>
      {/* <Footer/> */}
    </main>
  );
}
