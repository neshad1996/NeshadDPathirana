export const profile = {
  name: "Neshad D. Pathirana",
  affiliation: "Facility for Rare Isotope Beams (FRIB), Michigan State University",
  location: "East Lansing, MI, USA",
  title: "Ph.D. Candidate • Nuclear Physics • Astrophysics • Neutrino Physics",
  subtitle: [
    "I am a Ph.D. candidate in Experimental Nuclear Physics at Michigan State University, based at the Facility for Rare Isotope Beams, and a former visiting scholar at the University of Oslo. I earned both my M.Sc. in Physics and a Graduate Certificate in Instrumentation for High Energy Physics from Michigan State University, and I received my B.Sc. (Honours) in Physics (First Class) from the University of Peradeniya.",
    "My research is centered on experimental nuclear physics and its applications to both nuclear astrophysics and neutrino physics. I use precision measurements and modern detector techniques to constrain the nuclear data needed to model how elements are synthesized in astrophysical environments and to improve predictions for neutrino–nucleus interactions relevant to laboratory and cosmic settings."
  ],
  email: "devanes1@msu.edu",


  // Files in /public
  cvUrl: "/cv.pdf",
  headshotUrl: "/images/profile.webp"
};

// Header navigation
export const nav = [
  { id: "home", label: "Home" },
  { id: "news", label: "News" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "teaching", label: "Teaching" },
  { id: "awards", label: "Awards" },
  { id: "service", label: "Service" },
  { id: "contact", label: "Contact" }
];

// Social links (icons rendered in Contact section)
// You can update URLs later here only.
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/neshad1996?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: "linkedin"
  },
  {
    label: "Google Scholar",
    href: "#",
    icon: "scholar"
  },
  {
    label: "ORCID",
    href: "#",
    icon: "orcid"
  },
  {
    label: "GitHub",
    href: "https://github.com/neshad1996",
    icon: "github"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18pC7PkZM7/?mibextid=wwXIfr",
    icon: "facebook"
  },
  {
    label: "Instagram",
    href: "#",
    icon: "instagram"
  }
];

// NEWS (edit this list in the future)
// News / Updates (LinkedIn-style posts) — curated from news.txt
// Tip: keep images in /public/images/news/ and set image: "/images/news/<file>.jpg"

