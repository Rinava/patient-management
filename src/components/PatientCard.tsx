"use client";
import React from "react";
import { Patient } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Edit, Trash, ChevronDown } from "./Icons";
import clsx from "clsx";

interface Props {
  patient: Patient;
  className: string;
}
const PatientCard = ({ patient, className }: Props) => {
  return (
    <li className={clsx("rounded-2xl bg-slate-50 p-3 pr-6", className)}>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={patient.avatar}
            alt=""
            width={48}
            height={48}
            className="aspect-square rounded-full"
          />
          <div className="flex flex-col gap-2">
            <p className="font-semibold leading-none text-slate-950">
              {patient.name}
            </p>
            <time
              className="text-xs leading-none text-slate-950/70"
              dateTime={patient.createdAt}
            >
              {patient.createdAt}
            </time>
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <div className="flex gap-2">
            <button aria-label="Edit patient" onClick={() => {}}>
              <Edit />
            </button>
            <button aria-label="Delete patient" onClick={() => {}}>
              <Trash />
            </button>
          </div>
          <button aria-label="Toggle description" onClick={() => {}}>
            <ChevronDown />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-6">
        <p className="text-sm text-slate-950/90">{patient.description}</p>
        <Link
          className="text-sm font-semibold underline"
          href={patient.website}
        >
          {patient.website}
        </Link>
      </div>
    </li>
  );
};

export default PatientCard;
