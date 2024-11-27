import { MatchInfo, MatchInfoStatus, Tempo } from "../types/MatchInfo";

export function ApiDataToMatchInfoMapper(matches: any[]) {
  const formatedMatches: MatchInfo[] = [];

  matches.forEach((value) => {
    console.log(value.utcDate);

    //

    const matchStart = new Date(value.utcDate).getTime(); // Início do jogo em timestamp
    const now = Date.now(); // Tempo atual em timestamp
    const elapsedMinutes = Math.floor((now - matchStart) / 60000); // Diferença em minutos

    let period: Tempo = null;
    if (value.status == MatchInfoStatus.IN_PLAY) {
      if (elapsedMinutes < 45) {
        period = "1T";
      } else if (elapsedMinutes > 45 && elapsedMinutes <= 90) period = "2T";
    }

    return formatedMatches.push({
      campeonato: {
        logo_url: value.competition.emblem,
        nome: value.competition.name,
      },
      dia: "",
      emissoras: [],
      horario: "",
      rodada: value.matchday,
      time_a: {
        logo_url: value.homeTeam.crest,
        nome: value.homeTeam.name,
        placar: value.score.fullTime.home,
      },
      time_b: {
        logo_url: value.awayTeam.crest,
        nome: value.awayTeam.name,
        placar: value.score.fullTime.away,
      },
      status: value.status,
      utcDate: value.utcDate,
      tempo: period,
    });
  });

  return formatedMatches;
}
