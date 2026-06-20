# Resume-Based Interview Question Bank

This question bank is tailored to your resume for Platform Engineer, Senior DevOps Engineer, Cloud Infrastructure Engineer, SRE, and MLOps / AI Infrastructure roles.

Use this as your main interview practice file. Prepare answers with real examples from Capgemini, Tech Mahindra, TCS, and your portfolio projects.

## How To Answer

For experience questions, use:

```text
Context:
Problem:
My role:
Tools used:
Actions taken:
Result/impact:
What I would improve:
```

For troubleshooting scenarios, use:

```text
First checks:
Commands/tools:
Possible root causes:
Fix:
Prevention:
Business impact:
```

For coding questions, use:

```text
Approach:
Code:
Edge cases:
Time complexity:
How this helps in DevOps/Platform work:
```

## Your Opening Questions

| Question | What Interviewer Checks |
| --- | --- |
| Tell me about yourself. | Clear positioning and confidence |
| Explain your current role at Capgemini. | Real ownership and depth |
| Why are you looking for a change? | Motivation and maturity |
| Why Platform Engineer / DevOps / MLOps? | Role alignment |
| What is your strongest project? | Practical proof |
| What is your biggest production challenge so far? | Incident maturity |
| What is your 60-day notice period status? | Hiring logistics |

Strong positioning:

```text
I am a Platform and DevOps Engineer with 6.9+ years of experience across GCP, AWS, Azure, Kubernetes, Terraform Enterprise, CI/CD, cloud security, observability, and automation. My recent work focuses on GCP platform foundations, landing zones, reusable Terraform modules, GKE operations, Cloud Armor security, and self-service infrastructure workflows. I am also building MLOps and AI infrastructure projects around model serving, MLflow, FastAPI, Ollama/Claude, and Kubernetes-based deployment patterns.
```

## Questions From Your Capgemini Experience

| Question | Answer Focus |
| --- | --- |
| Explain the GCP platform foundation you designed. | Landing zone, project hierarchy, Shared VPC, IAM, Terraform Enterprise |
| What is a GCP landing zone? | Standardized foundation for security, networking, IAM, logging, monitoring |
| How did you use Terraform Enterprise? | Workspaces, remote state, modules, policy controls, pipelines |
| What Terraform modules did you build? | Networking, IAM, GKE, logging, monitoring, load balancers, Cloud Armor |
| How did reusable modules reduce provisioning effort by 70%? | Before/after workflow, self-service, standard inputs, review process |
| How did you design Shared VPC architecture? | Host project, service projects, subnet design, IAM delegation |
| How did you implement IAM governance? | Least privilege, service accounts, groups, roles, review process |
| How did you integrate Bitbucket and Harness? | Infra pipeline flow, approval, plan/apply, environment promotion |
| What is self-service infrastructure provisioning? | Developer request to automated Terraform workflow |
| How did you manage production GKE clusters? | Upgrades, node pools, autoscaling, RBAC, workload troubleshooting |
| How did you implement Cloud Armor? | WAF rules, rate limiting, threat intelligence, exceptions |
| What did IONIX and Stream Security solve? | CSPM, attack surface visibility, vulnerability and compliance posture |
| How did you improve observability? | Prometheus, Grafana, ELK, Cloud Operations, alerts |
| How did you reduce incident response time? | Dashboards, alerts, runbooks, RCA, capacity planning |

## Questions From Your Tech Mahindra Experience

| Question | Answer Focus |
| --- | --- |
| Explain an enterprise CI/CD platform you built. | Jenkins/GitHub Actions, Docker, Kubernetes, Helm, Terraform, Ansible |
| How did you improve deployment reliability? | Standard stages, validation, rollback, artifact control |
| How did you use Terraform and Ansible together? | Provisioning vs configuration management |
| How did you manage multi-cloud Kubernetes? | GCP/AWS/Azure, cluster operations, observability, standards |
| How did you implement DevSecOps? | Prisma Cloud, SAST/DAST, RBAC, IAM, secrets, vulnerability remediation |
| How did you handle backup and disaster recovery? | Veeam, Kasten K10, critical workloads, recovery planning |
| What is your experience with JFrog Artifactory? | Artifact storage, repository management, secure releases |
| How did you collaborate with cloud vendor teams? | Escalations, debugging, optimization, support cases |
| How did you maintain 99.9% availability? | Monitoring, capacity planning, incident response, preventive actions |

