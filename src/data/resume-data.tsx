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
    "Experienced professional pursuing a Master’s in Data Science with expertise in PL SQL development. Passionate about deep learning, with hands-on project experience in deep learning algorithms. Aspiring Deep Learning Engineer, dedicated to driving innovation in AI technology.",
  avatarUrl: "https://avatars.githubusercontent.com/u/97048188?v=4&size=64",
  // personalWebsiteUrl: "",
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
      }
      // ,
      
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "University of Baltimore County",
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
      description:
        "Developed PL/SQL packages and procedures for British Telecom (BT), optimizing data processing for millions of records. Technologies: PL/SQL, Python, JIRA",
    }
    // ,
    // {
    //   company: "Parabol",
    //   link: "https://parabol.co",
    //   badges: ["Remote"],
    //   title: "Senior Full Stack Developer",
    //   logo: ParabolLogo,
    //   start: "2021",
    //   end: "2024",
    //   description:
    //     "Implemented new features, led a squad, improved code delivery process, and initiated migration from Emotion to Tailwind CSS. Technologies: React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description:
    //     "Created Android mobile apps and led teams for companies like Vision Media, DKMS, and AAA. Built a live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    // },
 
  ],
    skills: [
    "Python",
    "SQL",
    "PyTorch",
    "TensorFlow",
    "Sklearn",
    "NLTK",
    "Pandas",
    "NumPy",
    "OpenCV",
    "Git",
    "PySpark",
    "Kafka",
    "JIRA"
  ],
  mlArchitectures: [
    "CNN",
    "YOLO"
  ],

  projects: [
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
        "Fine-tuned YOLOv8 with wildlife images for species recognition",
      // logo: ParabolLogo,
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
        "Video Processing"
      ],

      description:
        "real-time object detection using YOLOv8 with PyTorch, OpenCV, and GPU acceleration for efficient video processing",
      // logo: YoloLogo,
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
        "Real-time Data Processing"
      ],

      description: "A real-time cryptocurrency streaming app with PySpark, Kafka, and MySQL, visualizing live trends using Plotly",
      // logo: PySparkLogo,
      link: {
        label: "github.com",
        href: "https://github.com/SVashishta1/Real_Time_Streaming_PySpark.git",
      },
    },
    {
      title: "TelecomChurnPrediction",
      techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Random Forest", "Decision Tree", "PCA"],
      description:
        "Predicted customer churn with high accuracy using machine learning techniques",
      // logo: DataAnalysisLogo,
      link: {
        label: "github.com",
        href: "https://github.com/SVashishta1/Telecom_Churn_Prediction.git",
      },
    },
    {
      title: "MNIST Digit Recognition",
      techStack: ["TensorFlow", "Keras", "MNIST Dataset"],
      description:
        "A digit recognition model using TensorFlow’s Keras API on the MNIST dataset",
      // logo: DigitRecognitionLogo,
      link: {
        label: "github.com",
        href: "https://github.com/SVashishta1/MNIST_Digit_Recognition.git",
      },
    },
    {
      title: "Price Tracker",
      techStack: ["Flask", "Selenium WebDriver", "BeautifulSoup", "MySQL", "Plotly", "Linear Regression"],
      description:
        "A Flask web app with web scraping, data visualization, and machine learning for real-time price tracking",
      // logo: PriceTrackerLogo,
      link: {
        label: "github.com",
        href: "https://github.com/SVashishta1/Price_Tracker.git",
      },
    },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description: "Howdy is a place for joining communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
