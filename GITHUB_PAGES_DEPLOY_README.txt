DE MENTOR v2.2 RC6 - TEACHING RC2 - GITHUB PAGES READY

Target repository:
ashishjohnexx786-dev/DE-Mentor-2026

This package is already flattened for GitHub Pages:
- index.html is at the ZIP root
- app.js, styles.css, sw.js, curriculum.js/json are at the root
- materials/ and course_packages/ keep their required relative paths

SAFEST UPDATE PATH
1. In the currently deployed Mentor, Reports -> Download full JSON backup.
2. On your PC, keep your cloned DE-Mentor-2026 repository.
3. Replace the repository working files with the CONTENTS of this RC6 ZIP.
4. In Git Bash inside the repository:
   git status
   git add -A
   git diff --cached --stat
   git commit -m "Sync DE Mentor with Teaching RC2 RC6"
   git push origin main
5. Wait for GitHub Pages deployment, then hard-refresh/reopen the site.
6. Run PHONE_SMOKE_TEST.txt.
7. Confirm Stage 00 opens the new Teaching Book and an M18 phase opens the correct Project Build Book.

Why `git add -A` here?
This is a release replacement: it stages new files, modified files AND removal of stale RC3/RC4/RC5 release artifacts.

Do not upload the outer ZIP itself as the website. Upload/commit its extracted CONTENTS.
