/**
 * created by MarlaN. 18.06.2017
 */
import {Chair} from './chair';
import {ProjectType} from "./projectType";
export class Project {
  _id: string;
  title: string;
  _projetType: ProjectType;
  _chair: Chair;
  _language: string;
  description: string;
  advisor: string;
  supervisor: string;
  requeredSkills: [{skill: string }];
  ratings: string;
  parner: string;
  _requeredLevel: string;

}
