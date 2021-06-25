import { AngularFireAuth } from '@angular/fire/auth';

import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {UserService} from '../user.service';



 


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  kullanici: string=""
  parola:string=""

  constructor(public afAuth:AngularFireAuth,
    public alert:AlertController,
    public router:Router,
    public service:UserService
    
    
    ) { }

  ngOnInit() {
  }
  async login(){
    const {kullanici,parola}=this
    try{
      const sonuc=await this.afAuth.signInWithEmailAndPassword(kullanici,parola)
      //console.log(sonuc)
      if(sonuc.user){
        this.service.setUser({
          kullanici,
          id:sonuc.user.uid
        })
      }
      
      
      this.alertGoster("Başarılı","Hoşgeldiniz"),
      this.router.navigate(['/tabs'])
      

    }catch(err){
      //console.dir(err)
      if("auth/user-not-found"){
        this.alertGoster("Hata",err.message)
      }  

    }

  }
  async alertGoster(header:string,message:string){
    const alert=await this.alert.create({
      header,
      message,
      buttons:["Ok"]
    }

    )
    await alert.present()
  } 

}