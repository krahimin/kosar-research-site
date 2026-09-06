/* EDIT YOUR WEBSITE HERE. Empty optional URLs hide their buttons.
   Image paths may point to files you add later; missing images have a graceful fallback.
   Use plain text, not HTML. Bullets accept any number of strings; [] leaves an editable placeholder.
   Set ongoing: null to remove Ongoing Work; [] displays an empty-content placeholder.
   Set image: null to omit an optional figure. Copy entries to add more items. */
window.SITE_CONTENT = {
  profile: {
    name: 'Kosar Rahimi',
    title: 'Ph.D. Candidate in Chemical Engineering, University of Houston',
    bio: '',
    image: 'assets/images/profile/kosar-profile.jpg',
    imageAlt: 'Portrait of Kosar Rahimi',
    links: { Email: '', LinkedIn: '', GitHub: '', 'Google Scholar': '' }
  },
  overview: {
    text: '',
    groupUrl: 'https://ghzlab.chee.uh.edu/',
    image: 'assets/images/projects/phd-overview.jpg',
    imageAlt: 'Ph.D. research overview',
    poster: '' // e.g. assets/posters/phd-overview.pdf; empty hides button
  },
  phd: [
    {
      title: 'Enhanced Sampling Methods for Biomolecular Free-Energy Landscapes',
      dates: 'Jan 2022 – Apr 2023',
      image: 'assets/images/projects/rna-folding.jpg', imageAlt: '',
      bullets: [], paper: '', poster: ''
    },
    {
      title: 'Protein–RNA Binding and Molecular Recognition',
      dates: 'Apr 2024 – Present',
      image: 'assets/images/projects/protein-rna.jpg', imageAlt: '',
      bullets: [], ongoing: [], paper: '', poster: ''
    },
    {
      title: 'Conformational Landscapes and Design of Multidomain Proteins',
      dates: 'Jan 2023 – Present',
      image: 'assets/images/projects/multidomain-protein.jpg', imageAlt: '',
      bullets: [], ongoing: [], paper: '', poster: ''
    },
    {
      title: 'Structural Effects of Post-Translational Modifications in Intrinsically Disordered Proteins',
      dates: 'Jul 2024 – Present',
      image: null, imageAlt: '', bullets: [], ongoing: [], paper: '', poster: ''
    }
  ],
  masters: {
    title: 'Bioactive Collagen-Based Hydrogels for Periodontal Regeneration',
    description: '', bullets: [], image: null, imageAlt: '', paper: '', poster: '', conference: ''
  },
  sideProjects: [{ title: '', description: '', github: '', image: null, imageAlt: '' }],
  work: [{ organization: 'Bristol Myers Squibb', title: 'Drug Product Development Intern', dates: '', image: 'assets/images/work/bms.jpg', imageAlt: '', bullets: [] }],
  degrees: [
    { institution: 'University of Houston', degree: 'Ph.D. in Chemical Engineering', dates: '', description: '', researchTitle: '' },
    { institution: 'Sharif University of Technology', degree: 'M.Sc. in Chemical Engineering', dates: '', description: '', researchTitle: '' },
    { institution: 'Sharif University of Technology', degree: 'B.Sc. in Chemical Engineering', dates: '', description: '' }
  ],
  // Replace this blank entry with your confirmed certificates/training; [] removes entries.
  certificates: [{ title: '', provider: '', date: '', description: '', url: '' }],
  conferences: {
    'Oral Presentations': [{ name: '', year: '', location: '', title: '', photo: null, thumbnail: null, imageAlt: '', poster: '', url: '' }],
    'Poster Presentations': [{ name: '', year: '', location: '', title: '', photo: null, thumbnail: null, imageAlt: '', poster: '', url: '' }],
    'Short Talks': [{ name: '', year: '', location: '', title: '', photo: null, thumbnail: null, imageAlt: '', poster: '', url: '' }]
  },
  // Awards are automatically sorted newest first by numeric year. Unknown years appear last.
  awards: [{ title: '', organization: '', year: '', description: '', image: null, imageAlt: '' }],
  leadership: {
    'Leadership': [
      { title: 'Mental Health Chair', organization: 'ChESST', dates: '', description: '', image: null },
      { title: 'First-Year Representative', organization: 'OChEGS', dates: '', description: '', image: null }
    ],
    'Teaching & Mentoring': [
      { title: 'Teaching Assistant — Chemical Engineering Practices', organization: 'University of Houston', dates: '', description: '', image: null },
      { title: 'Teaching Assistant — Analytical Methods', organization: 'University of Houston', dates: '', description: '', image: null },
      { title: 'Teaching Assistant — Numerical Methods', organization: 'Sharif University of Technology', dates: '', description: '', image: null },
      { title: 'Student mentoring', organization: '', dates: '', description: '', image: null }
    ],
    'STEM Outreach': [
      { title: 'Molecular Dynamics Workshop Instructor', organization: 'Molecular Engineering Academy', dates: '', description: '', image: null },
      { title: 'PyMOL Workshop Instructor', organization: 'Biotechnology Academy', dates: '', description: '', image: null }
    ]
  },
  personal: [
    { title: 'Running / Marathon', image: 'assets/images/personal/marathon.jpg', imageAlt: '', caption: '' },
    { title: 'Daf', image: 'assets/images/personal/daf.jpg', imageAlt: '', caption: '' },
    { title: 'Hiking', image: 'assets/images/personal/hiking.jpg', imageAlt: '', caption: '' }
  ]
};
