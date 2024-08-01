import PatientList from "@/components/PatientList";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-screen-xl px-5">
      <div className="flex">
        <h3>Patients</h3>
        <button>New Patient</button>
      </div>
      <Search />
      <PatientList />
    </main>
  );
}
