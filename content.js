/* EDIT WEBSITE CONTENT HERE. Plain text only; no HTML.
 * Empty optional strings, image paths, and arrays hide their elements.
 * Work poster points to the PDF; image points to its static preview.
 * Conference and award galleries are independent of individual entries.
 * Gallery arrays determine the photos available; no event/photo association is implied.
 * Project ongoing: [] or null hides the subsection. Add text to show it.
 */
window.SITE_CONTENT = {
  "profile": {
    "name": "Kosar Rahimi",
    "title": "Ph.D. Candidate in Chemical Engineering, University of Houston",
    "bio": "I simulate unseen biomolecular states and use those insights to guide protein design.",
    "image": "assets/images/profile/profile.jpeg",
    "imageAlt": "Portrait of Kosar Rahimi",
    "links": {
      "Email": "mailto:kosar1rahimi@gmail.com",
      "LinkedIn": "https://www.linkedin.com/in/kosar-rahimi",
      "GitHub": "https://github.com/krahimin",
      "Google Scholar": "https://scholar.google.com/citations?user=PsGSSa0AAAAJ&hl=en"
    }
  },
  "phd": [
    {
      "title": "Enhanced Sampling Methods for Biomolecular Free-Energy Landscapes",
      "dates": "Jan 2022 – Apr 2023",
      "image": "assets/images/projects/MM-OPES.png",
      "imageAlt": "MM-OPES graphical abstract",
      "bullets": [],
      "ongoing": [],
      "paper": "https://doi.org/10.1021/acs.jpcb.3c00117",
      "poster": "assets/posters/Poster-mm-opes.pdf",
      "id": "project-mm-opes"
    },
    {
      "title": "Modulation of FUS RRM Folding by the Neighboring Disordered RGG2 Region",
      "dates": "Apr 2024 – Jul 2026",
      "image": "assets/images/projects/RRM-RGG.png",
      "imageAlt": "FUS RRM–RGG2 graphical abstract",
      "bullets": [],
      "ongoing": [],
      "paper": "https://doi.org/10.1021/acs.jpcb.6c02052",
      "poster": "assets/posters/Poster_RRM-RGG.pdf",
      "id": "project-rrm-rgg"
    },
    {
      "title": "Protein–RNA Binding and Molecular Recognition",
      "dates": "Apr 2024 – Present",
      "image": "assets/images/projects/FUS-RNA.png",
      "imageAlt": "Protein–RNA graphical abstract",
      "bullets": [],
      "ongoing": [],
      "paper": "",
      "poster": "assets/posters/Poster_FUS-RNA.pdf",
      "id": "project-protein-rna"
    },
    {
      "title": "Conformational Landscapes and Design of Multidomain Proteins",
      "dates": "Jan 2023 – Present",
      "image": "assets/images/projects/multidomains.png",
      "imageAlt": "Multidomain proteins graphical abstract",
      "bullets": [],
      "ongoing": [],
      "paper": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12710803/",
      "poster": "assets/posters/Poster-multidomains.pdf",
      "id": "project-multidomain"
    },
    {
      "title": "Structural Effects of Post-Translational Modifications in Intrinsically Disordered Proteins",
      "dates": "Jul 2024 – Present",
      "image": "assets/images/projects/Myc.png",
      "imageAlt": "c-MYC project graphical abstract",
      "bullets": [],
      "ongoing": [],
      "paper": "",
      "poster": "",
      "id": "project-ptm"
    }
  ],
  "masters": {
    "title": "Bioactive Collagen-Based Hydrogels for Periodontal Regeneration",
    "dates": "Sep 2018 – Jan 2020",
    "description": "",
    "bullets": [
      "Isolated and purified bovine type I collagen using acid–pepsin solubilization and salt precipitation; verified purity and integrity by SDS-PAGE.",
      "Developed tyramine-functionalized collagen hydrogels, tuning the HRP/H₂O₂ ratio to control gelation for in situ parenteral delivery.",
      "Optimized platelet lysate–enriched hydrogels to support regenerative potential while preserving viscoelasticity and gelation kinetics."
    ],
    "image": "assets/images/projects/master.png",
    "imageAlt": "Graphical abstract of collagen-based hydrogels for periodontal regeneration",
    "paper": "https://ieeexplore.ieee.org/abstract/document/9319448",
    "poster": "",
    "conference": ""
  },
  "sideProjects": [
    {
      "title": "Protein Contact-Map Classification",
      "description": "Developed and trained a CNN to classify protein conformational states from molecular-dynamics contact maps, including preprocessing, class-weighted training, and evaluation.",
      "github": "https://github.com/krahimin/protein-contact-map-classifier"
    },
    {
      "title": "DNA Promoter Classification",
      "description": "Developed an end-to-end TensorFlow/Keras workflow using 3-mer sequence tokenization, learned embeddings, and a 1D CNN for biological sequence classification.",
      "github": "https://github.com/krahimin/dna-promoter-classification"
    }
  ],
  "skills": {
    "Computational Methods and Theory": [
      "Molecular Simulation: Molecular Dynamics (MD), Enhanced Sampling, Free Energy Calculations",
      "Machine Learning & Deep Learning: Supervised and unsupervised learning, classification, regression, dimensionality reduction, clustering, predictive modeling, Convolutional Neural Networks (CNNs), and transfer learning"
    ],
    "Software and Languages": [
      "Linux/HPC, GPU Computing, GROMACS, PLUMED, AMBER, Schrödinger Maestro, Python (NumPy, Pandas, SciPy, scikit-learn, TensorFlow/Keras, MDAnalysis), MATLAB, VMD, PyMOL, COMSOL, Tableau, ParaView, Altair DEM"
    ],
    "Experimental Skills": [
      {
        "label": "Protein purification",
        "href": "#masters-project"
      },
      {
        "label": "injectable in-situ gelling systems",
        "href": "#masters-project"
      },
      {
        "label": "hydrogel rheological characterization",
        "href": "#masters-project"
      },
      {
        "label": "gelation kinetics",
        "href": "#masters-project"
      },
      {
        "label": "UV–Vis spectroscopy (drug concentration and release)",
        "href": "#masters-project"
      },
      {
        "label": "Brookfield Shear Cell and FT4 Powder Rheometer (powder-flow characterization)",
        "href": "#bms-internship"
      }
    ],
    "frameworksExposure": "Frameworks/areas of exposure: TensorFlow/Keras; transformers, Hugging Face, and PyTorch"
  },
  "work": [
    {
      "organization": "Computational Biomolecular Science Lab (GHZ Lab)",
      "title": "Graduate Research Assistant",
      "dates": "Jan 2022 – Present",
      "overview": "Computational biophysics research on biomolecular conformational landscapes, including protein and RNA folding, multidomain proteins, intrinsically disordered regions, and protein–RNA recognition. I combine atomistic molecular dynamics, enhanced sampling and free-energy calculations with experimental data and AI-based structural models to characterize molecular mechanisms and conformational states.",
      "groupUrl": "https://ghzlab.chee.uh.edu/",
      "poster": "assets/work/phd.pdf",
      "image": "assets/work/phd-preview.png",
      "imageAlt": "Preview of Ph.D. research overview poster",
      "bullets": [],
      "institution": "University of Houston",
      "id": "phd-research-overview"
    },
    {
      "heading": "Bristol Myers Squibb Internship",
      "organization": "Bristol Myers Squibb",
      "title": "Drug Product Development Intern",
      "dates": "Jun 2025 – Aug 2025",
      "image": "assets/work/BMS.png",
      "imageAlt": "Bristol Myers Squibb internship project graphic",
      "bullets": [],
      "linkedin": "https://www.linkedin.com/posts/kosar-rahimi_pharmaindustry-earlycareer-internshipexperience-activity-7360329758439600129-jRj9?utm_source=share&utm_medium=member_desktop&rcm=ACoAABpa-k0BAGaCPnSa9HFmOJeqNo8iiRF6wwo",
      "location": "New Brunswick, NJ",
      "overview": "Collaborated with experimental and computational scientists in Drug Product Development to develop and calibrate Discrete Element Method (DEM) models for continuous pharmaceutical manufacturing, focusing on predicting powder residence-time distributions."
    }
  ],
  "degrees": [
    {
      "institution": "University of Houston",
      "image": "assets/images/education/UH.png",
      "degree": "Ph.D. in Chemical Engineering",
      "dates": "2021 – Present",
      "description": "",
      "researchTitle": "Unveiling conformational landscapes of disordered and multidomain proteins through molecular simulations",
      "researchLabel": "Dissertation"
    },
    {
      "institution": "Sharif University of Technology",
      "image": "assets/images/education/Sharif-MSc.jpg",
      "degree": "M.Sc. in Chemical Engineering",
      "dates": "2017 – 2020",
      "description": "",
      "researchTitle": "Development of a bioactive enzymatic hydrogel for periodontal regeneration",
      "researchLabel": "Thesis"
    },
    {
      "institution": "Sharif University of Technology",
      "image": "assets/images/education/Sharif-BS.jpg",
      "degree": "B.Sc. in Chemical Engineering",
      "dates": "2013 – 2017",
      "description": "",
      "researchTitle": "",
      "researchLabel": "Thesis"
    }
  ],
  "certificates": [
    {
      "title": "Free Energy Calculations for Drug Design with FEP+",
      "provider": "Schrödinger",
      "description": "Training in physics-based free-energy calculations for structure-based drug design using Schrödinger’s FEP+ platform.",
      "url": "https://badges.parchment.com/public/assertions/6OYJZrVARkeINxDWdApqvw?identity__email=krahimin@cougarnet.uh.edu&action=download",
      "linkLabel": "View Training",
      "linkedin": "https://lnkd.in/p/g7RFU35k",
      "linkedinLabel": "LinkedIn Post",
      "image": "assets/images/certificates/Schrodinger - COMPLETED Free Energy Calculations for Drug Design with FEP+ .png",
      "imageAlt": "Schrödinger FEP+ training certificate"
    },
    {
      "title": "Micro-credential in Data Science",
      "provider": "HPE Data Science Institute, University of Houston",
      "description": "Earned after successfully completing a four-course data science curriculum covering scientific programming, data visualization, data management, and machine learning.",
      "url": "https://www.credly.com/earner/earned/badge/0ea4e5d9-c4d3-4d4c-a1fc-939d1cd86d6d",
      "linkLabel": "View Credential",
      "image": "assets/images/certificates/micro-credential-in-data-science.png",
      "imageAlt": "Data Science micro-credential",
      "courses": [
        {
          "title": "212 — Scientific Programming with Python",
          "url": "",
          "relatedLinks": []
        },
        {
          "title": "251 — Data Visualization using ParaView & Tableau",
          "url": "",
          "relatedLinks": [
            {
              "label": "Tableau Portfolio",
              "url": "https://public.tableau.com/app/profile/kosar.rahimi/vizzes"
            }
          ]
        },
        {
          "title": "261 — Principles of Data Management",
          "url": "",
          "relatedLinks": []
        },
        {
          "title": "311 — Introduction to Machine Learning",
          "url": "",
          "relatedLinks": []
        }
      ]
    },
    {
      "title": "Introduction to Deep Learning",
      "provider": "University of Houston",
      "description": "Foundational training in deep-learning concepts and practical model development.",
      "url": "https://www.credly.com/badges/02257aff-e154-45e1-84d0-43d8c90b9c97/public_url",
      "linkLabel": "View Credential"
    },
    {
      "title": "Graduate-Level Machine Learning",
      "provider": "Rice University",
      "description": "Graduate-level coursework in machine learning, including supervised and unsupervised learning, regression, dimensionality reduction, clustering, and predictive modeling.",
      "url": "",
      "linkLabel": "View Credential"
    }
  ],
  "conferences": {
    "Oral Presentations": [
      {
        "year": "2025",
        "name": "ACS Fall Meeting",
        "location": "Washington, DC",
        "title": "Conformational Instability of Folded Full-Length Staphylococcal Protein A Revealed by Simulation and Experiment",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2025",
        "name": "Annual Chemical Biology Interdisciplinary Program Conference",
        "location": "Houston, TX",
        "title": "Full-Length Context Disrupts Folding of IgG-Binding Domains of Protein A",
        "note": "Invited talk",
        "poster": "",
        "url": ""
      },
      {
        "year": "2024",
        "name": "AIChE Annual Meeting",
        "location": "San Diego, CA",
        "title": "The Full-Length Protein A Challenges Both the Structure–Function Paradigm and the Protein Structure Prediction Technique AlphaFold: An Advanced Molecular Simulation Study",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2023",
        "name": "AIChE Annual Meeting",
        "location": "Orlando, FL",
        "title": "Comparison of On-the-Fly Probability Enhanced Sampling and Parallel Tempering Combined with Metadynamics for Atomistic Simulations of RNA Tetraloop Folding",
        "note": "",
        "poster": "",
        "url": ""
      }
    ],
    "Poster Presentations": [
      {
        "year": "2026",
        "name": "ACS Fall Meeting",
        "location": "Chicago, IL",
        "title": "Stabilizing Effect of Neighboring Disordered RGG Domain on the Folded State of FUS-RRM",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2026",
        "name": "ACS Fall Meeting",
        "location": "Chicago, IL",
        "title": "Accelerating the Discovery of Complex Biomolecular States with Enhanced Sampling",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2026",
        "name": "Biophysical Society Annual Meeting",
        "location": "San Francisco, CA",
        "title": "Synergistic Role of RGG2 in Modulating FUS RRM Structure and RNA Binding Revealed by Enhanced Sampling Simulations",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2025",
        "name": "AIChE Annual Meeting",
        "location": "Boston, MA",
        "title": "Simulating the Unseen: Accelerating the Discovery of Rich Biomolecular States with Enhanced Sampling",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2025",
        "name": "1st Biennial Welch Crystallization Center Symposium",
        "location": "Houston, TX",
        "title": "The Conformational Instability of Folded Full-Length Staphylococcal Protein A Revealed by Simulation and Experiment",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2025",
        "name": "Welch Conference on Chemical Research: New Horizons in Drug Discovery",
        "location": "Houston, TX",
        "title": "Failure to Fold: Emergent Disorder in Multidomain Staphylococcal Protein A",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2024",
        "name": "28th Annual Sealy Center for Structural Biology & Molecular Biophysics Symposium",
        "location": "Galveston, TX",
        "title": "Accelerating Atomistic RNA Tetraloop Folding Simulations Through Enhanced Sampling",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2024",
        "name": "5th Gulf Coast Consortia Cellular and Molecular Biophysics Conference",
        "location": "Houston, TX",
        "title": "Accelerating Atomistic RNA Folding Simulations with Enhanced Sampling",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2024",
        "name": "AIChE Annual Meeting",
        "location": "San Diego, CA",
        "title": "Unexpected Folding Instabilities in Full-Length Staphylococcal Protein A: Insights from Advanced Molecular Dynamics Simulations",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2023",
        "name": "4th Gulf Coast Consortia Cellular and Molecular Biophysics Conference",
        "location": "Houston, TX",
        "title": "The Full-Length Staphylococcal Protein A Challenges Both the Traditional Structure–Function Paradigm and the State-of-the-Art Protein Structure Prediction Technique AlphaFold: An Advanced Molecular Simulation Study",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2022",
        "name": "AIChE Annual Meeting",
        "location": "Phoenix, AZ",
        "title": "Comparison of Sampling Techniques for Atomistic RNA Folding",
        "note": "",
        "poster": "",
        "url": ""
      }
    ],
    "Short Talks": [
      {
        "year": "2025",
        "name": "6th Annual Gulf Coast Consortia Cellular and Molecular Biophysics Conference",
        "location": "Houston, TX",
        "title": "Modulation of FUS RRM Folding by Neighboring Disordered Regions",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2024",
        "name": "5th Gulf Coast Consortia Cellular and Molecular Biophysics Conference",
        "location": "Houston, TX",
        "title": "Accelerating Atomistic RNA Folding Simulations with Enhanced Sampling",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2023",
        "name": "11th Annual Texas Soft Matter Meeting",
        "location": "Houston, TX",
        "title": "Efficient Enhanced Sampling of RNA Tetraloop Folding",
        "note": "",
        "poster": "",
        "url": ""
      },
      {
        "year": "2022",
        "name": "10th Annual Texas Soft Matter Meeting",
        "location": "Austin, TX",
        "title": "Comparison of Advanced Sampling Techniques for Atomistic Scale RNA Folding",
        "note": "",
        "poster": "",
        "url": ""
      }
    ]
  },
  "awards": [
    {
      "year": "2026",
      "title": "Cullen Fellowship Travel Grant (CFTG)",
      "organization": "University of Houston",
      "institution": "",
      "description": "\"The Cullen Fellowship Travel Grant (CFTG) is a competitive fellowship program established to support graduate student travel to meetings, conferences, performances, and exhibits to showcase their research and scholarly work.\"",
      "linkedin": ""
    },
    {
      "year": "2026",
      "title": "Poster Award",
      "organization": "14th Texas Soft Matter Meeting",
      "institution": "Texas A&M University",
      "description": "",
      "linkedin": "https://www.linkedin.com/posts/kosar-rahimi_proteinrna-moleculardynamics-computationalbiophysics-activity-7495284694511529984-inzb",
      "project": "#project-protein-rna"
    },
    {
      "year": "2025",
      "title": "Second Place",
      "organization": "AI and Data Science Showcase Competition",
      "institution": "University of Houston",
      "description": "Used deep learning to study RNA folding. \"Hosted by the Department of Computer Science and the HPE Data Science Institute, the AI and Data Science Showcase recognizes outstanding young researchers who have shown a commitment to the fields of computing and data science\"",
      "linkedin": ""
    },
    {
      "year": "2025",
      "title": "Poster Award",
      "organization": "Pharmaceutical Discovery, Development and Manufacturing Division",
      "institution": "AIChE Annual Meeting",
      "description": "",
      "linkedin": "https://www.linkedin.com/posts/kosar-rahimi_aiche-pd2m-computationalbiophysics-activity-7393677244876992512-ovOX?utm_source=share&utm_medium=member_desktop&rcm=ACoAABpa-k0BAGaCPnSa9HFmOJeqNo8iiRF6wwo",
      "project": "#phd-research-overview"
    },
    {
      "year": "2025",
      "title": "Poster Award",
      "organization": "1st Biennial Welch Crystallization Center Symposium",
      "institution": "",
      "description": "",
      "linkedin": "https://www.linkedin.com/posts/kosar-rahimi_welchfoundation-ghzlab-computationalresearch-activity-7372762708045123584-q-9x?utm_source=share&utm_medium=member_desktop&rcm=ACoAABpa-k0BAGaCPnSa9HFmOJeqNo8iiRF6wwo",
      "project": "#project-multidomain",
      "date": "Sep 2025"
    },
    {
      "year": "2024",
      "title": "Poster Award",
      "organization": "28th Annual Sealy Center for Structural Biology & Molecular Biophysics Symposium",
      "institution": "",
      "description": "",
      "linkedin": "https://www.linkedin.com/posts/kosar-rahimi_research-moleculardynamics-simulation-activity-7186438570272866305-zXim",
      "project": "#project-mm-opes",
      "news": "https://www.egr.uh.edu/news/202405/phd-candidate-rahimi-wins-2nd-scsb-poster-competition"
    },
    {
      "year": "2024",
      "title": "Lecture Award",
      "organization": "Summer Graduate Student Seminar",
      "institution": "University of Houston",
      "description": "",
      "linkedin": "https://www.linkedin.com/posts/kosar-rahimi_computationalresearch-proteinfolding-ochegs-activity-7251346511584796673-UbWN?utm_source=share&utm_medium=member_desktop&rcm=ACoAABpa-k0BAGaCPnSa9HFmOJeqNo8iiRF6wwo",
      "project": "#project-multidomain"
    },
    {
      "year": "2023",
      "title": "Selected Participant",
      "organization": "Future Faculty Program",
      "institution": "University of Houston",
      "description": "",
      "linkedin": ""
    },
    {
      "year": "2023",
      "title": "Cullen Graduate Student Success Fellowship",
      "organization": "University of Houston",
      "institution": "",
      "description": "",
      "linkedin": ""
    },
    {
      "year": "2017",
      "title": "Ranked 4th among 110 students in the B.Sc. Chemical Engineering program",
      "organization": "Sharif University of Technology",
      "institution": "",
      "description": "",
      "linkedin": ""
    }
  ],
  "leadership": {
    "Leadership": [
      {
        "title": "Mental Health Chair",
        "organization": "Chemical Engineering Student Safety Team (ChESST)",
        "logo": "assets/images/outreach/chesst.png",
        "organizationUrl": "https://chesst.chee.uh.edu/",
        "dates": "Jun 2024 – Jun 2025",
        "description": "Supported graduate-student well-being by presenting mental-health resources during orientations and contributing educational content to the ChESST safety newsletter.",
        "linkedin": ""
      },
      {
        "title": "First-Year Representative",
        "organization": "Organization of Chemical Engineering Graduate Students (OChEGS)",
        "logo": "assets/images/outreach/ochegs.png",
        "organizationUrl": "https://ochegs.chee.uh.edu/",
        "dates": "Jun 2023 – Dec 2023",
        "description": "Helped welcome new graduate students and organized academic, professional, and social events, including seminars, career activities, and the department research symposium.",
        "linkedin": "https://www.linkedin.com/posts/kosar-rahimi_chemicalengineersinpharma-nextgenerationchemicalengineers-activity-7121685742300401664-yJKf?utm_source=share&utm_medium=member_desktop&rcm=ACoAABpa-k0BAGaCPnSa9HFmOJeqNo8iiRF6wwo"
      }
    ],
    "Teaching & Mentoring": [
      {
        "title": "Teaching Assistant — Chemical Engineering Practices Laboratory",
        "organization": "University of Houston",
        "dates": [
          "Aug 2023 – Dec 2023",
          "Jan 2025 – May 2025"
        ],
        "description": "Guided student teams through reactor and heat-exchanger laboratory experiments, including pre-lab preparation, experimental work, and technical reporting.",
        "linkedin": ""
      },
      {
        "title": "Teaching Assistant — Analytical Methods for Chemical Engineers",
        "organization": "University of Houston",
        "dates": "Aug 2022 – Dec 2022",
        "description": "Supported students through homework, exams, office hours, and problem-solving guidance in analytical methods.",
        "linkedin": ""
      },
      {
        "title": "Teaching Assistant — Introduction to Numerical Methods",
        "id": "role-numerical-methods",
        "organization": "Sharif University of Technology",
        "dates": "Aug 2018 – Dec 2018",
        "description": "Led MATLAB training sessions and supported students in applying numerical methods computationally.",
        "linkedin": ""
      },
      {
        "title": "Master’s Student Mentor",
        "organization": "",
        "dates": "Jun 2024 – Aug 2024",
        "description": "Mentored a master’s student on sequence analysis of intrinsically disordered proteins.",
        "linkedin": "",
        "group": "Student Mentoring"
      },
      {
        "title": "High School Student Mentor",
        "organization": "",
        "dates": "Jun 2026 – Aug 2026",
        "description": "Mentored a high school student on studying protein misfolding through computational modeling.",
        "linkedin": "",
        "group": "Student Mentoring"
      }
    ],
    "STEM Outreach": [
      {
        "title": "Molecular Dynamics Workshop Instructor",
        "organization": "Molecular Engineering Academy",
        "dates": "Jun 2026",
        "description": "Designed and delivered a hands-on molecular dynamics coding workshop for high school students, introducing the fundamentals of molecular simulation.",
        "linkedin": "https://lnkd.in/p/giA2pnzd",
        "institution": "University of Houston"
      },
      {
        "title": "PyMOL Workshop Instructor",
        "id": "role-pymol-workshop",
        "organization": "Biotechnology Academy",
        "dates": "Jun 2024",
        "description": "Prepared and taught two interactive PyMOL sessions introducing high school students to molecular visualization and protein structures.",
        "linkedin": "",
        "institution": "University of Houston"
      }
    ]
  },
  "personal": [
    {
      "title": "Marathon",
      "image": "assets/images/personal/marathon.JPG",
      "imageAlt": "Marathon photo",
      "caption": "2025 Chevron Houston Marathon — Fundraised for Children’s Assessment Center"
    },
    {
      "title": "Daf",
      "image": "assets/images/personal/Daf.png",
      "imageAlt": "Daf photo",
      "caption": "A Persian percussion instrument"
    },
    {
      "title": "Hiking",
      "image": "assets/images/personal/glacier_national_park.jpeg",
      "imageAlt": "Hiking in Glacier National Park",
      "caption": "Glacier National Park"
    }
  ],
  "conferenceGallery": [
    {
      "image": "assets/images/conferences/ACS chicago.JPG",
      "imageAlt": "ACS — Chicago",
      "caption": "ACS — Chicago"
    },
    {
      "image": "assets/images/conferences/ACS- 2025-washington .jpg",
      "imageAlt": "ACS 2025 — Washington, DC",
      "caption": "ACS 2025 — Washington, DC"
    },
    {
      "image": "assets/images/conferences/ACS- 2025-washington 2.jpg",
      "imageAlt": "ACS 2025 — Washington, DC",
      "caption": "ACS 2025 — Washington, DC"
    },
    {
      "image": "assets/images/conferences/AICHE-2024- San Diego.jpg",
      "imageAlt": "AIChE 2024 — San Diego",
      "caption": "AIChE 2024 — San Diego"
    },
    {
      "image": "assets/images/conferences/AICHE-2024- San Diego2.jpg",
      "imageAlt": "AIChE 2024 — San Diego",
      "caption": "AIChE 2024 — San Diego"
    },
    {
      "image": "assets/images/conferences/AIChE- Boston-2025.jpg",
      "imageAlt": "AIChE 2025 — Boston",
      "caption": "AIChE 2025 — Boston"
    }
  ],
  "awardGallery": [
    {
      "image": "assets/images/awards/Texas-soft matter.jpg",
      "imageAlt": "Poster Award — 14th Texas Soft Matter Meeting",
      "caption": "Poster Award — 14th Texas Soft Matter Meeting"
    },
    {
      "image": "assets/images/awards/Crystallization award.JPG",
      "imageAlt": "Poster Award — 1st Biennial Welch Crystallization Center Symposium",
      "caption": "Poster Award — 1st Biennial Welch Crystallization Center Symposium"
    },
    {
      "image": "assets/images/awards/SCSB-poster-Kosar.JPG",
      "imageAlt": "Poster Award — 28th Annual Sealy Center for Structural Biology & Molecular Biophysics Symposium",
      "caption": "Poster Award — 28th Annual Sealy Center for Structural Biology & Molecular Biophysics Symposium"
    },
    {
      "image": "assets/images/awards/Student seminar- Lakis.jpeg",
      "imageAlt": "Lecture Award — Summer Graduate Student Seminar",
      "caption": "Lecture Award — Summer Graduate Student Seminar"
    },
    {
      "image": "assets/images/awards/AI-showcase-HPE.jpeg",
      "imageAlt": "AI and Data Science Showcase Competition certificate",
      "caption": "Second Place — AI and Data Science Showcase Competition, University of Houston"
    }
  ],
  "leadershipGallery": [
    {
      "image": "assets/images/outreach/Moleculary dynamics workshop.JPG",
      "imageAlt": "Molecular dynamics workshop",
      "group": "STEM Outreach",
      "caption": "Molecular Dynamics Workshop"
    },
    {
      "image": "assets/images/outreach/Ochegs symposium.jpeg",
      "imageAlt": "OChEGS symposium",
      "group": "Leadership",
      "caption": "OChEGS Symposium"
    },
    {
      "image": "assets/images/outreach/AIche- UH booth-graduate fair.JPG",
      "imageAlt": "University of Houston booth at the AIChE 2024 Graduate Fair",
      "group": "Leadership",
      "caption": "AIChE 2024 Graduate Fair"
    }
  ],
  "certificateGallery": [
    {
      "image": "assets/images/certificates/Schrodinger - COMPLETED Free Energy Calculations for Drug Design with FEP+ .png",
      "imageAlt": "Schrödinger FEP+ training certificate",
      "caption": "Free Energy Calculations for Drug Design with FEP+"
    },
    {
      "image": "assets/images/certificates/micro-credential-in-data-science.png",
      "imageAlt": "Data Science micro-credential",
      "caption": "Micro-credential in Data Science"
    }
  ]
};
