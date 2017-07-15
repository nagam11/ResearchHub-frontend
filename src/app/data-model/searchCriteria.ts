import {ProjectType} from "./projectType";
import {Language} from "./language";
import {Skill} from "./skill";
import {SearchCriteriaToSend} from "./SearchCriteriaToSend";
/**
 * Created by Devgen on 06.07.2017.
 */
export class SearchCriteria {
  searchText: string;
  // selectedProjectTypes: SelectedProjectType[];
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

  getSearchCriteriaToSend(): SearchCriteriaToSend {
    let newSearchCritereia = new SearchCriteria();
    let selProjecttypes: ProjectType[] = [];
    for (let typesOfProjct of this.selectedProjectTypes) {
      // let checkIfSelectedTypeOfProject = typesOfProjct as SelectedProjectType;
      if (typesOfProjct.isSelected()) {
       // newSearchCritereia.selectedProjectTypes.push(typesOfProjct);
        selProjecttypes.push(typesOfProjct.projectType);
      }
    }
    let selLanguages: Language[] = [];
    for (let language of this.selectedLaguages){
      // let checkIfLanguageIsSelected = language as SelectedLanguage;
      if (language.selected) {
        // newSearchCritereia.selectedLaguages.push(language);
        selLanguages.push(language.language);
      }
    }
    let result = new SearchCriteriaToSend(
      this.searchText,
      selProjecttypes,
      selLanguages,
      newSearchCritereia.startYear,
      newSearchCritereia.wsSelected,
      newSearchCritereia.ssSelected,
      newSearchCritereia.companySelected,
      newSearchCritereia.skills
    );
    newSearchCritereia.searchText = this.searchText;
    newSearchCritereia.startYear = this.startYear;
    newSearchCritereia.wsSelected = this.wsSelected;
    newSearchCritereia.ssSelected = this.ssSelected;
    newSearchCritereia.companySelected = this.companySelected;
    newSearchCritereia.skills = this.skills;
    return result;
  }
}



export class SelectedProjectType {
  projectType: ProjectType;
  private selected: boolean;
  constructor(projectType: ProjectType) {
    this.projectType = projectType;
    this.selected = false;
  }


  isSelected(): boolean {
    return this.selected ;
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
