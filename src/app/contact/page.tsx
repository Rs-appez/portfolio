import CopyButton from "@/app/ui/copyButton";

export default function Contact() {
  return (
    <main className="flex flex-col items-center p-20 pb-0 ">
      <h1 className="text-7xl font-bold p-5">Contact</h1>
      <div className="flex flex-col p-5">
        <div className="flex flex-row p-5">
          <p className="text-2xl font-bold p-5">Email : </p>
          <a
            href="mailto:alexandre_pirmez@appez.cafe"
            className="text-2xl font-bold p-5 text-blue-500 hover:underline"
          >
            alexandre_pirmez@appez.cafe
          </a>
          <CopyButton text="alexandre_pirmez@appez.cafe" />
        </div>
        <div className="flex flex-row p-5">
          <p className="text-2xl font-bold p-5">Github : </p>
          <a
            href="https://github.com/Rs-appez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold p-5 text-blue-500 hover:underline"
          >
            Rs-appez
          </a>
        </div>
      </div>
    </main>
  );
}
