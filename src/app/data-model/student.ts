import { EducationLevel } from './educationLevel';
import { Faculty } from './faculty';
import { Skill } from './skill';
export class Student {
  id: number;
  password: string;
  photo: string;
  email: string;
  firstname: string;
  lastname: string;
  birthday: string;
  degree: EducationLevel;
  skills: Skill[];
  description: string;
  faculty: Faculty;
  major: string;
  minor: string;
  graduation: string;
  cv: string;
}
