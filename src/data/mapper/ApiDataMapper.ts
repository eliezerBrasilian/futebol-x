import { MatchInfo } from "../types/MatchInfo";
import { Partida } from "../types/Partida";

export class ApiDataMapper {
  static getPartidasToMatchInfo(
    partidas: { rodada: string; partida: Partida }[]
  ): MatchInfo[] {
    let matchInfoList: MatchInfo[] = [];

    partidas.forEach((partida) => {
      matchInfoList.push(
        this.getPartidaToMatchInfo(partida.partida, partida.rodada)
      );
    });

    return matchInfoList;
  }

  static getPartidasToMatchInfo_(partidas: Partida[]): MatchInfo[] {
    let matchInfoList: MatchInfo[] = [];

    partidas.forEach((partida) => {
      matchInfoList.push(this.getPartidaToMatchInfo(partida, undefined));
    });

    return matchInfoList;
  }

  static getPartidaToMatchInfo(
    partida: Partida,
    rodada: string | undefined
  ): MatchInfo {
    let rodadaNumero = "";

    if (rodada != undefined) {
      // Extrai o número da rodada
      rodadaNumero = rodada?.match(/\d+/)?.[0] ?? "0"; // Captura o número ou retorna "0" como fallback
    }

    console.log(partida);

    return {
      id: String(partida?.partida_id),
      campeonato: {
        nome: partida.campeonato?.nome,
        logo_url: partida.campeonato?.slug,
        id: partida.campeonato?.campeonato_id?.toString(),
      },
      rodada: rodadaNumero?.toString(),
      horario: partida.hora_realizacao,
      dia: partida.data_realizacao,
      time_a: {
        logo_url: partida.time_mandante.escudo,
        nome: partida.time_mandante.nome_popular,
        placar: partida?.placar_mandante?.toString(),
        id: partida?.time_mandante.time_id?.toString(),
      },
      time_b: {
        logo_url: partida.time_visitante.escudo,
        nome: partida.time_visitante.nome_popular,
        placar: partida?.placar_visitante?.toString(),
        id: partida?.time_visitante.time_id?.toString(),
      },
      emissoras: [],
      status: partida.status,
      tempo: null,
      utcDate: partida.data_realizacao_iso,
      estadio: partida.estadio?.nome_popular,
    };
  }
}
