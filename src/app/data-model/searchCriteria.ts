import {ProjectType} from "./projectType";
import {Language} from "./language";
import {Skill} from "./skill";
/**
 * Created by Devgen on 06.07.2017.
 */
export class SearchCriteria {
  searchText: string;
  selectedProjectTypes: SelectedProjectType[];
  selectedLaguages: SelectedLanguage[];
  startYear: number;
  wsSelected: boolean = false;
  ssSelected: boolean = false;
  companySelected: boolean = false;
  skills: Skill[];
 // private newSelectedProejctType: SelectedProjectType;
 // private newSelectableLangauge: SelectedLanguage;
  constructor() {
    this.searchText = '';
    this.selectedProjectTypes = [];
    this.selectedLaguages = [];
    this.skills = [];
    this.startYear = new Date().getFullYear();
  }


  setProjectTypes(projectTypes: ProjectType[]) {
    for (let projectType of projectTypes){
     let newSelectedProejctType = new SelectedProjectType(projectType);
      this.selectedProjectTypes.push(newSelectedProejctType);
    }
  }
  setSelectableLanguages(selectableLanguages: Language[]) {
    for (let selectableLanguage of selectableLanguages) {
      let newSelectableLangauge = new SelectedLanguage(selectableLanguage);
      this.selectedLaguages.push(newSelectableLangauge);
    }
  }

  getSearchCriteriaToSend(): SearchCriteria {
    let newSearchCritereia = new SearchCriteria();
    for (let typesOfProjct of this.selectedProjectTypes) {
      if (typesOfProjct.selected) {
        newSearchCritereia.selectedProjectTypes.push(typesOfProjct);
      }
    }
    for (let language of this.selectedLaguages){
      if (language.selected) {
        newSearchCritereia.selectedLaguages.push(language);
      }
    }
    newSearchCritereia.searchText = this.searchText;
    newSearchCritereia.startYear = this.startYear;
    newSearchCritereia.wsSelected = this.wsSelected;
    newSearchCritereia.ssSelected = this.ssSelected;
    newSearchCritereia.companySelected = this.companySelected;
    newSearchCritereia.skills = this.skills;
    return newSearchCritereia;
  }
}

export class SelectedProjectType {
  projectType: ProjectType;
  selected: boolean;
  constructor(projectType: ProjectType) {
    this.projectType = projectType;
    this.selected = false;
  }
}

export class SelectedLanguage {
  selected: boolean;
  language: Language;
  constructor(language: Language) {
    this.language = language;
    this.selected = false;
  }
}
