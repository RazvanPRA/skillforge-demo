// Fara directiva "use client", aceasta componenta ramane pe server si nu trimite cod pentru calculul orei in browser.
export function ServerTime() {
  const requestTime = new Intl.DateTimeFormat("ro-RO", {
    dateStyle: "medium",
    timeStyle: "medium"
  }).format(new Date());

  return (
    <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
      <p className="text-sm font-medium text-muted-foreground">Componenta server</p>
      <h2 className="mt-2 text-xl font-semibold">{requestTime}</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Aceasta valoare este calculata pe server pentru fiecare request al paginii.
      </p>
    </section>
  );
}
