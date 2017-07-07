/**
 * created by MarlaN. 18.06.2017
 */
import {Chair} from './chair';
import {ProjectType} from "./projectType";
import {EducationLevel} from"./educationLevel";
import {Language} from "./language";
export class Project {
  _id: number;
  title: string;
  _projetType: ProjectType;
  _chair: Chair;
  _languages: Language[];
  description: string;
  advisor: string;
  supervisor: string;
  requeredSkills: [{skill: string }];
  ratings: string;
  parner: string;
  _requeredLevel: EducationLevel[];

}
