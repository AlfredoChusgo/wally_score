interface Habilidades {
    ataque: number;
    defensa: number;
    salvada: number;
    servida: number;
    teamplay: number;
    saque: number;
  }
  
  interface Jugador {
    id: string;
    nombre: string;
    habilidades: Habilidades;
  }

  interface JugadorHabilidades {
    id: string;
    nombre: string;
    ataque: number;
    defensa: number;
    salvada: number;
    servida: number;
    teamplay: number;
    saque: number;
  }