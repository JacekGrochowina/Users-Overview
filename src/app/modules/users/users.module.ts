import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { DialogAddSingleComponent } from './dialogs/dialog-add-single/dialog-add-single.component';
import { DialogAddManyComponent } from './dialogs/dialog-add-many/dialog-add-many.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersAddComponent } from './components/users-add/users-add.component';

import { DialogsService } from 'src/app/services/dialogs.service';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { StoreModule } from '@ngrx/store';
import { UsersReducer } from './+state/users.reducers';
import { UsersFacade } from './+state/users.facade';

@NgModule({
  declarations: [
    UsersComponent,
    DialogAddSingleComponent,
    DialogAddManyComponent,
    UsersTableComponent,
    UsersAddComponent,
  ],
  entryComponents: [DialogAddSingleComponent, DialogAddManyComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatTooltipModule,
    StoreModule.forFeature('users', UsersReducer),
  ],
  providers: [DialogsService, UsersFacade],
})
export class UsersModule {}
