"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

// Fara "use client", Next.js ar raporta o eroare deoarece hook-urile precum useState nu pot rula intr-o Server Component.
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
      <p className="text-sm font-medium text-muted-foreground">Componenta client</p>
      <h2 className="mt-2 text-xl font-semibold">Contor: {count}</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Starea locala si interactiunea cu utilizatorul ruleaza in browser.
      </p>
      <Button className="mt-5" onClick={() => setCount(currentCount => currentCount + 1)}>
        Creste contorul
      </Button>
    </section>
  );
}
