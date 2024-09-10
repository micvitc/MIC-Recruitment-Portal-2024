// Current Date
export const curDay = new Date().getDay();
export const curYear = new Date().getFullYear();
export const curDate = new Date().getDate();
export const curMonth = new Date().getMonth();
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// MIC Contact Links
export const LINKS = {
  maps: "https://goo.gl/maps/V2m2Ce2Hi5yRDK9E9/",
  instagram: "https://www.instagram.com/microsoft.innovations.vitc/",
  discord: "https://discord.gg/c6EAayHHR3/",
  gmail: "mailto://micvitcc@gmail.com",
};

// MIC Department Details
export const reviews = [
  {
    id: "319b6eb5-edd3-4cc5-abfc-4f3dcb468cfb",
    name: "AIML",
    username: "Heads : Sreeya & Ameen  Co-head : Sudeesh",
    body: "Technologies enabling machines to mimic human intelligence and learn from data",
    img: "https://avatar.vercel.sh/john",
    invite: "https://google.com/",
    date: "[Insert Date]",
  },
  {
    id: "2bd84c7a-ee2a-48b7-9568-6a4b094d3618",
    name: "Web Development",
    username: "Heads : Rudresh & Gaurav",
    body: "Creating and maintaining websites, involving frontend, backend, and database management",
    img: "https://avatar.vercel.sh/jenny",
    invite: "https://google.com/",
    date: "[Insert Date]",
  },
  {
    id: "7349e360-afdf-476d-9af8-20d680067f0b",
    name: "App Development",
    username: "Heads : Asad & Raghav",
    body: "Designing and coding applications for mobile devices and computers",
    img: "https://avatar.vercel.sh/john",
    invite: "https://google.com/",
    date: "[Insert Date]",
  },
  {
    id: "bf001c37-75ba-4af0-957c-d7421a7559cf",
    name: "Competitive Programming",
    username: "Head : Aditya Co-head : Amin",
    body: "Solving algorithmic problems under time constraints to hone coding skills",
    img: "https://avatar.vercel.sh/jane",
    invite: "https://google.com/",
    date: "[Insert Date]",
  },
  {
    id: "3a11f19a-d7d7-49bf-904c-b650c69ccf1c",
    name: "Cyber Security",
    username: "Head : Dheepak",
    body: "Protecting systems, networks, and data from digital attacks and unauthorized access",
    img: "https://avatar.vercel.sh/jenny",
    invite: "https://google.com/",
    date: "[Insert Date]",
  },
  {
    id: "f65348c9-b060-4ea5-a625-33e311366dca",
    name: "UI/UX",
    username: "Heads : Ayan and Raazi  Co-head : Shreya",
    body: "Designing user interfaces and experiences for optimal usability and satisfaction",
    img: "https://avatar.vercel.sh/john",
    invite: "https://google.com/",
    date: "[Insert Date]",
  },
  {
    id: "eea6d450-ed90-4d13-8260-3693a584b3a7",
    name: "Management",
    username: "Heads : Nivedita & Monish Raj  Co-heads : Verappan and Smitha",
    body: "Planning, organizing, leading, and controlling resources to achieve organizational goals",
    img: "https://avatar.vercel.sh/jane",
    invite: "https://google.com/",
    date: "[Insert Date]",
  },
  {
    id: "460d0aab-be2c-461a-a4d3-1fc0d9a4dc59",
    name: "Design",
    username: "Heads : Arun  Co-head : Sanjay",
    body: "Crafting visual and functional elements for products, services, and experiences",
    img: "https://avatar.vercel.sh/john",
    invite: "https://google.com/",
    date: "[Insert Date]",
  },
  {
    id: "84f73c89-90be-457e-990c-e4bbcd9ee1f7",
    name: "Content",
    username: "Head : Shwetha Co-heads : Neha Francis and Prithivraj",
    body: "Creating and managing text, images, and media for various platforms and audiences",
    img: "https://avatar.vercel.sh/jane",
    invite: "https://google.com/",
    date: "[Insert Date]",
  },
  {
    id: "7c4378f0-62b7-4d96-a9af-2121a23b0f53",
    name: "Photography",
    username: "Head : Salman Farish",
    body: "Capturing images using cameras, emphasizing composition, lighting, and subject",
    img: "https://avatar.vercel.sh/jenny",
    invite: "https://google.com/",
    date: "[Insert Date]",
  },
  {
    id: "51d3bfbb-d259-426a-beac-d3d1d270652f",
    name: "Entrepreneurship",
    username: "Head : Shantanu Wani",
    body: "Creating and managing new business ventures, often involving innovation and risk-taking",
    img: "https://avatar.vercel.sh/jane",
    invite: "https://youtube.com/",
    date: "[Insert Date]",
  },
];

