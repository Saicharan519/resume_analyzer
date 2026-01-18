import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "resumind" },
    { name: "description", content: "Find your score" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/image/bg-main.svg')] bg-cover">
    <section className="main-section">
      <div className="page-heading">
        <h1>Track your application & REsume Ratings</h1>
        <h2>review your submissions and check ai powerd feedback</h2>
      </div>
    </section>
  </main>
}
