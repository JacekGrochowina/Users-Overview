import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Genders } from 'src/app/resources/data/genders.data';
import { Nationalities } from 'src/app/resources/data/nationalities.data';
import { UsersService } from 'src/app/services/users.service';
import { UsersFacade } from '../../+state/users.facade';

@Component({
  selector: 'app-dialog-add-single',
  templateUrl: './dialog-add-single.component.html',
  styleUrls: ['./dialog-add-single.component.scss'],
})
export class DialogAddSingleComponent implements OnInit {
  formGroup!: FormGroup;
  nationalities = Nationalities;
  genders = Genders;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  onSubmit(): void {
    // console.log(this.formGroup.value);
    // this.usersService
    //   .getUsers(this.formGroup.value)
    //   .subscribe((users) => console.log(users));

    this.usersFacade.addUsers(this.formGroup.value);
  }

  private initFormGroup(): void {
    this.formGroup = this.fb.group({
      gender: [this.genders[0].value],
      nationality: [this.nationalities[0].value],
    });
  }
}
