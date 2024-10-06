import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./navbar";
import { Inter } from "next/font/google";
import { Sedgwick_Ave } from "next/font/google";
import { UserProvider } from "../context/UserContext"; // Make sure you have the correct path to import UserProvider
import { AudioProvider } from "../context/AudioContext";
import { CartProvider } from "../context/CartContext";
import AudioPlayer from "./audioPlayer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AudioProvider>
      <UserProvider>
        <CartProvider>
        <main className={`${inter.variable} font-sans`}>
          <Navbar />
          <Component {...pageProps} />
          <AudioPlayer />
        </main>
        </CartProvider>
      </UserProvider>
    </AudioProvider>
  );
}
