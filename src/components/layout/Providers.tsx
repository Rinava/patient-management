"use client";

import { QueryClientProvider, QueryClient } from "react-query";
import { ToastProvider } from "@/helpers/Toaster";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastProvider>{children}</ToastProvider>
  </QueryClientProvider>
);

export default Providers;
