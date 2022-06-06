import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import * as moment from "moment";
import { StreamState } from '../interfaces/stream-state';
import { Eventos } from '../shared/Eventos';

@Injectable({
  providedIn: "root"
})
export class AudioService {

  private stop$ = new Subject();

  private audio = new Audio();

  audioEvents = [
    Eventos.ended,
    Eventos.error,
    Eventos.play,
    Eventos.playing,
    Eventos.pause,
    Eventos.timeupdate,
    Eventos.canplay,
    Eventos.loadedmetadata,
    Eventos.loadstart
  ];

  private state: StreamState = {
    reproduciendo: false,
    tiempoActualMostrar: '',
    duracionMostrar: '',
    duracion: undefined,
    tiempoActual: undefined,
    puedeReproducir: false,
    error: false,
  };

  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(
    this.state
  );

  playStream(url: string) {
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  private streamObservable(url:string) {
    return new Observable(observer => {
      this.audio.src = url;
      this.audio.load();
      this.audio.play();
  
      const handler = (event: Event) => {
        debugger;
        this.updateStateEvents(event);
        observer.next(event);
      };
  
      this.addEvents(this.audio, this.audioEvents, handler);
      return () => {
        this.audio.pause();
        this.audio.currentTime = 0;

        this.removeEvents(this.audio, this.audioEvents, handler);

        this.reiniciarState();
      };
    });
  }

  private addEvents(obj: any, eventos: string[], handler: any) {
    eventos.forEach(evento => {
      obj.addEventListener(evento, handler);
    });
  }

  private removeEvents(obj: any, eventos: string[], handler: any) {
    eventos.forEach(evento => {
      obj.removeEventListener(evento, handler);
    });
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  stop() {
    this.stop$.next(null);
  }

  seekTo(segundos: number) {
    this.audio.currentTime = segundos;
  }

  formatTime(tiempo: number, formato: string = "HH:mm:ss") {
    const momentTime = tiempo * 1000;
    return moment.utc(momentTime).format(formato);
  }

  private updateStateEvents(evento: Event): void {
    debugger;
    console.log(evento.type);
    switch (evento.type) {
      case Eventos.canplay:
        this.state.duracion = this.audio.duration;
        this.state.duracionMostrar = this.formatTime(this.state.duracion);
        this.state.puedeReproducir = true;
        break;
      case Eventos.playing:
        this.state.reproduciendo = true;
        break;
      case Eventos.pause:
        this.state.reproduciendo = false;
        break;
      case Eventos.timeupdate:
        this.state.tiempoActual = this.audio.currentTime;
        this.state.tiempoActualMostrar = this.formatTime(this.state.tiempoActual);
        break;
      case Eventos.error:
        this.reiniciarState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }

  private reiniciarState() {
    this.state = {
      reproduciendo: false,
      tiempoActualMostrar: '',
      duracionMostrar: '',
      duracion: undefined,
      tiempoActual: undefined,
      puedeReproducir: false,
      error: false
    };
  }

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }
}