
import type { Experience, Project, Education, Certification } from './types';

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Redtry.AI",
    companyUrl: "https://redtry.xyz",
    location: "San Diego, California",
    period: "February 2025 - May 2025",
    description: [
      "Powered 200+ product searches by building an agentic AI chat website using React.js and a Flask API deployed on AWS EC2.",
      "Developed a distributed web crawling system using AWS Lambda, S3, and SQS, inserting 15,000+ product JSONs into PostgreSQL.",
      "Reduced TensorFlow classification time for 5,000 URLs from 225.1s to 5.9s by batching inputs with NumPy."
    ],
  },
  {
    role: "Autonomous Driving Research Assistant",
    company: "SDSU Real-Time Embedded Control Systems Lab",
    companyUrl: "https://rtec.sdsu.edu/",
    location: "San Diego, California",
    period: "September 2024 - May 2025",
    description: [
        "Programmed an embedded Ubuntu computer to autonomously race 1/10th-scale cars using ROS 2 for IPC.",
        "Engineered a YOLO computer vision pipeline for autonomous overtaking, increasing obstacle detection throughput from 4.6 Hz to 11.5 Hz.",
        "Integrated ORB-SLAM3 into vehicle by building a ROS 2 wrapper, enabling real-time environment mapping."
    ],
  },
];

export const PROJECTS: Project[] = [
    {
        name: "DAWZY",
        projectUrl: "https://devpost.com/software/dawzy",
        urlName: "Devpost with Demo Video",
        period: "June 2025",
        description: [
            "Developed an agentic AI music production assistant selected as a top 3% finalist among 331 teams at UC Berkeley's AI hackathon in 24 hours.",
            "Delivered natural language voice control over DAW including track creation, effects, and navigation via Claude Tools and Python ReaScripts.",
            "Transformed user humming into accurate digital music using Google's MT3 transformer, achieving 96% note start time accuracy."
        ],
        
    },
    {
        name: "Applied Security Management Lab",
        projectUrl: "#",
        urlName: "",
        period: "January 2025 - March 2025",
        description: [
            "Hardened a virtual network by isolating internal systems from a public-facing DMZ using an OPNSense firewall VM with Suricata NIDS.",
            "Centralized authentication and enabled DNS for 6 Windows VMs using Active Directory.",
            "Automated endpoint threat detection and incident response against 300,000+ CVEs for 7 VMs by deploying Wazuh XDR on an LXC container.",
            "Conducted penetration tests on 6 Unix VMs using Metasploit and Greenbone on Kali Linux."
        ]
    },
    {
        name: "Kernel Process Scheduler",
        projectUrl: "https://github.com/andb00/CS596-RT-2024Fall-Group05/tree/project3/proj3",
        urlName: "Source Code",
        period: "September 2024 - October 2024",
        description: [
            "Reengineered the Linux kernel's process scheduler, adding 500+ lines of kernel C and 3 new system calls.",
            "Implemented a rate-monotonic scheduler, efficiently managing up to 50 concurrent processes using a red-black tree.",
            "Prevented process starvation by enforcing CPU utilization limits using hrtimers, SIGINT, and SIGKILL.",
            "Tested the modified kernel on a Raspberry Pi, reducing kernel compile and deploy time to 2 minutes via a Bash script."
        ]
    }
];

export const EDUCATION: Education = {
    institution: "San Diego State University",
    location: "San Diego, California",
    degree: "Bachelor of Science in Computer Science",
    gpa: "Major GPA: 3.7",
    period: "August 2022 - May 2025",
};

export const CERTIFICATIONS: Certification[] = [
    {
        name: "CompTIA Security+",
        period: "June 2024 - June 2027"
    }
];

export const ABOUT_ME = "Sawyer is a backend software engineer and recent graduate. He has experience in cybersecurity, infrastructure, cloud, and Linux, and has contributed to research on self-driving cars. He’s drawn to early-stage work and loves building from the ground up.";