## Questions From Your TCS Experience

| Question | Answer Focus |
| --- | --- |
| How did you manage production GKE environments? | Deployments, monitoring, incidents, availability |
| How did you reduce deployment effort by 40%? | Jenkins, Cloud Build, IaC, automation |
| Explain one on-prem to GCP migration. | Planning, dependencies, cutover, rollback |
| What Linux administration work did you perform? | Patching, logs, service debugging, resource troubleshooting |
| How did you support cloud governance? | IAM controls, platform standards, collaboration |
| What operational readiness checks did you follow? | Monitoring, rollback, capacity, runbooks |

## GCP And Cloud Platform Scenarios

| Scenario | What To Cover |
| --- | --- |
| A project team requests a new GCP environment. How do you provision it? | Landing zone, project, IAM, network, logging, monitoring, Terraform workflow |
| A developer gets permission denied while deploying to Cloud Run. | IAM roles, service account, audit logs, deployment identity |
| A service in a service project cannot reach a private resource in Shared VPC. | VPC attachment, subnet, firewall, routes, IAM |
| Cloud Load Balancer returns 502. | Backend health, NEG, service, firewall, pod readiness, logs |
| Cloud Armor blocks valid traffic. | Rule priority, preview mode, logs, exception, rate limit tuning |
| Cloud cost suddenly increases. | Billing export, labels, top services, idle resources, rightsizing |
| GKE cluster upgrade is required. How do you plan it? | Version skew, node pools, PDB, maintenance window, rollback plan |
| Secret leaked in repo. What do you do? | Revoke, rotate, audit, scan, prevent, educate |

## Kubernetes Industry Scenarios

| Scenario | What To Cover |
| --- | --- |
| Pod is in `CrashLoopBackOff`. | Logs, describe, env vars, config, secrets, probes, resources |
| Pod is in `ImagePullBackOff`. | Image tag, registry auth, secret, network, policy |
| Service has no endpoints. | Labels, selectors, pod readiness, namespace |
| HPA is not scaling. | Metrics server, resource requests, target metric, load pattern |
| Node is under memory pressure. | Evictions, requests/limits, top pods, node capacity |
| Deployment rollout is stuck. | ReplicaSet, events, readiness, image, progress deadline |
| DNS inside cluster is failing. | CoreDNS, service name, namespace, network policy |
| Ingress works for one path but not another. | Rules, annotations, backend service, health checks |
| App works locally but fails in Kubernetes. | Config, DNS, service account, resource limits, network |
| Production pod needs emergency debug. | `kubectl logs`, `describe`, ephemeral container, copy artifacts |

## Terraform Enterprise And IaC Scenarios

| Scenario | What To Cover |
| --- | --- |
| Terraform plan shows unexpected destroy. | Stop, inspect diff, state, dependencies, lifecycle, peer review |
| State is locked. | Identify run, unlock carefully, avoid force unless verified |
| State drift detected. | Compare real infra, import/update config, plan, governance |
| Multiple teams need reusable infra. | Module registry, versioning, inputs, examples, policy |
| Secrets are present in Terraform variables. | Sensitive vars, Vault/Secret Manager, state protection |
| Workspace failed midway. | Run logs, state, partial resource, rerun strategy |
| Need dev/stage/prod separation. | Workspaces, var files, folders, remote state, approval |
| Policy-as-code blocks a run. | Explain policy, fix input/config, exception workflow |

## CI/CD And Release Engineering Scenarios

| Scenario | What To Cover |
| --- | --- |
| CI pipeline is slow. | Cache, parallelism, runner capacity, dependency download, test split |
| Deployment succeeded but users see old version. | Image tag, rollout, cache, ingress, traffic routing |
| Build passes but deployment fails. | Artifact, secrets, environment config, cluster access |
| Need rollback for failed release. | Previous image, Helm rollback, GitOps revert, DB consideration |
| Pipeline secret exposed in logs. | Masking, rotation, audit, secret store |
| Same artifact must go dev to prod. | Build once, promote, immutable tags, approvals |
| Developer wants direct production deploy. | Governance, emergency process, audit, approval |
| Security scan fails before release. | Severity policy, remediation, exception, ownership |

