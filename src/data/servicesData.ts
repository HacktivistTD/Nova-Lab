// src/data/servicesData.ts
import { Globe, Smartphone, Bot, Brain, Code, Clapperboard,FolderCode , Sprout , Hexagon , ServerCog} from "lucide-react";

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export const services: Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies like React, Vue, and Angular.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Performance Focused",
      "Modern Frameworks",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Bot,
    title: "AI Chat Agents",
    description:
      "Scalable cloud infrastructure and DevOps solutions for modern businesses.",
    features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring & Scaling"],
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by machine learning and artificial intelligence.",
    features: ["Data Analytics", "Predictive Models", "NLP Solutions", "Computer Vision"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: FolderCode,
    title: "Custom Software",
    description:
      "Tailored software solutions designed specifically for your business needs.",
    features: [
      "Business Analysis",
      "Custom Development",
      "Legacy Modernization",
      "Integration",
    ],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Sprout,
    title: "Green House Automation",
    description:
      "Robust data pipelines and analytics solutions to unlock insights from your data.",
    features: [
      "Data Warehousing",
      "ETL Pipelines",
      "Real-time Analytics",
      "Business Intelligence",
    ],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    description: "Professional editing for promotional, corporate, and social media videos.",
    features: ["Motion Graphics", "Transitions", "Color Grading", "Audio Sync"],
    gradient: "from-pink-500 to-yellow-500",
  },
  {
    icon: Hexagon,
    title: "Logo Designing",
    description: "Creative and memorable logos that align with your brand identity.",
    features: ["Vector Design", "Brand Guidelines", "Multiple Concepts", "Scalable Formats"],
    gradient: "from-yellow-500 to-green-500",
  },
  {
    icon: ServerCog,
    title: "IoT Developments",
    description: "Smart IoT solutions for automation, monitoring, and efficiency.",
    features: ["ESP32/Arduino", "Cloud Integration", "Smart Sensors", "Real-time Monitoring"],
    gradient: "from-gray-500 to-blue-600",
  },
];
