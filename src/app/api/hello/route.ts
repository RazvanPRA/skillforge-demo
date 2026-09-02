import { NextResponse } from "next/server";

// Route Handler-ele ruleaza pe server; aici vor fi pastrate ulterior apelul LLM si cheia lui, niciodata intr-o componenta client.
export function GET() {
  // O variabila fara NEXT_PUBLIC_ nu este inclusa in codul trimis browserului, deci poate deveni in siguranta o cheie de provider.
  const message = process.env.SKILLFORGE_API_STATUS ?? "Variabila SKILLFORGE_API_STATUS nu este configurata.";

  return NextResponse.json({
    message,
    environmentVariable: "SKILLFORGE_API_STATUS"
  });
}
