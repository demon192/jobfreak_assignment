import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm = new FormGroup({
    firstname : new FormControl('', [Validators.required,Validators.minLength(3)]),
    lastname : new FormControl(''),
    gender: new FormControl('male'),
    email : new FormControl('',[Validators.required, Validators.email]),
    contact : new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]*$')]),
    message : new FormControl('')
  })

  constructor(private router:Router, private userService: UserInfoService){}

  OnSubmit(){
    console.log(this.contactForm.value);
    this.userService.getuserinfo(this.contactForm.value)
    this.contactForm.setValue({
      firstname:'',
      lastname:'',
      gender:'',
      email:'',
      contact:'',
      message:''
    });
    
    
    this.router.navigate(['information']);

  }

}
