import Image from "next/image";
import Nav from "./components/Nav.jsx"
import Hero from "./components/Hero.jsx"
import Promotion from "./components/Promotion.jsx"
import Bestseller from "./components/Bestseller.jsx"
import Commitment from "./components/Commitment.jsx"
import Follow from "./components/Follow.jsx"
import Footer from "./components/Footer.jsx"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-main relative">
      <Hero/>
      <Nav/>
      <Promotion/>
      <Bestseller/>
      <Commitment/>
      <Follow/>
      <Footer/>
    </main>
  );
}
