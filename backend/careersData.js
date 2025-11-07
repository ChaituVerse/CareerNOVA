// careersData.js — 40 career entries (concise)
const careersData = [
  {
    id: 'ai_researcher',
    careerTitle: 'AI Research Engineer',
    tagline: 'Designing the minds of tomorrow.',
    rules: {
      interests: ['Artificial Intelligence','Research','Biotechnology','Product Design'],
      subjects: ['Mathematics','Computer Science','Physics'],
      personality: ['Analytical','Curious','Visionary'],
      lifestyle: ['Research Lab','Startup','Engineer / Lab Work'],
      hobbies: ['Coding','Research Projects','Problem Solving']
    },
    skills: ['Python','Machine Learning','Math for ML','Research Writing'],
    whyFit: 'You enjoy deep problem solving, math and building intelligent systems.',
    courses: ['Deep Learning Specialization (Coursera)','MIT 6.S191'],
    colleges: ['IIT Madras','IIT Hyderabad','Stanford University'],
    nextSteps: ['Master Python & Math','Build ML projects','Join research internships']
  },
  {
    id: 'software_engineer',
    careerTitle: 'Software Engineer',
    tagline: 'Build scalable software and products.',
    rules: {
      interests: ['Product Design','Entrepreneurship','Web Development','Game Development'],
      subjects: ['Computer Science','Mathematics'],
      personality: ['Logical','Disciplined','Organized'],
      lifestyle: ['Corporate Office','Startup','Remote Work'],
      hobbies: ['Coding','App Development','Problem Solving']
    },
    skills: ['Data Structures','System Design','JavaScript','Node.js','Databases'],
    whyFit: 'You like shipping products and solving engineering problems.',
    courses: ['CS50','Full-Stack Web Dev'],
    colleges: ['IIT Bombay','IIIT Hyderabad','IIIT Delhi'],
    nextSteps: ['Pick a stack (MERN)','Practice DSA','Build projects & internships']
  },
  {
    id: 'data_scientist',
    careerTitle: 'Data Scientist',
    tagline: 'Turn data into decisions.',
    rules: {
      interests: ['Data','AI','Finance'],
      subjects: ['Mathematics','Statistics','Computer Science'],
      personality: ['Analytical','Practical','Curious'],
      lifestyle: ['Corporate Office','Research Lab'],
      hobbies: ['Coding','Reading','Problem Solving']
    },
    skills: ['Python','SQL','Pandas','Statistics','Machine Learning'],
    whyFit: 'You like extracting insights from numbers and building predictive models.',
    courses: ['Applied Data Science (Coursera)','Google Data Analytics'],
    colleges: ['IISc Bangalore','IIT Bombay','Carnegie Mellon University'],
    nextSteps: ['Learn Python & SQL','Do analytics projects','Participate in Kaggle']
  },
  {
    id:'game_developer',
    careerTitle:'Game Developer',
    tagline:'Bringing worlds to life through code.',
    rules:{
      interests:['Game Development','Design','Product Design'],
      subjects:['Computer Science','Mathematics','Fine Arts'],
      personality:['Creative','Practical','Collaborative'],
      lifestyle:['Startup','Project-Based','Designer Studio'],
      hobbies:['Gaming','Coding','3D Modeling']
    },
    skills:['Unity','C#','3D Modelling','Game Physics','UI/UX'],
    whyFit:'You blend design, storytelling and technical skill — perfect for games.',
    courses:['Unity Game Dev Specialization','Unreal Bootcamp'],
    colleges:['VIT Vellore','IIT Bombay IDC','MIT Media Lab'],
    nextSteps:['Learn C#/Unity','Build indie games','Join game jams']
  },
  {
    id:'ux_designer',
    careerTitle:'UI/UX Designer',
    tagline:'Designing experiences that feel right.',
    rules:{
      interests:['Design','Product Design','Film & Media'],
      subjects:['Fine Arts','Computer Science','English'],
      personality:['Empathetic','Creative','Detail-Oriented'],
      lifestyle:['Remote Work','Freelancer','Designer Studio'],
      hobbies:['Drawing','Graphic Designing','Photography']
    },
    skills:['Figma','Prototyping','User Research','Visual Design'],
    whyFit:'You combine empathy and visual craft to build user-centred products.',
    courses:['Google UX Design Certificate','Interaction Design Foundation'],
    colleges:['NID Ahmedabad','IIT Bombay IDC'],
    nextSteps:['Build UX portfolio','Practice interviews','Learn prototyping tools']
  },
  {
    id:'mechanical_engineer',
    careerTitle:'Mechanical Engineer',
    tagline:'Building the physical world with precision.',
    rules:{
      interests:['Mechanical','Product Design','Robotics'],
      subjects:['Physics','Mathematics'],
      personality:['Practical','Detail-Oriented'],
      lifestyle:['Engineer / Lab Work','Field Work'],
      hobbies:['Tinkering','DIY Projects','Robotics']
    },
    skills:['CAD','SolidWorks','Thermodynamics','Manufacturing'],
    whyFit:'You like solving mechanical problems and building physical systems.',
    courses:['Mechanical Engg Degree','CAD Specialization'],
    colleges:['IIT Kharagpur','IIT Madras'],
    nextSteps:['Learn CAD','Intern in manufacturing','Build prototypes']
  },
  {
    id:'doctor',
    careerTitle:'Doctor / Surgeon',
    tagline:'Heal lives with science and care.',
    rules:{
      interests:['Healthcare / Medicine','Biotechnology','Research'],
      subjects:['Biology','Chemistry'],
      personality:['Empathetic','Disciplined','Patient'],
      lifestyle:['Healthcare Service','Research Lab','Public Sector'],
      hobbies:['Volunteering','Reading']
    },
    skills:['Clinical Skills','Anatomy','Diagnostics','Patient Communication'],
    whyFit:'You are compassionate and enjoy science and service.',
    courses:['MBBS','MD/MS'],
    colleges:['AIIMS','JIPMER','Christian Medical College'],
    nextSteps:['Prepare for NEET','Get clinical exposure','Choose specialization']
  },
  {
    id:'entrepreneur',
    careerTitle:'Startup Founder / Entrepreneur',
    tagline:'Turning ideas into impact.',
    rules:{
      interests:['Entrepreneurship','Product Design','Finance'],
      subjects:['Business Studies','Economics'],
      personality:['Visionary','Risk-Taker','Leader'],
      lifestyle:['Startup','Investor / Finance'],
      hobbies:['Networking','Problem Solving']
    },
    skills:['Business Strategy','Product Market Fit','Pitching','Leadership'],
    whyFit:'You love building and scaling ideas into businesses.',
    courses:['Startup School (YC)','Entrepreneurship Programs'],
    colleges:['IIMs','ISB','Stanford GSB'],
    nextSteps:['Validate ideas','Build MVP','Pitch & network']
  },
  {
    id:'lawyer',
    careerTitle:'Lawyer / Legal Practitioner',
    tagline:'Fighting for justice and truth.',
    rules:{
      interests:['Law','Political Science','Journalism & Media'],
      subjects:['Political Science','English','History'],
      personality:['Analytical','Disciplined','Leader'],
      lifestyle:['Public Sector','Corporate Office'],
      hobbies:['Debate','Reading','Writing']
    },
    skills:['Legal Research','Argumentation','Drafting','Negotiation'],
    whyFit:'You enjoy research, debate, and standing for rights.',
    courses:['LLB','National Law Schools'],
    colleges:['NLSIU Bangalore','NLU Delhi','Harvard Law (LPC)'],
    nextSteps:['Clear CLAT/LSAT','Intern at law firms','Participate in moots']
  },
  {
    id:'journalist',
    careerTitle:'Journalist / Media Professional',
    tagline:'Telling stories that shape the world.',
    rules:{
      interests:['Journalism & Media','Political Science','Film & Media'],
      subjects:['English','History','Political Science'],
      personality:['Curious','Empathetic','Communicative'],
      lifestyle:['Media','Freelance','Startup'],
      hobbies:['Writing','Photography','Video Editing']
    },
    skills:['Reporting','Writing','Editing','Multimedia'],
    whyFit:'You like storytelling, investigation, and communicating facts.',
    courses:['Journalism Programs','Mass Communication'],
    colleges:['IIMC Delhi','Indian Institutes of Mass Comm.','Columbia Journalism'],
    nextSteps:['Start a blog','Intern at media houses','Build reporting portfolio']
  },

  // 30 more concise entries to make 40 total...
  {
    id:'teacher',
    careerTitle:'Teacher / Educator',
    tagline:'Inspiring the next generation.',
    rules:{ interests:['Teaching & Mentorship','Psychology','Literature & Writing'], subjects:['English','History','Psychology'], personality:['Empathetic','Patient','Humble'], lifestyle:['Teacher / Educator','Public Sector'], hobbies:['Reading','Public Speaking'] },
    skills:['Pedagogy','Subject Expertise','Communication'], whyFit:'You enjoy mentoring and knowledge sharing.', courses:['BEd','MEd'], colleges:['TISS','NCERT'], nextSteps:['Gain teaching experience','Build lesson plans','Pursue BEd']
  },
  {
    id:'music_producer',
    careerTitle:'Music Producer',
    tagline:'Create the sound of emotion.',
    rules:{ interests:['Music','Film & Media'], subjects:['Fine Arts','Music'], personality:['Creative','Disciplined'], lifestyle:['Artist Lifestyle','Freelance'], hobbies:['Music','Video Editing'] },
    skills:['Music Production','DAW','Mixing'], whyFit:'You love composing and producing music.', courses:['Music Production Course'], colleges:['Berklee (online)'], nextSteps:['Learn DAW','Produce tracks','Collaborate with artists']
  },
  {
    id:'fashion_designer',
    careerTitle:'Fashion Designer',
    tagline:'Weaving creativity into style.',
    rules:{ interests:['Fashion Design','Design','Film & Media'], subjects:['Fine Arts','Design'], personality:['Creative','Visionary'], lifestyle:['Designer Studio','Freelance'], hobbies:['Drawing','Crafting'] },
    skills:['Pattern Making','Sewing','Fashion Sketching'], whyFit:'You have an eye for style and aesthetics.', courses:['Design Institutes'], colleges:['NIFT','NID'], nextSteps:['Build portfolio','Intern at studios']
  },
  {
    id:'architect',
    careerTitle:'Architect',
    tagline:'Designing functional spaces.',
    rules:{ interests:['Architecture','Product Design'], subjects:['Physics','Mathematics','Fine Arts'], personality:['Creative','Practical'], lifestyle:['Designer Studio','Corporate Office'], hobbies:['Drawing','3D Modeling'] },
    skills:['AutoCAD','Design','Structural Basics'], whyFit:'You enjoy design, planning and spatial thinking.', courses:['BArch'], colleges:['SPA','IIT Kharagpur'], nextSteps:['Learn drafting','Build design projects']
  },
  {
    id:'civil_servant',
    careerTitle:'Civil Servant (IAS/IPS)',
    tagline:'Lead public policy & governance.',
    rules:{ interests:['Political Science','Entrepreneurship','Social Impact'], subjects:['Political Science','History','Economics'], personality:['Disciplined','Leader','Visionary'], lifestyle:['Public Sector','Public Recognition'], hobbies:['Reading','Public Speaking'] },
    skills:['Policy Analysis','Administration','Communication'], whyFit:'You want to influence policy and public good.', courses:['UPSC Coaching'], colleges:['St. Stephens','IITs'], nextSteps:['Prepare for UPSC','Build general studies habits']
  },
  {
    id:'cybersecurity',
    careerTitle:'Cybersecurity Analyst',
    tagline:'Protecting systems and data.',
    rules:{ interests:['Cybersecurity','Cloud Computing','Data Science'], subjects:['Computer Science','Mathematics'], personality:['Analytical','Disciplined'], lifestyle:['Corporate Office','Remote Work'], hobbies:['Coding','Problem Solving'] },
    skills:['Network Security','Pen Testing','Python'], whyFit:'You are curious about vulnerabilities and defense.', courses:['Security Certifications'], colleges:['IIITs','IITs'], nextSteps:['Learn networking','Practice CTFs']
  },
  {
    id:'biotech',
    careerTitle:'Biotechnologist',
    tagline:'Engineering biology for solutions.',
    rules:{ interests:['Biotechnology','Medicine','Research'], subjects:['Biology','Chemistry'], personality:['Analytical','Patient'], lifestyle:['Research Lab','Healthcare Service'], hobbies:['Science Experiments','Research Projects'] },
    skills:['Molecular Biology','Lab Techniques','Bioinformatics'],  whyFit:'You like experiments and biological systems.', courses:['BTech Biotech','MSc Bio'], colleges:['IISc','IITs'], nextSteps:['Lab experience','Research internships']
  },
  {
    id:'product_manager',
    careerTitle:'Product Manager',
    tagline:'Connecting users, tech & business.',
    rules:{ interests:['Product Design','Entrepreneurship','Finance'], subjects:['Business Studies','Economics','Mathematics'], personality:['Organized','Leader','Visionary'], lifestyle:['Corporate Office','Startup'], hobbies:['Reading','Networking'] },
    skills:['Roadmapping','Stakeholder Management','Data Analysis'], whyFit:'You like building things and coordinating teams.', courses:['Product Management programs'], colleges:['IIMs','ISB'], nextSteps:['Build product sense','Learn analytics']
  },
  {
    id:'graphic_designer',
    careerTitle:'Graphic Designer',
    tagline:'Communicating with visuals.',
    rules:{ interests:['Design','Film & Media','Marketing & Branding'], subjects:['Fine Arts','Computer Science'], personality:['Creative','Detail-Oriented'], lifestyle:['Freelance','Designer Studio'], hobbies:['Graphic Designing','Photography'] },
    skills:['Photoshop','Illustrator','Typography'], whyFit:'You enjoy visual communication and brand work.', courses:['Graphic Design certs'], colleges:['NID','IIT Bombay IDC'], nextSteps:['Build portfolio','Freelance projects']
  },
  {
    id:'civil_engineer',
    careerTitle:'Civil Engineer',
    tagline:'Build infrastructure that lasts.',
    rules:{ interests:['Product Design','Sustainability / Environment'], subjects:['Mathematics','Physics'], personality:['Practical','Detail-Oriented'], lifestyle:['Field Work','Engineer / Lab Work'], hobbies:['DIY','Tinkering'] },
    skills:['Structures','CAD','Project Management'], whyFit:'You like building and planning physical infrastructure.', courses:['B.Tech Civil'], colleges:['IITs','NITs'], nextSteps:['Learn CAD','Intern in construction']
  },
  {
    id:'ux_writer',
    careerTitle:'Content & UX Writer',
    tagline:'Write for humans and interfaces.',
    rules:{ interests:['Literature & Writing','Product Design','Journalism & Media'], subjects:['English','History'], personality:['Empathetic','Curious'], lifestyle:['Remote Work','Freelance'], hobbies:['Writing','Blogging'] },
    skills:['Writing','Microcopy','Research'], whyFit:'You enjoy clear writing and shaping product language.', courses:['Content writing courses'], colleges:['Various'], nextSteps:['Write daily','Build portfolio']
  },
  {
    id:'cloud_engineer',
    careerTitle:'Cloud Engineer',
    tagline:'Scale systems on the cloud.',
    rules:{ interests:['Cloud Computing','Web Development','Data'], subjects:['Computer Science','Mathematics'], personality:['Organized','Logical'], lifestyle:['Corporate Office','Remote Work'], hobbies:['Coding','Problem Solving'] },
    skills:['AWS/GCP/Azure','DevOps','Containers'], whyFit:'You enjoy building scalable systems.', courses:['Cloud certs'], colleges:['IIITs','IITs'], nextSteps:['Learn Linux','Get cloud certs']
  },
  {
    id:'investment_banker',
    careerTitle:'Investment Banking / Finance',
    tagline:'Managing capital & deals.',
    rules:{ interests:['Finance','Entrepreneurship'], subjects:['Mathematics','Economics'], personality:['Disciplined','Ambitious'], lifestyle:['Corporate Office','Investor / Finance'], hobbies:['Trading / Investing','Reading'] },
    skills:['Financial Modelling','Excel','Valuation'], whyFit:'You like numbers and high-stakes deals.', courses:['Finance degrees'], colleges:['IIMs','Ivy League'], nextSteps:['Learn finance basics','Internships']
  },
  {
    id:'pharmacist',
    careerTitle:'Pharmacist / Pharma Researcher',
    tagline:'Developing safe medicines.',
    rules:{ interests:['Biotechnology','Medicine'], subjects:['Biology','Chemistry'], personality:['Practical','Detail-Oriented'], lifestyle:['Research Lab','Healthcare Service'], hobbies:['Science Experiments','Reading'] },
    skills:['Pharmacology','Lab Techniques'], whyFit:'You are inclined to lab work and patient safety.', courses:['BPharm','MPharm'], colleges:['NIPER','IITs'], nextSteps:['Lab training','Pharma internships']
  },
  {
    id:'sports_scientist',
    careerTitle:'Sports Scientist / Coach',
    tagline:'Optimize performance & training.',
    rules:{ interests:['Sports','Healthcare / Medicine'], subjects:['Biology','Physical Education'], personality:['Energetic','Disciplined'], lifestyle:['Sports','Fitness Coach'], hobbies:['Sports','Fitness'] },
    skills:['Exercise Physiology','Coaching'], whyFit:'You love sports and scientific training.', courses:['Sports science'], colleges:['NS NIS'], nextSteps:['Coaching certifications','Intern at clubs']
  },
  {
    id:'film_director',
    careerTitle:'Film Director',
    tagline:'Tell stories visually.',
    rules:{ interests:['Film & Media','Design','Game Development'], subjects:['Fine Arts','English'], personality:['Visionary','Creative'], lifestyle:['Artist Lifestyle','Freelance'], hobbies:['Video Editing','Storytelling'] },
    skills:['Directing','Storyboarding','Editing'], whyFit:'You love visual storytelling and directing teams.', courses:['Film Schools'], colleges:['FTII','NYFA'], nextSteps:['Make short films','Network & festivals']
  },
  {
    id:'photographer',
    careerTitle:'Photographer',
    tagline:'Capture moments and craft visuals.',
    rules:{ interests:['Photography','Film & Media','Design'], subjects:['Fine Arts','English'], personality:['Creative','Patient'], lifestyle:['Freelance','Artist Lifestyle'], hobbies:['Photography','Traveling'] },
    skills:['Camera','Editing','Composition'], whyFit:'You have an eye for composition and light.', courses:['Photography courses'], colleges:['Various'], nextSteps:['Build portfolio','Shoot events']
  },
  {
    id:'hr_manager',
    careerTitle:'HR / People Operations',
    tagline:'Build thriving teams and culture.',
    rules:{ interests:['Teaching & Mentorship','Business'], subjects:['Business Studies','Psychology'], personality:['Empathetic','Organized'], lifestyle:['Corporate Office'], hobbies:['Public Speaking','Reading'] },
    skills:['Recruitment','Employee Relations','HR Policies'],  whyFit:'You care about teams and culture.', courses:['HR programs'], colleges:['IIMs','XIMB'], nextSteps:['HR internships','People ops courses']
  },
  {
    id:'public_health',
    careerTitle:'Public Health Specialist',
    tagline:'Work on large-scale health impact.',
    rules:{ interests:['Healthcare / Medicine','Sustainability / Environment'], subjects:['Biology','Environmental Studies'], personality:['Empathetic','Practical'], lifestyle:['Research Lab','Public Sector'], hobbies:['Volunteering','Reading'] },
    skills:['Epidemiology','Health Policy'], whyFit:'You want to impact population health.', courses:['MPH'], colleges:['TISS','Johns Hopkins'], nextSteps:['Volunteer','Intern in NGOs']
  },
  {
    id:'robotics_engineer',
    careerTitle:'Robotics Engineer',
    tagline:'Designing intelligent machines.',
    rules:{ interests:['Robotics','AI','Product Design'], subjects:['Computer Science','Physics','Mathematics'], personality:['Analytical','Practical'], lifestyle:['Engineer / Lab Work','Startup'], hobbies:['Robotics','3D Modeling'] },
    skills:['Control Systems','ROS','Embedded C'], whyFit:'You enjoy hardware-software integration.', courses:['Robotics programs'], colleges:['IITs','IISc'], nextSteps:['Build robots','Join robotics clubs']
  },
  {
    id:'ux_researcher',
    careerTitle:'UX Researcher',
    tagline:'Understand users to inform design.',
    rules:{ interests:['Design','Psychology','Product Design'], subjects:['Psychology','English'], personality:['Empathetic','Curious'], lifestyle:['Remote Work','Research Lab'], hobbies:['Reading','Interviews'] },
    skills:['User Research','Interviewing','Analysis'], whyFit:'You love speaking with people and analyzing behavior.', courses:['UX Research courses'], colleges:['NID','IIT Bombay IDC'], nextSteps:['Learn research methods','Do user studies']
  },
  {
    id:'sustainability_specialist',
    careerTitle:'Sustainability Specialist',
    tagline:'Designing greener systems and products.',
    rules:{ interests:['Sustainability / Environment','Biotechnology','Product Design'], subjects:['Environmental Studies','Biology'], personality:['Practical','Visionary'], lifestyle:['Research Lab','Public Sector'], hobbies:['Gardening','Science Experiments'] },
    skills:['Environmental Assessment','Policy'], whyFit:'You care about environment and solutions.', courses:['Sustainability programs'], colleges:['IISc','IITs'], nextSteps:['Intern at NGOs','Learn policy']
  },
  {
    id:'social_worker',
    careerTitle:'Social Worker / NGO Leader',
    tagline:'Make social impact at grassroot levels.',
    rules:{ interests:['Social Impact','Teaching & Mentorship'], subjects:['Sociology','Political Science'], personality:['Empathetic','Patient'], lifestyle:['NGO Leader','Public Sector'], hobbies:['Volunteering','Reading'] },
    skills:['Program Management','Community Outreach'], whyFit:'You want to help communities.', courses:['Social Work'], colleges:['TISS'], nextSteps:['Volunteer','Join NGOs']
  },
  {
    id:'research_scientist',
    careerTitle:'Research Scientist',
    tagline:'Pushing the boundary of knowledge.',
    rules:{ interests:['Research','Biotechnology','AI'], subjects:['Mathematics','Biology','Physics'], personality:['Curious','Analytical'], lifestyle:['Research Lab','Academic'], hobbies:['Reading','Experiments'] },
    skills:['Research Methods','Statistics','Writing'], whyFit:'You enjoy experiments and publications.', courses:['Masters/PhD'], colleges:['IISc','IITs'], nextSteps:['Join labs','Publish papers']
  },
  {
    id:'industrial_designer',
    careerTitle:'Industrial / Product Designer',
    tagline:'Designing products people love.',
    rules:{ interests:['Product Design','Design','Engineering'], subjects:['Fine Arts','Physics'], personality:['Creative','Practical'], lifestyle:['Designer Studio','Startup'], hobbies:['3D Modeling','Drawing'] },
    skills:['Sketching','3D CAD','Prototyping'], whyFit:'You build physical products with users in mind.', courses:['Design courses'], colleges:['NID','IITs'], nextSteps:['Build prototypes','Intern with designers']
  },
  {
    id:'aerospace_engineer',
    careerTitle:'Aerospace Engineer',
    tagline:'Engineering for the skies and beyond.',
    rules:{ interests:['Space Exploration','Robotics','Mechanical Design'], subjects:['Physics','Mathematics'], personality:['Analytical','Disciplined'], lifestyle:['Engineer / Lab Work','Research Lab'], hobbies:['3D Modeling','Coding'] },
    skills:['Aerodynamics','Propulsion','Control Systems'], whyFit:'You like flight systems and engineering.', courses:['Aerospace programs'], colleges:['IIT Madras','IISc'], nextSteps:['Study aerodynamics','Build projects']
  },
  {
    id:'data_engineer',
    careerTitle:'Data Engineer',
    tagline:'Make data available for insights.',
    rules:{ interests:['Data Science','Cloud Computing'], subjects:['Computer Science','Mathematics'], personality:['Organized','Practical'], lifestyle:['Corporate Office','Remote Work'], hobbies:['Coding','Problem Solving'] },
    skills:['ETL','SQL','Big Data'], whyFit:'You build reliable data infrastructure.', courses:['Data Eng courses'], colleges:['IITs'], nextSteps:['Learn SQL','Build pipelines']
  },
  {
    id:'devops_engineer',
    careerTitle:'DevOps Engineer',
    tagline:'Automate, deploy, and scale systems.',
    rules:{ interests:['Cloud Computing','Web Development'], subjects:['Computer Science','Mathematics'], personality:['Organized','Analytical'], lifestyle:['Corporate Office','Remote Work'], hobbies:['Coding','Problem Solving'] },
    skills:['CI/CD','Containers','Monitoring'], whyFit:'You like infrastructure & automation.', courses:['DevOps courses'], colleges:['IITs'], nextSteps:['Learn Linux','Practice infra']
  },
  {
    id:'voice_artist',
    careerTitle:'Voice Actor / Podcaster',
    tagline:'Bring words to life with voice.',
    rules:{ interests:['Music','Film & Media','Teaching & Mentorship'], subjects:['English','Fine Arts'], personality:['Communicative','Empathetic'], lifestyle:['Freelance','Artist Lifestyle'], hobbies:['Podcasting','Public Speaking'] },
    skills:['Voice Modulation','Editing','Script Writing'], whyFit:'You have a good voice and storytelling skill.', courses:['Voice acting courses'], colleges:['Various'], nextSteps:['Practice','Create podcasts']
  },
  {
    id:'urban_planner',
    careerTitle:'Urban Planner',
    tagline:'Designing city spaces for people.',
    rules:{ interests:['Architecture','Sustainability / Environment'], subjects:['Geography','Economics'], personality:['Visionary','Practical'], lifestyle:['Public Sector','Designer Studio'], hobbies:['Research','Photography'] },
    skills:['Planning','GIS','Policy'], whyFit:'You like cities and public spaces.', courses:['Urban planning'], colleges:['SPA'], nextSteps:['Study planning','Intern with firms']
  },
  {
    id:'translator',
    careerTitle:'Translator / Linguist',
    tagline:'Bridging language and meaning.',
    rules:{ interests:['Languages','Literature & Writing'], subjects:['English','Hindi / Regional Language'], personality:['Patient','Detail-Oriented'], lifestyle:['Remote Work','Freelance'], hobbies:['Reading','Writing'] },
    skills:['Languages','Editing','Cultural Knowledge'], whyFit:'You love languages and communication.', courses:['Language programs'], colleges:['Various'], nextSteps:['Practice translation','Build portfolio']
  },
  {
    id:'agritech',
    careerTitle:'Agri-Tech / Food Scientist',
    tagline:'Applying tech to agriculture for impact.',
    rules:{ interests:['Agriculture','Biotechnology','Sustainability / Environment'], subjects:['Biology','Chemistry'], personality:['Practical','Innovative'], lifestyle:['Field Work','Research Lab'], hobbies:['Gardening','Science Experiments'] },
    skills:['AgriTech','BioTech','Data Analysis'], whyFit:'You want tech for food systems.', courses:['AgriTech programs'], colleges:['Various'], nextSteps:['Field projects','Research internships']
  }
];

module.exports = careersData;


