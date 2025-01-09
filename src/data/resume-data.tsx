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
    "Experienced professional pursuing a Master’s in Data Science with expertise in PL/SQL, Python development. Passionate about deep learning, with hands-on project experience in advanced AI systems and real-time data processing. Aspiring Deep Learning Engineer, dedicated to driving innovation in AI and machine learning technologies.",
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
At Tata Consultancy Services, optimized database performance by developing and
enhancing 50+ PL/SQL packages and triggers, improving query efficiency by 15% and 
reducing processing time by 20%. Automated data validation processes using Python, 
cutting manual effort by 30% and detecting 95% of inconsistencies.
Designed and implemented scalable AWS solutions, including EC2 and API Gateway, 
to manage a 40% increase in traffic while maintaining 99.9% uptime. 
Processed and visualized over 1M records with Python, generating actionable insights to support cross-functional decision-making. `,
    },
    {
      company: "Tata Consultancy Services",
      link: "https://www.tcs.com",
      badges: ["Hybrid"],
      title: "Data Science Intern",
      logo: ConsultlyLogo,
      start: "2021",
      end: "2021",
      description: `
As a Data Science Intern, contributed to developing PL/SQL packages and Python scripts, 
enhancing workflows and improving efficiency by 20%. Established cloud-based solutions 
using AWS EC2 and S3, ensuring 98% data accessibility. Prepared dashboards with Python 
visualization libraries, analyzing 500K+ records and delivering actionable insights to 
business stakeholders.`,
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
    "SpaCy"
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
        label: "huggingface.com",
        href: "https://huggingface.co/spaces/Vashishta-S-2141/LLM_Database_Chatbot",
      },
    },
    
      {
        title: "Polyp Segmentation Using U-Net",
        techStack: [
          "TensorFlow",
          "Keras",
          "Python",
          "Deep Learning",
          "Medical Imaging",
          "Computer Vision",
        ],
        description:
          "Developed a segmentation model leveraging the U-Net architecture to detect polyps in medical images. Focused on improving medical diagnostics through accurate segmentation and advanced image processing techniques.",
        link: {
          label: "github.com",
          href: "https://github.com/SVashishta1/Polyp_Segmentation_Using_U_Net.git", 
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
      title: "MNIST Digit Recognition",
      techStack: ["TensorFlow", "Keras", "MNIST Dataset"],
      description:
        "Developed a digit recognition model using TensorFlow’s Keras API on the MNIST dataset.",
      link: {
        label: "github.com",
        href: "https://github.com/SVashishta1/MNIST_Digit_Recognition.git",
      },
    },
    {
      title: "Price Tracker",
      techStack: [
        "Flask",
        "Selenium WebDriver",
        "BeautifulSoup",
        "MySQL",
        "Plotly",
        "Linear Regression",
      ],
      description:
        "Developed a Flask web app with web scraping, data visualization, and machine learning for real-time price tracking.",
      link: {
        label: "github.com",
        href: "https://github.com/SVashishta1/Price_Tracker.git",
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
