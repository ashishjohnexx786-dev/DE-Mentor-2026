# Runtime / device QA — explicitly pending

This release is a static/package QA candidate, not a permanently FINAL/DEPLOYED Mentor.

Required real checks before a permanent final label:
1. Open the deployed GitHub Pages build on the learner Android phone.
2. Confirm AMOLED true black, single-column mobile lesson flow and horizontally scrollable tabs.
3. Confirm no fixed 25-minute Pomodoro exists.
4. START STUDY, background/lock the phone, return, verify real elapsed time is retained, then END STUDY and confirm Reports update.
5. Confirm an existing JSON backup restores without losing valid lesson/application evidence.
6. Open canonical M00, M03, M15 and M19 Teaching Books and their module ZIPs.
7. Confirm Review remains locked until the matching genuine lesson attempt.
8. Test G01: save a failed Gate A attempt; Review A unlocks, Gate B remains sealed; explicit assignment unlocks B; C behaves the same after B.
9. Test a clean Gate A pass: B is not assigned as a bonus exercise.
10. Test M18 P01/P02/P03/CAP one-to-one page routing against the current canonical project books.
11. Run real learner-PC execution for tool-dependent lessons/Gates and do not convert static files into runtime claims.
12. Recheck current external links and final assembled byte/hash parity.
