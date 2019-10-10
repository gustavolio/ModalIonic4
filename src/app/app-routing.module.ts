import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cadastrar-animal', loadChildren: './cadastrar-animal/cadastrar-animal.module#CadastrarAnimalPageModule' },
  { path: 'info-animal', loadChildren: './info-animal/info-animal.module#InfoAnimalPageModule' },
  { path: 'edit-animal', loadChildren: './edit-animal/edit-animal.module#EditAnimalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
