---
title: 'Most RAG problems are retrieval problems'
description: Why I look at chunking and metadata before touching the prompt or the model.
date: 2026-10-04
tags: [rag, retrieval, genai]
draft: true
---

> **Draft.** This is a starter post to show how writing works on the site. Edit it into your own words, then set `draft: false` to publish it.

When a RAG system gives a bad answer, the first instinct is to rewrite the prompt or try a bigger model. In my experience, the cause is usually earlier: **the model never saw the right context.**

## Check retrieval first

Before changing anything, look at what was retrieved for a failing question:

- Did the right document come back at all?
- Did the chunk contain the *whole* answer, or was it cut in half?
- Did something similar-looking but irrelevant rank higher?

## Chunking decides what a "fact" looks like

Chunks that are too small split ideas apart. Chunks that are too large bury the answer in noise. Different document types often need different strategies.

## Metadata filtering is underrated

If you already know the question is about a particular product, region, or time period, filter on that metadata *before* the semantic search. It removes a whole class of wrong-but-similar results.

## Measure it

None of this works without evaluation. Keep a small set of real questions with known good sources, and check retrieval quality every time you change the pipeline.

```python
# A minimal retrieval check: did we find the expected source?
def hit_rate(cases, retriever, k=5):
    hits = 0
    for question, expected_doc in cases:
        results = retriever.search(question, k=k)
        hits += any(r.doc_id == expected_doc for r in results)
    return hits / len(cases)
```
