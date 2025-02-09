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
    "AI/ML Engineer with hands-on experience in deep learning, real-time data processing, and scalable AI solutions. Currently pursuing a Master’s in Data Science, passionate about building innovative AI systems and advancing machine learning technologies.",
  summary:
    "AI/ML Engineer and Data Science Master’s candidate with expertise in deep learning, AI chatbot development, and real-time data processing. Proficient in Python, SQL, PyTorch, TensorFlow, and cloud services like AWS. Experienced in building and deploying advanced AI systems, with a strong focus on model optimization and large-scale deployment. Aspiring to drive innovation in AI and machine learning technologies.",
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
Designed and fine-tuned deep learning models (CNNs, Transformers), reducing errors by 18% and improving inference speed by 30%. Built cloud-based AWS solutions with 99.9% uptime and automated ML retraining workflows for 40% better adaptability to new data. `,
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
Developed predictive models to boost process efficiency by 10%. Created Power BI dashboards for datasets with 500K+ records and deployed SQL-based feature engineering pipelines, cutting data preprocessing time by 35%.`,
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
  "Transformers",
  "Scikit-learn",
  "NumPy",
  "Pandas",
  "OpenCV",
  "PySpark",
  "Kafka",
  "AWS (EC2, Lambda, API Gateway)",
  "RestAPI",
  "Git",
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
