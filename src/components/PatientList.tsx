import { useState } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { Patient } from "@/types";

import PatientCard from "@/components/PatientCard";

interface Props {
  patients: Patient[];
  handleEdit: (patient: Patient) => void;
}

const PatientList = ({ patients, handleEdit }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [currentCard, setCurrentCard] = useState("");

  const patientColumns = () => {
    if (isDesktop) {
      const even = patients.filter((_, i) => i % 2 === 0);
      const odd = patients.filter((_, i) => i % 2 === 1);
      return [even, odd];
    } else {
      return [patients];
    }
  };

  if (!patients.length) return <p className="mx-auto">No patients found.</p>;

  return (
    <div className="flex w-full gap-4">
      {patientColumns().map((col, index) => (
        <ul className="flex w-full flex-col gap-4" key={index}>
          {col?.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              isOpen={currentCard === patient.id}
              onToggle={() => {
                currentCard === patient.id
                  ? setCurrentCard("")
                  : setCurrentCard(patient.id);
              }}
              onEdit={() => handleEdit(patient)}
            />
          ))}
        </ul>
      ))}
    </div>
  );
};

export default PatientList;
