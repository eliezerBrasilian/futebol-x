import { Partida } from "./Partida";

export type Rodada = {
  nome: string;
  slug: string;
  rodada: number;
  status: string;
  proxima_rodada: Rodada;
  rodada_anterior: Rodada;
  partidas: Partida[];
  _link: string;
};
