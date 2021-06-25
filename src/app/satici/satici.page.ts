import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserService} from '../user.service';






@Component({
  selector: 'app-satici',
  templateUrl: './satici.page.html',
  styleUrls: ['./satici.page.scss'],
})
export class SaticiPage implements OnInit {

  imageURL:string
  aciklama:string

  constructor(public http:HttpClient,
    public afStore:AngularFirestore,
    public service:UserService
    ) { }

  ngOnInit() {
  }
  postOlustur(){
   
    const resim=this.imageURL
    const aciklama=this.aciklama
    
    this.afStore.doc('users/${this.service.getUID()}').update({
     
    
    })
      

 
      
    

    
  }

  


  fileChanged(event){
    const files=event.target.files
    //console.log(files)
  }

  }



