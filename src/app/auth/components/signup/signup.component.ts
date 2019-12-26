import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.signupForm = this._fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ]
    });
  }

  ngOnInit() {
  }

  signup() {
    if (this.signupForm.valid) {
      console.log(`Register email: ${this.signupForm.value.email} with password: ${this.signupForm.value.password}`)
    }
  }

}
