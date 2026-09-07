(() => {
  'use strict';
  const c = window.SITE_CONTENT;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[ch]));
  const placeholder = text => `<p class="placeholder">${esc(text)}</p>`;
  const safeUrl = url => /^(https?:\/\/|mailto:|assets\/)/i.test(url || '') ? url : '';
  const link = (label, url, cls = 'button') => safeUrl(url) ? `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>` : '';
  const links = entries => { const html = entries.map(([label, url]) => link(label, url)).join(''); return html ? `<div class="actions">${html}</div>` : ''; };
  const media = (path, alt, label = '', cls = '') => path ? `<div class="media ${cls}"><img src="${esc(path)}" alt="${esc(alt || label)}" loading="eager"></div>` : '';
  const bullets = items => items?.length ? `<ul>${items.filter(item => item.trim()).map(item => `<li>${esc(item)}</li>`).join('')}</ul>` : '';
  const gallery = (items, label, showAll = false) => {
    const available = (items || []).filter(item => item.image);
    const photos = showAll ? available : available.slice(0, 3);
    return photos.length ? `<aside class="memory-gallery ${showAll ? 'conference-gallery' : ''}" aria-label="${esc(label)}">${photos.map(item => `<div class="memory-card"${item.caption ? ` tabindex="0" aria-label="${esc(item.caption)}"` : ''}>${media(item.image, item.imageAlt || label, '', 'memory-image')}${item.caption ? `<div class="personal-overlay"><p>${esc(item.caption)}</p></div>` : ''}</div>`).join('')}</aside>` : '';
  };
  const project = (p, i) => {
    const notes = (p.bullets || []).filter(item => item.trim());
    const ongoing = (p.ongoing || []).filter(item => item.trim());
    return `<article${p.id ? ` id="${esc(p.id)}"` : ''} class="project research-project ${p.image ? '' : 'text-project'}">${p.image ? `<div class="media project-figure"><img src="${esc(p.image)}" alt="${esc(p.imageAlt || p.title)}" loading="eager"></div>` : ''}<div class="project-copy">${i === undefined ? '' : `<span class="eyebrow">Project ${String(i + 1).padStart(2, '0')}</span>`}<h4>${esc(p.title)}</h4>${p.dates ? `<p class="date">${esc(p.dates)}</p>` : ''}${p.description ? `<p>${esc(p.description)}</p>` : ''}${notes.length ? bullets(notes) : ''}${ongoing.length ? `<div class="ongoing"><h5>Ongoing Work</h5>${bullets(ongoing)}</div>` : ''}${links([['Paper', p.paper], ['Poster', p.poster], ['Conference', p.conference]])}</div></article>`;
  };
  const section = (id, number, title, body) => `<section id="${id}" class="section"><div class="section-heading"><span class="section-number">${number}</span><h2>${title}</h2></div>${body}</section>`;
  const detail = value => value ? `<p>${esc(value)}</p>` : '';
  const internalSkill = (label, href) => `<a class="skill-link" href="${esc(href)}">${esc(label)} <span aria-hidden="true">↘</span></a>`;
  const externalSkill = (label, href) => safeUrl(href) ? `<a class="skill-link" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>` : esc(label);
  const skillText = text => {
    let html = esc(text);
    const replacements = [
      ['Molecular Dynamics (MD)', '#phd-projects'], ['Enhanced Sampling', '#phd-projects'], ['Free Energy Calculations', '#phd-projects'], ['Linux/HPC', '#phd-projects'], ['GPU Computing', '#phd-projects'],
      ['GROMACS', '#phd-projects'], ['PLUMED', '#phd-projects'], ['AMBER', '#phd-projects'],
      ['Schrödinger Maestro', '#training-fep'], ['Tableau', '#training-data-science'], ['ParaView', '#training-data-science'], ['Altair DEM', '#bms-internship'], ['VMD', '#phd-projects'], ['COMSOL', '#education'], ['MATLAB', '#role-numerical-methods'], ['PyMOL', '#role-pymol-workshop'],
      ['Convolutional Neural Networks (CNNs)', 'https://github.com/krahimin/protein-contact-map-classifier'], ['classification', 'https://github.com/krahimin/dna-promoter-classification']
    ];
    const pythonIndex = html.indexOf('Python');
    if (pythonIndex >= 0) html = html.slice(0, pythonIndex) + pythonSkill + html.slice(pythonIndex + 6);
    replacements.forEach(([label, href]) => { const i=html.indexOf(label); if(i>=0) html=html.slice(0,i)+(href.startsWith('#')?internalSkill(label,href):externalSkill(label,href))+html.slice(i+label.length); });
    return html;
  };
  const pythonSkill = `<details class="skill-choice"><summary>Python <span aria-hidden="true">↘</span></summary><div>${internalSkill('Ph.D. Projects','#phd-projects')}${internalSkill('Micro-credential in Data Science','#training-data-science')}</div></details>`;
  const role = r => `<article${r.id ? ` id="${esc(r.id)}"` : ''} class="entry"><h4>${esc(r.title)}</h4>${r.organization ? `<p class="role-organization">${r.logo ? `<img class="organization-logo" src="${esc(r.logo)}" alt="" width="40" height="40">` : ''}<span>${safeUrl(r.organizationUrl) ? link(r.organization, r.organizationUrl, 'organization-link') : esc(r.organization)}</span></p>` : ''}${detail(r.institution)}${r.dates?.length ? `<p class="date">${(Array.isArray(r.dates) ? r.dates : [r.dates]).map(esc).join('<br>')}</p>` : ''}${detail(r.description)}${links([['LinkedIn Post', r.linkedin]])}</article>`;
  const roleList = entries => entries.map((r, i) => `${r.group && entries[i - 1]?.group !== r.group ? `<h4 class="mentoring-heading">${esc(r.group)}</h4>` : ''}${role(r)}`).join('');
  const awardList = [...c.awards].sort((a, b) => (Number(b.year) || 0) - (Number(a.year) || 0)).map(a => {
    const projectLink = /^#[a-zA-Z][\w-]*$/.test(a.project || '') ? `<a class="button" href="${esc(a.project)}">project <span aria-hidden="true">→</span></a>` : '';
    const buttons = link('LinkedIn Post', a.linkedin) + link('News', a.news) + projectLink;
    return `<article class="award">${a.year ? `<p class="date">${esc(a.year)}</p>` : ''}<div><h3>${esc(a.title)}</h3>${detail(a.organization)}${detail(a.institution)}${a.date ? `<p class="date">${esc(a.date)}</p>` : ''}${detail(a.description)}${buttons ? `<div class="actions">${buttons}</div>` : ''}</div></article>`;
  }).join('');
  document.querySelector('#main').innerHTML = `
    <section id="home" class="hero hero-landscape">
      <img class="hero-background" src="assets/images/profile/profile-wide2.JPG" alt="" fetchpriority="high">
      <div class="hero-copy"><p class="eyebrow">Research & beyond</p><h1>${esc(c.profile.name)}</h1><p class="hero-title">${esc(c.profile.title)}</p>${c.profile.bio ? `<p class="bio">${esc(c.profile.bio)}</p>` : `<p class="bio placeholder">A short introduction to my research, interests,<br class="desktop-break"> and the questions that inspire me.<br><span class="placeholder-note">Bio to come.</span></p>`}<div class="socials">${Object.entries(c.profile.links).map(([name, url]) => safeUrl(url) ? link(name, url, 'social-link') : `<span class="social-pending" title="Link to be added">${esc(name)}<span class="sr-only"> — link to be added</span></span>`).join('')}</div><a class="explore" href="#projects">Explore my research <span aria-hidden="true">↓</span></a></div>
    </section>
    ${section('projects', '01', 'Projects', `<div id="phd-projects" class="subsection"><h3>Ph.D. Projects</h3>${c.phd.map(project).join('')}</div><div class="subsection"><h3>Master’s Project</h3>${project(c.masters)}</div><div class="subsection"><h3>Machine Learning Projects</h3><div class="cards">${c.sideProjects.map((p,i) => `<article${i===0?' id="side-project-protein-contact"':''} class="entry side-card">${media(p.image, p.imageAlt, 'Project image to come')}<h4>${safeUrl(p.github) ? link(p.title || 'Project title to come', p.github, 'side-project-link') : esc(p.title || 'Project title to come')}</h4>${detail(p.description)}</article>`).join('')}</div></div>`)}
    ${section('work', '02', 'Work Experience', c.work.map(w => `<article${w.id ? ` id="${esc(w.id)}"` : ''}${w.organization === 'Bristol Myers Squibb' ? ' id="bms-internship"' : ''} class="project work-entry ${w.image ? '' : 'work-no-image'}">${w.image ? `<div class="work-visual">${safeUrl(w.poster) ? `<a class="poster-preview" href="${esc(w.poster)}" target="_blank" rel="noopener noreferrer" aria-label="View Research Poster (opens in a new tab)">${media(w.image, w.imageAlt || w.organization, '', 'scientific')}</a>` : media(w.image, w.imageAlt || w.organization, '', 'scientific')}</div>` : ''}<div class="work-copy"><h3>${esc(w.title)}</h3><p class="work-organization">${esc(w.organization)}${w.institution ? `<br>${esc(w.institution)}` : ''}</p>${w.location ? `<p class="work-location">${esc(w.location)}</p>` : ''}${w.dates ? `<p class="date">${esc(w.dates)}</p>` : ''}${detail(w.overview)}${w.bullets?.length ? bullets(w.bullets) : ''}${links([['GHZ Lab', w.groupUrl], ['View Research Poster', w.poster], ['LinkedIn Post', w.linkedin]])}</div></article>`).join(''))}
    ${section('education', '03', 'Education', `<div class="subsection"><h3>Degrees</h3><div class="degree-list">${c.degrees.map(d => `<article class="degree">${d.image ? `<img class="degree-image" src="${esc(d.image)}" alt="${esc(d.institution)}" width="140" height="140">` : ''}<div class="degree-copy"><h4>${esc(d.institution)}</h4><p>${esc(d.degree)}</p>${detail(d.description)}${d.researchTitle ? `<p class="research-title">${esc(d.researchLabel || 'Thesis')}: ${esc(d.researchTitle)}</p>` : ''}</div>${d.dates ? `<p class="date">${esc(d.dates)}</p>` : ''}</article>`).join('')}</div></div><div id="certificates-training" class="subsection certificates-subsection"><h3>Certificates & Training</h3><div class="training-list">${c.certificates.filter(t => t.title).map(t => `<article id="${t.title === 'Micro-credential in Data Science' ? 'training-data-science' : t.title.startsWith('Free Energy') ? 'training-fep' : ''}" class="training-entry"> <div class="training-copy"><h4>${esc(t.title)}</h4>${t.provider ? `<p class="training-provider">${esc(t.provider)}</p>` : ''}${t.date ? `<p class="date">${esc(t.date)}</p>` : ''}${detail(t.description)}${links([...(t.linkedinLabel ? [[t.linkedinLabel, t.linkedin]] : []), [t.linkLabel || 'View Credential', t.url], ...(t.relatedLinks || []).map(l => [l.label, l.url])])}${t.courses?.length ? `<ul class="training-courses">${t.courses.map(course => `<li>${safeUrl(course.url) ? link(course.title, course.url, 'course-link') : esc(course.title)}${(course.relatedLinks || []).map(l => link(l.label, l.url, 'course-related-link')).join('')}</li>`).join('')}</ul>` : ''}</div>${t.image ? `<div class="training-visual"><img src="${esc(t.image)}" alt="${esc(t.imageAlt || t.title)}" loading="lazy"></div>` : ''}</article>`).join('')}</div></div>`)}
    ${section('skills', '04', 'Skills', `<div class="skills-grid"><div><h3>Computational Methods and Theory</h3>${c.skills['Computational Methods and Theory'].map(text => `<p class="skill-line">${skillText(text)}</p>`).join('')}<p class="skill-note">${esc(c.skills.frameworksExposure)}</p></div><div><h3>Software and Languages</h3><p class="skill-line">${skillText(c.skills['Software and Languages'][0])}</p></div></div>`)}
    ${section('conferences', '05', 'Conferences', `<div class="section-with-gallery"><div class="conference-list">${Object.entries(c.conferences).map(([group, entries]) => `<div class="subsection"><h3>${esc(group)}</h3>${entries.map(e => `<article class="conference"><p class="date">${esc([e.year, e.location].filter(Boolean).join(' · '))}</p><h4>${esc(e.name)}</h4>${detail(e.title)}${e.note ? `<p class="presentation-note">${esc(e.note)}</p>` : ''}${links([['View Poster', e.poster], ['Conference', e.url]])}</article>`).join('')}</div>`).join('')}</div>${gallery(c.conferenceGallery, 'Conference memories', true)}</div>`)}
    ${section('awards', '06', 'Awards & Honors', `<div class="section-with-gallery"><div class="awards">${awardList}</div>${gallery(c.awardGallery, 'Award and recognition memories', true)}</div>`)}
    ${section('leadership', '07', 'Leadership & Outreach', `<div class="leadership-list">${Object.entries(c.leadership).map(([group, entries]) => `<div class="subsection"><h3>${esc(group)}</h3><div class="leadership-group"><div class="roles">${roleList(entries)}</div>${gallery((c.leadershipGallery || []).filter(item => item.group === group), `${group} memories`, true)}</div></div>`).join('')}</div>`)}
    ${section('beyond', '08', 'Beyond Work', `<div class="personal-grid">${c.personal.map((p, i) => `<article class="personal-card" tabindex="0" aria-labelledby="personal-title-${i}" aria-describedby="personal-caption-${i}">${media(p.image, p.imageAlt || p.title, 'Photo to come', 'personal-image')}<div class="personal-overlay"><h3 id="personal-title-${i}">${esc(p.title)}</h3><p id="personal-caption-${i}">${esc(p.caption)}</p></div></article>`).join('')}</div>`)}
  `;
  document.querySelectorAll('main img').forEach(img => {
    const loaded = () => { if (img.naturalWidth) img.closest('.media')?.classList.add('loaded'); };
    const failed = () => {
      const project = img.closest('.research-project');
      const work = img.closest('.work-entry');
      if (project) project.classList.add('text-project');
      if (work) work.classList.add('work-no-image');
      const container = img.closest('.work-visual') || img.closest('.personal-card') || img.closest('.memory-card') || img.closest('.media');
      const gallery = img.closest('.memory-gallery');
      if (container) container.remove(); else img.remove();
      if (gallery && !gallery.querySelector('img')) gallery.remove();
    };
    img.addEventListener('load', loaded);
    img.addEventListener('error', failed);
    if (img.complete) { if (img.naturalWidth) loaded(); else failed(); }
  });
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const closeMenu = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); };
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) nav.querySelectorAll('a').forEach(a => { if (a.hash === `#${entry.target.id}`) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); }); }); }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('main > section').forEach(s => observer.observe(s));
  }
})();
