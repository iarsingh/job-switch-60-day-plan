# 60-Day Learning And Switching Plan

## Phase 1: Positioning And Foundation, Days 1-10

Goal: become visible, searchable, and interview-ready at the profile level.

### Days 1-2

- Define target roles: DevOps, MLOps, Platform, GCP, AI Infra.
- Create one master resume and two targeted versions:
  - DevOps / Platform Engineer
  - MLOps / AI Infrastructure Engineer
- Update LinkedIn headline and About section.
- Pin 3-4 strongest GitHub projects.

### Days 3-5

- Refresh Linux:
  - systemd
  - logs
  - processes
  - networking
  - disk and memory debugging
- Practice:
  - `top`, `htop`, `free`, `df`, `du`, `iostat`, `journalctl`
  - `netstat`, `ss`, `dig`, `curl`, `tcpdump`
- Create one troubleshooting notes file.

### Days 6-8

- Refresh Python for automation:
  - file handling
  - APIs
  - subprocess
  - logging
  - concurrency basics
- Build or polish 2 scripts:
  - log analyzer
  - server health checker

### Days 9-10

- Start applications:
  - 10 targeted applications
  - 10 referral messages
  - 5 recruiter messages
- Publish one LinkedIn post about your 60-day upskilling journey.

## Phase 2: DevOps And Platform Depth, Days 11-25

Goal: show strong hands-on infrastructure ability.

### Days 11-13: Docker

- Dockerfile best practices
- multi-stage builds
- image size optimization
- container debugging
- Docker Compose

Output:

- Containerize one FastAPI or Go app.
- Add README with build/run commands.

### Days 14-18: Kubernetes

- Pods, Deployments, Services
- ConfigMaps, Secrets
- Ingress
- HPA
- probes
- requests and limits
- rolling updates and rollback

Output:

- Deploy a sample app to Kubernetes.
- Add manifests and troubleshooting notes.

### Days 19-21: Helm And GitOps

- Helm chart structure
- values files
- templating
- ArgoCD basics

Output:

- Convert Kubernetes manifests into Helm chart.
- Add ArgoCD application manifest.

### Days 22-25: Observability

- Prometheus
- Grafana
- OpenTelemetry basics
- logging pipeline basics
- SLO, SLI, alerting

Output:

- Add metrics endpoint to one app.
- Create Prometheus scrape config and Grafana dashboard notes.

## Phase 3: Cloud And Infrastructure As Code, Days 26-38

Goal: become strong for cloud infrastructure interviews.

### Days 26-29: Terraform

- providers
- variables
- outputs
- modules
- remote state
- workspaces
- state locking

Output:

- Build GCP infra skeleton:
  - VPC
  - subnet
  - service account
  - Cloud Run or GKE module

### Days 30-32: GCP Core

- IAM
- service accounts
- Cloud Run
- GKE
- Artifact Registry
- Cloud Build
- Secret Manager
- Cloud Monitoring

Output:

- Deploy one app to Cloud Run or document deploy steps with Terraform.

### Days 33-35: CI/CD

- GitHub Actions
- Cloud Build
- Jenkins basics
- image build and push
- deployment pipeline

Output:

- Add CI pipeline to one portfolio project:
  - lint
  - test
  - Docker build

### Days 36-38: Ansible

- inventories
- roles
- handlers
- templates
- idempotency

Output:

- Create one VM bootstrap playbook:
  - users
  - packages
  - Docker
  - monitoring agent

## Phase 4: MLOps And AI Infrastructure, Days 39-50

Goal: stand out beyond generic DevOps.

### Days 39-41: ML Serving

- model artifact loading
- FastAPI inference service
- Docker packaging
- health and readiness endpoints

Output:

- Polish `mlops-ollama-incident-copilot`.
- Add architecture diagram and screenshots.

### Days 42-44: MLflow And Model Registry

- experiments
- model registration
- artifact tracking
- model versioning

Output:

- Register a model locally with MLflow.
- Document promotion flow: dev to staging to prod.

### Days 45-47: Model Monitoring

- drift
- latency
- prediction distribution
- alerting

Output:

- Add model monitoring report or dashboard.

### Days 48-50: Vertex AI / GKE MLOps

- Vertex AI training
- Vertex AI endpoints
- GKE model serving
- GPU scheduling basics

Output:

- Prepare interview explanation:
  - when to use Vertex AI
  - when to use GKE
  - cost and scaling tradeoffs

## Phase 5: Interview And Offer Sprint, Days 51-60

Goal: convert preparation into interviews and offers.

