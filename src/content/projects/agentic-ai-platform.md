---
title: Enterprise Agentic AI Platform
summary: A platform that lets data scientists build, deploy, and monitor AI agents that automate knowledge workflows and decision support in banking.
context: Infosys · for a US bank
stack: [AWS Strands, Amazon SageMaker, RAG, Vector search, LLM tool-calling, Python]
order: 1
featured: true
---

## The problem

Data science teams wanted to use LLM agents for knowledge-heavy work: finding answers across internal documents, supporting decisions, and moving work through multi-step processes. Each team was starting from scratch, and getting a prototype to production meant solving the same infrastructure problems again and again.

## What I built

I architected and deployed a shared **agentic AI platform** so teams could focus on their use case instead of the plumbing.

- **Agent runtime** built on the AWS Strands framework, with LLM tool-calling so agents can query systems and act, not only chat.
- **Retrieval layer** using RAG and vector search, so agents answer from the organization's own knowledge.
- **Model hosting** on Amazon SageMaker for enterprise deployment.
- **Hierarchical workflows**, where agents coordinate across the multi-level processes common in banking.

## Key decisions

- **Platform, not projects.** Investing in reusable SDK components (see [Agent SDK & observability](/projects/agent-sdk-observability)) meant each new use case got cheaper to deliver.
- **Evaluation from day one.** Every use case ships with checks on retrieval quality, response quality, and agent behavior. See [GenAI evaluation](/projects/genai-evaluation).

## My role

Forward-deployed engineer embedded with the client's teams. I owned use cases end to end through the AI development lifecycle: scoping, design, build, evaluation, and production deployment.
