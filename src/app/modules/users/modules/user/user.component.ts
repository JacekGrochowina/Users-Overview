import { Component } from '@angular/core';
import { User } from 'src/app/resources/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user: User = history.state.data;
}
