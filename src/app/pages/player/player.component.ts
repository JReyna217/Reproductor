import { Component } from "@angular/core";
import { AudioFile } from "src/app/interfaces/audio-file";
import { MusicService } from "src/app/services/music.service";
import { AudioService } from '../../services/audio.service';
import { StreamState } from '../../interfaces/stream-state';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  canciones: AudioFile[] = [];
  state: StreamState = {
    reproduciendo: false,
    tiempoActualMostrar: '',
    duracionMostrar: '',
    duracion: undefined,
    tiempoActual: undefined,
    puedeReproducir: false,
    error: false,
  };

  caratulaCancionActual: string = "http://cdn.onlinewebfonts.com/svg/img_296254.png";
  nombreCancionActual: string = "Reproduce una canción";

  cancionActual: any = {};

  constructor(private audioService: AudioService, private musicService: MusicService) 
  {
    musicService.getFiles().subscribe(canciones =>{
      this.canciones = canciones;
    });

    this.audioService.getState().subscribe(state=>{
      this.state = state;
    });
  }

  playStream(url: string) {
    this.audioService.playStream(url).subscribe(eventos=>{
      console.log(eventos);
    });
  }

  openFile(file: AudioFile, index: number) {
    this.cancionActual = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
    this.caratulaCancionActual = file.caratula;
    this.nombreCancionActual = file.nombre;
  }

  pause() {

  }

  play() {

  }

  stop() {

  }

  next() {

  }

  previous() {

  }

  isFirstPlaying() {

  }

  isLastPlaying() {

  }

  onSliderChangeEnd(change: any) {

  }
}