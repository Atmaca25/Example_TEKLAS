import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'http://localhost:56055/ShipmentWarehouseApiMMA/GetAllLocationDevEx';
  constructor(private http: HttpClient) { }

  getLocations(page,pageSize): Observable<Location[]> {    
    var result = this.http.get<Location[]>(this.apiUrl,{
      "params":{
        page,
        pageSize
      }
    });
    return result;
  }
}
