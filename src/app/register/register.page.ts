import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserService} from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  kullanici:string=""
  parola:string=""
  tparola:string=""
  constructor(public afAuth:AngularFireAuth,
    public alert:AlertController,
    public router:Router,
    public anStore:AngularFirestore,
    public service:UserService
    ) { }

  ngOnInit() {
  }

  async signup(){
    const {kullanici,parola,tparola}=this
    if(parola!==tparola){
      return this.alertGoster  ("Hata","Sifreler Eslesmiyor.")
    }
    else{
      try{
        const sonuc=await this.afAuth.createUserWithEmailAndPassword(kullanici,parola)
         //console.log(sonuc);
         if(sonuc.user){
          this.anStore.doc(`users/${sonuc.user.uid}`).set({
            username:kullanici
          })
          this.service.setUser({
            kullanici:kullanici,
            id:sonuc.user.uid
          })
      }
        this.alertGoster("Başarılı","Hoşgeldiniz")
        this.router.navigate(['/tabs'])
      }catch(err){
        console.dir(err)
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
