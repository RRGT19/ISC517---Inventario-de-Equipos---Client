import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CONSTANTS} from "../../shared/utilities/Constants";
import {HttpClient} from "@angular/common/http";
import {IClient} from "./client.models";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private bsClients: BehaviorSubject<IClient[]> = new BehaviorSubject([]);
  private readonly clients$: Observable<IClient[]> = this.bsClients.asObservable();

  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(): Observable<IClient[]> {
    if (this.bsClients.getValue().length === 0) {
      this.reload();
    }

    return this.clients$;
  }

  reload() {
    this.http.get<IClient[]>(CONSTANTS.API_URL + 'clients').toPromise().then(res => this.bsClients.next(res));
  }

  create(client: IClient): Observable<IClient> {
    return this.http.post<IClient>(CONSTANTS.API_URL + 'clients', client);
  }

}
