
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="min-h-screen flex bg-slate-100">
        {/* LEFT */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-zinc-800 text-white p-4">
          <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start ">
          <Image src="/logo.png" alt="Logo" width={32} height={32}/>
          <span className="hidden lg:block font-bold">Aljeri School</span>
          </Link>
        <Menu />
        </div>
        {/* Right */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F&F*FA] overflow-scroll flex flex-col">
          <Navbar />
          {children}
        </div>
      </div>
  );
}
