import {Project} from "./project";
export class User {
  id: number;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  _favoritsprojects: Project[];
}
