import {ProjectType} from "./projectType";
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
  universitySelected: boolean = false;
  companySelected: boolean = false;
  private newSelectedProejctType: SelectedProjectType;
  private newSelectableLangauge: SelectedLanguage;
  constructor() {
    this.searchText = '';
    this.selectedProjectTypes = [];
    this.selectedLaguages = [];
    this.startYear = new Date().getFullYear();
  }


  setProjectTypes(projectTypes: ProjectType[]) {
    for (let projectType of projectTypes){
      this.newSelectedProejctType = new SelectedProjectType(projectType);
      this.selectedProjectTypes.push(this.newSelectedProejctType);
    }
  }
  setSelectableLanguages(selectableLanguages: string[]) {
    for (let selectableLanguage of selectableLanguages) {
      this.newSelectableLangauge = new SelectedLanguage(selectableLanguage);
      this.selectedLaguages.push(this.newSelectableLangauge);
    }
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
  language: string;
  constructor(language: string) {
    this.language = language;
    this.selected = false;
  }
}
