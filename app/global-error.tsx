"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 p-8">
          <h1 className="text-2xl font-bold text-gray-700">Algo deu errado!</h1>
          <p className="text-gray-500">
            Desculpe, ocorreu um erro inesperado. Nossa equipe foi notificada.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
