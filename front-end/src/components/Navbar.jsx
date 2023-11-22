import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [activePage, setActivePage] = useState(router.pathname);
  return (
    <div className="bg-[#F9EFE7] text-black flex justify-between px-[80px] font-quicksand font-semibold">
      <Image src={Logo} className="py-[24px]" />

      <div className="flex gap-[48px] items-center">
        <Link href="/" className={activePage === "/" ? "text-[#3A8412]" : "text-neutral-500"}>Beranda</Link>
        <Link href="/dashboard" className={activePage === "/dashboard" ? "text-[#3A8412]" : "text-neutral-500"}>Dashboard</Link>
        <Link href="/verifikasi" className={activePage === "/verifikasi" ? "text-[#3A8412]" : "text-neutral-500"}>Verifikasi</Link>
      </div>

      <div className="flex items-center gap-2">
        Nama Pengguna
        <div className="bg-green-500 rounded-full w-[32px] aspect-square"></div>
      </div>
    </div>
  );
}
