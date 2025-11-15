export interface Technology {
  name: string;
  image: string;
}

// Main project interface
export interface Project {
  name: string;
  description: string;
  summary: string;
  dateAccomplished: string; // or Date if you want to parse it
  imageLinks: string[];
  technologies: Technology[];
  iconLink: string;
  repoLink: string;
}
