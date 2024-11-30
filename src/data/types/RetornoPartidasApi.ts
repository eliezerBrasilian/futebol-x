import { Campeonato } from "./MatchInfo";
import { Partida } from "./Partida";

export type RetornoPartidasApi = {
  campeonato: Campeonato;
  partidas: PartidasPorFase;
};

export type PartidasPorFase = {
  [fase: string]: Rodadas;
};

export type Rodadas = {
  [rodada: string]: Partida[];
};
