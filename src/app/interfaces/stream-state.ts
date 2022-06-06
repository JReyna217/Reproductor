export interface StreamState {
    reproduciendo: boolean;
    tiempoActualMostrar: string;
    duracionMostrar: string;
    duracion: number | undefined;
    tiempoActual: number | undefined;
    puedeReproducir: boolean;
    error: boolean;
  }