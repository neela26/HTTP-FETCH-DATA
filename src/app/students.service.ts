import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Istudents } from './students';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) 
 {

  }

  private _url:string = "/assets/Data/students.json";

 // Write method in service class which returns array 
 // of batch details
 
GetBatchDetails():Observable<Istudents[]>
{
  return this.http.get<Istudents[]>(this._url);
}

}
