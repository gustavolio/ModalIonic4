import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CadastrarAnimalPage } from '../cadastrar-animal/cadastrar-animal.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public animalList: Array<Object> = [];
  constructor(public modalController: ModalController) {
    this.animalList = [
      {
        "nome": "Reginaldo",
        "numeracao": "0",
        "sexo": "macho",
        "raca": "pincher"
      },
      {
        "nome": "Adalberto",
        "numeracao": "1",
        "sexo": "macho",
        "raca": "boxer"
      },
      {
        "nome": "Creuza",
        "numeracao": "2",
        "sexo": "femea",
        "raca": "poodle"
      },
      {
        "nome": "Elineuza",
        "numeracao": "3",
        "sexo": "femea",
        "raca": "pincher"
      }
    ]

  }

  async cadastrarAnimal(){
    const modal = await this.modalController.create({
      component: CadastrarAnimalPage
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.animalList.push(data.animal);    
  }

  async receberDados(){
    
  }

  



}
