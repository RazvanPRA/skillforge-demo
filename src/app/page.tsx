import Link from "next/link";

import { Counter } from "@/components/Counter";
import { ServerTime } from "@/components/ServerTime";

// Fortam randarea dinamica pentru ca ora din componenta server sa fie calculata la fiecare request, nu la build.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-10 px-6 py-16 sm:px-10">
      <section className="space-y-4">
        <p className="text-sm font-medium text-muted-foreground">Faza 1 · Fundatia aplicatiei</p>
        <h1 className="text-4xl font-semibold tracking-tight">SkillForge</h1>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
          Un copilot personal de skills si cariera. Agentul AI va primi aici contextul real al utilizatorului, nu doar o
          intrebare izolata.
        </p>
        <Link className="font-medium text-primary underline underline-offset-4" href="/demo">
          Deschide pagina demo
        </Link>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Counter />
        <ServerTime />
      </section>
    </main>
  );
}
