import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from 'src/app/components/sidenav/sidenav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

const SharedComponents = [SidenavComponent];

@NgModule({
  declarations: [SharedComponents],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
  ],
  exports: [SharedComponents],
})
export class SharedModule {}
