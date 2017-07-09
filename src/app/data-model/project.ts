/**
 * created by MarlaN. 18.06.2017
 */
import {Chair} from './chair';
import {ProjectType} from './projectType';
import {EducationLevel} from './educationLevel';
import {Language} from './language';
import {Academic} from './academic';
import {Skill} from'./skill';
import {Company} from './company';
export class Project {
  _id: string;
  title: string;
  _projetType: ProjectType;
  _chair: Chair;
  _languages: Language[];
  description: string;
  _advisor: Academic;
  _superadvisor: Academic;
  _requeredSkills: Skill[];
  ratings: string;
  _partner: Company;
  _requeredLevel: EducationLevel[];

}
