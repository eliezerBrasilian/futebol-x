import { MatchInfo } from "../types/MatchInfo";
import { Partida } from "../types/Partida";

export class ApiDataMapper {
  static getPartidasToMatchInfo(
    partidas: { rodada: string; partida: Partida }[],
    campeonatoId: number,
    nomeCampeonato: string
  ): MatchInfo[] {
    let matchInfoList: MatchInfo[] = [];

    partidas.forEach((partida) => {
      matchInfoList.push(
        this.getPartidaToMatchInfo(
          partida.partida,
          partida.rodada,
          campeonatoId,
          nomeCampeonato
        )
      );
    });

    return matchInfoList;
  }

  static getPartidasToMatchInfo_(partidas: Partida[]): MatchInfo[] {
    let matchInfoList: MatchInfo[] = [];

    partidas.forEach((partida) => {
      matchInfoList.push(
        this.getPartidaToMatchInfo(
          partida,
          undefined,
          0,
          partida.campeonato.nome
        )
      );
    });

    return matchInfoList;
  }

  static getPartidaToMatchInfo(
    partida: Partida,
    rodada: string | undefined,
    campeonatoId: number | undefined,
    nomeCampeonato: string
  ): MatchInfo {
    let rodadaNumero = "";

    if (rodada != undefined) {
      // Extrai o número da rodada
      rodadaNumero = rodada?.match(/\d+/)?.[0] ?? "0"; // Captura o número ou retorna "0" como fallback
    }

    return {
      id: String(partida?.partida_id),
      campeonato: {
        nome: nomeCampeonato,
        logo_url:
          campeonatoId == undefined
            ? this.getCampeonatoLogoUrl(partida.campeonato.campeonato_id)
            : this.getCampeonatoLogoUrl(campeonatoId),
        campeonato_id: partida.campeonato?.campeonato_id?.toString(),
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

  static getCampeonatoLogoUrl(campeonatoId: number): string {
    console.log("----campeo: " + campeonatoId);

    if (campeonatoId == 14 || campeonatoId == 10)
      return "https://imgs.search.brave.com/iiAchlywX-ZfYaB2iYN2NBsdqYOCgoiTH0Qyq7ewmWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/c3BuZy5vcmcvZG93/bmxvYWQvYnJhc2ls/ZWlyYW8tc2VyaWUt/YS9sb2dvLWJyYXNp/bGVpcmFvLTIwNDgu/cG5n";
    else return "";
  }
}
