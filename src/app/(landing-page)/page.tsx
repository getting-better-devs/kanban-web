import Link from "next/link";

export default function Landing() {
  return (
    <main>
      <h1>Landing Page</h1>

      <Link
        href="/login"
        className="py-1 px-5 bg-slate-700 text-zinc-100 text-md rounded-lg mt-2 inline-block"
      >
        Login
      </Link>
    </main>
  );
}
