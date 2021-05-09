import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { merge, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnDefinition } from 'src/app/resources/interfaces/column-definition.interface';
import { User } from 'src/app/resources/interfaces/user.interface';
import { UsersFacade } from '../../+state/users.facade';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit, AfterViewInit {
  isEditMode: boolean = true;
  formDisplayedColumns = this.fb.group({
    nameFirst: [false],
    nameLast: [false],
    gender: [false],
    age: [false],
    email: [false],
    phone: [false],
    nat: [false],
  });
  users$ = this.usersFacade.users$;
  usersCollection!: User[];

  columnsDefinitions!: ColumnDefinition[];
  columns: string[] = ['nameFirst', 'nameLast', 'gender', 'nat'];

  dataSource!: MatTableDataSource<User>;
  private unsubscribe$ = new Subject<void>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fb: FormBuilder, private usersFacade: UsersFacade) {}

  ngOnInit(): void {
    this.handleUsers();
    this.setTableColumns();
    this.getDisplayedColumns();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

    const obsevables: Observable<boolean>[] = [
      this.controlNameFirst.valueChanges,
      this.controlNameLast.valueChanges,
      this.controlGender.valueChanges,
      this.controlAge.valueChanges,
      this.controlEmail.valueChanges,
      this.controlPhone.valueChanges,
      this.controlNat.valueChanges,
    ];

    merge(
      obsevables[0],
      obsevables[1],
      obsevables[2],
      obsevables[3],
      obsevables[4],
      obsevables[5],
      obsevables[6]
    )
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.columnsDefinitions[0].isVisible = this.controlNameFirst.value;
        this.columnsDefinitions[1].isVisible = this.controlNameLast.value;
        this.columnsDefinitions[2].isVisible = this.controlGender.value;
        this.columnsDefinitions[3].isVisible = this.controlAge.value;
        this.columnsDefinitions[4].isVisible = this.controlEmail.value;
        this.columnsDefinitions[5].isVisible = this.controlPhone.value;
        this.columnsDefinitions[6].isVisible = this.controlNat.value;
        this.getDisplayedColumns();
      });
  }

  searchFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  private getDisplayedColumns(): void {
    this.columns = this.columnsDefinitions
      .filter((cd: ColumnDefinition) => cd.isVisible)
      .map((cd: ColumnDefinition) => cd.def);
  }

  private handleUsers(): void {
    this.users$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((users: User[]) => {
        this.usersCollection = users;
        this.dataSource = new MatTableDataSource<User>(this.usersCollection);
        this.dataSource.paginator = this.paginator;
      });
  }

  private setTableColumns(): void {
    this.columns.forEach((tableColumn) => {
      this.formDisplayedColumns.get(tableColumn)?.patchValue(true);
    });

    this.columnsDefinitions = [
      {
        def: 'nameFirst',
        label: 'Imię',
        isVisible: this.controlNameFirst.value,
      },
      {
        def: 'nameLast',
        label: 'Nazwisko',
        isVisible: this.controlNameLast.value,
      },
      { def: 'gender', label: 'Płeć', isVisible: this.controlGender.value },
      { def: 'age', label: 'Wiek', isVisible: this.controlAge.value },
      { def: 'email', label: 'Email', isVisible: this.controlEmail.value },
      {
        def: 'phone',
        label: 'Telefon',
        isVisible: this.controlPhone.value,
      },
      { def: 'nat', label: 'Kraj', isVisible: this.controlNat.value },
    ];

    this.getDisplayedColumns();
  }

  get controlNameFirst(): FormControl {
    return this.formDisplayedColumns.get('nameFirst') as FormControl;
  }

  get controlNameLast(): FormControl {
    return this.formDisplayedColumns.get('nameLast') as FormControl;
  }

  get controlGender(): FormControl {
    return this.formDisplayedColumns.get('gender') as FormControl;
  }

  get controlAge(): FormControl {
    return this.formDisplayedColumns.get('age') as FormControl;
  }

  get controlEmail(): FormControl {
    return this.formDisplayedColumns.get('email') as FormControl;
  }

  get controlPhone(): FormControl {
    return this.formDisplayedColumns.get('phone') as FormControl;
  }

  get controlNat(): FormControl {
    return this.formDisplayedColumns.get('nat') as FormControl;
  }
}
