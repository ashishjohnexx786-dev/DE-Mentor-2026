# Deep Research Decisions — Video-First RC6

Status: release-candidate research log, not a FINAL audit.

## Remaining book-led lesson decisions
- **DE00-02 File extensions:** upgraded to current Microsoft Windows official reference. A generic YouTube clip was not preferred over Microsoft’s exact current Windows 10/11 guidance.
- **DE00-07 Beginner troubleshooting:** KEEP course-built. GCFGlobal’s old troubleshooting lesson now redirects and no current external video beat the course’s exact beginner error/evidence workflow.
- **DE00-08 Study evidence / attempt discipline:** KEEP course-built by design. This is specific to our Gate/review system; an external study-skills video would add time, not competence.
- **DE01-02 Grain:** KEEP course-built. Strong current written references exist, but the learner book already teaches the exact “what one row represents” idea and the long DE class already reinforces modeling. No inferior video was forced.
- **DE01-13 Chart choice:** upgraded to Chandoo’s embedded beginner video page. Chart-selection fundamentals are stable; this stays a small foundation lesson, not a dashboard detour.
- **DE01-14 Reconciliation / sanity checks:** KEEP course-built because the value comes from running control totals and preserving source evidence, not watching another lecture.
- **DE01-15 Mini workflow:** KEEP course-built because this is an integration routine: inspect → calculate → validate → explain → save evidence.
- **DE02-14 SQL debugging:** upgraded to a curated bundle: Microsoft troubleshooting-process video + Metabase wrong-result/duplicate logic guide + our independent query lab.
- **DE04-16 Python checkpoint:** kept independent but added the current PyPA Packaging Projects guide as a repair reference for reproducible layout/tests.
- **DE17-09 Promotion foundations:** upgraded to a curated multi-source bundle instead of five separate courses.

## Depth repair found during competitor audit
- **Data contracts / Avro / Protobuf / compatibility:** strengthened DE09-05 and DE14-09 with Confluent’s official long-form data-contract class. This directly covers why JSON blobs are weak for evolution, Avro/Protobuf, schema references and forward/backward/full compatibility.
- **NoSQL/MongoDB:** classified **BLUE OPTIONAL**, not a mandatory gap. IBM/DataCamp-style programs teach NoSQL; Codebasics’ main modern DE route does not make it central. Added a target-job-triggered MongoDB awareness lab using free official MongoDB material.
- **Apache Flink:** classified **BLUE OPTIONAL**, not a mandatory gap. The core course already teaches Kafka plus event time, watermarks, state/checkpoints and streaming semantics with Spark Structured Streaming. Added a 2-hour employer-translation path only for jobs that explicitly ask for Flink.

## Locked rule
Do not raise coverage by attaching a vaguely related video. A book/lab lesson may remain book-led when doing is more valuable than watching.
