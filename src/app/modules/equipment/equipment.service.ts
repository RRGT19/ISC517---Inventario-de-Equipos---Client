import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CONSTANTS} from "../../shared/utilities/Constants";
import {IEquipment} from "./equipment.models";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private bsEquipments: BehaviorSubject<IEquipment[]> = new BehaviorSubject([]);
  private readonly equipments$: Observable<IEquipment[]> = this.bsEquipments.asObservable();

  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(): Observable<IEquipment[]> {
    if (this.bsEquipments.getValue().length === 0) {
      this.reload();
    }

    return this.equipments$;
  }

  reload() {
    this.http.get<IEquipment[]>(CONSTANTS.API_URL + 'equipments').toPromise().then(res => this.bsEquipments.next(res));
  }

  create(equipment: IEquipment): Observable<IEquipment> {
    return this.http.post<IEquipment>(CONSTANTS.API_URL + 'equipments', equipment);
  }

  update(equipment: IEquipment): Observable<IEquipment> {
    return this.http.put<IEquipment>(CONSTANTS.API_URL + 'equipments', equipment);
  }

}
