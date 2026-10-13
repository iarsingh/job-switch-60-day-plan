# 60-Day Job Switch Plan

## Overview

A 60-day plan for moving into a DevOps, MLOps, cloud infrastructure, platform or AI infrastructure role during a notice period. It sets a daily rhythm of hands-on building, DSA and scripting practice, applications and referrals, and interview revision, with weekly goals that move from resume cleanup through Python, Kubernetes, Terraform, GCP and MLOps to interview and offer sprints. Supporting files include a day-by-day roadmap, a CSV tracker, an application tracker, resume drafts and interview question banks.

- **Built with:** Markdown, CSV
- **Scope:** Personal career planning notes; there is no software to run.

<!-- project-guide:start -->
## Project guide

[Project architecture](PROJECT_ARCHITECTURE.md) · [Interview questions and answers](INTERVIEW_QA.md)

Use the architecture document for the component diagram, implementation boundaries, and verification entry points. The interview guide includes source-backed answers and project walkthroughs.

### Implementation map

| Component | Responsibility |
| --- | --- |
| [`60-day-plan.md`](60-day-plan.md) | Project explanations or operating notes |
| [`README.md`](README.md) | Project explanations or operating notes |
| [`application-tracker.md`](application-tracker.md) | Project explanations or operating notes |

Setup and examples are described in the existing project notes below. Consult the component-specific manifests before assuming a single launch command.

<!-- project-guide:end -->

This repo is your operating system for switching into a better DevOps, MLOps, Cloud, or AI Infrastructure role during a 60-day notice period.

## Target Roles

- Senior DevOps Engineer
- MLOps Engineer
- Cloud Infrastructure Engineer
- Platform Engineer
- AI Infrastructure Engineer
- Kubernetes / GCP Engineer

## Daily Operating Rhythm

Use this structure every working day:

| Time | Focus |
| --- | --- |
| 60-90 min | Deep learning / hands-on build |
| 45-60 min | DSA / scripting / troubleshooting practice |
| 45 min | Resume, LinkedIn, applications, referrals |
| 30 min | Interview notes and revision |

Minimum daily output:

- 1 GitHub commit or project improvement
- 2 targeted job applications
- 2 referral or recruiter messages
- 1 interview topic revised
- 1 LinkedIn learning/build update, at least 3 times per week

## Weekly Goals

| Week | Outcome |
| --- | --- |
| 1 | Resume, LinkedIn, GitHub cleanup, target-role clarity |
| 2 | Python automation + Linux + networking refresh |
| 3 | Docker, Kubernetes, Helm, observability projects |
| 4 | Terraform, Ansible, CI/CD, GitOps portfolio |
| 5 | GCP, Cloud Run, GKE, IAM, monitoring, cost optimization |
| 6 | MLOps: model serving, monitoring, MLflow, Vertex AI |
| 7 | Interview sprint: projects, system design, troubleshooting |
| 8 | Offer sprint: referrals, mock interviews, negotiation |

## Repo Map

- [60-day-plan.md](60-day-plan.md): day-by-day roadmap
- [60-day-study-plan.csv](60-day-study-plan.csv): Excel-compatible day 1 to day 60 tracker
- [daily-plan/](daily-plan/README.md): separate daily files from day 1 to day 60
- [job-search-system.md](job-search-system.md): how to apply, network, and follow up
- [application-tracker.md](application-tracker.md): job pipeline tracker
- [resume-linkedin-checklist.md](resume-linkedin-checklist.md): profile upgrade checklist
- [master-resume-devops-platform.md](master-resume-devops-platform.md): master resume for DevOps and Platform Engineer roles
- [unified-master-resume.md](unified-master-resume.md): single source resume covering Platform, DevOps, and MLOps positioning
- [final-resume-platform-devops.md](final-resume-platform-devops.md): cleaned resume version ready to tailor and export
- [interview-prep.md](interview-prep.md): interview topics and question bank
- [experience-based-interview-questions.md](experience-based-interview-questions.md): senior experience-based interview questions
- [resume-based-interview-question-bank.md](resume-based-interview-question-bank.md): resume-specific industry scenario and coding interview questions
- [portfolio-projects.md](portfolio-projects.md): projects to polish and showcase
- [outreach-templates.md](outreach-templates.md): referral, recruiter, and follow-up messages
- [daily-log.md](daily-log.md): daily execution log

## Non-Negotiables

- Do not apply randomly. Apply only where your resume clearly matches the role.
- Every project must have a strong README, architecture diagram, commands, screenshots, and interview talking points.
- Referrals beat cold applications. Spend daily time on people, not only portals.
- Track everything. If it is not tracked, it will disappear.

## Documentation checks

Project architecture, interview guides, and local source links are checked automatically on pushes and pull requests. Run the same check locally:

```bash
python3 .github/scripts/validate_project_docs.py
```
