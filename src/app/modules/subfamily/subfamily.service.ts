import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CONSTANTS} from "../../shared/utilities/Constants";
import {ISubFamily} from "./subfamily.models";

@Injectable({
  providedIn: 'root'
})
export class SubfamilyService {

  private bsSubFamilies: BehaviorSubject<ISubFamily[]> = new BehaviorSubject([]);
  private readonly subFamilies$: Observable<ISubFamily[]> = this.bsSubFamilies.asObservable();

  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(): Observable<ISubFamily[]> {
    if (this.bsSubFamilies.getValue().length === 0) {
      this.reload();
    }

    return this.subFamilies$;
  }

  reload() {
    this.http.get<ISubFamily[]>(CONSTANTS.API_URL + 'subfamilies').toPromise().then(res => this.bsSubFamilies.next(res));
  }

  create(subFamily: ISubFamily): Observable<ISubFamily> {
    return this.http.post<ISubFamily>(CONSTANTS.API_URL + 'subfamilies', subFamily);
  }

}
