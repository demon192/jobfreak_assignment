import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class UserInfoService{
    userinfo = {
        firstname  : '',
        lastname : '',
        gender : '',
        email :'',
        contact : '',
        message : '',
    }
    getuserinfo(userinfo: any){
        console.log('userinfo, ',userinfo);
        this.userinfo = userinfo;
        console.log('this userinfo, ',this.userinfo);
        
    }
   

}