import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  constructor(private userService: UserInfoService){}
  
  firstname = this.userService.userinfo.firstname;
  lastname = this.userService.userinfo.lastname;
  gender= this.userService.userinfo.gender;
  email = this.userService.userinfo.email;
  contact = this.userService.userinfo.contact;
  message = this.userService.userinfo.message;
  
  messageShow=  (this.firstname||this.lastname||this.gender||this.email||this.contact||this.message)?true:false;

}
