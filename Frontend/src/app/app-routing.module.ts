import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DxButtonModule, DxDataGridModule, DxFormModule, DxTextBoxModule } from 'devextreme-angular';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [
  {
    path: 'produtos/cadastrar',
    component: CadastrarComponent
  },
  {
    path: 'produtos/listar',
    component: ListarComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule, DxButtonModule, DxTextBoxModule, HttpClientModule],
  providers: [AuthGuardService],
  exports: [RouterModule, CadastrarComponent, ListarComponent],
  declarations: [HomeComponent, ProfileComponent, CadastrarComponent, ListarComponent]
})
export class AppRoutingModule { }
