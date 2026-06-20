import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const planPath = path.join(root, "60-day-plan.md");
const dailyDir = path.join(root, "daily-plan");
const csvPath = path.join(root, "60-day-study-plan.csv");

const text = await fs.readFile(planPath, "utf8");
const rows = [];

for (const line of text.split("\n")) {
  const match = line.match(/^\|\s*(\d+)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|$/);
  if (!match) continue;

  const day = Number(match[1]);
  if (day < 1 || day > 60) continue;

  rows.push({
    day,
    coding: match[2].trim(),
    scenario: match[3].trim(),
  });
}

if (rows.length !== 60) {
  throw new Error(`Expected 60 daily rows, found ${rows.length}`);
}

function phaseFor(day) {
  if (day <= 10) return "Positioning and Foundation";
  if (day <= 25) return "DevOps and Platform Depth";
  if (day <= 38) return "Cloud and Infrastructure as Code";
  if (day <= 50) return "MLOps and AI Infrastructure";
  return "Interview and Offer Sprint";
}

function focusFor(day) {
  if (day <= 2) return "Resume, LinkedIn, GitHub, target-role clarity";
  if (day <= 5) return "Linux troubleshooting and production debugging";
  if (day <= 8) return "Python automation for infrastructure work";
  if (day <= 10) return "Applications, referrals, and profile visibility";
  if (day <= 13) return "Docker and container debugging";
  if (day <= 18) return "Kubernetes deployment and troubleshooting";
  if (day <= 21) return "Helm and GitOps";
  if (day <= 25) return "Observability, metrics, and alerting";
  if (day <= 29) return "Terraform and IaC design";
  if (day <= 32) return "GCP core services and cloud design";
  if (day <= 35) return "CI/CD platform and release engineering";
  if (day <= 38) return "Ansible and VM bootstrap automation";
  if (day <= 41) return "ML model serving with FastAPI and containers";
  if (day <= 44) return "MLflow, model registry, and model promotion";
  if (day <= 47) return "Model monitoring and drift detection";
  if (day <= 50) return "Vertex AI, GKE MLOps, and GenAI platform design";
  if (day <= 54) return "Project storytelling and STAR answers";
  if (day <= 57) return "Mock interviews and system design";
  return "Offer sprint, negotiation, and final positioning";
}

function dayFileName(day) {
  return `day-${String(day).padStart(2, "0")}.md`;
}

function csvEscape(value) {
  const text = String(value).replaceAll("`", "");
  return `"${text.replaceAll('"', '""')}"`;
}

await fs.mkdir(dailyDir, { recursive: true });

for (const row of rows) {
  const content = `# Day ${row.day}: ${focusFor(row.day)}

## Phase

${phaseFor(row.day)}

## Main Focus

${focusFor(row.day)}

## Coding Question

${row.coding}

### Coding Answer Notes

\`\`\`text
Problem:
Approach:
Code/file created:
Time complexity:
Edge cases:
What I learned:
\`\`\`

## Scenario-Based Interview Question

${row.scenario}

### Scenario Answer Notes

\`\`\`text
Situation/context:
First checks:
Commands/tools:
Root-cause path:
Fix:
Prevention:
Business impact:
\`\`\`

## Daily Execution Checklist

- [ ] Complete learning block
- [ ] Solve coding question
- [ ] Speak scenario answer out loud
- [ ] Improve one project or resume item
- [ ] Apply to 2 targeted roles
- [ ] Send 2 referral/recruiter messages
- [ ] Update application tracker
- [ ] Add notes to daily log

## Notes

- 
`;

  await fs.writeFile(path.join(dailyDir, dayFileName(row.day)), content, "utf8");
}

const csvRows = [
  [
    "Day",
    "Phase",
    "Focus",
    "Coding Question",
    "Scenario-Based Question",
    "Learning Done",
    "Coding Done",
    "Scenario Practiced",
    "Applications Sent",
    "Referral Messages",
    "Status",
    "Notes",
  ],
  ...rows.map((row) => [
    row.day,
    phaseFor(row.day),
    focusFor(row.day),
    row.coding,
    row.scenario,
    "",
    "",
    "",
    "",
    "",
    "Not Started",
    "",
  ]),
];

await fs.writeFile(csvPath, `${csvRows.map((row) => row.map(csvEscape).join(",")).join("\n")}\n`, "utf8");

const index = `# Daily Plan Index

Use this folder as your daily execution board. Each file contains one coding question, one scenario-based interview question, and a checklist.

| Day | Phase | Focus | File |
| --- | --- | --- | --- |
${rows
  .map(
    (row) =>
      `| ${row.day} | ${phaseFor(row.day)} | ${focusFor(row.day)} | [Day ${String(row.day).padStart(2, "0")}](${dayFileName(row.day)}) |`,
  )
  .join("\n")}
`;

await fs.writeFile(path.join(dailyDir, "README.md"), index, "utf8");

console.log(`Generated ${rows.length} daily files`);
console.log(csvPath);