export const news = [
  {
    id: "2026-01-06-prc-ce-oslo",
    date: "2026-01-06",
    title: "First first-author Ph.D. paper published in Physical Review C",
    subtitle: "Charge-Exchange Oslo Method: extracting neutron-capture and weak-interaction rates from one measurement",
    location: "East Lansing, MI, USA",
    image: "", // add later
    highlights: [
      "Published in Phys. Rev. C 113, 015801",
      "Introduces/validates the Charge-Exchange Oslo Method for indirect (n,γ) constraints",
      "Demonstrates feasibility using light-ion beam data with the S800 spectrometer and GRETINA in coincidence",
      "Establishes a pathway to extend the method to inverse kinematics (p,n+γ) with rare-isotope beams",
    ],
    links: [
      // add paper link/DOI later if you want
    ],
    tags: ["Publication", "Charge-Exchange Oslo Method", "Neutron Capture", "Nuclear Astrophysics"],
  },

  {
    id: "2025-11-10-rcnp-pandroa-campaign",
    date: "2025-11-10",
    title: "Participated in PANDROA experiment campaign at RCNP (Osaka University)",
    subtitle: "Hands-on work with large-scale experimental operations and analysis workflows",
    location: "Osaka, Japan",
    image: "", // add later
    highlights: [
      "Contributed to experiment preparation and on-site campaign activities in a large international collaboration (~50 participants)",
      "Gained hands-on experience with spectrometer operations and detector systems (as described in your post)",
      "Expanded familiarity with data/DAQ environments and analysis pipelines used by the collaboration",
      "Travel supported through the Galonsky International Travel Award",
    ],
    links: [],
    tags: ["Experiment", "RCNP", "Collaboration", "Instrumentation"],
  },

  {
    id: "2025-10-13-galonsky-award",
    date: "2025-10-13",
    title: "Awarded the Galonsky International Travel Award",
    subtitle: "Michigan State University — Department of Physics & Astronomy",
    location: "Michigan State University",
    image: "", // add later
    highlights: [
      "Recognizes and supports international travel to strengthen long-term research collaborations",
      "Enables extended visits and hands-on work with international experimental partners",
    ],
    links: [],
    tags: ["Award", "Travel", "Collaboration"],
  },

  {
    id: "2025-09-12-sigma-xi",
    date: "2025-09-12",
    title: "Elected to Sigma Xi — The Scientific Research Honor Society",
    subtitle: "Membership by nomination in recognition of research achievements and potential",
    location: "",
    image: "", // add later
    highlights: [
      "Joined an international multidisciplinary community of researchers and engineers",
      "Recognition tied to demonstrated research achievements and scholarly impact",
      "Motivation to further contribute to scientific excellence and research culture",
    ],
    links: [],
    tags: ["Honor Society", "Recognition", "Research"],
  },

  {
    id: "2025-08-19-frib-theory-alliance-summer-school",
    date: "2025-08-19",
    title: "Selected for the FRIB Theory Alliance Summer School",
    subtitle: "“Emergence of Collective Motion in Atomic Nuclei” (MSU, Aug 19–22, 2025)",
    location: "Michigan State University",
    image: "", // add later
    highlights: [
      "Opportunity to deepen nuclear theory foundations alongside experimental training",
      "Engaged with theory-focused lectures and discussions to broaden research perspective",
      "Strengthened cross-disciplinary collaboration between theory and experiment",
    ],
    links: [],
    tags: ["Summer School", "Nuclear Theory", "FRIB", "Professional Development"],
  },

  {
    id: "2025-07-25-beaver-island-school-hackathon",
    date: "2025-07-25",
    title: "Summer school & hackathon: Open Questions and Research Tools in Nuclear Astrophysics",
    subtitle: "Beaver Island, Michigan (July 21–25, 2025)",
    location: "Beaver Island, MI, USA",
    image: "", // add later
    highlights: [
      "Participated in lectures on open questions in nuclear astrophysics and related tools",
      "Collaborated in a hackathon format on real research challenges in team settings",
      "Gained hands-on experience with the ‘winnet’ astrophysical reaction network",
      "Expanded scientific network through cross-institution collaboration",
    ],
    links: [],
    tags: ["Summer School", "Hackathon", "Reaction Networks", "Nuclear Astrophysics"],
  },

  {
    id: "2025-07-01-oslo-visiting-scientist",
    date: "2025-07-01",
    title: "Completed a fully funded Visiting Scientist Scholar stay at the University of Oslo",
    subtitle: "April–July research stay supporting experiments and major Ph.D. thesis analysis",
    location: "Oslo, Norway",
    image: "", // add later
    highlights: [
      "Participated in experiments and advanced a major component of Ph.D. thesis work",
      "Strengthened collaborations with the Oslo Nuclear Research Group and colleagues",
      "Built long-term connections and broadened international research experience",
    ],
    links: [],
    tags: ["Visiting Scientist", "University of Oslo", "Collaboration", "Ph.D."],
  },

  {
    // Note: your draft shows “2024-06-08” but the post text says “Conference 2025” and “June 8–13”.
    // If your website needs strict archival matching, change date back to "2024-06-08".
    id: "2025-06-08-siren-italy",
    date: "2025-06-08",
    title: "Presented at the siREN International Conference (s-, i-, & r-process Element Nucleosynthesis)",
    subtitle: "Poster + 5-minute talk on Oslo-method analysis for 92Nb",
    location: "Giulianova, Italy",
    image: "", // add later
    highlights: [
      "Presented results from the 90Zr(α,d+γ) experiment at the Oslo Cyclotron Laboratory (SiRi + OSCAR)",
      "Applied the Oslo Method to extract NLD and γSF of 92Nb (experimental constraints for model inputs)",
      "Used results as inputs for reaction modeling (e.g., TALYS) toward constraining 91Nb(n,γ)92Nb",
      "Connected nuclear physics results to astrophysical implications for 92Nb production scenarios",
    ],
    links: [],
    tags: ["Conference", "Oslo Method", "92Nb", "Gamma Strength", "Nuclear Astrophysics"],
  },

  {
    id: "2025-04-25-phi-kappa-phi",
    date: "2025-04-25",
    title: "Invited to Phi Kappa Phi Honor Society",
    subtitle: "Recognition for sustained academic excellence at Michigan State University",
    location: "Michigan State University",
    image: "", // add later
    highlights: [
      "Invitation-only honor society recognizing top academic performance across disciplines",
      "Expanded access to professional resources, awards opportunities, and scholar networks",
    ],
    links: [],
    tags: ["Honor Society", "Academic Excellence", "MSU"],
  },

  {
    id: "2024-12-13-hep-instrumentation-certificate",
    date: "2024-12-13",
    title: "Completed Graduate Certificate in Instrumentation in High Energy Physics (GPA 4.0)",
    subtitle: "Michigan State University (TRAIN-MI program)",
    location: "Michigan State University",
    image: "", // add later
    highlights: [
      "Training in advanced sensors for particle/radiation detection and quantum devices",
      "Experience with front-end electronics, DAQ, and systems-level instrumentation design",
      "Broadened instrumentation expertise alongside nuclear physics specialization",
    ],
    links: [],
    tags: ["Certificate", "Instrumentation", "High Energy Physics", "DAQ"],
  },

  {
    id: "2024-11-03-argonne-campaign-gsf",
    date: "2024-11-03",
    title: "Participated in an experiment campaign at Argonne National Laboratory",
    subtitle: "Focused on studies related to low-energy enhancement in γ-ray strength functions",
    location: "Argonne National Laboratory, IL, USA",
    image: "", // add later
    highlights: [
      "Contributed to campaign operations (setup, coordination, and/or data-taking support as applicable)",
      "Strengthened practical experience with experimental workflows and instrumentation",
      "Built connections with collaborators working on γSF measurements and analysis",
    ],
    links: [],
    tags: ["Experiment", "Argonne", "Gamma Strength Function", "Instrumentation"],
  },

  {
    id: "2024-10-16-pprocess-workshop-budapest",
    date: "2024-10-16",
    title: "Oral presentation at the 8th p-process Workshop",
    subtitle: "Future RCNP measurements and Charge-Exchange Oslo Method developments",
    location: "Budapest, Hungary",
    image: "", // add later
    highlights: [
      "Presented planned 92Zr(3He,t+γ)92Nb work and connections to the 92Nb cosmochronometer",
      "Discussed Charge-Exchange Oslo Method for indirect constraints and validation strategy",
      "Engaged with an expert community focused on p-process nucleosynthesis",
    ],
    links: [],
    tags: ["Talk", "p-process", "92Nb", "Charge Exchange", "Workshop"],
  },

  {
    id: "2024-09-15-npa-xi-dresden",
    date: "2024-09-15",
    title: "Poster + short talk at Nuclear Physics in Astrophysics XI (NPA-XI)",
    subtitle: "Charge-Exchange Oslo Method for indirect neutron-capture constraints",
    location: "TU Dresden, Germany",
    image: "", // add later
    highlights: [
      "Presented development of the Charge-Exchange Oslo Method and promising test results",
      "Highlighted novel use of charge-exchange reactions combined with Oslo-method concepts",
      "Discussed extraction of astrophysical (n,γ) information using S800 + GRETINA coincidence data",
    ],
    links: [],
    tags: ["Conference", "Poster", "Talk", "Nuclear Astrophysics", "Oslo Method"],
  },

  {
    id: "2024-09-08-npa-school-xi-stolpen",
    date: "2024-09-08",
    title: "Attended Nuclear Physics in Astrophysics School XI",
    subtitle: "Selected among ~30 participants worldwide",
    location: "Stolpen, Germany",
    image: "", // add later
    highlights: [
      "Training across experimental nuclear physics, reactions, theory, and multi-messenger astrophysics",
      "Participated in hands-on facility visits and focused topical training days",
      "Strengthened network and broadened scientific toolkit for Ph.D. research",
    ],
    links: [],
    tags: ["Summer School", "Training", "Nuclear Astrophysics"],
  },

  {
    id: "2024-09-03-peradeniya-panelist",
    date: "2024-09-03",
    title: "Invited panelist: “Career Opportunities with a Physics Degree”",
    subtitle: "Department of Physics orientation program (University of Peradeniya)",
    location: "Sri Lanka (remote/invited)",
    image: "", // add later
    highlights: [
      "Shared perspectives on graduate school, research careers, and academic pathways",
      "Participated alongside professionals from diverse institutions and sectors",
      "Contributed as an alumnus to support students exploring physics career options",
    ],
    links: [],
    tags: ["Outreach", "Panel", "Mentoring", "University of Peradeniya"],
  },

  {
    id: "2024-08-20-msu-travel-fellowship",
    date: "2024-08-20",
    title: "Awarded MSU Graduate School Travel Fellowship",
    subtitle: "Support for presenting research at professional conferences",
    location: "Michigan State University",
    image: "", // add later
    highlights: [
      "Competitive travel support to present ongoing research at conferences",
      "Enables broader dissemination of results and growth through professional networking",
    ],
    links: [],
    tags: ["Fellowship", "Travel", "Professional Development"],
  },

  {
    id: "2024-08-15-msc-physics",
    date: "2024-08-15",
    title: "Completed M.Sc. in Physics (GPA 4.0) during Ph.D.",
    subtitle: "Michigan State University",
    location: "Michigan State University",
    image: "", // add later
    highlights: [
      "Completed graduate coursework and research credits toward the M.Sc. milestone",
      "Strengthened theoretical foundation alongside ongoing Ph.D. research progress",
    ],
    links: [],
    tags: ["Degree", "M.Sc.", "Academic Milestone"],
  },

  {
    id: "2024-07-14-ebss-argonne",
    date: "2024-07-14",
    title: "Presented at the 21st Exotic Beam Summer School (EBSS2024)",
    subtitle: "Hands-on rare-isotope beam training at Argonne National Laboratory",
    location: "Chicago / Argonne National Laboratory, IL, USA",
    image: "", // add later
    highlights: [
      "Poster presentation as part of Ph.D. training and professional development",
      "Combined lectures with lab activities using modern instrumentation",
      "Expanded exposure to rare-isotope beam science and facility-scale workflows",
    ],
    links: [],
    tags: ["Summer School", "Poster", "Rare Isotopes", "Argonne"],
  },

  {
    id: "2024-05-27-oslo-nld-gsf-workshop",
    date: "2024-05-27",
    title: "Poster presentation at the 9th Workshop on Nuclear Level Density and Gamma Strength",
    subtitle: "University of Oslo, Norway",
    location: "Oslo, Norway",
    image: "", // add later
    highlights: [
      "Presented Ph.D. work in an expert forum spanning experiment and theory",
      "Gained feedback and insights supporting ongoing analysis directions",
    ],
    links: [],
    tags: ["Poster", "NLD", "Gamma Strength", "Workshop"],
  },

  {
    id: "2024-05-10-phd-candidacy",
    date: "2024-05-10",
    title: "Advanced to Ph.D. candidacy (GPA 4.0 milestone)",
    subtitle: "Academic milestone reached early in the Ph.D. journey",
    location: "Michigan State University / FRIB",
    image: "", // add later
    highlights: [
      "Reached Ph.D. candidacy milestone with strong academic performance",
      "Acknowledged the support of advisor, committee, and research groups",
    ],
    links: [],
    tags: ["Ph.D.", "Milestone", "MSU", "FRIB"],
  },

  {
    id: "2023-11-24-frib-fellowship-graham",
    date: "2023-11-24",
    title: "Awarded FRIB Laboratory Fellowship and the Herbert T. Graham Scholarship",
    subtitle: "Recognition supporting graduate research progress and academic excellence",
    location: "Michigan State University / FRIB",
    image: "", // add later
    highlights: [
      "Received competitive funding/recognition supporting graduate training and research",
      "Strengthened support for conference travel, research execution, and professional development (as applicable)",
    ],
    links: [],
    tags: ["Fellowship", "Scholarship", "FRIB", "MSU"],
  },

  {
    id: "2023-09-01-irena-ukakuren-tokyo",
    date: "2023-09-01",
    title: "First Ph.D. poster presentation at IReNA-Ukakuren (Tokyo, Japan)",
    subtitle: "Advancing professional development in nuclear astrophysics and beyond",
    location: "Tokyo, Japan",
    image: "", // add later
    highlights: [
      "Presented early Ph.D. research results in an international setting",
      "Built new connections and received feedback supporting future work",
    ],
    links: [],
    tags: ["Poster", "IReNA", "Conference", "Nuclear Astrophysics"],
  },

  {
    id: "2023-05-21-cenam-irena",
    date: "2023-05-21",
    title: "CeNAM Frontiers Meeting + IReNA Frontiers Summer School (2023)",
    subtitle: "First conference and first summer school experience",
    location: "",
    image: "", // add later
    highlights: [
      "Participated in a major nuclear astrophysics meeting and associated training program",
      "Engaged with lectures, discussions, and networking with the research community",
    ],
    links: [],
    tags: ["Conference", "Summer School", "CeNAM", "IReNA"],
  },

  {
    id: "2023-05-16-frib-gra",
    date: "2023-05-16",
    title: "Started as a Graduate Research Assistant at FRIB",
    subtitle: "Charge-Exchange Nuclear Astrophysics group (Advisor: Prof. Remco Zegers)",
    location: "Facility for Rare Isotope Beams (FRIB), Michigan State University",
    image: "", // add later
    highlights: [
      "Began research appointment within the charge-exchange nuclear astrophysics program",
      "Focused on experimental nuclear physics methods relevant to astrophysical applications",
    ],
    links: [],
    tags: ["Position", "FRIB", "Graduate Research", "Charge Exchange"],
  },

  {
    id: "2023-05-07-bbc-documentary",
    date: "2023-05-07",
    title: "Invited for a BBC documentary interview",
    subtitle: "Interview focused on personal academic journey and achievements",
    location: "",
    image: "", // add later
    highlights: [
      "Recognized through an invitation to share accomplishments and educational pathway",
      "Expressed gratitude to schools, institutions, and mentors supporting the journey",
    ],
    links: [],
    tags: ["Media", "Interview", "Milestone"],
  },

  {
    id: "2022-08-27-started-phd-msu-frib",
    date: "2022-08-27",
    title: "Started Ph.D. in Nuclear Physics at Michigan State University / FRIB",
    subtitle: "Beginning of graduate training and research at a leading rare-isotope facility",
    location: "East Lansing, MI, USA",
    image: "", // add later
    highlights: [
      "Began Ph.D. program and research trajectory connected with FRIB’s experimental program",
      "Launched graduate research training in experimental nuclear physics and nuclear astrophysics",
    ],
    links: [],
    tags: ["Ph.D.", "MSU", "FRIB", "Academic Start"],
  },

  {
    id: "2022-08-25-bsc-top-of-batch",
    date: "2022-08-25",
    title: "Graduated B.Sc. (Honours) in Physics — top of batch with multiple awards",
    subtitle: "University of Peradeniya (Overall GPA 3.90; strong Physics/Math GPAs)",
    location: "University of Peradeniya, Sri Lanka",
    image: "", // add later
    highlights: [
      "Graduated with First Class Honours and ranked top in the graduating cohort",
      "Received multiple departmental medals/prizes and faculty-level academic recognitions",
      "Subsequently gained admission to multiple fully funded Ph.D. programs in the U.S.",
    ],
    links: [],
    tags: ["Degree", "Awards", "University of Peradeniya", "Academic Excellence"],
  },
];

