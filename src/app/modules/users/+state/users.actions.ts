import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { AddUsersSuccessPayload } from 'src/app/resources/interfaces/payloads/add-users-success.payload';
import { UsersParameters } from 'src/app/resources/interfaces/users-parameters.interface';

export enum UsersActionTypes {
  addUsers = '[Users] Add Users',
  addUsersSuccess = '[Users] Add Users Success',
  addUsersFail = '[Users] Add Users Fail',
}

export class AddUsers implements Action {
  readonly type = UsersActionTypes.addUsers;

  constructor(public payload: UsersParameters) {}
}

export class AddUsersSuccess implements Action {
  readonly type = UsersActionTypes.addUsersSuccess;

  constructor(public payload: AddUsersSuccessPayload) {}
}

export class AddUsersFail implements Action {
  readonly type = UsersActionTypes.addUsersFail;

  constructor(public payload: HttpErrorResponse) {}
}

export type UsersAction = AddUsers | AddUsersSuccess | AddUsersFail;
