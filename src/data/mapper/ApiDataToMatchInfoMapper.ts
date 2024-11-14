import { MatchInfo } from "../types/MatchInfo";

export function ApiDataToMatchInfoMapper(matches: any[]) {
  const formatedMatches: MatchInfo[] = [];

  matches.forEach((value) =>
    formatedMatches.push({
      campeonato: {
        logo_url: value.competition.emblem,
        nome: value.competition.name,
      },
      dia: "",
      emissoras: [],
      horario: "",
      rodada: value.matchday,
      scores: [],
      time_a: {
        logo_url: value.homeTeam.crest,
        nome: value.homeTeam.name,
        placar: value.score.fullTime.home,
      },
      time_b: {
        logo_url: value.awayTeam.crest,
        nome: value.awayTeam.name,
        placar: value.score.fullTime.home,
      },
      status: value.status,
    })
  );

  return formatedMatches;
}
