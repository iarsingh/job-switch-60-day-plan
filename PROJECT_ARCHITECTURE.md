# job-switch-60-day-plan — project architecture

[README](README.md) · [Interview questions and answers](INTERVIEW_QA.md)

## Purpose and scope

This repo is your operating system for switching into a better DevOps, MLOps, Cloud, or AI Infrastructure role during a 60-day notice period.

This document describes files and symbols in this checkout. Deployment templates and statements in the original overview are distinguished from a verified running environment.

## Component diagram

```mermaid
flowchart LR
    R["Repository"]
    R -. contains .-> C0["60-day-plan.md"]
    R -. contains .-> C1["README.md"]
    R -. contains .-> C2["application-tracker.md"]
```

For Python repositories, arrows show resolved local imports, not network calls or deployment order. Otherwise the diagram is a repository component map; containment arrows do not assert runtime integration.

## Components and responsibilities

| Component | Responsibility |
| --- | --- |
| [`60-day-plan.md`](60-day-plan.md) | Project explanations or operating notes |
| [`README.md`](README.md) | Project explanations or operating notes |
| [`application-tracker.md`](application-tracker.md) | Project explanations or operating notes |

## Documentation workflow

Read the overview, choose the relevant topic or engagement template, and follow its linked examples. This repository is a learning/reference collection rather than a single deployable service.

## Setup and verification

Follow the existing README and the component-specific instructions linked above. No new application start command is asserted for this repository.

No dedicated test files were found in the inspected first-party file inventory. A future implementation should add executable acceptance checks.

## Operating boundaries and design review

Before turning this checkout into a customer deployment, establish the input contract, data ownership, access controls, failure response, evaluation criteria, and rollback owner. Repository fixtures and unit tests demonstrate local behavior; they do not establish throughput, uptime, compliance, or business impact.

A useful architecture review starts with the linked implementation: identify where input enters, where a decision is made, which state can change, and which external dependency can fail. Add a deployment view only for infrastructure that is actually configured and exercised.
