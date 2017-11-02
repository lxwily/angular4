import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }
  //判断账号密码是否正确
  loginIsTrue : boolean = false;

  user : Login = {
    admin : "",
    pass  : ""
  }

  alertMain : Object = {
    type : "",
    content : ""
  }
  ngOnInit() {
  }

  /*
  ////登录
  */
  loginIn () {
    
    if(this.user.admin == "admin" && this.user.pass == "123123"){
      this.loginIsTrue = true;
      sessionStorage.setItem("user",JSON.stringify(this.user))
      this.alertMain['type'] = "success";
      this.alertMain['content'] = "登录成功";
      
      setTimeout(()=>{
        this.router.navigate(['home'])
      },1500)
    }else{
      this.loginIsTrue = true;
      this.alertMain['type'] = "danger";
      this.alertMain['content'] = "账号或密码不对";
      
    }
    setTimeout(()=>{
      this.loginIsTrue = false;
    },1500)
    
  }

}
