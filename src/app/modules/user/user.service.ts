import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CONSTANTS} from "../../shared/utilities/Constants";
import {IUser} from "./user.models";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private bsUsers: BehaviorSubject<IUser[]> = new BehaviorSubject([]);
  private readonly users$: Observable<IUser[]> = this.bsUsers.asObservable();

  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(): Observable<IUser[]> {
    if (this.bsUsers.getValue().length === 0) {
      this.reload();
    }

    return this.users$;
  }

  reload() {
    this.http.get<IUser[]>(CONSTANTS.API_URL + 'users').toPromise().then(res => this.bsUsers.next(res));
  }

  create(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(CONSTANTS.API_URL + 'users/create', user);
  }

}
