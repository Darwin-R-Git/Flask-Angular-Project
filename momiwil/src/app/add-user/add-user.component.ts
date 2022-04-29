import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../users.model';
import { UsersService } from '../users.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newData: Object | undefined;
  angForm: FormGroup;
  constructor(
    private fb : FormBuilder,
    private route: Router,
    private usersService: UsersService
  ) { 
    this.angForm = this.fb.group({
      user : ["", Validators.required],
      informatica: ["", Validators.required],
      matematica: ["", Validators.required],
      arte: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }


  postdata(forms : any){
    this.usersService.addUser(
      this.angForm.value.user,
      this.angForm.value.informatica,
      this.angForm.value.matematica,
      this.angForm.value.arte).pipe(first()).subscribe((data: any) => {
        this.newData = data;
        console.warn(data)
      });

  }
}
