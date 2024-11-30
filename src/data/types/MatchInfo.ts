export type MatchInfo = {
  id: string;
  campeonato: Campeonato;
  rodada: string;
  horario: string;
  dia: string;
  time_a: Team;
  time_b: Team;
  emissoras: Emissora[];
  status: MatchInfoStatus | string;
  utcDate: string;
  tempo: Tempo;
  estadio: string;
};

export type Tempo = "1T" | "2T" | null;

export enum MatchInfoStatus {
  SCHEDULED = "SCHEDULED",
  IN_PLAY = "IN_PLAY",
  LIVE = "LIVE",
  FINISHED = "FINISHED",
  CANCELLED = "CANCELLED",
  TIMED = "TIMED",
}

export type Emissora = {
  logo_url: string;
  nome: string;
  isCanalAberto: boolean;
};

export type Campeonato = {
  logo_url: string;
  nome: string;
  id: string;
};

export type Team = {
  logo_url: string;
  nome: string;
  placar: string;
  id: string;
};
