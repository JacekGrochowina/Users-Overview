import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogsService {
  private dialogsWidth: string = '80%';
  private dialogsMaxWidth: string = '400px';

  constructor(private dialog: MatDialog) {}

  openInfo(component: ComponentType<unknown>): void {
    this.dialog.open(component, {
      width: this.dialogsWidth,
      maxWidth: this.dialogsMaxWidth,
    });
  }
}
