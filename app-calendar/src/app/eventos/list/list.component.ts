//Componente que implementa a lista de eventos cadastrados na aplicação
//Possibilita a visualização dos eventos, edição e exclusão dos mesmo
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

//Escopo do evento
import { Evento } from '../evento';

//Serviços de evento
import { EventoService } from '../evento.service';
import { EventoDataService } from '../evento-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //eventos que serão recuperados da base
  eventos: Observable<any>;

  //key utilizada para ordenação dos eventos mostrados na lista
  //os eventos são ordenados por data e por horário de início
  key: string []= ["data", "inicio"]; 
    reverse: boolean = false;
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

  //Output que informa quando a opção de editar evento é selecionada
  @Output() edicaoInicio: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private _eventoService: EventoService, private _eventoDataService: EventoDataService) { }

  //Ao inciar o componente, recupera todos os eventos do banco
  ngOnInit() {
    this.eventos = this._eventoService.getAll();
  }

  //Função que permite deletar o evento selecionado
  delete(key: string){
    this._eventoService.delete(key);
  }

  //Função que informa o início da edição do evento na aplicação
  edit(evento: Evento, key: string){
    this._eventoDataService.obtemEvento(evento,key);
    this.edicaoInicio.emit(true);
  }

}
