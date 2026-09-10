# FINAL Release Audit Standard — mandatory before the word FINAL

This file is a **release gate**, not a declaration that the course is final. RC6.9 remains a release candidate.

## 1. Curriculum and teaching integrity — 100% required
- Exactly 20 stages, 264 formal lessons, 50 M18 project/capstone phases, 314 controlled units and 7 protected Gates.
- Every formal lesson has exactly one source-map row; no unexplained missing or duplicate IDs.
- Every Mentor material/package path resolves.
- Teaching PDFs, module ZIPs and Gate ZIPs match the approved release bytes/hashes.
- No strong teaching content is silently condensed or deleted during video/source upgrades.

## 2. External-link audit — EVERY link, no spot-check
Immediately before FINAL, extract every external URL from curriculum JSON/JS, source maps, HTML/text controls, supplements, and parsed PDFs. For **each** URL record:
1. Reachability: opens without a dead/removed/private/login-only surprise (unless login is intentionally required and documented).
2. Identity: title/channel/provider is the intended source; detect redirects or replaced videos/pages.
3. Topic match: source actually teaches the lesson competency.
4. Segment match: timestamp/chapter/module still points to the claimed concept; no stale chapter offsets.
5. Freshness: version-sensitive tools (Fabric/Azure, Airflow, Docker, dbt, Spark/Databricks, Kafka, GitHub Actions, etc.) are compared with current official documentation/training.
6. Accessibility/cost: source is publicly usable under the course rule; any account/free-tier requirement is stated.
7. Better-source review: if a clearer/current official or high-quality teacher source now exists, decide KEEP / KEEP_WITH_FRESHNESS_OVERLAY / REPLACE.
8. Correct link placement: the Mentor button opens the right target for the right lesson/main class.

A link that merely returns HTTP 200 does **not** pass. Identity, topic, segment and freshness must also pass.

## 3. Video/visual teaching audit
- Every non-practice lesson is classified intentionally: video primary/support, official video/course, official guided visual, or course-built book visual.
- No weak/random video is added just to inflate a percentage.
- Long 1–2 hour classes are allowed when coherent; lesson jump-backs still map the exact learning objective.
- Practice/Gates/project attempts remain protected where tutorial access would leak the solution.

## 4. Hands-on/runtime audit — observed evidence required
On the learner PC/cloud account as applicable, prove the live paths that static packaging cannot prove: PostgreSQL; Docker/Airflow; Parquet/storage; Spark/PySpark; Delta; Kafka/streaming; Fabric/cloud; GitHub Actions/IaC where used; and the cross-stack capstone. Record only observed results.

## 5. Real Android Mentor smoke
Verify navigation, stage locks/progression, Main Class and lesson source buttons, linked PDFs, start/end study timing across background/lock, persistence, reports/streaks, Training Proof/export, theme/readability, and M18 project routing on the actual phone.

## 6. Final assembled-byte audit
After all repairs are merged, assemble the exact release once and rerun: curriculum counts, duplicate/coverage checks, internal paths, source-map parity, PDF/ZIP integrity, manifest/hashes, module/Gate parity, Mentor↔course parity, and full external-link audit against those exact bytes.

## Release rule
The label **FINAL** is prohibited until every mandatory item above is PASS on the exact final bytes. If a link/source changes after the audit, reopen only the affected audit/asset and regenerate hashes before FINAL.


## Mirror / re-upload legitimacy (added RC6.9)
For Bilibili or any mirror/re-upload source, FINAL also requires: identify original creator/source where possible; reject unauthorized paid-course copies; prefer original official/creator link when equivalent; verify real-device access; and retain a fallback when the mirror can disappear or cannot be reliably audited.
