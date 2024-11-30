export type Partida = {
  partida_id: number;
  campeonato: {
    campeonato_id: number;
    nome: string;
    slug: string;
  };
  placar: string;
  rodada_atual: string;
  time_mandante: {
    time_id: number;
    nome_popular: string;
    sigla: string;
    escudo: string;
  };
  time_visitante: {
    time_id: number;
    nome_popular: string;
    sigla: string;
    escudo: string;
  };
  placar_mandante: number;
  placar_visitante: number;
  disputa_penalti: false;
  status: string; //"finalizado" ou agendado // agendado
  slug: string;
  data_realizacao: string;
  hora_realizacao: string;
  data_realizacao_iso: string;
  estadio: {
    estadio_id: number;
    nome_popular: string;
  };
  _link: string;
};
