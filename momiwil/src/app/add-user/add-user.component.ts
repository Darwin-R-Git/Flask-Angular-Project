import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  angForm: FormGroup;
  constructor(
    private fb : FormBuilder,
    private route: Router
  ) { 
    this.angForm = this.fb.group({
      name : ["", Validators.required],
      informatica: ["", Validators.required],
      matematica: ["", Validators.required],
      arte: ["", Validators.required],

      
    })
  }

  ngOnInit(): void {
  }


  postdata(forms : any){
    console.log(this.angForm.value)

  }
}
