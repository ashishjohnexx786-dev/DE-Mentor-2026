# Edition 1.2 — verification and remaining limits

Date: 15 September 2026. Source: the supplied STANDALONE_DE_2026_COMPLETE_M00_M19_ASTRA_REPAIRED_FINAL_v1.1.zip, SHA-256 cbd5840dbd1cb9810c913a9c4ec563bc378c30444f8c0dc2e0776a4fe258c818.

**A. READY FOR STUDY within the authoring and verification scope below.** No unresolved material authoring defect was identified in the completed checks. This is not a claim that every command has run on every engine, every video has played fully, or every learner device has been tested. Those limits remain explicit. Retain the course; no architectural restart is required.

## What is physically present

- M00–M19: 264 formal lessons and all 50 controlled M18 phases; 314 distinct units.
- All 314 units have a physical learner-book heading, a complete index entry, a matching bookmark and an index annotation that resolves to the recorded lesson page.
- All 20 modules have Quick Revision, Module Revision Test, separate Protected Test Answers and Explained Practice Reviews in the normalized learner route.
- G01–G07 each contain Gate A, Protected Review A, a different fresh Gate B and Protected Review B. Boundaries are M01, M03, M06, M10, M14, M17 and M19 respectively.
- 149 distinct PDF byte sets / 1913 pages, excluding byte-identical compatible copies. A shared M00/M01 or M02/M03 review is deliberately available in both normalized module folders.
- HOW_TO_STUDY.pdf gives the file sequence, first week, six-hour daily routine, module budgets, practical-work rules and a hints-first help prompt. STUDY_INDEX.xlsx is an optional offline tracker; it does not sync with the mentor.

## Verification levels

| Level | Completed evidence | Practical limit |
| --- | --- | --- |
| Packaging and integrity | Physical 314-unit inventory; all index targets and bookmark pages; 20 companion sets; seven A/B gate sets; regenerated file hashes; ZIP integrity | Counts alone do not establish teaching quality |
| Static and code checks | 154 Python files parsed; supplied shell files pass bash syntax checks; M10 source cards visibly link the required videos; all retained PDF text is within the checked page bounds | Parsing is not execution; link annotations are not playback |
| Rendered PDFs | Common type, color and index system; automatic geometry and replacement-glyph checks across all distinct PDFs; representative page images reviewed, including contents, worked code and the study guide | Not every page received a separate human visual inspection; extraction bounds cannot detect every visual defect |
| Native local execution | Python landing/validation/replay controls; four M18 reference projects with supplied fixtures and failure/recovery cases; M19 SQL results in SQLite and Python permutation cases; G03/G04 numeric references | SQLite is not a PostgreSQL certification; local reference implementations do not certify cloud deployments |
| Client simulation | Kafka commit, quarantine and sink-failure separation tested with fake clients | No live Kafka broker or client/network integration was exercised |
| Native Spark | Spark 4.2 with ANSI mode: nine stream-classification cases and six M15 prewrite cases | Fabric's documented runtime is Spark 4.1; Delta MERGE, streaming checkpoint recovery and Fabric notebook/pipeline execution were not run here |
| Native engines still requiring learner execution | PostgreSQL/psql, dbt, Docker/Airflow, Kafka broker, Delta table operations and the actual Fabric tenant | Follow the setup and run/replay/failure checks in each module; do not treat this report as their runtime certificate |
| Learner devices and mentor | Mentor syntax, data inventory and local asset references checked; deployment completion is recorded separately | No mentor browser/UI walkthrough, Windows learner-device test or Android PDF-viewer test was performed; the user requested to check the mentor UI personally |

The runtime evidence files state which cases used actual Python/Spark/SQLite and which used simulation. Temporary verification output directories are not student progress and are not shipped as completed learner work.

## Instructor videos and links

All 96 original distinct YouTube IDs remain in the PDFs; 99 distinct IDs are present after additions. This is a retention check, not an endorsement of every minute. Every M10 lesson exposes its required video links in the visible Video assignment card: DE10-01–07 Docker; DE10-08–19 Airflow 3 and Airflow 101.

The external-source inventory contains 337 distinct PDF URLs, including documentation, videos and deliberate local lab endpoints. Public-source metadata was looked up in batches. The two Kafka configuration references now use accessible official versioned pages. One MIT career-page request was rate limited; this is not evidence that its link is dead. YouTube rate limiting also prevented complete metadata verification. No full end-to-end video playback or promise of future link availability is made.

Read the scope beside each video. Some videos cover the main concept; others provide a prerequisite or optional refresher. DE01-02 reuses the introduction assigned in DE01-01; DE01-03 and DE01-04 share a validation introduction. The book supplies the more specific grain, key, duplicate and engineering reasoning. No second compulsory viewing is implied. Unbounded useful videos remain labelled “Optional visual — no verified bounded range.” Printed time ranges require a manual stop unless the player itself supports the range.

DE07-11 and DE07-13 use patient written explanations, precise diagrams and worked examples with no assigned instructor video. No generated videos are included anywhere.

## Clarifications prompted by the external roadmap

dbt was already taught in DE09-11–13 with a local project. The M09 title now explicitly says “ETL/ELT, dbt transformations and data quality”; a renamed heading is not being counted as a new lesson.

Microsoft's Runtime 2.0 documentation lists Spark 4.1, Delta 4.2 and Python 3.13. Managed Fabric dbt jobs are documented as preview. dbt-fabric targets Warehouse; the Lakehouse route uses dbt-fabricspark and Spark SQL through Livy. A Lakehouse SQL analytics endpoint is read-only. Unity Catalog belongs to Databricks; Fabric uses its own OneLake/workspace and shortcut concepts. These distinctions are explained in M15. Kafka foundations remain in M14; no extra production-cluster administration syllabus was added.

Primary references checked on the date above:

- [Fabric Runtime 2.0](https://learn.microsoft.com/en-us/fabric/data-engineering/runtime-2-0)
- [Fabric dbt jobs overview](https://learn.microsoft.com/en-us/fabric/data-factory/dbt-job-overview)
- [Fabric dbt job patterns and adapters](https://learn.microsoft.com/en-us/fabric/data-factory/common-dbt-job-patterns)
- [Databricks Unity Catalog](https://docs.databricks.com/aws/en/data-governance/unity-catalog/)
- [Kafka 4.2 consumer configuration](https://kafka.apache.org/42/configuration/consumer-configs/)
- [Kafka 4.2 producer configuration](https://kafka.apache.org/42/configuration/producer-configs/)

## Study and outcome expectations

Budget approximately 230–310 focused study days at six hours/day, including practice, revision, assessments and projects. This is a planning estimate, roughly 9–12 months at six study days/week, not a guaranteed completion or employment date. Use the detailed module table in HOW_TO_STUDY.pdf and advance based on your practical result.

Protected and sealed folders are study instructions, not encryption. Save an independent attempt before looking at the worked solution. The mentor records your decisions; it does not automatically grade competence or promise a job.

For exact repaired files, unit IDs, evidence and closure checks, read 99_ADMIN_AUDIT/REPAIR_LEDGER.md in the full course ZIP from the course root. The supplied v1.1 labels are not used as proof of v1.2 correctness.
