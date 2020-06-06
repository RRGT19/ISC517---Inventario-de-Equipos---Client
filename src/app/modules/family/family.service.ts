import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CONSTANTS} from "../../shared/utilities/Constants";
import {IFamily} from "./family.models";

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  private bsFamilies: BehaviorSubject<IFamily[]> = new BehaviorSubject([]);
  private readonly families$: Observable<IFamily[]> = this.bsFamilies.asObservable();

  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(): Observable<IFamily[]> {
    if (this.bsFamilies.getValue().length === 0) {
      this.reload();
    }

    return this.families$;
  }

  reload() {
    this.http.get<IFamily[]>(CONSTANTS.API_URL + 'families').toPromise().then(res => this.bsFamilies.next(res));
  }

  create(family: IFamily): Observable<IFamily> {
    return this.http.post<IFamily>(CONSTANTS.API_URL + 'families', family);
  }

}
