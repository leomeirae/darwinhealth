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
        <div className="flex-center min-h-screen w-full flex-col gap-4 p-8">
          <h1 className="h1-bold text-dark-700">Algo deu errado!</h1>
          <p className="text-dark-500">
            Desculpe, ocorreu um erro inesperado. Nossa equipe foi notificada.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="shad-button_primary"
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
