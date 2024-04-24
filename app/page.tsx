import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <span>Searching for people can be hard, take a look at some</span>
      <Link href={'/applicants'} className="font-bold text-blue-700 hover:text-blue-500">applicants</Link>
  </main>
  );
}
