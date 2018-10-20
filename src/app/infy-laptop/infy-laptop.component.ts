import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { InfyLaptopService } from './infy-laptop.service';
import { EmployeeNameValidator } from './employee-name.validator';

@Component({
  selector: 'app-infy-laptop',
  templateUrl: './infy-laptop.component.html',
  styleUrls: ['./infy-laptop.component.css']
})
export class InfyLaptopComponent implements OnInit {
form;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({

employeeName: new FormControl("",Validators.compose([
Validators.required,
Validators.pattern('^[a-zA-Z \-\']+')
])),

emailId: new FormControl("", Validators.compose([
  Validators.required,
  Validators.email
])),
joiningDate: new FormControl("", Validators.required),
laptop: new FormControl("", Validators.required),
contactNo: new FormControl(null, Validators.compose([
  Validators.maxLength(10),
  Validators.minLength(9)
])),


    });
  }

  register(F) {
    console.log(F.employeeName);
  }

}
