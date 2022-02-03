import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import "./index.css";
import App from "./components/App";

Sentry.init({
  dsn: "https://433ce0f0935841c8bfddd85cf44bbd81@o1133326.ingest.sentry.io/6181172",
  integrations: [new BrowserTracing()],

  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("root"));
