import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import {resumes} from "../../constants";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "resumind" },
    { name: "description", content: "Find your score" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  return <main className="bg-[url('/image/bg-main.svg')] bg-cover">
    <Navbar />


    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track your application & Resume Ratings</h1>
        <h2>review your submissions and check ai powerd feedback</h2>
      </div>

    {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
    )}
    </section>
  </main>
}
