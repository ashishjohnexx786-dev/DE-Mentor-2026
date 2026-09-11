# DE Mentor archived pre-RC4 external source audit — External Source Audit

**Audit date:** 2026-09-10  
**Verdict:** PASS WITH PROVIDER-LIMITED VERIFICATION — no source removal required.

## Scope
- Normalized unique external URLs: **80**
- Non-YouTube URLs: **29**
- YouTube URLs: **51**
- The normalization removes CSV/display suffixes such as `,Watch`; it does not merge distinct actual URLs.

## Current verification result
- **29/29 non-YouTube** URLs reached current pages in the web audit.
- **10/51 YouTube** URLs returned a current title through the automated fetch path.
- **41/51 YouTube** URLs were automation-unresolved (cache/provider fetch errors; one HTTP 429). These are **not classified dead**.
- Directly resolved/reachable: **39/80**.
- Supported dead-link findings: **0**.

## YouTube links whose titles were resolved
- `-XjPvozl-So` — DWH Tutorial 16 :Slowly Changing Dimensions and Types in Data Warehousing
- `5SFVDr6F4vg` — Airflow 101: Essential Tips For Beginners
- `7mz73uXD9DA` — SQL for Data Analytics - Learn SQL in 4 Hours
- `B-s71n0dHUk` — Learn Visual Studio Code in 7min (Official Beginner Tutorial)
- `NIWwJbo-9_8` — Python Tutorial: Using Try/Except Blocks for Error Handling
- `OT1RErkfLNQ` — Learn SQL Beginner to Advanced in Under 4 Hours
- `Uh2ebFW8OYM` — Python Tutorial: File Objects - Reading and Writing to Files
- `lu7TrqAWuH4` — DE Zoomcamp 5.4.3 - Joins in Spark
- `pkYVOmU3MgA` — Data Structures and Algorithms in Python - Full Course for Beginners
- `wUSDVGivd-8` — Python for Data Analytics - Full Course for Beginners

## Release rule
YouTube cache misses, automated fetch errors, and rate limits are not evidence that a learner-facing video is dead. No preserved source is removed on that basis. The canonical local learner books remain the authoritative teaching fallback if an external resource is unavailable.

This audit does **not** certify real playback on the learner Android phone or learner PC. Those checks remain part of physical/runtime certification.


RC2 note: the 264-row visual/source map is unchanged from RC1, so this 2026-09-10 source audit applies without remapping.
