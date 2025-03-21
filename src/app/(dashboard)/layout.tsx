"use client"
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Image from 'next/image';
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <a href="/" className="flex items-center  justify-center lg:justify-center gap-2">
          <Image src="/logo.png" alt="logo" width={170} height={170}/> </a>
        <Menu/>
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
