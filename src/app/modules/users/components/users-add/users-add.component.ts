import { Component } from '@angular/core';
import { DialogsService } from 'src/app/services/dialogs.service';
import { DialogAddManyComponent } from '../../dialogs/dialog-add-many/dialog-add-many.component';
import { DialogAddSingleComponent } from '../../dialogs/dialog-add-single/dialog-add-single.component';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss'],
})
export class UsersAddComponent {
  constructor(private dialog: DialogsService) {}

  openDialogAddSingle(): void {
    this.dialog.openInfo(DialogAddSingleComponent);
  }

  openDialogAddMany(): void {
    this.dialog.openInfo(DialogAddManyComponent);
  }
}
