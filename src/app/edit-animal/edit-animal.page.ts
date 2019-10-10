import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.page.html',
  styleUrls: ['./edit-animal.page.scss'],
})
export class EditAnimalPage implements OnInit {

  public animalEdit = {
    "nome": "11",
    "numeracao": "11",
    "sexo": "11",
    "raca": "11",
  }

  constructor(public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController) {
    this.animalEdit = JSON.parse(JSON.stringify(navParams.get("animal")));
  }

  teste(){
    console.log(this.animalEdit.nome);
  }

  ngOnInit() {
  }

  editarAnimal(){

    // console.log(this.animalEdit);

    if(
      this.animalEdit.nome === "" ||
      this.animalEdit.numeracao === "" ||
      this.animalEdit.sexo === "" ||
      this.animalEdit.nome === ""){
      this.alertaDadosInvalidos();
        } else {
      let animal = {
        "nome": this.animalEdit.nome,
        "numeracao": this.animalEdit.numeracao,
        "sexo": this.animalEdit.sexo,
        "raca": this.animalEdit.sexo
      }
      
      this.modalCtrl.dismiss({
        'animal': animal
      });
    }//fim else
  }//fim cadastrarAnimal

  async alertaDadosInvalidos(){
    const alert = await this.alertCtrl.create({
      header: "Atenção",
      subHeader: "Dados Invalidos!",
      message: "Tente Novamente",
      buttons: ['OK']
    });

    await alert.present();
  }

  closeModal(){
    this.modalCtrl.dismiss({});
  }



}
