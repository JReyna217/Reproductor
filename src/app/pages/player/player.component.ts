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

  constructor(
    public audioService: AudioService, 
    public musicService: MusicService
    ) 
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
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.cancionActual.index + 1;
    this.playSong(index);
  }

  previous() {
    const index = this.cancionActual.index - 1;
    this.playSong(index);
  }

  playSong(index: number){
    const cancion = this.canciones[index];
    this.openFile(cancion, index);
  }

  isFirstPlaying() {
    return this.cancionActual.index === 0;
  }

  isLastPlaying() {
    return this.cancionActual.index === this.canciones.length - 1;
  }

  onSliderChangeEnd(change: any) {
    this.audioService.seekTo(change.value);
  }
}