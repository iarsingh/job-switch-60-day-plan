# Experience-Based Interview Questions

These questions are tailored for a DevOps, MLOps, GCP, Kubernetes, Terraform, CI/CD, and AI Infrastructure profile with several years of hands-on experience. Prepare answers using the STAR format: Situation, Task, Action, Result.

## Your Opening Pitch

Prepare a 60-90 second answer:

- Tell me about yourself.
- Walk me through your current role and responsibilities.
- Why are you looking for a change?
- What kind of role are you targeting next?
- Why should we hire you for this DevOps/MLOps/Platform role?

Strong answer structure:

```text
I work on cloud infrastructure, DevOps automation, Kubernetes, CI/CD, observability, and MLOps-style deployments. I have hands-on experience building and maintaining production systems, automating deployments, improving reliability, and working with tools like GCP, Terraform, Docker, Kubernetes, Prometheus/Grafana, Python, and CI/CD platforms. Recently I have also been building AI/MLOps projects around model serving, monitoring, Ollama/Claude integration, and incident automation.
```

## Current Project And Responsibilities

- Explain your current project architecture.
- What is your day-to-day responsibility?
- Which cloud services do you use and why?
- What parts of the infrastructure do you own?
- What production issues have you handled?
- What automation have you built recently?
- What is the most business-critical system you supported?
- What was the scale of your environment: number of services, clusters, nodes, pipelines, or deployments?
- How do developers interact with your DevOps/platform team?
- What are the biggest reliability challenges in your current environment?

## DevOps Experience

- Describe one CI/CD pipeline you built end to end.
- How do you manage build, test, scan, and deployment stages?
- How do you handle rollback in your deployment process?
- How do you manage secrets in pipelines?
- How do you ensure the same artifact moves across dev, staging, and production?
- How do you reduce deployment failures?
- Tell me about a time when a deployment failed in production.
- What manual process did you automate, and what was the impact?
- How do you handle approvals and change management?
- How do you measure CI/CD pipeline success?

## Kubernetes Experience

- Explain a Kubernetes deployment you managed in production.
- How do you debug a pod stuck in `CrashLoopBackOff`?
- How do you debug `ImagePullBackOff`?
- How do you debug a service that is not reachable inside the cluster?
- How do you configure CPU and memory requests and limits?
- How do you decide HPA scaling metrics?
- How do readiness and liveness probes prevent bad releases?
- How do you handle config and secrets in Kubernetes?
- What is your approach for rolling updates and rollbacks?
- How do you troubleshoot DNS issues inside Kubernetes?
- How do you troubleshoot high pod restarts?
- How do you design namespace and RBAC strategy?
- How do you expose an application securely?
- How do you check whether the problem is application, node, network, or cluster-level?

## Terraform And Infrastructure As Code

- Describe a Terraform module you created or used.
- How do you structure Terraform code for multiple environments?
- How do you manage remote state and state locking?
- What do you do if Terraform state is corrupted or out of sync?
- Explain `count` vs `for_each`.
- How do you handle secrets in Terraform?
- How do you review Terraform plans before production changes?
- Tell me about a time Terraform introduced or prevented a production issue.
- How do you manage drift?
- How do you promote infrastructure changes from dev to prod?

## GCP And Cloud Infrastructure

- Which GCP services have you worked with?
- How do you design IAM for least privilege?
- Explain service accounts and workload identity.
- How do you secure secrets in GCP?
- When would you choose Cloud Run vs GKE?
- When would you choose managed services instead of self-managed services?
- How do you monitor GCP workloads?
- How do you control cloud cost?
- How do you design networking for private workloads?
- How do you troubleshoot permission denied errors in GCP?
- How do you deploy containers to GCP?
- How do you design a production-ready GKE setup?

## Linux And Troubleshooting Experience

- Tell me about a production incident you debugged on Linux.
- A server has high CPU. How do you investigate?
- A server has high memory usage. What commands do you run?
- Disk is full in production. How do you resolve it safely?
- A service is not starting. How do you debug it?
- How do you inspect logs with `journalctl`?
- How do you debug network connectivity from a server?
- Explain connection timeout vs connection refused.
- How do you check open ports and listening processes?
- How do you debug DNS resolution issues?