## Observability And Incident Scenarios

| Scenario | What To Cover |
| --- | --- |
| API latency is high after deployment. | RED metrics, logs, traces, rollout, DB, CPU/memory |
| Error rate increases only in one region. | Traffic, LB, dependency, config drift, regional infra |
| Alert fires every night but no user impact. | Alert quality, thresholds, maintenance, symptoms vs causes |
| Grafana dashboard shows CPU spike. | Correlate pod, node, deploy, traffic, logs |
| Logs are missing for one service. | Agent, sidecar, stdout, labels, pipeline, index |
| MTTR is high. How do you improve it? | Runbooks, alert context, dashboards, ownership |
| Postmortem found no single root cause. | Contributing factors, prevention, detection gaps |
| Monitoring is too noisy. | SLO-based alerts, severity, grouping, deduplication |

## Security And Governance Scenarios

| Scenario | What To Cover |
| --- | --- |
| Team asks for Owner role on GCP project. | Least privilege, custom role, temporary access, approval |
| Kubernetes workload needs cloud access. | Workload Identity, service account mapping, least privilege |
| Container image has critical vulnerabilities. | Scan, base image, patch, rebuild, exception process |
| WAF is blocking business traffic. | Logs, rule priority, preview, exception, test |
| External attack surface finding appears. | Validate, owner, exposure, remediation, tracking |
| Compliance asks for audit trail. | Terraform runs, approvals, logs, IAM, change records |
| Need secret rotation across apps. | Inventory, rotation plan, deploy, verify, rollback |

## MLOps / AI Infrastructure Questions

| Question | Answer Focus |
| --- | --- |
| Explain your MLOps incident copilot project. | FastAPI, model serving, Ollama/Claude, metrics, Kubernetes |
| How is ML deployment different from normal app deployment? | Model artifact, data, drift, metrics, rollback |
| What is MLflow used for? | Experiments, metrics, model registry, artifacts |
| What is model drift? | Production data/model behavior changes |
| How would you monitor an inference API? | Latency, errors, throughput, prediction distribution, drift |
| When would you use Vertex AI? | Managed training, registry, endpoints, monitoring |
| When would you use GKE for ML workloads? | Custom runtime, control, GPU scheduling, platform reuse |
| How would you secure an LLM app? | Auth, prompt controls, data leakage, logging, rate limit |
| How do Ollama and Claude fit into your project? | Local vs hosted LLM provider, fallback design |
| How would you explain MLOps as a DevOps engineer? | CI/CD plus model/data/version/monitoring concerns |

## Behavioral Questions Based On Your Resume

| Question | Story To Prepare |
| --- | --- |
| Tell me about a production incident you handled. | GKE, deployment, monitoring, root cause |
| Tell me about automation that saved time. | Terraform modules, CI/CD, Python/Bash |
| Tell me about a security improvement you made. | Cloud Armor, IAM, Prisma, CSPM |
| Tell me about a time you worked with multiple teams. | Developers, security, cloud vendors |
| Tell me about a difficult stakeholder. | Governance vs delivery speed |
| Tell me about a mistake you made. | Own it, fix, prevention |
| Tell me about a time you learned quickly. | GCP, TFE, security tool, MLOps |
| Tell me about your most impactful achievement. | 70% provisioning reduction or 99.9% availability |
| Tell me about pressure during an outage. | Calm debugging and communication |
| Tell me about mentoring or helping team members. | Standards, docs, reviews |

## Coding Questions For DevOps / Platform Interviews

### Python Basics And Data Structures

1. Write a Python function to find the second largest number in a list without sorting.
2. Remove duplicates from a list while preserving order.
3. Count frequency of words in a large text file.
4. Find the first non-repeating character in a string.
5. Validate balanced parentheses using a stack.
6. Merge two sorted lists.
7. Find top K frequent elements.
8. Implement binary search.
9. Implement an LRU cache.
10. Parse a JSON file and print selected fields.

### Python Automation

1. Read a log file and count `ERROR`, `WARN`, and `INFO` lines.
2. Parse Nginx logs and return top 5 IP addresses.
3. Check health of multiple URLs and report status code and latency.
4. Compare two YAML or JSON config files and print changed keys.
5. Scan a folder for files older than 7 days and archive them.
6. Call a REST API with retry, timeout, and error handling.
7. Read a CSV inventory and generate an Ansible inventory file.
8. Generate a deployment report from a list of services and versions.
9. Detect hardcoded secrets-like values in `.tf`, `.yaml`, and `.env` files.
10. Summarize failed CI jobs from a JSON pipeline report.

