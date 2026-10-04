---
title: Agent SDK & Multi-Agent Observability
summary: Core SDK components that let teams create and deploy agents with minimal boilerplate, and trace what every agent did.
context: Infosys · platform engineering
stack: [Python, OpenTelemetry, Jinja2, Code generation]
order: 3
featured: true
---

## The problem

Multi-agent systems are hard to debug. When an answer is wrong, you need to know which agent made which call, with what inputs, and how long it took. Teams also spent too much time on setup code before writing any agent logic.

## What I built

Three core components of the platform SDK:

- **Multi-agent observability on OpenTelemetry.** Agent steps, tool calls, and model calls are emitted as traces, so a full multi-agent run can be followed end to end in standard tooling.
- **Dynamic Python import resolution.** Agent code and its dependencies resolve correctly in production deployments, not just on a developer's machine.
- **Jinja2 code generation.** A templating pipeline scaffolds new agents, so teams can create and deploy one with minimal boilerplate.

## Why it matters

Observability turns "the agent gave a weird answer" into a trace you can inspect. Code generation keeps every agent consistent, which makes the observability and deployment tooling work the same way for all of them.
