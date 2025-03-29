import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">Sorry, there is nothing to see here.</p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </main>
  );
}
