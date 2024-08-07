import { useRef } from "react";
import { useQueryClient } from "react-query";

import { Patient } from "@/types";

import { useToast } from "@/helpers/Toaster";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/commons/Modal";
import Input from "@/components/commons/Input";
import Button from "@/components/commons/Button";

interface Props {
  patient?: Patient | null;
  isOpen: boolean;
  onClose: () => void;
}

const PatientModal = ({ patient, isOpen, onClose }: Props) => {
  const toast = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const queryClient = useQueryClient();

  const handleClose = () => {
    if (formRef.current) formRef.current.reset();
    onClose();
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    if (patient) {
      try {
        const result = await fetch(`/api/patients/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: patient.id, ...data }),
        });

        if (!result.ok) {
          toast({ message: "Cannot update patient", type: "error" });
          return;
        }

        handleClose();
        queryClient.invalidateQueries("patients");
        toast({ message: "Patient updated successfully", type: "success" });
      } catch (error) {
        toast({ message: "An error occurred", type: "error" });
      }
    } else {
      try {
        const result = await fetch(`/api/patients`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!result.ok) {
          toast({ message: "Cannot save patient", type: "error" });
          return;
        }

        handleClose();
        queryClient.invalidateQueries("patients");
        toast({ message: "Patient saved successfully", type: "success" });
      } catch (error) {
        toast({ message: "An error occurred", type: "error" });
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalHeader onClose={handleClose}>
        <h3 className="text-xl font-semibold">Patient</h3>
      </ModalHeader>
      <form onSubmit={handleSubmit} ref={formRef}>
        <ModalBody className="flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            label="Name"
            defaultValue={patient?.name}
            required
            placeholder="John Doe"
          />
          <Input
            type="url"
            name="avatar"
            label="Avatar"
            defaultValue={patient?.avatar}
            required
            placeholder="https://example.com/avatar.jpg"
            pattern={`(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))`}
          />
          <Input
            type="textarea"
            name="description"
            label="Description"
            defaultValue={patient?.description}
            className="h-48 min-h-48"
            required
            placeholder="Patient description..."
          />
          <Input
            type="text"
            name="website"
            label="Website"
            defaultValue={patient?.website}
            required
            placeholder="https://example.com"
          />
        </ModalBody>
        <ModalFooter className="flex gap-2">
          <Button variant="plain" size="md" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" size="md">
            Save
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default PatientModal;
