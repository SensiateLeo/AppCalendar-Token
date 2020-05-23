//Componente Calendário da aplicação - Implementado com Full Calendar
//O Calendário é utilizado para mostrar os eventos e possibilita a inserção de algum evento a partir da data selecionada
import { Component, OnInit, Output, AfterViewInit } from '@angular/core';

//Plugins do FullCalendar utilizados
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';

//Serviço de eventos, para recuperação dos eventos da base
import { EventoService } from './../../eventos/evento.service';

import { Observable } from 'rxjs';

//Emitir eventos para o componente principal
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'full-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit, AfterViewInit {

  //Opções do calendário
  options: any;

  //Eventos que serão recuperados da base
  eventos: Observable<any>;

  //Eventos que são mostrados no calendário
  calendarEvents: EventInput[];

  //Outputs que exportam a data clicada pelo usuário e indica o começo da criação de evento
  @Output() criacaoInicio: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() dataClique: EventEmitter<string> = new EventEmitter<string>()

  constructor(private _eventoService: EventoService) { 
  }

  ngOnInit() {
    //setando as opções do component Fullcalendar
    this.calendarEvents = [];
    this.options = {
      editable: true,
      customButtons: {
        myCustomButton: {
          text: 'Adicionar Evento',
          click: () => this.handleNewEvent()
        }
      },
      header: {
        left: 'title',
        center: ' ',
        right: 'myCustomButton, prev,next '
      },
      plugins: [dayGridPlugin, interactionPlugin]
    };
  }

  ngAfterViewInit() {

    //Carregando os eventos da base
    this.eventos = this._eventoService.getAll();
    this.eventos.subscribe((ev) => { 
      this.calendarEvents = [];
      for(let i of ev){
        this.calendarEvents = this.calendarEvents.concat({ 
          title: i.descricao,
          date: i.data,
        });
      }
    },
    () => { console.log('Sequência finalizada'); }
    );
  }

  //Reconhecendo clique de usuário em uma data
  handleDateClick(arg) { 
    //Inicia a criação de evento e informa a data selecionada
    this.criacaoInicio.emit(true);
    this.dataClique.emit(arg.dateStr);
  }

  //Ação disparada quando o botão de edicionar evento é selecionado
  handleNewEvent(){
    //Inicia a criação de evento e informa a data selecionada
    this.criacaoInicio.emit(true);
    this.dataClique.emit('');
  }

}