## Observability And Incident Management

- What dashboards have you built or maintained?
- What metrics matter most for APIs?
- Explain RED and USE metrics.
- How do you define SLI, SLO, and SLA?
- How do you avoid alert fatigue?
- Tell me about an alert that helped prevent an incident.
- Tell me about a bad alert and how you improved it.
- How do you perform root cause analysis?
- What should be included in a postmortem?
- How do you reduce MTTR?
- How do logs, metrics, and traces work together?
- How do you monitor Kubernetes applications?

## MLOps And AI Infrastructure

- Explain your MLOps incident copilot project.
- How do you serve an ML model through an API?
- How do you version model artifacts?
- How do you monitor model latency and errors?
- What is model drift?
- What is feature drift?
- How do you decide between batch inference and real-time inference?
- How do you deploy a model on Kubernetes?
- How do you use MLflow in a model lifecycle?
- When would you use Vertex AI instead of self-managed Kubernetes?
- How do you monitor GPU workloads?
- How would you secure an LLM or GenAI application?
- How do Ollama and Claude fit into your incident copilot project?
- How would you design a production GenAI platform for internal teams?

## Python And Automation

- What Python automation scripts have you written?
- How do you call REST APIs from Python?
- How do you handle retries and timeouts?
- How do you parse logs with Python?
- How do you run shell commands safely from Python?
- How do you structure a Python CLI tool?
- How do you handle errors and logging?
- How do you test automation scripts?
- Tell me about a script that saved time for your team.
- How would you automate daily health checks across servers or clusters?

## Security And Compliance

- How do you manage secrets across cloud, Kubernetes, and CI/CD?
- How do you implement least privilege?
- How do you scan container images?
- How do you secure Docker images?
- How do you rotate credentials?
- How do you restrict production access?
- How do you audit infrastructure changes?
- How do you secure Terraform state?
- What security checks should be part of CI/CD?
- How do you handle sensitive logs?

## System Design For Your Target Roles

- Design a CI/CD platform for 50 microservices.
- Design a production GKE platform for multiple teams.
- Design observability for a critical payment API.
- Design a Terraform structure for dev, staging, and prod.
- Design a model-serving platform on Kubernetes.
- Design a GenAI incident copilot for SRE teams.
- Design a cost-optimized Cloud Run deployment.
- Design a secure secret-management flow for CI/CD and Kubernetes.
- Design blue-green or canary deployment for a high-traffic service.
- Design monitoring and alerting for an ML inference service.

## Behavioral Questions For Your Experience

- Tell me about a production outage you handled.
- Tell me about a time you automated a manual process.
- Tell me about a time you improved reliability.
- Tell me about a time you reduced cloud cost.
- Tell me about a time you disagreed with a developer or manager.
- Tell me about a time you had to learn a tool quickly.
- Tell me about a time you worked under pressure.
- Tell me about a mistake you made and what you learned.
- Tell me about a time you mentored someone.
- Tell me about your most impactful project.

## Managerial And Senior-Level Questions

- How do you prioritize multiple production issues?
- How do you decide build vs buy for platform tooling?
- How do you handle urgent requests from development teams?
- How do you communicate risk to leadership?
- How do you improve team deployment maturity?
- How do you create standards without slowing teams down?
- How do you review infrastructure changes from junior engineers?
- How do you measure platform engineering success?
- How do you balance speed, cost, reliability, and security?
- What would you improve in our infrastructure in your first 90 days?

## Questions To Ask Interviewers

- What are the biggest reliability challenges your team is facing?
- How mature is your Kubernetes or cloud platform?
- How do teams currently deploy applications?
- What observability tools are used?
- What does incident response look like?
- Are you using Terraform or another IaC tool?
- Are you building internal platforms for developers?
- Are you running ML or GenAI workloads in production?
- What would success look like in the first 90 days?
- Why is this role open?

## Stories You Must Prepare

Create detailed STAR stories for:

- Major production incident
- CI/CD pipeline built or improved
- Kubernetes issue debugged
- Terraform infrastructure delivery
- Cloud cost optimization
- Monitoring or alerting improvement
- Python automation project
- Security or access-control improvement
- MLOps or AI infrastructure project
- Conflict or difficult stakeholder situation

