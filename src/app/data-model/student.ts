import { EducationLevel } from './educationLevel';
import { Faculty } from './faculty';
import {Project} from './project';
export class Student {
  id: number;
  password: string;
  photo: string;
  email: string;
  firstname: string;
  lastname: string;
  birthday: string;
  degree: EducationLevel;
  skills: string[];
  description: string;
  faculty: Faculty;
  major: string;
  minor: string;
  graduation: string;
  cv: string;
  projectsApplied: Project[];
}
