//Componente que implementa o formulário para inserir/editar um evento na aplicação

import { Component, OnInit, Output, Input } from '@angular/core';

//Escopo do evento
import { Evento } from '../evento';

//Serviços de EVentos
import { EventoService } from '../evento.service';
import { EventoDataService } from '../evento-data.service';

//Emissor de eventos
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  //informções do evento
  evento: Evento;
  key: string;

  //Input para receber a data do calendário
  @Input() dataClique: string = '';

  //Output para indicar que a criação/edição de evento foi finalizada
  @Output() criacaoFim: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private _eventoService: EventoService, private _eventoDataService: EventoDataService) { }

  ngOnInit() {

    this.evento = new Evento();

    //Recebe o valor clicado no calendário ('' quando o evento é criado através do botão)
    this.evento.data=this.dataClique;
    
    this._eventoDataService.eventoAtual.subscribe(data => {
      //Obtendo as informações de um evento já existente
      if(data.evento && data.key){
        this.evento = new Evento();
        this.evento.data = data.evento.data;
        this.evento.descricao = data.evento.descricao;
        this.evento.inicio = data.evento.inicio;
        this.evento.fim = data.evento.fim;
        this.key = data.key;
      }
    })
  }

  //Função aplicada quando o formulário é submetido pelo usuário
  onSubmit(){
    if(this.key){
      this._eventoService.update(this.evento, this.key);
    }
    else {
      if(this.evento.data && this.evento.inicio && this.evento.fim && this.evento.descricao){
        this._eventoService.insert(this.evento);
      }
    }

    //Resetando evento e chave
    this.evento = new Evento();
    this.key = null;

    //Informando que a criação/edição foi finalizada
    this.criacaoFim.emit(false);
    this.dataClique = '';

  }

  //Resetando o evento -- aplicado quando a operaçõ de criação/edição é cancelada 
  resetaEvento() {
    this.evento = new Evento();
    this.key = null;
    this._eventoDataService.obtemEvento(this.evento,this.key);
  }

}
