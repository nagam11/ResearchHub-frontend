/**
 * Created by Devgen on 21.06.2017.
 */
import {Project} from './project';
import { Chair } from './chair';
export class Academic {
  _id: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
  birthday: string;
  chair: Chair;
  projects: Project[];
}
