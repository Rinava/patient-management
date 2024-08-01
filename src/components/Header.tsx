"use client";
import { Sun } from "./Icons";
import Image from "next/image";

const doctor = {
  name: "Edward Jenner",
  avatar: "/images/Edward_Jenner.jpg",
};

const Header = () => {
  return (
    <header className="flex justify-center border-b border-slate-950/10">
      <div className="flex w-full max-w-screen-xl items-center justify-between p-5">
        <div className="flex items-center gap-2">
          <h1 className="text-sm text-slate-950/50">Patient Management</h1>
          <span className="text-sm text-slate-950/50">/</span>
          <h2 className="text-sm text-slate-950">Patients</h2>
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Toggle dark mode" onClick={() => {}}>
            <Sun />
          </button>
          <div className="flex items-center gap-2">
            <Image
              src={doctor.avatar}
              alt=""
              width={24}
              height={24}
              className="aspect-square rounded-full"
            />
            <p className="text-sm text-slate-950">{doctor.name}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
