export interface MatchInfo {
  campeonato: Campeonato;
  rodada: string;
  horario: string;
  dia: string;
  time_a: Team;
  time_b: Team;
  emissoras: Emissora[];
  scores: Score[];
  status: MatchInfoType;
}

export enum MatchInfoType {
  SCHEDULED = "SCHEDULED",
  IN_PLAY = "IN_PLAY",
  FINISHED = "FINISHED",
  CANCELLED = "CANCELLED",
  TIMED = "TIMED",
}

export interface Emissora {
  logo_url: string;
  nome: string;
  isCanalAberto: boolean;
}

interface Score {
  time: ScoreTeam;
  minute: number;
  player_name: string;
}

export enum ScoreTeam {
  TIME_A,
  TIME_B,
}

export interface Campeonato {
  logo_url: string;
  nome: string;
}

export interface Team {
  logo_url: string;
  nome: string;
  placar: number;
}
