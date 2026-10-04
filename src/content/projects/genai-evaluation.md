---
title: GenAI Evaluation Practices
summary: A repeatable way to measure retrieval quality, response quality, and agent behavior, before and after release.
context: Infosys · for a US bank
stack: [LLM evaluation, RAG metrics, Agent testing, Python]
order: 4
featured: true
---

## The problem

Without evaluation, every prompt change, chunking tweak, or model swap is a guess. Teams couldn't tell whether a change helped, and regressions reached production unnoticed.

## What I set up

Evaluation practices covering three layers:

- **Retrieval quality.** Is the right context coming back for a question?
- **Response quality.** Is the answer correct, grounded in the retrieved context, and useful?
- **Agent behavior.** Does the agent pick the right tools, follow the expected steps, and stop when it should?

## How teams use it

Teams run evaluations **before release** to validate a use case and **after release** to catch drift and measure improvements. This gave the [RAG pipeline](/projects/batch-rag-pipeline) tuning work a clear signal for whether a change made things better.
