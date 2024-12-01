import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vashishta Sharma Sarabu",
  initials: "VS",
  location: "Catonsville, Maryland, USA",
  locationLink: "https://www.google.com/maps/place/Catonsville,+MD/",
  about:
    "Experienced developer currently pursuing a Master's in Data Science, passionate about building data-driven solutions and advancing AI technologies.",
  summary:
    "Experienced professional pursuing a Master’s in Data Science with expertise in PL SQL development. Passionate about deep learning, with hands-on project experience in advanced AI systems and real-time data processing. Aspiring Deep Learning Engineer, dedicated to driving innovation in AI and machine learning technologies.",
  avatarUrl: "https://avatars.githubusercontent.com/u/97048188?v=4&size=64",
  personalWebsiteUrl: "https://www.example.com",
  contact: {
    email: "sarabu.vs@gmail.com",
    tel: "+19296798798",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/SVashishta1",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/s-vashishta-ln/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Maryland Baltimore County",
      degree: "Master's in Data Science",
      start: "2023",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Tata Consultancy Services",
      link: "https://www.tcs.com",
      badges: ["Hybrid"],
      title: "SQL Developer",
      logo: ConsultlyLogo,
      start: "2021",
      end: "2023",
      description: `
        Created PL/SQL packages, procedures, and triggers to assist British Telecom (BT), UK in managing millions of data records, optimizing processing efficiency.
        Spearheaded defect resolution process improvements, implementing a structured feedback loop to reduce average resolution time by 50%.
        Enhanced database performance through index creation, eliminating full table scans and optimizing query response time by 15%.
        Collaborated cross-functionally to develop and deploy stored procedures and packages, providing critical insights into data processing.
      `,
    },
  ],
  skills: [
    "Python",
    "SQL",
    "PyTorch",
    "TensorFlow",
    "Hugging Face",
    "Gradio",
    "LangChain",
    "Scikit-learn",
    "NLTK",
    "Pandas",
    "NumPy",
    "OpenCV",
    "Git",
    "PySpark",
    "Kafka",
    "JIRA",
  ],
  mlArchitectures: ["CNN", "YOLO"],
  projects: [
    {
      title: "LLM Chatbot for Database Querying",
      techStack: [
        "Gradio",
        "LangChain",
        "Hugging Face",
        "Groq API",
        "SQLite",
        "Llama3-8b",
      ],
      description:
        "Developed and deployed an AI chatbot using Hugging Face Spaces, Gradio, and LangChain for real-time SQL query generation and natural language responses to CSV data queries.",
      link: {
        label: "github.com",
        href: "https://huggingface.co/spaces/Vashishta-S-2141/LLM_Database_Chatbot",
      },
    },
    {
      title: "Fine-tuning YOLOv8 Model",
      techStack: [
        "YOLOv8",
        "InceptionResNetV2",
        "PyTorch",
        "TensorFlow",
        "Image Classification",
        "Wildlife Dataset",
      ],
      description:
        "Fine-tuned YOLOv8 with wildlife images for species recognition.",
      link: {
        label: "github.com",
        href: "https://github.com/SVashishta1/Custom_YOLO_model.git",
      },
    },
    {
      title: "Object Detection with YOLOv8",
      techStack: [
        "YOLOv8",
        "PyTorch",
        "MPS (GPU acceleration)",
        "OpenCV",
        "NumPy",
        "Real-time Object Detection",
        "Video Processing",
      ],
      description:
        "Real-time object detection using YOLOv8 with PyTorch, OpenCV, and GPU acceleration for efficient video processing.",
      link: {
        label: "github.com",
        href: "https://github.com/SVashishta1/Object_Detection_with_YOLOv8.git",
      },
    },
    {
      title: "Real-Time Streaming with PySpark",
      techStack: [
        "PySpark",
        "Kafka",
        "Zookeeper",
        "MySQL",
        "CoinCap API",
        "Plotly",
        "Spark Streaming",
        "Real-time Data Processing",
      ],
      description:
        "A real-time cryptocurrency streaming app with PySpark, Kafka, and MySQL, visualizing live trends using Plotly.",
      link: {
        label: "github.com",
        href: "https://github.com/SVashishta1/Real_Time_Streaming_PySpark.git",
      },
    },
    {
      title: "Telecom Churn Prediction",
      techStack: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
        "Random Forest",
        "Decision Tree",
        "PCA",
      ],
      description:
        "Predicted customer churn with high accuracy using machine learning techniques.",
      link: {
        label: "github.com",
        href: "https://github.com/SVashishta1/Telecom_Churn_Prediction.git",
      },
    },
  ],
} as const;
