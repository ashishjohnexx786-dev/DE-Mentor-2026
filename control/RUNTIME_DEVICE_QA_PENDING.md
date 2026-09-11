# Runtime / device QA — explicitly pending

This RC3 recovery-complete build has synchronized static/package provenance through G07, including the verified M15 successor seal. It is still not permanently FINAL/DEPLOYED because real hosted/device/runtime certification remains pending.

Required real checks after production binary deployment:
1. Verify hosted GitHub Pages bytes against `MANIFEST_SHA256.txt` before any device claim.
2. Open the deployed build on the learner PC and Android phone/PWA.
3. Confirm Option B UI, AMOLED true black, single-column mobile lesson flow and horizontally scrollable tabs.
4. Confirm no fixed 25-minute Pomodoro exists.
5. START STUDY, background/lock the phone, return, verify real elapsed time is retained, END STUDY and confirm Reports update.
6. Confirm an existing JSON backup restores without losing valid lesson/application/evidence history.
7. Verify M15 formal lessons open on the recovered successor teaching-book pages and protected review pages; LIVE FABRIC, OFFLINE PLAN and SIMULATOR evidence remain distinct.
8. Verify M16 and M17 formal lessons open on exact rebuilt teaching-book and protected-review pages.
9. Verify all 50 M18 phases open on exact rebuilt project-book pages; review remains locked until the matching saved attempt; exact protected-review pages open only afterward.
10. Verify M19 formal lessons open on exact rebuilt teaching/review pages.
11. Test G01 remediation state: failed A -> Review A/targeted repair; B remains sealed until explicit assignment; C behaves likewise.
12. Test a clean Gate A pass: B/C are not assigned as bonus attempts.
13. Test G07: A is the only normal attempt; no numeric shortcut can award PASS; K1-K8 evidence requires human/Mentor technical review and zero unresolved critical failures.
14. Open representative rebuilt PDFs and package ZIPs from the deployed app/PWA, including M15, M16, M17, M18, M19 and G07.
15. Run real learner-PC execution for tool-dependent lessons/Gates; static fixtures never substitute for Docker/Airflow/PostgreSQL/Spark/Fabric/cloud/runtime evidence.
16. Verify PWA install/update/offline cache behavior on the actual learner phone after cache version change.
17. Recheck current external links and final assembled byte/hash parity.
