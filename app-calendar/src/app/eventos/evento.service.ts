//Serviço de Eventos da aplicação
//Aqui ficam os métodos para Inserir, Editar, Atualizar e Obter os Eventos da base

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

//Escopo do evento 
import { Evento } from './evento';

//Implementar as funções do Firebase
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  //Função para inserir o evento na base
  insert(evento: Evento){
    this._angularFireDatabase.list("eventos").push(evento)
      .then((result: any) => {
        console.log(result.key);
      })
  }

  //Função para atualizar um evento da base
  update(evento: Evento, key: string){
    this._angularFireDatabase.list("eventos").update(key, evento);
  }

  //Função para recuperar todos os eventos armazenados
  getAll() {
    return this._angularFireDatabase.list("eventos")
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(data => ({ key: data.payload.key,  ...data.payload.val() as {} }));
        })
      )
  }

  //Função para excluir um evento
  delete(key: string){
    this._angularFireDatabase.object(`eventos/${key}`).remove();
  }
}