// Research projects
export const projects = [
  {
    id: "oslomethod",
    title: "Experimental Extraction of Nuclear Statistical Properties",
    timeframe: "Published + Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU) • Visiting Scholar (University of Oslo)",
    image: "/images/statistical.jpg",
    tags: ["Oslo Method", "CE-Oslo Method", "NLD", "γSF"],
    summary:
      "Extracting nuclear statistical properties with the Oslo Method to provide experimental constraints and reduce uncertainties in reaction modeling.",
    bullets: [
      "Targets key statistical inputs in nuclei where experimental constraints are scarce or unavailable",
      "Performs experiments using transfer and charge-exchange (CE) reactions across multiple systems",
      "Extracts nuclear level densities (NLDs) and γ-ray strength functions (γSFs) using Oslo-method techniques",
      "Develops and applies the CE-Oslo method to extend Oslo-type extractions to charge-exchange reactions"
    ],
    links: []
  },
  {
    id: "neutron",
    title: "Indirect Constraints on Neutron-Capture Reaction Rates",
    timeframe: "Published + Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU) • Visiting Scholar (University of Oslo)",
    image: "/images/neutron.webp",
    tags: ["Hauser–Feshbach", "TALYS", "NLD", "γSF"],
    summary:
      "Constraining astrophysical (n,γ) rates by incorporating experimentally extracted statistical inputs into Hauser–Feshbach calculations.",
    bullets: [
      "Focuses on neutron-capture rates relevant to nucleosynthesis and cosmochronometry",
      "Combines experimentally extracted NLD and γSF with model systematics to reduce reaction-rate uncertainties",
      "Performs Hauser–Feshbach calculations using TALYS and evaluates the impact of nuclear-input variations"
    ],
    links: []
  },
  {
    id: "astro",
    title: "Supernova Post-Processing Nucleosynthesis Modeling",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU) • Visiting Scholar (University of Oslo)",
    image: "/images/supernova.webp",
    tags: ["NuGrid", "PPN", "WinNet", "p-process"],
    summary:
      "Simulating nucleosynthesis in core-collapse and thermonuclear supernova environments using experimentally constrained reaction rates in post-processing networks.",
    bullets: [
      "Propagates experimentally constrained neutron-capture rates into nucleosynthesis calculations",
      "Runs post-processing simulations using NuGrid (PPN) and WinNet across CCSN and SNe Ia trajectories",
      "Quantifies how nuclear-physics constraints shift predicted p-process yields and addresses key model discrepancies"
    ],
    links: []
  },
  {
    id: "mda",
    title: "Extraction of Gamow–Teller and Fermi Strengths via Charge-Exchange Reactions",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU)",
    image: "/images/charge_exchange.png",
    tags: ["Charge-Exchange", "Multipole Decomposition Analysis", "DWBA", "Gamow–Teller"],
    summary:
      "Extracting Gamow–Teller and Fermi transition strengths from charge-exchange data using multipole decomposition analysis (MDA) to reduce theoretical uncertainties.",
    bullets: [
      "Targets weak-interaction nuclear inputs relevant to neutrino physics and nuclear astrophysics",
      "Performs charge-exchange measurements and constructs angular-distribution observables",
      "Applies MDA with DWBA-based templates to isolate isovector transition components",
      "Extracts Gamow–Teller and Fermi strengths for use in neutrino–nucleus cross-section calculations"
    ],
    links: []
  },
  {
    id: "neutrino",
    title: "Indirect Constraints on Charged-Current Neutrino–Nucleus Cross Sections",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU)",
    image: "/images/neutrino.png",
    tags: ["Gamow–Teller", "Fermi", "Charged-Current", "MARLEY"],
    summary:
      "Constraining charged-current neutrino–nucleus cross sections using experimentally extracted transition strengths to improve predictions for detectors and astrophysical applications.",
    bullets: [
      "Uses experimentally extracted Gamow–Teller and Fermi strengths as key nuclear inputs",
      "Computes charged-current neutrino–nucleus cross sections (including low-momentum-transfer limits) using MARLEY",
      "Benchmarks and updates cross-section inputs for applications in neutrino detection and astrophysical modeling"
    ],
    links: []
  },
  {
    id: "lenda",
    title: "LENDA Detector Upgrade and Performance Testing",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU)",
    image: "/images/lenda.jpg",
    tags: ["Instrumentation", "Neutrons", "Scintillators"],
    summary:
      "Contributing to the LENDA upgrade through detector testing and performance characterization to improve neutron-detection capabilities for upcoming experiments.",
    bullets: [
      "Leads hands-on testing and evaluation of detector components and scintillator performance",
      "Supports commissioning and readiness for experimental campaigns at FRIB"
    ],
    links: []
  }
];


