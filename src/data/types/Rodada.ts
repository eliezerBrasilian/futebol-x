export type Rodada = {
  nome: string;
  slug: string;
  rodada: number;
  status: string;
  proxima_rodada: null;
  rodada_anterior: {
    nome: string;
    slug: string;
    rodada: number;
    status: string;
  };
  partidas: [
    {
      partida_id: number;
      campeonato: {
        campeonato_id: number;
        nome: string;
        slug: string;
      };
      placar: string;
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
      placar_mandante: null;
      placar_visitante: null;
      disputa_penalti: false;
      status: string;
      slug: string;
      data_realizacao: string;
      hora_realizacao: string;
      data_realizacao_iso: string;
      estadio: {
        estadio_id: number;
        nome_popular: string;
      };
      _link: string;
    }
  ];
  _link: string;
};
