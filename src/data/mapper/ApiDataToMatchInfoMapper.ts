import { MatchInfo, MatchInfoStatus, Tempo } from "../types/MatchInfo";

export class ApiDataToMatchInfoMapper {
  static getMatchList(matches: any[]) {
    const formatedMatches: MatchInfo[] = [];

    matches.forEach((apiMatch) => {
      return formatedMatches.push(this.getMatch(apiMatch));
    });

    return formatedMatches;
  }

  static getMatch(apiData: any) {
    const matchStart = new Date(apiData.utcDate).getTime(); // Início do jogo em timestamp
    const now = Date.now(); // Tempo atual em timestamp
    const elapsedMinutes = Math.floor((now - matchStart) / 60000); // Diferença em minutos

    let period: Tempo = null;
    if (apiData.status == MatchInfoStatus.IN_PLAY) {
      if (elapsedMinutes < 45) {
        period = "1T";
      } else if (elapsedMinutes > 45 && elapsedMinutes <= 90) period = "2T";
    }

    return {
      id: apiData.id,
      campeonato: {
        logo_url: apiData.competition.emblem,
        nome: apiData.competition.name,
      },
      dia: "",
      emissoras: [],
      horario: "",
      rodada: apiData.matchday,
      time_a: {
        logo_url: apiData.homeTeam.crest,
        nome: apiData.homeTeam.name,
        placar: apiData.score.fullTime.home,
      },
      time_b: {
        logo_url: apiData.awayTeam.crest,
        nome: apiData.awayTeam.name,
        placar: apiData.score.fullTime.away,
      },
      status: apiData.status,
      utcDate: apiData.utcDate,
      tempo: period,
    };
  }
}
