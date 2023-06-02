import Link from "next/link";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Link
        href="/boards/AyHNbaOeJhG"
        className="py-1 px-5 bg-slate-700 text-zinc-100 text-md rounded-lg mt-2 inline-block"
      >
        Entrar
      </Link>
    </div>
  );
}
