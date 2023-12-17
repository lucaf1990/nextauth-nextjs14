import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const technologies = [
    {
      title: "NEXT JS",
      about: "The foundation of our application.",
      url: "https://nextjs.org",
      pic: "nextjs-image-url", // Replace with the actual image URL
      id: 1,
    },
    {
      title: "VERCEL",
      about: "Hosting and deployment platform for our Next.js app.",
      url: "https://vercel.com",
      pic: "vercel-image-url", // Replace with the actual image URL
      id: 2,
    },
    {
      title: "ZOD",
      about:
        "A TypeScript-first schema declaration library. It helps define data structures and validate data against those structures.",
      url: "https://zod.dev",
      pic: "zod-image-url", // Replace with the actual image URL
      id: 3,
    },
    {
      title: "VERCEL POSTGRES",
      about:
        "PostgreSQL integration for data storage. It allows us to persist user authentication data securely.",
      url: "https://vercel.com/docs/storage/vercel-postgres",
      pic: "postgres-image-url", // Replace with the actual image URL
      id: 4,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl underline-offset-3 underline">
          Welcome to this Authentication Tutorial
        </h1>
        <p className="mt-16 text-xl text-red-600">
          In this tutorial, I will guide you through the process of implementing
          authentication using the following technologies:
        </p>
        <ul className="ml-14 flex flex-col mt-10">
          {technologies.map((tech) => (
            <li key={tech.id}>
              <Link href={tech.url}>
                <h4 className="text-red-500 underline  mt-4">{tech.title}</h4>
              </Link>
              <p className="text-justify">{tech.about}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold">Helpful Tips:</h2>
        <ul className="ml-6 mt-4 list-disc text-lg">
          <li>
            Ensure you have a good understanding of TypeScript as ZOD relies
            heavily on it.
          </li>
          <li>
            Follow best practices for secure storage and handling of user
            authentication data when using VERCEL POSTGRES.
          </li>
          <li>
            Check documentation for each library for detailed implementation
            guidance.
          </li>
        </ul>
      </div>
    </main>
  );
}
