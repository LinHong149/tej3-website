import { Euphoria_Script, Exo } from "next/font/google";
import "./globals.css"
import Head from "next/head";
import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const euphoria = Euphoria_Script({
  subsets: ["latin"],
  display: "swap",
  weight: "400"
})
const exo = Exo({
  subsets: ["latin"],
  display: "swap"
})


export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Macaron Bakery</title>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Euphoria+Script&display=swap" rel="stylesheet"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Exo:ital,wght@0,100..900;1,100..900&family=Fanwood+Text:ital@0;1&display=swap" rel="stylesheet"></link>

        {/* Other font links */}
      </Head>
      <div className={`${euphoria.className} ${exo.className}`}>
        {children}
        <Footer />
      </div>
    </>
  );
}