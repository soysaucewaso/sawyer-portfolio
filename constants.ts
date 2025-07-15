
import type { Experience, Project, Education, Certification } from './types';

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Redtry.AI",
    companyUrl: "https://redtry.xyz",
    location: "San Diego, California",
    period: "February 2025 - May 2025",
    description: [
      "Scraped 15,089 products using 5 scrapers coordinated via SQS and an AWS Lambda Function that distributed S3 presigned urls.",
      "Streamlined product filtering across 23 PostgreSQL tables by merging similar columns using LLM-generated keywords.",
      "Enabled LLM product search by publishing a TypeScript MCP script to npm for instant use.",
      "Vectorized Meta LLaMA-8B link classification using NumPy, cutting runtime by 38× (225.1s → 5.9s for 5,000 links).",
      "Powered hundreds of product searches via a Flask API on EC2, supporting persistent multi-session memory with MongoDB.",
    ],
  },
  {
    role: "Autonomous Driving Research Assistant",
    company: "SDSU Real-Time Embedded Control Systems Lab",
    companyUrl: "https://rtec.sdsu.edu/",
    location: "San Diego, California",
    period: "September 2024 - May 2025",
    description: [
        "Improved real-time obstacle detection throughput from 4.6 Hz to 11.5 Hz by developing a YOLO-based overtaking system.",
        "Enabled localization by building a ROS 2 wrapper for ORB SLAM 3 and integrating it into vehicle.",
    ],
  },
];

export const PROJECTS: Project[] = [
    {
        name: "DAWZY",
        projectUrl: "https://devpost.com/software/dawzy",
        period: "June 2025",
        description: [
            "Developed an AI music assistant selected as a top 3% finalist (9/331 teams) at UC Berkeley's AI hackathon in under 24 hours.",
            "Delivered 100% hands-free DAW control—track creation, FX, and navigation—via Claude Tools and Python ReaScripts.",
            "Translated raw humming into accurate digital music (96% F1 on MAESTRO) using Google's MT3 transformer."
        ]
    },
    {
        name: "Secure Cloud Architecture",
        projectUrl: "#",
        period: "January 2025 - February 2025",
        description: [
            "Hardened virtual network by isolating systems from a public-facing DMZ using an OPNSense firewall VM with Suricata NIDS.",
            "Centralized authentication and DNS for 6 Windows VMs with Active Directory.",
            "Automated endpoint threat detection and incident response for 7 VMs, implementing a centralized SIEM by deploying Wazuh XDR in an LXC container and configuring agents across all VMs.",
            "Conducted penetration tests on 6 Unix VMs using Metasploit and Greenbone with Kali Linux."
        ]
    }
];

export const EDUCATION: Education = {
    institution: "San Diego State University",
    location: "San Diego, California",
    degree: "Bachelor of Science in Computer Science",
    gpa: "Major GPA: 3.75",
    period: "August 2022 - May 2025",
};

export const CERTIFICATIONS: Certification[] = [
    {
        name: "CompTIA Security+",
        period: "June 2024 - June 2027"
    }
];

export const ABOUT_ME = "Sawyer is a backend software engineer and recent graduate. He has experience in cybersecurity, infrastructure, cloud, and Linux, and has contributed to research on self-driving cars. He’s drawn to early-stage work and loves building from the ground up.";
