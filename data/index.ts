interface NavItem {
  _id: number;
  title: string;
  link: string;
}
interface WorkExperienceItem {
  _id: number;
  title: string;
  subTitle: string;
  location: string;
  description: string[];
}

interface ProjectItem {
  title: string;
  des: string;
  src?: string;
  githubLink?: string;
  websiteLink?: string;
}
export const navLinks: NavItem[] = [
  {
    _id: 1001,
    title: "About",
    link: "about",
  },
  {
    _id: 1002,
    title: "Experience",
    link: "experience",
  },
  {
    _id: 1003,
    title: "Skills",
    link: "skills",
  },
  {
    _id: 1004,
    title: "Projects",
    link: "projects",
  },
  {
    _id: 1005,
    title: "Contact",
    link: "contact",
  },
];

export const workExperiences: WorkExperienceItem[] = [
  {
    _id: 4,
    title: 'Software Development Consultant',
    subTitle: 'ADSS Global - (01/2025 - Present)',
    location: 'Toronto, ON',
    description: [
      "Administered and optimized relational database systems, including PostgreSQL, MySQL, and SQL Server. Provided continuous technical support and operational guidance, ensuring database performance, data integrity, and uptime met business-critical standards.",
      "Architected and developed scalable RESTful APIs using C# and ASP.NET to support seamless integration with third-party accounting platforms. This enabled real-time synchronization of invoices and payroll data with a measured system reliability of over 99%, significantly improving financial operations for clients.",
      "Engineered PowerShell automation scripts and backend microservices to automate the bidirectional exchange of data between Sage 300-integrated ERP systems and client-facing portals. These enhancements led to a 40% reduction in manual data entry time, minimized human errors, and improved overall operational efficiency.", 
    ]
  },
  {
    _id: 3,
    title: "Software Developer Intern",
    subTitle: "Dayforce - (05/2023 - 04/2024)",
    location: "Toronto, ON",
    description: [
      "Collaborated within a cross-functional team of 10+ members to support the development of identity and access management (IAM) features, using technologies such as C#, .NET Core, SQL, Docker, and databases including MySQL and MongoDB.",
      "Contributed to the enhancement of a .NET-based microservice following the MVC architectural pattern, integrated with a React.js frontend and secured via OAuth 2.0, resulting in more scalable and secure authentication flows.",
      "Developed and maintained unit and end-to-end tests using XUnit for backend validation and Cypress.js for frontend testing, improving overall test coverage by 55% and helping catch regressions earlier in the development cycle.",
      "Automated operational tasks such as identity service deployment and stale build cleanup using PowerShell and Azure CLI, helping reduce routine manual work and decreasing support channel traffic by 60%.",
    ],
  },
  {
    _id: 2,
    title: "Junior Developer, Student Researcher ",
    subTitle: "WIMTACH- Centennial College - (10/2022 - 05/2023)",
    location: "Toronto, ON",
    description: [
      "Led the end-to-end development of a scalable eCommerce platform using .NET Core and balzor pages, creating dynamic, responsive, and user-friendly web interfaces to support product listings and user interactions.",
      "Successfully optimized server calls to improve performance by reducing response payload size and utilizing server-side pagination techniques.",
      "Developed a Content Management System (CMS) web application with a fully responsive admin dashboard using Angular and RxJS, applying best practices like code-splitting, lazy loading, and caching strategies to optimize frontend performance and maintainability.",
      "Designed and implemented over 15+ RESTful APIs, incorporating Redis caching mechanisms to enhance response times and overall system scalability for high-traffic endpoints.",
    ],
  },
  {
    _id: 1,
    title: "Software Developer",
    subTitle: "La Net Team Software Solutions - (09/2020 - 03/2022)",
    location: "Surat, India",
    description: [
      "Developed and optimized backend services for an airport management system using .NET Core and Entity Framework Core, designing RESTful APIs to streamline internal data flow and improve system reliability.",
      "Enhanced backend performance by optimizing SQL queries and integrating MySQL to handle complex data processing tasks and maintain data integrity across various modules.",
      "Built a custom dynamic calendar component for a CRM platform using React.js, CSS Grid, and Redux, resulting in a more intuitive scheduling interface and improving user interaction and efficiency by approximately 35%.",
      "Automated the deployment workflow using GitLab CI/CD, Docker, and Kubernetes, which helped reduce deployment time by 50% and improved application scalability across different environments."
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    title: "Pawsibilities ",
    des: "Implemented an iOS and Android application to connect pet owners with adopters, using React Native, Node.js and MongoDB leveraging Geolocation API and AWS S3. Built a secure backend with JWT auth and RBAC, integrated AWS Rekognition for pet image matching, Geolocation API for proximity-based search, and AWS S3 for media storage—boosting adoption match speed by 40%.",
    src: "/assets/pet-home.png",
    githubLink: "https://github.com/yashvichauhan/pawsibilities-native"
  },
  {
    title: "BingeApp",
    des: "Built a full-stack web application for movie streaming, rating, and commenting using ASP.NET Core MVC, Entity Framework Core, Microsoft SQL Server, AWS DynamoDB and Amazon S3. Designed and implemented DynamoDB tables with multiple secondary indexes enabling fast queries by genre and rating, reducing average search latency by 40%",
    src: "/assets/movie-binge2.jpg",
    githubLink: "https://github.com/yashvichauhan/binge-app"
  },
  {
    title: "Beehaz",
    des: "Built a full-stack rental management system with ReactJS frontend and Python Flask APIs, leveraging MySQL on AWS RDS for reliable data storage, and automated invoicing and email notifications via cron jobs, reducing manual tasks by 40%. Deployed Dockerized microservices on AWS EC2 with Nginx, and implemented GitLab CI/CD pipelines.",
    src: "/assets/beehaz-photo.png",
    websiteLink: "https://beehaz.com/"
  },
  {
    title: "Bicycle Theft Prediction",
    des: "Achieved 94% accuracy in predictive analysis of classifying bicycle theft statuses by developing a full stack solution using a flask API and predictive models using Random Forest and Decision Tree algorithms.Improved model performance by 18% through feature engineering, data normalization, and hyperparameter tuning on real-world Toronto Police Services open data.",
    src: "/assets/bike-theft.jpeg",
    githubLink: "https://github.com/yashvichauhan/bicycle-prediction-model",
  },
  {
    title: "RekoFlow",
    des: " Developed a serverless image processing workflow using .NET 8, AWS Lambda, Step Functions, and S3, triggered by image uploads to automate label detection and thumbnail generation. Used AWS Rekognition for label detection, DynamoDB for metadata storage, and .NET-based Lambdas to process images and store thumbnails in a separate S3 bucket to prevent recursive triggers.",
    src: "/assets/aws2.png",
    githubLink: "https://github.com/yashvichauhan/RekoFlow",
  },
];

export const skills = {
  frontend: ["HTML", "CSS", "Javascript", "Typescript", "ReactJS","Angular"],
  backend: [
    "C#",
    "ASP.NET Core",
    "Python",
    "Java Spring Boot",
    "Microservices",
    "SQL",
    "Entity Framework Core",
    "AWS",
    "Azure",
  ],
};

export const bestSkills = [
  'C#', 'ASP.NET Core', 'Microservices', 'ReactJs', 'SQL', 'Azure'
];

export const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;
