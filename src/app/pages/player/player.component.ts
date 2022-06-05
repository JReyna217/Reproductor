import { Component } from "@angular/core";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  canciones: Array<any> = [];
  state: any;

  caratulaCancionActual: string = "http://cdn.onlinewebfonts.com/svg/img_296254.png";
  nombreCancionActual: string = "Reproduce una canción";

  cancionActual: any = {};

  constructor() { }

  playStream(url: string) {

  }

  openFile(file: any, index: number) {

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