import Link from "next/link";

// Ruta separata exista de la inceput pentru a fixa conventia App Router inainte ca aplicatia sa capete ecrane reale.
export default function DemoPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16 sm:px-10">
      <p className="text-sm font-medium text-muted-foreground">Ruta: /demo</p>
      <h1 className="text-3xl font-semibold tracking-tight">Pagina demo</h1>
      <p className="max-w-xl leading-7 text-muted-foreground">
        Aceasta ruta va ramane locul sigur pentru experimentele de curs, fara sa incarce interfata principala a
        SkillForge.
      </p>
      <Link className="font-medium text-primary underline underline-offset-4" href="/">
        Inapoi la pagina principala
      </Link>
    </main>
  );
}
