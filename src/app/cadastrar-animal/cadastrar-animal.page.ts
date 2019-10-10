import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar-animal',
  templateUrl: './cadastrar-animal.page.html',
  styleUrls: ['./cadastrar-animal.page.scss'],
})
export class CadastrarAnimalPage implements OnInit {

  public nomeCad;
  public numCad;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss({
    });
  }

  cadastrarAnimal(nome, number, sexo, raca): void {
    if (nome === undefined || number === undefined || sexo === undefined || raca === undefined) {
      alert("Dados Invalidos");
    } else {
      let animal = {
        "nome": nome,
        "number": number,
        "sexo": sexo,
        "raca": raca
      }
      
      this.modalCtrl.dismiss({
        'animal': animal
      })
    }
  }

}
