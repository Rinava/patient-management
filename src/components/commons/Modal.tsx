import clsx from "clsx";

import Button from "@/components/commons/Button";
import {Cross} from "@/components/icons"
import { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      className={clsx(
        "fixed left-0 top-0 flex h-screen w-screen items-center justify-center",
        { hidden: !isOpen },
      )}
    >
      <div
        className="absolute inset-0 z-10 bg-black bg-opacity-5 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-20 w-full max-w-[454px] rounded-xl bg-white">
        {children}
      </div>
    </div>
  );
};

const ModalHeader = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose?: () => void;
}) => (
  <div className="boder-slate-950/10 border-b">
    <div className="flex w-full items-center justify-between px-4 py-3">
      {children}
      {onClose && (
        <Button onClick={onClose} aria-label="Close modal" variant="plain">
          <Cross className="h-4" />
        </Button>
      )}
    </div>
  </div>
);

const ModalBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={clsx("p-6", className)}>{children}</div>;

const ModalFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={clsx("ml-auto flex justify-end px-6 pb-4", className)}>
    {children}
  </div>
);

export { Modal, ModalHeader, ModalBody, ModalFooter };
