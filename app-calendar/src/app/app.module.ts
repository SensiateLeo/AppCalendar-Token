import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Imports para tratar com o banco de dados - Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

//Import do environment com o caminho para o banco
import { environment } from '../environments/environment';

//Serviço que possibilita a autenticação (login) do usuário
import { AuthService } from 'src/app/usuario/auth.service';

//Trabalhar com Formulários
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//OrderModule é utilizado para ordenar os elementos da lista de eventos
import { OrderModule } from 'ngx-order-pipe';

//Import para utilizar o FullCalendar no Angular
import { FullCalendarModule } from '@fullcalendar/angular';

//Componentes criados para a aplicação
import { AppComponent } from './app.component';
import { ListComponent } from './eventos/list/list.component';
import { EditComponent } from './eventos/edit/edit.component';
import { CalendarioComponent } from './calendario/calendario/calendario.component';
import { AuthComponent } from './usuario/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    CalendarioComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    OrderModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
