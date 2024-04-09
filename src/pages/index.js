import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import HomePage from "./homepage";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <BottomNav />
    </>
  );
}
