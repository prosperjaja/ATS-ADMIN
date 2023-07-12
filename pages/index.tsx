import Image from "next/image";
import { Inter } from "next/font/google";
import { Dashboard } from "./dashboard";
import Login from "./login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="font-[Switzer]">
      <Login />
      {/* <Dashboard /> */}
      {/* <Admin /> */}
    </main>
  );
}
