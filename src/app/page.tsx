"use client";

import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { Patient } from "@/types";

import { Plus } from "@/components/icon";
import Button from "@/components/commons/Button";
import PatientList from "@/components/PatientList";
import PatientModal from "@/components/PatientModal";
import Search from "@/components/Search";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [search, setSearch] = useState("");

  const patients = useQuery("patients", async () => {
    try {
      const response = await fetch("/api/patients");
      const data = await response.json();
      return data;
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    const filtered = patients.data?.patients
      ? patients.data.patients.filter((patient: Patient) =>
          patient.name.toLowerCase().includes(search.toLowerCase()),
        )
      : [];

    setFilteredPatients(filtered);
  }, [search, patients.data]);

  const handleModalClose = () => {
    setSelectedPatient(null);
    setIsModalOpen(false);
  };

  const handleNewPatient = () => {
    setSelectedPatient(null);
    setIsModalOpen(true);
  };

  const handleEditPatient = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  return (
    <main className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col gap-5 px-5 py-8 sm:gap-8 sm:py-12">
      <div className="flex flex-col gap-6 sm:items-center sm:gap-12">
        <div className="flex items-end gap-3 sm:gap-6">
          <h3 className="text-xl font-semibold sm:text-3xl sm:leading-none">
            Patients
          </h3>
          <Button onClick={handleNewPatient} aria-label="Add patient">
            <Plus className="h-4" /> New
          </Button>
        </div>
        <div className="flex w-full gap-3 sm:h-9 sm:max-w-96">
          <Search
            placeholder="Ex: Christie Towne"
            onSearch={setSearch}
            value={search}
            className="w-full"
          />
        </div>
      </div>

      {patients.isLoading || !patients.data.patients.length ? (
        <p className="mx-auto">Loading...</p>
      ) : patients.isError ? (
        <p className="mx-auto">Error: {(patients.error as Error).message}</p>
      ) : (
        <>
          <PatientList
            patients={filteredPatients}
            handleEdit={handleEditPatient}
          />
        </>
      )}

      <PatientModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        patient={selectedPatient}
      />
    </main>
  );
}