### Days 51-54

- Revise all projects.
- Prepare STAR stories:
  - outage handled
  - automation built
  - cost saved
  - deployment improved
  - monitoring improved
  - conflict or leadership example

### Days 55-57

- Mock interviews:
  - Linux troubleshooting
  - Kubernetes debugging
  - Terraform design
  - CI/CD pipeline design
  - MLOps system design

### Days 58-60

- Push aggressive follow-ups.
- Ask for referrals from warm contacts.
- Prepare salary negotiation notes.
- Decide target companies and offer priorities.

## Daily Coding And Scenario Questions

Use this section every day. First solve the coding question in Python or Bash. Then speak the scenario answer out loud as if you are in an interview. Keep notes in `daily-log.md`.

| Day | Coding Question | Scenario-Based Interview Question |
| --- | --- | --- |
| 1 | Write a Python script to read a log file and count `ERROR`, `WARN`, and `INFO` lines. | Your production API is returning intermittent 500 errors after a deployment. How do you investigate? |
| 2 | Write a Bash script to check CPU, memory, disk usage, and print `OK` or `ALERT`. | A Linux server shows 95% CPU usage. What commands do you run and how do you isolate the process? |
| 3 | Solve: find the second largest number in a list without sorting. | A service is not starting after reboot. How do you debug it with `systemctl` and `journalctl`? |
| 4 | Write a Python function to remove duplicate items from a list while keeping order. | Disk usage is 100% on a production server. How do you resolve it safely? |
| 5 | Write a script to parse Nginx access logs and return top 5 IP addresses by request count. | Users report slow response time. How do you determine if the issue is app, database, network, or infra? |
| 6 | Solve: valid parentheses using a stack. | Explain connection refused vs connection timeout. How do you debug each? |
| 7 | Write a Python script that checks if multiple URLs are healthy and reports status code and latency. | DNS resolution is failing for one service but not others. How do you troubleshoot? |
| 8 | Write a Bash script to archive logs older than 7 days. | A cron job did not run. How do you investigate? |
| 9 | Solve: reverse words in a sentence without using built-in reverse. | A server has high memory usage but CPU is normal. How do you investigate? |
| 10 | Write a Python script to compare two config files and print changed keys. | How do you explain your current project architecture in 5 minutes? |
| 11 | Write a Dockerfile for a simple Python FastAPI app. | A container exits immediately after startup. How do you debug it? |
| 12 | Write a Python script to call a REST API with timeout, retry, and error handling. | A Docker image is too large. How do you reduce image size? |
| 13 | Solve: merge two sorted arrays. | Your app works locally but fails inside Docker. What do you check? |
| 14 | Write a Kubernetes Deployment YAML for a web app with 3 replicas. | A pod is stuck in `CrashLoopBackOff`. What is your step-by-step debugging approach? |
| 15 | Write a Kubernetes Service YAML for exposing an internal app. | A pod is stuck in `ImagePullBackOff`. What can cause it and how do you fix it? |
| 16 | Write a readiness and liveness probe config for an HTTP service. | Traffic is reaching the Service but not the Pod. How do you debug labels, selectors, and endpoints? |
| 17 | Write a Python script to generate Kubernetes YAML from a small config dictionary. | How do you decide CPU and memory requests and limits for an application? |
| 18 | Solve: implement a basic queue using two stacks. | HPA is not scaling pods even though traffic is high. What do you check? |
| 19 | Write a Helm `values.yaml` structure for image, replicas, resources, and service. | Helm deployment failed after a values change. How do you debug and rollback? |
| 20 | Write a small script to validate required environment variables before app startup. | How do you manage ConfigMaps and Secrets across dev, staging, and prod? |
| 21 | Solve: find first non-repeating character in a string. | How would you implement GitOps with ArgoCD for multiple environments? |
| 22 | Write a Python script to expose a `/metrics` endpoint with a counter. | What metrics would you monitor for a production API? |
| 23 | Write a script to calculate p95 latency from a list of request durations. | An alert fires for high latency. How do you investigate and reduce MTTR? |
| 24 | Solve: group anagrams. | How do logs, metrics, and traces help during incident debugging? |
| 25 | Write a Bash script to check whether Prometheus targets are up using HTTP API. | How do you design alerts to avoid alert fatigue? |
| 26 | Write Terraform code for a variable, output, and simple resource skeleton. | How do you structure Terraform for dev, staging, and production? |
| 27 | Write a Terraform module interface with variables for name, region, labels, and environment. | Terraform plan shows unexpected resource replacement. What do you do before applying? |
| 28 | Write a Python script to scan `.tf` files and list hardcoded secrets-like values. | Terraform state is locked or corrupted. How do you handle it? |
| 29 | Solve: detect cycle in a linked list conceptually or with Python nodes. | How do you manage infrastructure drift? |
| 30 | Write a script to validate GCP service account key file existence and permissions. | How do you design least-privilege IAM in GCP? |
| 31 | Write a Python script to upload a file to a mock cloud storage API. | When would you choose Cloud Run over GKE? |
| 32 | Write a Bash script to build and tag a Docker image with Git commit SHA. | How do you design a production-ready GKE cluster? |
| 33 | Write a GitHub Actions workflow for lint, test, and Docker build. | A CI pipeline suddenly became slow. How do you investigate and improve it? |
| 34 | Write a Python script to fail if test coverage is below a threshold from a coverage report. | How do you safely promote the same artifact from dev to staging to prod? |
| 35 | Solve: longest substring without repeating characters. | A deployment succeeded but users see old code. What could be wrong? |
| 36 | Write an Ansible playbook task to install Docker and start the service. | How do you ensure Ansible playbooks are idempotent? |
| 37 | Write a Jinja2 template for an app config with port, env, and log level. | Ansible works on one server but fails on another. How do you debug inventory, SSH, and privilege issues? |
| 38 | Write a Python script to inventory servers from a CSV and print Ansible host groups. | How do you bootstrap a new VM securely? |
| 39 | Write a FastAPI `/predict` endpoint that accepts JSON and returns a dummy prediction. | How do you serve an ML model in production? |
| 40 | Write Python code to load a model artifact from disk and handle missing file errors. | Your inference API latency increased after a new model release. How do you debug it? |
| 41 | Write a Dockerfile for an ML inference API with pinned dependencies. | How do you package and deploy an ML model differently from a normal API? |
| 42 | Write a script to log experiment parameters and metrics to a JSON file. | What is a model registry and why is it useful? |
| 43 | Write a Python function to compare two model versions by accuracy and latency. | How do you decide whether to promote a model from staging to production? |
| 44 | Solve: top K frequent elements. | How do you roll back a bad model in production? |
| 45 | Write a Python script to detect data drift by comparing baseline and current mean values. | What is feature drift and how is it different from model drift? |
| 46 | Write a script to alert if prediction error rate crosses a threshold. | Your model predictions look wrong but the API is healthy. How do you investigate? |
| 47 | Write a simple batch inference script that reads CSV input and writes predictions to CSV. | When would you use batch inference vs real-time inference? |
| 48 | Write Kubernetes YAML for an inference service with resource requests and limits. | How would you deploy a model on GKE and monitor it? |
| 49 | Write a script to estimate monthly cost from CPU hours, memory GB-hours, and request count. | How do you optimize cost for cloud-native ML workloads? |
| 50 | Write a Python wrapper that can call either Ollama or Claude based on an env variable. | How would you design a GenAI incident copilot for SRE teams? |
| 51 | Solve: binary search and explain time complexity. | Walk me through your strongest project as if I am a hiring manager. |
| 52 | Solve: implement LRU cache using ordered dictionary or custom logic. | Tell me about a production incident you handled using STAR format. |
| 53 | Write a script to summarize failed CI jobs from a JSON pipeline report. | Tell me about automation you built that saved time or reduced errors. |
| 54 | Solve: validate an IP address string. | How do you handle conflict with developers when enforcing platform standards? |
| 55 | Write a mock interview answer for `kubectl describe pod` output analysis. | Design a CI/CD platform for 50 microservices. |
| 56 | Write a mock interview answer for Terraform plan review. | Design observability for a high-traffic payment or checkout API. |
| 57 | Write a mock interview answer for high latency troubleshooting. | Design a secure Kubernetes platform for multiple teams. |
| 58 | Solve: design a rate limiter in Python. | How would you explain your 30-60-90 day plan for a new DevOps/MLOps role? |
| 59 | Solve: parse a large file line by line and count keyword frequency efficiently. | How do you negotiate scope, priority, and risk with leadership during an incident? |
| 60 | Build a final mini project: health-check CLI that checks URLs, disk, memory, and Kubernetes pod status. | Why should we hire you over another DevOps or MLOps candidate? |

## Daily Answer Format

For coding:

```text
Problem:
Approach:
Code:
Time complexity:
Edge cases:
What I learned:
```

For scenario questions:

```text
Situation:
First checks:
Commands/tools:
Root-cause path:
Fix:
Prevention:
Business impact:
```
