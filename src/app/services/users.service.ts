import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AddUsersSuccessPayload } from '../resources/interfaces/payloads/add-users-success.payload';
import { UsersParameters } from '../resources/interfaces/users-parameters.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly endpoints = {
    user: environment.apiUrl,
  };

  constructor(private http: HttpClient) {}

  addUsers(parameters: any): Observable<AddUsersSuccessPayload> {
    let params = new HttpParams({
      fromObject: {
        ...(parameters.amount ? { results: parameters.amount } : null),
        ...(parameters.gender ? { gender: parameters.gender } : null),
        ...(parameters.nationality ? { nat: [parameters.nationality] } : null),
      },
    });
    return this.http.get<AddUsersSuccessPayload>(this.endpoints.user, {
      params,
    });
  }
}
