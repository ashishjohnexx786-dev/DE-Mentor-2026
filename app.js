(async()=>{
'use strict';
const load=(src)=>new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=()=>reject(new Error('Failed to load '+src));document.head.appendChild(s)});
const fail=(e)=>{console.error(e);const box=document.createElement('div');box.style.cssText='position:fixed;inset:12px;z-index:99999;background:#111;color:#fff;border:2px solid #ff6b7a;border-radius:14px;padding:16px;overflow:auto;font:16px/1.5 system-ui';box.innerHTML='<b>Mentor update could not load.</b><br>Refresh once while online. If it still fails, export/keep your existing backup and reopen the site.<br><br><code></code>';box.querySelector('code').textContent=String(e?.message||e);document.body.appendChild(box)};
try{
  for(let i=1;i<=6;i++) await load(`curriculum_patch_chunk_${String(i).padStart(2,'0')}.js`);
  await load('curriculum_patch_loader.js');
  await window.applyFinalCurriculumPatch();
  window.DE_CURRICULUM=window.DE_MENTOR_DATA;

  const step2=document.querySelector('#sourceBtn')?.parentElement;
  if(step2) step2.innerHTML='<a class="btn primary hidden" id="mainClassBtn" target="_blank" rel="noopener">🎬 Open main class</a><a class="btn primary hidden" id="secondaryClassBtn" target="_blank" rel="noopener">🎬 Optional deep long class</a><a class="btn" id="sourceBtn" target="_blank" rel="noopener">🎥 Watch assigned visual</a><a class="btn ghost hidden" id="officialRefBtn" target="_blank" rel="noopener">📘 Current official ref</a><button class="btn ghost" id="learnerPackBtn">📘 Teaching Book</button><a class="btn ghost" id="moduleBtn" target="_blank" rel="noopener">📦 Full module</a><a class="btn ghost hidden" id="supplementBtn" target="_blank" rel="noopener">🧰 Employer translation lab</a>';

  const srcName=document.querySelector('#sourceName');
  if(srcName?.parentElement) srcName.parentElement.innerHTML='<div class="eyebrow">VISUAL TEACHER / SOURCE</div><h2 id="sourceName"></h2><p class="sourceSegment" id="sourceSegment"></p><p class="muted tiny" id="sourceRule"></p><p class="muted tiny" id="sourceStatus"></p>';

  if(!document.querySelector('#rTotalStudy')){
    const stageSection=document.querySelector('#stageBars')?.closest('section.card');
    if(stageSection){const sec=document.createElement('section');sec.className='card';sec.innerHTML='<div class="eyebrow">TRAINING PROOF</div><h2>You are measuring work, not money spent</h2><div class="stats4"><div class="stat"><b id="rTotalStudy">0h</b><span>Total focused study</span></div><div class="stat"><b id="rFormalProof">0/264</b><span>Formal lessons mastered</span></div><div class="stat"><b id="rProjectProof">0/50</b><span>Project phases mastered</span></div><div class="stat"><b id="rGateProof">0/7</b><span>Protected Gates passed</span></div></div><div class="call info" id="trainingProofText">Completion is proved by independent performance: study time + mastery + projects + Gates + evidence. Paying for a course is not a completion metric.</div><div class="actionRow"><button class="btn" id="exportTrainingProofBtn">Export training-proof CSV</button><a class="btn ghost" href="supplements/EMPLOYER_TRANSLATION_LABS_RC1.html" target="_blank" rel="noopener">Employer translation labs</a></div>';stageSection.before(sec)}
  }
  const style=document.createElement('style');style.textContent='.sourceSegment{font-weight:850;line-height:1.45;margin:8px 0;color:var(--accent2);overflow-wrap:anywhere}';document.head.appendChild(style);
  const footer=document.querySelector('footer');if(footer)footer.textContent='DE Mentor v2.7 • Final Materials Content Freeze 1 • Teaching RC2 preserved • Stage 00–19 • video-first • attempt-locked review • offline-first';
  const meta=document.querySelector('meta[name="description"]');if(meta)meta.content='DE Mentor v2.7 Final Materials Content Freeze 1: 20 stages, 264 formal lessons + 50 project phases, video-first teaching, Gates, evidence and job launch.';

  for(let i=1;i<=5;i++) await load(`app_final_chunk_${String(i).padStart(2,'0')}.js`);
  await load('app_final_loader.js');
  await window.loadFinalMentorApp();
}catch(e){fail(e)}
})();
