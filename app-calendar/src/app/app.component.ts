//Componente principal da aplicação
import { Component } from '@angular/core';

//Utilização do serviço de autenticação do usuário
import { AuthService } from 'src/app/usuario/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app-calendar';

  //Atributo que indica se o usuário está criando/ editando evento
  criacao: boolean = false;

  //Atributo com a data clicada pelo usuário no calendário --> passada para o formulário
  dataReceive: string = '';

  constructor(public authService: AuthService) {}

  //Logout do usuário
  logout() {
    this.authService.logout();
  }

  //Atualiza o atributo para indicar se o usuário está criando/editando evento  
  //caso não esteja criando, é mostrada a lista de eventos
  atualiza(arg: boolean): void {
    this.criacao = arg;
  }

  //Atualiza o atributo para indicar se o usuário finalizaou a criação/edição de evento
  finaliza(arg: boolean): void {
    this.criacao = arg;
  }

  //Recebe a data clicada pelo usuário no calendário
  setData(arg: string): void {
    this.dataReceive = arg;
  }

}
