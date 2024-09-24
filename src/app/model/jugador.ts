export interface Habilidades {
    ataque: number;
    defensa: number;
    salvada: number;
    servida: number;
    teamplay: number;
    saque: number;
  }
  
  export interface Jugador {
    id: string;
    nombre: string;
    habilidades: Habilidades;
  }

  export interface JugadorHabilidades {
    id: string;
    nombre: string;
    ataque: number;
    defensa: number;
    salvada: number;
    servida: number;
    teamplay: number;
    saque: number;
  }