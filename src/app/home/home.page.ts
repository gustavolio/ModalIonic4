import { Component } from '@angular/core';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { CadastrarAnimalPage } from '../cadastrar-animal/cadastrar-animal.page'
import { InfoAnimalPage } from '../info-animal/info-animal.page'
import { EditAnimalPage } from '../edit-animal/edit-animal.page'
import { present, modalController } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public animalList: Array<Object> = [];
  public noSearchList: Array<Object> = [];
  public searchTerm = "";

  constructor(
    public modalController: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) {
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

    this.noSearchList = this.animalList;

  }

  async showInfoAnimal(animal) {
    const modal = await this.modalController.create({
      component: InfoAnimalPage,
      componentProps: {
        'animal': animal
      }
    });

    await modal.present();
  }

  async moreOptions(animal, ev: any) {
    ev.stopPropagation();
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Opções",
      buttons: [{
        text: "Editar",
        icon: "hammer",
        handler: () => {
          this.editarAnimal(animal);
        }
      }, {
        text: "Remover",
        icon: "trash",
        handler: () => {
          console.log("Remover Animal da Lista");
          this.verificarRemocao(animal);
        }

      }, {
        text: "Cancelar",
        icon: "close",
        role: "cancel",
        handler: () => {
          console.log("Cancel");
        }
      }
      ]
    });

    await actionSheet.present();
  }

  async editarAnimal(animal) {
    const modal = await this.modalController.create({
      component: EditAnimalPage,
      componentProps:{
        'animal': animal
      }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data.animal !== undefined) {
      animal.nome = data.animal.nome;
      animal.numeracao = data.animal.numeracao;
      animal.raca = data.animal.raca;
      animal.sexo = data.animal.sexo;
      this.noSearchList = this.animalList;
    }
  }

  async cadastrarAnimal() {
    const modal = await this.modalController.create({
      component: CadastrarAnimalPage
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data.animal !== undefined) {
      this.animalList.push(data.animal);
      this.noSearchList = this.animalList;
    }
  }

  async verificarRemocao(animal){
    
    const alerta = this.alertCtrl.create({
      header: "Atenção!",
      message: "Deseja remover " + animal.nome,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Remocao cancelada");
          }
        },{
          text: "Ok",
          handler: () => {
            this.animalList = this.removerAnimal(animal);
            this.noSearchList = this.animalList;
          }
        }
      ]
    });

    (await alerta).present();
  }

  removerAnimal(animal){
    return this.animalList.filter(function(elemento: any) {
      return elemento.nome != animal.nome;
    });
  }

  getItems(){
    console.log("Entrou");
    this.animalList = this.noSearchList;
    let lista = [];

    for(let animal of this.animalList){
      if(animal['nome'].toLowerCase().includes(this.searchTerm.toLowerCase())){
        console.log("Buscando ", this.searchTerm, " em ", animal);
        lista.push(animal);
      }
    }
    console.log("searchTerm: ", this.searchTerm);
    console.log("Animal Lista: ", this.animalList);
    console.log("Lista de Pesquisa: ",lista);
    this.animalList = lista;
  }
} 