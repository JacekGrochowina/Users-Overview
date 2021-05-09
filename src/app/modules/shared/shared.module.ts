import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogConfirmComponent } from 'src/app/components/dialogs/dialog-confirm/dialog-confirm.component';
import { ContentComponent } from 'src/app/components/content/content.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

const SharedComponents = [DialogConfirmComponent, ContentComponent];

@NgModule({
  declarations: [SharedComponents],
  entryComponents: [DialogConfirmComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
  ],
  exports: [SharedComponents],
})
export class SharedModule {}
