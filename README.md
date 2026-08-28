# DE Mentor - Zero to Job-Ready Data Engineer 2026

## v2.2 RC6 - Teaching RC2 integration

This release synchronizes DE Mentor with the rebuilt **Teaching RC2** course material.

- 20 stages: M00-M19
- 264 formal lessons
- 50 M18 project/capstone phases
- 314 controlled learning/project units total
- 7 protected Gates
- Teaching RC2 learner books embedded locally
- Teaching RC2 Review / Repair material locked until a genuine attempt is saved
- M18 project phases open the matching P1/P2/P3/Capstone Build Book and matching rubric
- all 20 Teaching RC2 full module ZIPs bundled under `course_packages/modules/`
- manual START STUDY / END STUDY tracker: **no fixed 25-minute Pomodoro**
- real-clock elapsed study time survives phone locking / tab backgrounding
- Android single-column lesson hotfix retained
- themes, repair log, revision scheduling, evidence vault, job tracker, reports and JSON/CSV backups retained

### Existing progress

The local-storage key is intentionally unchanged from RC5:
`deMentorProduction2026.v2`

RC6 increments the internal state version but hydrates the existing lesson/gate/study records. Updating the site should therefore not intentionally wipe RC5 progress on the same browser/profile. Export a JSON backup before replacing a live deployment anyway.

### Teaching rule

The Mentor now says **Teaching Book** rather than treating the PDF as a thin checklist. For every formal lesson:

Teaching Book -> guided follow -> independent attempt -> locked Review/Repair -> fresh retry -> explain -> mastery.

For M18:

Project Build Book -> build/save evidence -> locked rubric/review -> repair -> defend.

### Runtime status

Static/package validation can prove that files, references, JSON, JavaScript and ZIP structures are coherent. Browser/PWA notification/background behavior and PC tool exercises still need their normal real-device check when used.