export const publications = [
  {
    title: "Solving the puzzle of the cosmochronometer 92Nb production using the Oslo method",
    venue: "TBD",
    status: "Ongoing",
    links: []
  },
  {
    title:
      "Experimental study on supernova neutrino-induced nucleosynthesis of 92Nb",
    venue: "Physical Review Letters (PRL)",
    status: "Ongoing",
    links: []
  },
  {
    title: "Charged-current neutrino-208Pb cross sections via the 208Pb(3He,t) charge-exchange reaction",
    venue: "Physical Review C (PRC)",
    status: "Ongoing",
    links: []
  },
  {
    title: "Extraction of neutron capture cross sections on 92Zr using the charge-exchange Oslo method",
    venue: "N.D. Pathirana et. al (2026)",
    status: "Published",
    links: [{ label: "Phys. Rev. C 113, 015801", href:"https://doi.org/10.1103/qdsh-ygry"}]
  },
  {
    title: "Single-nucleon transfer unveils NiCu cycle in astrophysical X-ray bursts",
    venue: "O'Shea et. al (2026)",
    status: "Submitted",
    links: [{ label: "Physical Review Letters (PRL)", href: "https://doi.org/10.21203/rs.3.rs-7660136/v1" }]
  },
  {
    title: "Determination of proton and neutron contributions to the 0+gs →2+1 excitations in 42Si and 44S using inelastic proton scattering in inverse kinematics and intermediate energy Coulomb excitation",
    venue: "L.A. Riley et al. (2025)",
    status: "Published",
    links: [{ label: "Phys. Rev. C 112, 014331", href:"https://doi.org/10.1103/b8xj-ycqk"}]
  },
  {
    title: "Construction of an Ionization Chamber to Detect Alpha and Beta Particles",
    venue: "N.D. Pathirana et. al (2021)",
    status: "Published",
    links: [{ label: "Research Congress (RESCON 2021)", href:"http://www.pgis.pdn.ac.lk/rescon2021/abstracts/PS/134.pdf"}]
  },
];

