import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { AudioFile } from "../interfaces/audio-file";

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  files: AudioFile[] = [
    {
      url: "https://github.com/JReyna217/Reproductor/raw/main/src/assets/audio/Cake%20By%20the%20Ocean.m4a",
      nombre: "Cake By the Ocean",
      artista: "DNCE",
      caratula: "https://github.com/JReyna217/Reproductor/raw/main/src/assets/images/Cake%20By%20the%20Ocean.jpg"
    },
    {
      url: "https://github.com/JReyna217/Reproductor/raw/main/src/assets/audio/Cool%20for%20the%20Summer.m4a",
      nombre: "Cool for the Summer",
      artista: "Demi Lovato",
      caratula: "https://github.com/JReyna217/Reproductor/raw/main/src/assets/images/Cool%20for%20the%20Summer.jpg"
    },
    {
      url: "https://github.com/JReyna217/Reproductor/raw/main/src/assets/audio/Dancing%20with%20a%20Stranger.m4a",
      nombre: "Dancing with a Stranger",
      artista: "Sam Smith & Normani",
      caratula: "https://github.com/JReyna217/Reproductor/raw/main/src/assets/images/Dancing%20with%20a%20Stranger.jpg"
    },
    {
      url: "https://github.com/JReyna217/Reproductor/raw/main/src/assets/audio/Secrets.m4a",
      nombre: "Secrets",
      artista: "The Weekend",
      caratula: "https://github.com/JReyna217/Reproductor/raw/main/src/assets/images/Secrets.jpg"
    },
    {
      url: "https://github.com/JReyna217/Reproductor/raw/main/src/assets/audio/Sunflower.m4a",
      nombre: "Sunflower",
      artista: "Post Malone & Swae Lee",
      caratula: "https://github.com/JReyna217/Reproductor/raw/main/src/assets/images/Sunflower.jpg"
    },
    {
      url: "https://github.com/JReyna217/Reproductor/raw/main/src/assets/audio/Without%20a%20Trace.m4a",
      nombre: "Without a Trace",
      artista: "Kill the Noise",
      caratula: "https://github.com/JReyna217/Reproductor/raw/main/src/assets/images/Without%20a%20Trace.jpg"
    },
  ];

  getFiles() {
    return of(this.files);
  }
}
