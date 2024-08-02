import { createContext, useContext, useEffect, useState } from "react";
import clsx from "clsx";

import { Cross } from "@/components/icon";
import Button from "@/components/commons/Button";

const ToastContext = createContext({} as any);

interface toastProps {
  message: string;
  type: "success" | "error";
}

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<toastProps | null>(null);

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <ToastContext.Provider value={{ setToast }}>
      {children}

      {toast && (
        <div className="pointer-events-none fixed inset-0 z-[1000] flex h-screen w-screen items-end justify-end p-6">
          <div
            className={clsx(
              "pointer-events-auto flex min-w-64 justify-between gap-3 rounded-md border border-slate-950/10 p-4 font-bold",
              {
                "bg-green-300/70 text-green-900": toast.type === "success",
                "bg-red-300/70 text-red-900": toast.type === "error",
              },
            )}
          >
            <p>
              <span className="mr-2">
                {toast.type === "success" ? "✓" : "⚠"}
              </span>
              {toast.message}
            </p>
            <Button onClick={() => setToast(null)} variant="plain">
              <Cross className="w-4" />
            </Button>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const { setToast } = useContext(ToastContext);
  return setToast;
};

export { ToastProvider, useToast };
