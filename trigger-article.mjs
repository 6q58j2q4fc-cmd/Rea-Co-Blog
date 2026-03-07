/**
 * Direct article generation trigger script
 * Bypasses auth and calls the scheduler directly
 */
import { config } from "dotenv";
config();

// Import the scheduler directly
const { triggerManualGeneration } = await import("./server/scheduler.ts");

console.log("=== Triggering manual article generation ===");
console.log("This will generate a new article AND send an email to kevin@reacohomes.com");
console.log("");

const success = await triggerManualGeneration();

if (success) {
  console.log("");
  console.log("✅ Article generated successfully!");
  console.log("✅ Email notification sent to kevin@reacohomes.com");
} else {
  console.log("");
  console.log("❌ Article generation failed - check logs above for details");
}

process.exit(0);
