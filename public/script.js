// script.js — frontend controller (form + result)
(function(){
  // safe parse
  function safeParse(raw){ try { return JSON.parse(raw); } catch(e){ return null; } }

  // ================= DATA (reduced, balanced sets 8-12 each) =================
  const interests = ["Artificial Intelligence","Robotics","Space Exploration","Biotechnology","Entrepreneurship","Finance","Design","Game Development","Film & Media","Healthcare / Medicine","Sustainability / Environment","Product Design"];
  const subjects = ["Mathematics","Physics","Chemistry","Biology","Computer Science","Economics","English","History","Psychology","Fine Arts","Business Studies","Political Science"];
  const personality = ["Creative","Analytical","Empathetic","Leader","Risk-Taker","Patient","Curious","Practical","Logical","Ambitious","Visionary","Disciplined"];
  const lifestyle = ["Corporate Office","Remote Work","Startup","Research Lab","Freelance","Artist Lifestyle","Teacher / Educator","Engineer / Lab Work","Designer Studio","Healthcare Service","Public Sector","Investor / Finance"];
  const hobbies = ["Coding","Gaming","Writing","Drawing","Music","Photography","Sports","Reading","Traveling","Video Editing","Crafting","Public Speaking"];

  // helper: create chips
  function createChip(text){
    const d = document.createElement('div');
    d.className = 'option';
    d.tabIndex = 0;
    d.textContent = text;
    d.setAttribute('role','checkbox');
    d.setAttribute('aria-checked','false');
    d.addEventListener('click', ()=> toggleChip(d));
    d.addEventListener('keydown', (e)=> { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleChip(d); }});
    return d;
  }
  function toggleChip(el){
    const sel = el.classList.toggle('selected');
    el.setAttribute('aria-checked', sel ? 'true' : 'false');
  }

  // populate
  function populate(id, arr){
    const container = document.getElementById(id);
    if(!container){ console.warn('Missing container', id); return; }
    container.innerHTML = '';
    arr.forEach(item => container.appendChild(createChip(item)));
  }

  // initialize if on form page
  const formEl = document.getElementById('career-form');
  if(formEl){
    populate('interests', interests);
    populate('subjects', subjects);
    populate('personality', personality);
    populate('lifestyle', lifestyle);
    populate('hobbies', hobbies);

    // collapsibles — start collapsed
    document.querySelectorAll('.collapsible').forEach(btn=>{
      const c = btn.nextElementSibling;
      if(c){ c.classList.remove('active'); c.style.maxHeight = null; }
      btn.addEventListener('click', ()=>{
        const cn = btn.nextElementSibling;
        if(!cn) return;
        const isActive = cn.classList.toggle('active');
        if(isActive){ cn.style.maxHeight = cn.scrollHeight + 'px'; btn.classList.add('open'); }
        else { cn.style.maxHeight = null; btn.classList.remove('open'); }
      });
    });

    // optionally open first 1 collapsed? keep collapsed as requested

    // submit handler
    formEl.addEventListener('submit', async (ev)=>{
      ev.preventDefault();
      const collect = id => Array.from(document.querySelectorAll(`#${id} .option.selected`)).map(x=>x.textContent.trim());
      const payload = {
        interests: collect('interests'),
        subjects: collect('subjects'),
        personality: collect('personality'),
        lifestyle: collect('lifestyle'),
        hobbies: collect('hobbies')
      };
      console.log('📦 Payload:', payload);

      try {
        const res = await fetch('http://localhost:5000/api/analyze', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(payload) });
        const json = await res.json();
        console.log('🎯 Backend:', json);
        const store = { careerPath: json.careerPath || json, matchScore: json.matchScore ?? 0, userSelections: payload };
        localStorage.setItem('careerResult', JSON.stringify(store));
        window.location.href = 'result.html';
      } catch (err) {
        console.warn('Backend unreachable — using local calculation fallback', err);
        // fallback: call local API logic if available on front (we will attempt to call local matching in front)
        const fallback = localMatch(payload);
        localStorage.setItem('careerResult', JSON.stringify({ careerPath: fallback.careerPath, matchScore: fallback.matchScore, userSelections: payload }));
        window.location.href = 'result.html';
      }
    });

    app.get('/_health', (req,res) => res.json({ ok: true }));

    // Local front fallback (simple quick match; backend stronger)
    function localMatch(payload){
      // naive: choose career with highest overlap from careersData embedded? we fallback to "Software Engineer" minimal
      return { careerPath: { careerTitle:'Software Engineer', tagline:'Build software & products', skills:['DSA','JavaScript','System Design'], roadmapImg:'/assets/roadmaps/software_engineer.png', whyFit:'You enjoy building digital products.' , courses:['CS50'], colleges:['IIT Bombay'] , nextSteps:['Learn JS','Build projects'] }, matchScore: 45 };
    }
  }

  // ============== RESULT PAGE LOGIC ==============
  const resultContainer = document.getElementById('careerResult');
  const matchBanner = document.getElementById('matchBanner');

  if(resultContainer){
    const data = safeParse(localStorage.getItem('careerResult')) || {};
    const cp = data.careerPath || {};
    const score = data.matchScore ?? 0;

    if(!cp || Object.keys(cp).length === 0){
      const sel = data.userSelections || {};
      resultContainer.innerHTML = `<div class="result-card"><h2>No career suggestion found</h2><p class="muted">Backend unreachable or no match produced.</p><h3>Your selections</h3><p><strong>Interests:</strong> ${(sel.interests||[]).join(', ') || '—'}</p><p><strong>Subjects:</strong> ${(sel.subjects||[]).join(', ') || '—'}</p></div>`;
      if(matchBanner) matchBanner.innerText = '';
    } else {
      if(matchBanner) matchBanner.innerText = score ? `Match: ${score}%` : '';
      const skillsHtml = (cp.skills||[]).length ? `<ul>${cp.skills.map(s=>`<li>${s}</li>`).join('')}</ul>` : '<p class="muted">N/A</p>';
      const coursesHtml = (cp.courses||[]).length ? `<ul>${cp.courses.map(s=>`<li>${s}</li>`).join('')}</ul>` : '<p class="muted">N/A</p>';
      const collegesHtml = (cp.colleges||[]).length ? `<ul>${cp.colleges.map(s=>`<li>${s}</li>`).join('')}</ul>` : '<p class="muted">N/A</p>';
      const nextHtml = (cp.nextSteps||[]).length ? `<ol>${cp.nextSteps.map(s=>`<li>${s}</li>`).join('')}</ol>` : '<p class="muted">N/A</p>';

      resultContainer.innerHTML = `<article class="result-card">
        <h2>${cp.careerTitle || cp.title || 'Career'}</h2>
        <p class="tagline">${cp.tagline || ''}</p>
        <section><h3>🧠 Required Skills</h3>${skillsHtml}</section>
        <section><h3>💡 Why this fits you</h3><p>${cp.whyFit || ''}</p></section>
        <section><h3>🎓 Suggested Courses</h3>${coursesHtml}</section>
        <section><h3>🏫 Top Colleges</h3>${collegesHtml}</section>
        <section><h3>🚀 Practical Next Steps</h3>${nextHtml}</section>
        <div class="toolbar">
          <button onclick="downloadResult()">💾 Save</button>
          <button onclick="shareResult()">📤 Share</button>
        </div>
      </article>`;
    }
  }

  // toolbar helpers
  window.downloadResult = function(){
    const d = localStorage.getItem('careerResult');
    if(!d) return alert('No result to save.');
    const b = new Blob([d], { type:'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'CareerNOVA_Result.json'; a.click();
  };
  window.shareResult = function(){
    const raw = safeParse(localStorage.getItem('careerResult')||'{}'); const cp = raw.careerPath || raw;
    const text = cp ? `${cp.careerTitle || 'Career'} — ${cp.tagline || ''}` : 'My CareerNOVA result';
    if(navigator.share){ navigator.share({ title:'CareerNOVA Result', text }).catch(e=>console.log(e)); } else { navigator.clipboard.writeText(text + ' — CareerNOVA'); alert('Summary copied'); }
  };

})(); // IIFE end