// Questionnaire Data
export const QuestionnaireData = [
  {
    department: "AIML",
    questions: [
      "Why are you interested in AIML",
      "Why are you interested in joining the AI/ML department of the club? What do you hope to achieve?",
      "What field of AI/ML are you interested in the most and why?",
      "What AIML frameworks/tools have you used",
      "Rate your proficiency with tensorflow/pytorch on a scale of 1-10",
      "Do you have any projects? If so give a brief summary of what they do and how you made the project",
      "According to you, what do you think is the biggest feat AI can achieve in the coming years?",
    ],
  },
  {
    department: "Web Development",
    questions: [
      "What is your level of experience with web development? Multiple Choice •	Beginner (0-1 year) •	Intermediate (1-3 years) •	Advanced (3+ years) ",
      "Which programming languages and frameworks are you most proficient in? HTML/CSS JavaScript React.js Node.js Python/Django PHP/Laravel Other (Please specify)",
      "Share a link to your portfolio or GitHub repository.",
      "Why are you interested in joining our Web Development team?",
      // "screen recording video showing the task?",
      // "Share the repo link on github?",
      // "Task 1: Interactive Flashcards (Frontend Role)\n Objective: Create an interactive flashcard application with a quiz feature.\n Requirements:\n •	Flashcard Display: Cards should pop up with questions displayed on the front.\n •	Answer Selection: Provide four options for each question. Upon clicking an option, the card should flip with an animation to reveal the correct answer on the back.\n •	Scoring System: Track and display scores (+1 for correct, +0 for incorrect). After answering, the next card should appear on click.\n •	Number of Questions: Include a total of 5 questions.\n Technologies: You may use any frontend language or framework you are comfortable with. No backend is required.\n ",
      // "Task 2: Simple To-Do App (Backend Role)\n Objective: Develop the backend for a basic to-do application.\n Requirements:\n •	CRUD Operations: Implement Create, Read, Update, and Delete functionalities.\n •	Auto-Save Feature: Notes should automatically save with a timestamp.\n •	Completion Feature: Provide the ability to mark notes as completed.\n •	Editing Functionality: Allow notes to be edited.\n Technologies: You can choose any database, backend engine, and programming language.\n Note: A frontend is not required. The focus should be on the backend and database interactions.",
      ,
    ],
  },
  {
    department: "App Development",
    questions: [
      "What is your level of experience with App development? Multiple Choice • Beginner (0-1 year) •	Intermediate (1-3 years) •	Advanced (3+ years)",
      "Which programming languages and frameworks are you most proficient in? HTML/CSS, JavaScript. Other (Please specify)",
      "Share a link to your portfolio or GitHub repository.",
      // "screen recording video showing the task?",
      // "Share the repo link on github?",
      // "Task 1: Interactive Flashcards (Frontend Role)\n Objective: Create an interactive flashcard application with a quiz feature.\n Requirements:\n •	Flashcard Display: Cards should pop up with questions displayed on the front.\n •	Answer Selection: Provide four options for each question. Upon clicking an option, the card should flip with an animation to reveal the correct answer on the back.\n •	Scoring System: Track and display scores (+1 for correct, +0 for incorrect). After answering, the next card should appear on click.\n •	Number of Questions: Include a total of 5 questions.\n Technologies: You may use any frontend language or framework you are comfortable with. No backend is required.\n ",
      // "Task 2: Simple To-Do App (Backend Role)\n Objective: Develop the backend for a basic to-do application.\n Requirements:\n •	CRUD Operations: Implement Create, Read, Update, and Delete functionalities.\n •	Auto-Save Feature: Notes should automatically save with a timestamp.\n •	Completion Feature: Provide the ability to mark notes as completed.\n •	Editing Functionality: Allow notes to be edited.\n Technologies: You can choose any database, backend engine, and programming language.\n Note: A frontend is not required. The focus should be on the backend and database interactions.",
      ,
    ],
  },
  {
    department: "Competitive Programming",
    questions: [
      "Why do you want to join this department specifically?",
      "What do you wish to learn from the club and this department?",
      "What do you wish to teach/share/contribute to this department?",
      "Have you worked on any technical projects in the past? Mention/link all the relevant ones here",
      "Enter all your relevant competitive programming web profiles here",
    ],
  },
  {
    department: "Cyber Security",
    questions: [
      "Why do you want to join cybersecurity department?",
      "Do you have any prior experience in cybersecurity (If yes share your experience)?",
      "Have you won any CTF competitions etc?",
    ],
  },
  {
    department: "UI/UX",
    questions: [
      "Tell us about your background and what led you to pursue UI/UX design.",
      "How do you stay updated with current design trends and practices?",
      "Can you walk us through your design process from research to final implementation?",
      "How do you balance user needs with business goals in your designs?",
      "Describe a challenging design problem you encountered and how you solved it.",
      "Have you ever designed something that failed or did not meet expectations? How did you handle it?",
      "How do you prioritize features or design elements when you have limited time or resources?",
      "What tools do you commonly use for UI/UX design, and why?",
      "How do you approach wireframing and prototyping?",
      "Can you describe your experience working with cross-functional teams (developers, PMs, etc.)?",
      "How do you handle feedback from stakeholders, developers, or users?",
      "Can you explain a time when you had to advocate for the user in a project?",
      "What factors do you consider when designing for accessibility?",
      "Can you walk us through one of your portfolio projects?",
      "Have you ever conducted usability testing? If so, how did you apply the feedback to your design?",
      "How do you handle tight deadlines or high-pressure environments?",
      "What excites you most about this role?",
    ],
  },
  {
    department: "Management",
    questions: [
      "Why did you choose the management dept?",
      "What are your previous experiences (mention clubs/chapters/programme representative)?",
      "Scenario Based Question - 1 \n You are the student coordinator for a major annual event hosted by the MIC. The event is scheduled to take place in two weeks, and you are responsible for overseeing all logistical aspects, including venue booking, vendor coordination, and volunteer management. Three days before the event, you receive a notification from the venue informing you that they can no longer accommodate your booking due to unforeseen circumstances. This situation leaves you with very limited time to secure a new venue, inform attendees, and reorganize the logistics. \n – What are the first steps you would take upon receiving the notification from the original venue?\n – Describe how you would communicate the situation to your team to ensure everyone is informed and aligned with the new plan.\n – How would you manage the stress and pressure of the situation to maintain a positive and productive atmosphere among your team members?\n – What strategies would you implement to ensure that attendees are informed of the venue change in a timely and professional manner?\n – Reflecting on this scenario, what contingency plans would you put in place for future events to mitigate the risk of last-minute venue cancellations?\n",
      "Scenario Based Question - 2\n You are in charge of organizing a highly anticipated event for the student community club, and your marketing efforts have been successful, generating significant interest. However, due to a miscommunication within the team, the registration forms were not closed at the intended time. As a result, the number of registrations far exceeds the capacity of the venue. The event is set to take place in a few days, and you now face the challenge of managing an overwhelming number of attendees without compromising the quality of the event or disappointing a large number of students.\n– How would you identify and address the root cause of the miscommunication that led to the over-registration? What steps would you take to prevent such issues in the future?\n– What are the immediate actions you would take to manage the situation, given that the venue cannot accommodate all registered attendees?\n– How would you prioritize the attendees, deciding who will be allowed to attend the event and who may need to be placed on a waiting list or offered an alternative?\n– If you are offering some alternative for the exceeding respondents, what would it be?\n– If turning away some attendees is absolutely unavoidable, how would you communicate this decision to them in a way that maintains the club’s reputation and minimizes disappointment?",
      "Scenario Based Question - 3\n You are assigned as a member of the discipline team for a major student event. During the event, you notice that a small group of participants is frequently distracting others. They are engaging in side conversations, using their phones excessively, and occasionally interrupting speakers or activities. The disruptive behavior seems to stem from restlessness, as these participants appear disengaged and restless. Despite their actions, they seem unaware of the impact they are having on others around them. As the event progresses, their behavior begins to affect the concentration and experience of other attendees, and it’s clear that something needs to be done to restore order and ensure the event’s success.\n – What would be your first step upon noticing the disruptive behavior?\n – How would you determine whether the restlessness and distractions are due to boredom, discomfort, or another underlying issue?\n - Imagine you're tasked with handling registrations for an upcoming event in our club, but at the same time, you're also given responsibilities by another club you're involved with. \n How would you manage your time effectively? What steps would you take in this situation?",
    ],
  },
  {
    department: "Design",
    questions: [
      "Design Inspiration: Can you describe a piece of design work that has significantly inspired you? What elements of it stood out to you the most?",
      "Design Process: Walk us through your design process for a project. How do you start, and what are the key steps you follow?",
      "Tools & Techniques: Which design software and tools are you most comfortable using? Are there any new tools you're interested in learning?",
      "Problem-Solving in Design: Describe a challenging design project you've worked on. How did you approach the problem, and what was the outcome?",
      "Feedback Handling: How do you handle criticism or feedback on your design work? Can you give an example where feedback significantly improved your project?",
      "Portfolio Piece: Share your favorite design from your portfolio. What was the project, and why are you particularly proud of this piece?",
      "Vision for MIC's Design Team: How do you see yourself contributing to the design team at MIC? What do you hope to achieve",
    ],
  },
  {
    department: "Content",
    questions: [
      "What is your approach to creating engaging and high-quality content?",
      "Can you describe a time when you had to produce content under tight deadlines? How did you manage it?",
      "How do you ensure that your content is aligned with the target audience's needs and preferences?",
      "What tools or software do you use for content creation and editing?",
      "Can you provide an example of a successful content strategy you developed or contributed to? What was the impact?",
      "How do you stay current with trends and best practices in content marketing or creation?",
      "Describe a challenging content project you worked on. What obstacles did you face, and how did you address them?",
      "How do you approach content research and fact-checking to ensure accuracy and credibility?",
      "What techniques do you use to optimize content for SEO and increase its visibility?",
      " Can you share an experience where you had to adapt your content for different platforms or formats? How did you approach it?",
      " How do you measure the effectiveness and performance of your content? What metrics do you use?",
      " What is your process for brainstorming and generating creative content ideas?",
      " How do you handle feedback and revisions on your content? Can you provide an example?",
      " How do you balance creativity with meeting specific guidelines or objectives for content projects?",
      " Can you describe a time when you collaborated with other departments or teams to produce content? What was your role, and what was the outcome?",
    ],
  },
  {
    department: "Photography",
    questions: {
      photography: [
        "Which device do you use for photography?",
        "If given a DSLR, can you use it?",
        "Why Photography?",
        "Are you part of any other clubs?",
        "Submit your previous work in a drive link with viewing access to all.",
      ],
      videography: [
        "What Software do you use for Video Editing?",
        "Are you familiar with After Effects or Logo animations?",
        "Are you familiar with Blender?",
        "Why the Video Editing department?",
        "Are you part of any other clubs?",
        "Submit your previous work in a drive link with viewing access to all.",
        "How long did the videos you submitted in the previous question take for you to edit them?",
      ],
    },
  },
  {
    department: "Entrepreneurship",
    questions: [
      "Why might you be a valuable addition to the club?",
      "Can you share any entrepreneurial experiences you've had, or ideas you've thought about?",
      "List down a few skills that you think are essential for an entrepreneur.",
      "What are your strengths and weaknesses, and how do you plan to leverage or improve them in an entrepreneurial context?",
      "Can you tell us about a time when you worked in a team? What are the difficulties you faced and how did you overcome them?",
    ],
  },
];

// Sample Admin Data
export const sampleAdminHeader = [
  {
    Header: "SrNo",
    accessor: "srno",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Reason",
    accessor: "reason",
  },
  {
    Header: "Projects",
    accessor: "projects",
  },
];
