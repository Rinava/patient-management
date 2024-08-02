"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQueryClient } from "react-query";
import clsx from "clsx";

import { Patient } from "@/types";

import dateFormat from "@/helpers/dateFormat";

import { useToast } from "@/helpers/Toaster";

import { Edit, Trash, Chevron } from "@/components/icon";
import Button from "@/components/commons/Button";

interface Props {
  patient: Patient;
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
  onEdit: () => void;
}

const Actions = ({
  patient,
  className,
  onEdit,
}: Omit<Props, "isOpen" | "onToggle">) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const onDelete = async () => {
    try {
      const response = await fetch(`/api/patients`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: patient.id }),
      });
      if (response.ok) {
        queryClient.invalidateQueries("patients");
        toast({ message: "Patient deleted successfully", type: "success" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={clsx("flex gap-2", className)}>
      <Button aria-label="Edit patient" onClick={onEdit} variant="ghost">
        <Edit className="h-4" />
      </Button>
      <Button aria-label="Delete patient" onClick={onDelete} variant="ghost">
        <Trash className="h-4" />
      </Button>
    </div>
  );
};

const Header = ({ patient, isOpen, onEdit, onToggle }: Props) => (
  <div className="flex items-center justify-between p-3">
    <div className="flex items-center gap-4">
      <Image
        src={
          patient.avatar.length && patient.avatar.startsWith("http")
            ? patient.avatar
            : "/images/Placeholder.png"
        }
        alt=""
        width={48}
        height={48}
        className="aspect-square rounded-full"
      />
      <div className="flex flex-col gap-2">
        <p className="font-semibold leading-none text-slate-950">
          {patient.name}
        </p>
        {patient.createdat && (
          <time
            className="text-xs leading-none text-slate-950/70"
            dateTime={patient.createdat}
          >
            {dateFormat(patient.createdat)}
          </time>
        )}
      </div>
    </div>
    <div className="flex justify-between gap-6">
      <Actions patient={patient} onEdit={onEdit} className="hidden sm:flex" />
      <Button
        aria-label="Toggle description"
        onClick={onToggle}
        variant="plain"
      >
        <Chevron
          className={clsx(
            "w-4 transition-transform duration-300",
            !isOpen && "[transform:rotateX(180deg)]",
          )}
        />
      </Button>
    </div>
  </div>
);

const Content = ({ patient, isOpen, onEdit }: Omit<Props, "onToggle">) => (
  <div
    className={clsx(
      "grid gap-3 overflow-hidden transition-[grid-template-rows] duration-300",
      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
    )}
  >
    <div
      className={clsx(
        "min-h-0 overflow-hidden transition-[visibility] duration-300",
        isOpen ? "visible" : "invisible",
      )}
    >
      <div className="flex flex-col gap-4 border-t p-6">
        <p className="text-sm text-slate-950/90">{patient.description}</p>
        <Link
          className="text-sm font-semibold underline hover:opacity-90"
          href={patient.website}
        >
          {patient.website}
        </Link>
        <div className="ml-auto sm:hidden">
          <Actions patient={patient} onEdit={onEdit} className="sm:flex" />
        </div>
      </div>
    </div>
  </div>
);

const PatientCard = ({
  patient,
  className,
  isOpen,
  onToggle,
  onEdit,
}: Props) => (
  <li className={clsx("rounded-2xl bg-slate-50", className)}>
    <Header
      patient={patient}
      onEdit={onEdit}
      onToggle={onToggle}
      isOpen={isOpen}
    />
    <Content patient={patient} onEdit={onEdit} isOpen={isOpen} />
  </li>
);

export default PatientCard;
