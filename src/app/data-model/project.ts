/**
 * created by MarlaN. 18.06.2017
 */
/**
 * Modified by Moawiah. 13.07.2017
 */
import {Chair} from './chair';
import {ProjectType} from './projectType';
import {EducationLevel} from './educationLevel';
import {Language} from './language';
import {Academic} from './academic';
import {Skill} from'./skill';
import {Company} from './company';
import {Rating} from './Rating';
import {Student} from './Student';

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
  ratings: Rating[];
  _partner: Company;
  _requeredLevel: EducationLevel[];
  applications: Student[];
}
