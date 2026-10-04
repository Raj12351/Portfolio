---
title: Batch RAG Ingestion Pipeline
summary: An end-to-end pipeline that turns raw documents in S3 into a searchable vector index, tuned for accurate, context-aware retrieval.
context: Infosys · for a US bank
stack: [Python, Amazon S3, Embeddings, Vector store, Chunking, Metadata filtering]
order: 2
featured: true
---

## The problem

Several GenAI use cases needed to answer questions from large, changing document sets. Answer quality depended mostly on retrieval: when the wrong chunks came back, even a strong model gave weak answers.

## What I built

A **batch RAG pipeline** shared across use cases:

1. **Ingestion** from Amazon S3.
2. **Document chunking**, with the strategy chosen per document type.
3. **Embedding generation** for every chunk.
4. **Vector store indexing**, with metadata kept alongside each vector.

## Improving retrieval

The biggest gains came from the retrieval side, not the model:

- **Better chunking.** Chunk size and boundaries decide whether a retrieved passage holds a complete idea. Tuning them gave more relevant context.
- **Metadata filtering.** Narrowing the search by document attributes before semantic search removes results that look similar but are irrelevant.

The result was more accurate, context-aware responses across multiple GenAI use cases. These changes were validated with the [evaluation practices](/projects/genai-evaluation) I set up.
