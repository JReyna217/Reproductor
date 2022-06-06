import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { AudioFile } from "../interfaces/audio-file";

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  files: AudioFile[] = [
    {
      url: "../assets/audio/Cool for the Summer.m4a",
      nombre: "Cool for the Summer",
      artista: "Demi Lovato",
      caratula: "../assets/images/Cool for the Summer.jpg"
    }
  ];

  getFiles() {
    return of(this.files);
  }
}
