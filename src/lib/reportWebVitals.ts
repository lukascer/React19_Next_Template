import { NextWebVitalsMetric } from "next/app";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
  // You can send the metrics to an analytics endpoint
  // Example: `sendToAnalytics(metric)`
}
