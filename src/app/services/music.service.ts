import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { AudioFile } from "../interfaces/audio-file";

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  files: AudioFile[] = [
    {
      url: "../assets/audio/Cake By the Ocean.m4a",
      nombre: "Cake By the Ocean",
      artista: "DNCE",
      caratula: "../assets/images/Cake By the Ocean.jpg"
    },
    {
      url: "../assets/audio/Cool for the Summer.m4a",
      nombre: "Cool for the Summer",
      artista: "Demi Lovato",
      caratula: "../assets/images/Cool for the Summer.jpg"
    },
    {
      url: "../assets/audio/Dancing with a Stranger.m4a",
      nombre: "Dancing with a Stranger",
      artista: "Sam Smith & Normani",
      caratula: "../assets/images/Dancing with a Stranger.jpg"
    },
    {
      url: "../assets/audio/Secrets.m4a",
      nombre: "Secrets",
      artista: "The Weekend",
      caratula: "../assets/images/Secrets.jpg"
    },
    {
      url: "../assets/audio/Sunflower.m4a",
      nombre: "Sunflower",
      artista: "Post Malone & Swae Lee",
      caratula: "../assets/images/Sunflower.jpg"
    },
    {
      url: "../assets/audio/Without a Trace.m4a",
      nombre: "Without a Trace",
      artista: "Kill the Noise",
      caratula: "../assets/images/Without a Trace.jpg"
    },
  ];

  getFiles() {
    return of(this.files);
  }
}
