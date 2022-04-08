import React from "react";
// import * as Sentry from "@sentry/react";

import { Test1 } from "./test1";
import Test2 from "./test2";

export function Test() {
  return (
    <>
      <Test1 />
      {/* <Sentry.ErrorBoundary
        fallback={<div>You have encountered an error</div>}
        showDialog
      > */}
      <Test2 />
      {/* </Sentry.ErrorBoundary> */}
    </>
  );
}
