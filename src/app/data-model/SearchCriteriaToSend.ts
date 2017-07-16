import {ProjectType} from "./projectType";
import {Language} from "./language";
import {Skill} from "./skill";
/**
 * Created by Devgen on 15.07.2017.
 */

export class SearchCriteriaToSend {
  searchText: string;
  // selectedProjectTypes: SelectedProjectType[];
  selectedProjectTypes: ProjectType[];
  selectedLaguages: Language[];
  startYear: number;
  wsSelected: boolean = false;
  ssSelected: boolean = false;
  companySelected: boolean = false;
  skills: Skill[];
  // private newSelectedProejctType: SelectedProjectType;
  // private newSelectableLangauge: SelectedLanguage;
  /* constructor() {
    this.searchText = '';
    this.selectedProjectTypes = [];
    this.selectedLaguages = [];
    this.skills = [];
    this.startYear = new Date().getFullYear();
  } */
  constructor(searchText: string,
               selectedProjectTypes: ProjectType[],
               selectedLaguages: Language[],
               startYear: number,
               wsSelected: boolean,
               ssSelected: boolean,
              companySelected: boolean,
               skills: Skill[]) {
  this.searchText =  searchText;
  this.selectedProjectTypes = selectedProjectTypes;
  this.selectedLaguages = selectedLaguages;
  this.startYear = startYear;
  this.wsSelected = wsSelected;
  this.ssSelected = ssSelected;
  this.companySelected = companySelected;
  this.skills = skills;
  }

}
