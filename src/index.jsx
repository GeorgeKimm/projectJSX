import React from "react";
import ReactDOM from "react-dom";
// import * as Sentry from "@sentry/react";
// import { BrowserTracing } from "@sentry/tracing";

import "./index.css";
import App from "./components/App";

// Sentry.init({
//   dsn: "https://020e00bd34934236a521ce969459be51@o1133326.ingest.sentry.io/6181340",
//   beforeSend(event) {
//     // Check if it is an exception, and if so, show the report dialog
//     if (event.exception) {
//       Sentry.showReportDialog({ eventId: event.event_id });
//     }
//     return event;
//   },
//   integrations: [new BrowserTracing()],

//   tracesSampleRate: 1.0,
// });

ReactDOM.render(<App />, document.getElementById("root"));