### Bash / Linux Scripting

1. Write a Bash script to check CPU, memory, and disk usage.
2. Write a script to find the top 10 largest files in a directory.
3. Archive logs older than 7 days.
4. Check if a process is running and restart it if not.
5. Check open ports on a server.
6. Print failed systemd services.
7. Monitor a URL every 30 seconds and log failures.
8. Count HTTP status codes from an access log.
9. Find duplicate lines in a file.
10. Create a backup script with timestamped folder names.

### Kubernetes Coding / YAML Questions

1. Write a Deployment YAML with 3 replicas, requests, limits, and probes.
2. Write a Service YAML for an internal application.
3. Write an HPA YAML for CPU-based autoscaling.
4. Write a NetworkPolicy allowing traffic only from one namespace.
5. Write a ConfigMap and mount it into a pod.
6. Write a Secret usage example with environment variables.
7. Write a Helm `values.yaml` for image, replicas, service, and resources.
8. Write a script to list pods with restart count greater than 3.
9. Write a script to find deployments without readiness probes.
10. Write a script to report pods not in `Running` state.

### Terraform Coding Questions

1. Write a Terraform variable, resource, and output skeleton.
2. Create a reusable module interface for a GCP service account.
3. Use `for_each` to create multiple IAM bindings.
4. Write Terraform code for labels/tags standardization.
5. Write a backend configuration example.
6. Write a validation rule for an environment variable.
7. Explain and code `count` vs `for_each` examples.
8. Write a module call for VPC/subnet creation.
9. Write a Terraform output for a resource ID.
10. Write a script to check Terraform files for missing required tags.

## Live Coding Practice Prompts With Expected Discussion

| Prompt | Discuss |
| --- | --- |
| Build a log analyzer. | File handling, dictionaries, memory-efficient reading |
| Build a URL health checker. | Timeout, retry, latency, status codes |
| Build a Kubernetes restart reporter. | `kubectl` JSON output, parsing, thresholds |
| Build a Terraform secret scanner. | Regex, false positives, file traversal |
| Build a CI failure summarizer. | JSON parsing, grouping by stage/job |
| Build a cloud cost CSV analyzer. | CSV parsing, grouping, sorting |
| Build a drift detector from two CSV files. | mean comparison, thresholds |
| Build a rate limiter. | dictionary/window logic |
| Build a CLI tool with arguments. | `argparse`, validation, exit codes |
| Build a backup cleanup tool. | date math, dry-run mode, safe deletion |

## Senior-Level System Design Questions

| Question | Key Areas |
| --- | --- |
| Design a self-service GCP platform for 20 teams. | Landing zone, IAM, Shared VPC, Terraform, policy, observability |
| Design CI/CD for 50 microservices. | Build once, artifact promotion, security scans, rollout, rollback |
| Design a production GKE platform. | Cluster layout, node pools, RBAC, ingress, autoscaling, monitoring |
| Design observability for a checkout API. | SLIs, dashboards, alerts, logs, traces, incident response |
| Design Terraform module governance. | Module registry, versioning, reviews, policy-as-code |
| Design Cloud Armor/WAF protection for public apps. | WAF, rate limiting, exceptions, logging, testing |
| Design disaster recovery for Kubernetes workloads. | Backup, restore, RPO/RTO, Kasten, testing |
| Design an MLOps model serving platform. | Registry, deployment, monitoring, drift, rollback |
| Design a GenAI incident copilot. | LLM provider, prompts, context, safety, fallback |
| Design cloud cost governance. | Labels, budgets, alerts, rightsizing, ownership |

## Questions You Should Ask Interviewers

- What are the biggest platform reliability challenges right now?
- How mature is your Terraform or IaC workflow?
- Are teams using GKE, Cloud Run, or both?
- How do you manage IAM and cloud governance?
- What CI/CD tools are currently used?
- How do you handle production incidents?
- What monitoring and observability stack do you use?
- Is there a platform team or shared DevOps model?
- Are you building MLOps or AI infrastructure capabilities?
- What would success look like in the first 90 days?

