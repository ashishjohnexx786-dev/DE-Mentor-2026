# DE Mentor — Zero to Job-Ready Data Engineer 2026

## Production RC3 — 264/7 parity rebuild

This package replaces the earlier non-deployable 230-lesson / 6-Gate candidate. The curriculum is rebuilt from the frozen production module RCs:

- 20 stages (M00–M19)
- **264 formal lessons**
- **50 M18 project/capstone phases** tracked separately as project units
- **314 controlled units total**
- **7 protected Gates** with Gate A + different fresh Gate B assets
- bundled local production Learner Books / review-check materials
- beginner flow: Learn → Follow → Genuine Attempt → Review → Fresh Retry → Explain → Master
- D+1 / D+4 / D+10 / D+30 revision scheduling
- skip/repair, evidence log, job tracker, reports, timer, JSON/CSV export and PWA support

### Important release status
Automated/static curriculum parity is the goal of this RC. It is **not course-wide FINAL** and should not be called permanently deployed until the remaining real learner-PC runtime checks and real Android smoke test pass.

### State migration
This production rebuild uses a new local-storage key. Progress from the earlier 230-lesson candidate is deliberately not auto-promoted because Stage 10+ IDs changed meaning when the production architecture was frozen. This prevents false mastery.

### Full practice packages
All 20 production module ZIPs and all 7 protected Gate ZIPs are bundled under `course_packages/`. The Mentor shows a **Full module package** button in lessons and a **Full Gate package** button in Gate mode, so datasets, starter code, guided labs, independent practice and assessment assets are available rather than only the PDFs.
