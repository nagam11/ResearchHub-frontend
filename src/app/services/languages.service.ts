import {Http} from "@angular/http";
import {ResearchHubService} from "./researchHubService";
import {Language} from "../data-model/language";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
/**
 * Created by Devgen on 06.07.2017.
 */
@Injectable()
export class LanguageService extends ResearchHubService {
  private resource = 'languages';
  constructor(private http: Http) {
    super();

  }
  getLangugaes(): Promise<Language[]> {
    return this.http.get(this.getUrlAp() + this.resource).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

}