export const teaching = [
  {
    place: "Michigan State University",
    timeframe: "Aug 2022 – Dec 2024",
    items: [
      "Instructor in charge: PHY 252 — Introductory Physics Laboratory II",
      "Instructor in charge: ISP 205L — Visions of the Laboratory",
      "Tutor in charge: PHY 415 — Mathematical Modeling in Physics"
    ]
  },
  {
    place: "University of Peradeniya",
    timeframe: "Aug 2021 - Jul 2022",
    items: [
      "Instructor in charge: Nuclear Physics Laboratory ",
      "Instructor in charge: Advanced Level Physics Laboratory",
      "Tutor in charge: PH 430 — Quantum Mechanics I",
      "Tutor in charge: PH 431 — Quantum Mechanics II",
      "Tutor in charge: PH 458 — General Relativity"
    ]
  }
];

export const awards = [
  "Galonsky International Travel Award",
  "Norwegian Nuclear Research Center Scholarship",
  "FRIB Fellowships",
  "Herbert T. Graham Scholarship",
  "Graduate School Travel Fellowship",
  "Prof. Lakshman Dissanayake Gold Medal for Excellence in Physics",
  "Prof. George Dissanaike Memorial Gold Medal in Physics",
  "Dr. C.A. Hevavitharana Memorial Prize in Physics",
  "Prof. A.W. Wolfendale Prize in Physics",
  "University of Peradeniya Award for Academic Excellence",
  "Eramudugolla Dunuwila Prize in Mathematics",
  "Merit Award in SURS Symposium"
];

export const service = [
  "Galonsky International Travel Award"
];



export const contactForm = {
  endpoint: "https://formspree.io/f/mqedkpqz",
  emailTo: "devanes1@msu.edu",
  subjectPrefix: "Website message"
};
