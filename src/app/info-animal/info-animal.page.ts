import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-animal',
  templateUrl: './info-animal.page.html',
  styleUrls: ['./info-animal.page.scss'],
})
export class InfoAnimalPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss()
  }



}
