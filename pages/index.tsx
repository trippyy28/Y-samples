import Image from "next/image";
import Navbar from "./navbar";
import HomePage from "./home";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
