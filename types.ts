
export interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  name: string;
  projectUrl: string;
  urlName: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  location:string;
  degree: string;
  gpa: string;
  period: string;
}

export interface Certification {
  name: string;
  period: string;
}
