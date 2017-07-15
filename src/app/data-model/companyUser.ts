import { Company } from './company';
import { Chair } from './chair';
export class CompanyUser {
  _id: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
  birthday: string;
  company: Company;
}
