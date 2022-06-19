import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public patients:any = [];
  public all:any = JSON.parse(localStorage.getItem("HospitalDatabase")!) || [];
  constructor(public formBuilder: FormBuilder) { }
  public userForm = this.formBuilder.group({
    firstname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    age: ['', [Validators.required]],
    sex: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    status: ['', [Validators.required]],
    number: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  ngOnInit(): void {
    // this.all = JSON.parse(localStorage.getItem("HospitalDatabase")!);
  }
  register () {
    // console.log(this.userForm.get("firstname")?.value);

    // console.log(this.userForm.value);
    // this.patients.push(this.userForm.value)
    // console.log(this.patients)
    // let allPatients = console.log(this.patients.push(this.userForm.value));
    // console.log(allPatients);
    this.all.push(this.userForm.value);
    localStorage.setItem("HospitalDatabase", JSON.stringify(this.all));
  }
}
