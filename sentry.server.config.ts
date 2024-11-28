// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://65dee55a4b2c9d3e652af827f8e98c4f@o4508376237867008.ingest.de.sentry.io/4508377965461584",

  // Define how likely traces are sampled
  tracesSampleRate: 1.0,

  // Configurações de ambiente
  debug: false,
  enabled: process.env.NODE_ENV === "production",
});
