import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/user.model';


const baseUrl = 'http://localhost:8000/api/utilisateurs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(baseUrl);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
