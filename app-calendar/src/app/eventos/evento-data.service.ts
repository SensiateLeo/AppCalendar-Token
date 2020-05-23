//Serviço que provém o tratamento das indormações do evento
//Utilizado para obter o próximo evento quando realiza uma edição
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//Escopo do evento
import { Evento } from './evento';

@Injectable({
  providedIn: 'root'
})
export class EventoDataService {

  constructor() { }

  private eventoSource = new BehaviorSubject({ evento: null, key: '' });
  eventoAtual = this.eventoSource.asObservable(); //objeto assíncrono

  //obtem um evento da base
  obtemEvento(evento: Evento, key: string) {
    this.eventoSource.next({ evento: evento, key: key });
  }
}
