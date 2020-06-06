import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CONSTANTS} from "../../shared/utilities/Constants";
import {IRental} from "./rental.models";

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private bsRentals: BehaviorSubject<IRental[]> = new BehaviorSubject([]);
  private readonly rentals$: Observable<IRental[]> = this.bsRentals.asObservable();

  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(): Observable<IRental[]> {
    if (this.bsRentals.getValue().length === 0) {
      this.reload();
    }

    return this.rentals$;
  }

  reload() {
    this.http.get<IRental[]>(CONSTANTS.API_URL + 'rentals').toPromise().then(res => this.bsRentals.next(res));
  }

  create(rental: Partial<IRental>): Observable<IRental> {
    return this.http.post<IRental>(CONSTANTS.API_URL + 'rentals', rental);
  }

  deliverEquipment(rentalId: number, equipmentId: number): Observable<any> {
    return this.http.get<any>(`${CONSTANTS.API_URL}rentals/deliverEquipment/${rentalId}/${equipmentId}`);
  }

  getAllPending() {
    return this.http.get<IRental[]>(CONSTANTS.API_URL + 'rentals/findAllPending');
  }

}
