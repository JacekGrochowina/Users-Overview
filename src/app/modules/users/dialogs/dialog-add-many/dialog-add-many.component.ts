import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Gender } from 'src/app/resources/interfaces/gender.interface';
import { Genders } from 'src/app/resources/data/genders.data';
import { Nationality } from 'src/app/resources/interfaces/nationality.interface';
import { Nationalities } from 'src/app/resources/data/nationalities.data';
import { UsersService } from 'src/app/services/users.service';
import { UsersFacade } from '../../+state/users.facade';

@Component({
  selector: 'app-dialog-add-many',
  templateUrl: './dialog-add-many.component.html',
  styleUrls: ['./dialog-add-many.component.scss'],
})
export class DialogAddManyComponent implements OnInit {
  formGroup!: FormGroup;
  nationalities: Nationality[] = Nationalities;
  genders: Gender[] = Genders;

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

  getNatsNameArray(): string[] {
    const natsValues = this.formGroup.controls.nationality.value;
    let natsNames: string[] = [];

    natsValues.forEach((natValue: string) => {
      this.nationalities.forEach((nat: Nationality) => {
        if (nat.value === natValue) natsNames.push(nat.name);
      });
    });

    return natsNames;
  }

  get isRandomGender(): FormControl {
    return this.formGroup.get('isRandomGender') as FormControl;
  }

  get gender(): FormControl {
    return this.formGroup.get('gender') as FormControl;
  }

  get isRandomNat(): FormControl {
    return this.formGroup.get('isRandomNat') as FormControl;
  }

  get nationality(): FormControl {
    return this.formGroup.get('nationality') as FormControl;
  }

  private initFormGroup(): void {
    this.formGroup = this.fb.group({
      amount: [
        2,
        [Validators.required, Validators.min(2), Validators.max(100)],
      ],
      isRandomGender: [true],
      gender: [{ value: null, disabled: true }],
      isRandomNat: [true],
      nationality: [{ value: [], disabled: true }],
    });

    this.isRandomGender.valueChanges.subscribe((checked) => {
      this.toogleRandomGender(checked);
    });

    this.isRandomNat.valueChanges.subscribe((checked) => {
      this.toogleRandomNat(checked);
    });
  }

  private toogleRandomGender(checked: boolean): void {
    if (!checked) {
      this.gender.setValidators([Validators.required]);
      this.gender.enable();
    } else {
      this.gender.setValidators(null);
      this.gender.patchValue(null);
      this.gender.disable();
    }
    this.gender.updateValueAndValidity();
  }

  private toogleRandomNat(checked: boolean): void {
    if (!checked) {
      this.nationality.setValidators([Validators.required]);
      this.nationality.enable();
    } else {
      this.nationality.setValidators(null);
      this.nationality.patchValue([]);
      this.nationality.disable();
    }
    this.nationality.updateValueAndValidity();
  }
}
