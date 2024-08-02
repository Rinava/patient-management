"use client";

import Image from "next/image";

import { Sun } from "@/components/icon";

const doctor = {
  name: "Edward Jenner",
  avatar: "/images/Edward_Jenner.jpg",
};

const Header = () => (
  <header className="sticky top-0 flex justify-center border-b border-slate-950/10 z-50 bg-white">
    <div className="flex w-full max-w-screen-xl items-center justify-between p-5">
      <div className="flex items-center gap-4">
        <h1 className="text-sm text-slate-950/40">Patient Management</h1>
        <span className="text-sm text-slate-950/20">/</span>
        <h2 className="text-sm text-slate-950">Patients</h2>
      </div>
      <div className="flex items-center gap-4">
        <button aria-label="Toggle dark mode" onClick={() => {}}>
          <Sun className="text-slate-950" />
        </button>
        <div className="flex items-center gap-2">
          <Image
            src={doctor.avatar}
            alt=""
            width={24}
            height={24}
            className="aspect-square rounded-full"
          />
          <p className="hidden text-sm text-slate-950 sm:block">
            {doctor.name}
          </p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
