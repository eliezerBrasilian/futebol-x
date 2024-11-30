import axios from "axios";
import { MatchInfo } from "../../data/types/MatchInfo";
import { MatchService } from "../MatchService";
import { ApiDataMapper } from "../../data/mapper/ApiDataMapper";
import { Partida } from "../../data/types/Partida";
import { RetornoPartidasApi } from "../../data/types/RetornoPartidasApi";
import { MockData } from "../../data/mock/MockData";

export class ApiFutebolDataImpl implements MatchService {
  private mock: MockData = new MockData();

  async getNextMatches(): Promise<MatchInfo[]> {
    try {
      const allMatches = await this.getPartidas();

      // Calcula o dia após amanhã
      const dayAfterTomorrow = new Date();
      dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

      // Armazena as datas dos próximos 5 dias (a partir do dia após amanhã)
      const nextFiveDays: string[] = [];
      for (let i = 0; i < 5; i++) {
        const date = new Date(dayAfterTomorrow);
        date.setDate(dayAfterTomorrow.getDate() + i);
        nextFiveDays.push(date.toLocaleDateString("pt-BR")); // Formato dd/mm/yyyy
      }

      console.log("------Próximos 5 dias------");
      console.log(nextFiveDays);

      // Filtra as partidas cuja data_realizacao está nos próximos 5 dias
      const nextMatches = allMatches.filter((match) =>
        nextFiveDays.includes(match.dia)
      );

      console.log(nextMatches);

      return nextMatches;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
  }

  async getLastMatches(): Promise<MatchInfo[]> {
    try {
      const allMatches = await this.getPartidas();

      // Obtém a data de ontem
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      // Armazena as datas dos últimos 5 dias (incluindo ontem)
      const lastFiveDays: string[] = [];
      for (let i = 0; i < 5; i++) {
        const date = new Date(yesterday);
        date.setDate(yesterday.getDate() - i);
        lastFiveDays.push(date.toLocaleDateString("pt-BR")); // Formato dd/mm/yyyy
      }

      console.log("------Últimos 5 dias------");
      console.log(lastFiveDays);

      // Filtra as partidas cuja data_realizacao está nos últimos 5 dias
      const lastMatches = allMatches.filter((match) =>
        lastFiveDays.includes(match.dia)
      );

      console.log(lastMatches);

      return lastMatches;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
    return this.mock.getYesterdayMatches();
  }

  private idBrasileiraoA = 10;

  async findMatchById(id: string): Promise<MatchInfo | undefined> {
    try {
      const response = await axios.get(
        `http://localhost:4000/futebol/partidas/${id}`
      );

      const partida: any = response.data;
      console.log("matche------");
      console.log(partida);

      return ApiDataMapper.getPartidaToMatchInfo(partida, undefined);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return undefined;
    }
  }

  async getPartidas(): Promise<MatchInfo[]> {
    return this.mock.getYesterdayMatches();
    const allMatches: { rodada: string; partida: Partida }[] = [];
    try {
      const response = await axios.get(
        `http://localhost:4000/futebol/campeonatos/${this.idBrasileiraoA}/partidas/`
      );

      const partidaJson: RetornoPartidasApi = response.data;
      /*
        "partidas": {
          "fase-unica": {
      fase vai receber os objetos aqui dentro, e transformá-los em vetor

      */

      for (const fase of Object.values(partidaJson.partidas)) {
        console.log("fase: ");
        console.log(fase);
        // Itera pelas rodadas dentro de cada fase
        for (const [rodada, partidas] of Object.entries(fase)) {
          // Adiciona as partidas com a chave 'rodada'
          partidas.forEach((partida) => {
            console.log("partidas: ");
            console.log(partida);

            allMatches.push({ rodada, partida });
          });
        }
      }

      // Mapeia os dados para a estrutura de MatchInfo
      return ApiDataMapper.getPartidasToMatchInfo(allMatches);
    } catch (error) {
      console.error(
        `Erro ao buscar partidas do campeonato ${this.idBrasileiraoA}:`,
        error
      );
      return [];
    }
  }

  async getTodayMatches(): Promise<MatchInfo[]> {
    return this.mock.getYesterdayMatches();
    try {
      const allMatches = await this.getPartidas();

      // Obtém a data de hoje no formato dd/mm/yyyy
      const today = new Date();
      var todayString = today.toLocaleDateString("pt-BR"); // Formato dd/mm/yyyy
      console.log(todayString);

      //todayString = "20/11/2024";

      console.log("------jogos de hoje------");

      // Filtra as partidas cuja data_realizacao é igual à data de hoje
      const todayMatches = allMatches.filter(
        (match) => match.dia === todayString
      );

      console.log(todayMatches);

      return todayMatches;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
  }

  async getYesterdayMatches(): Promise<MatchInfo[]> {
    return this.mock.getYesterdayMatches();
    try {
      const allMatches = await this.getPartidas();

      // Obtém a data de ontem no formato dd/mm/yyyy
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1); // Subtrai 1 dia para obter a data de ontem
      var yesterdayString = yesterday.toLocaleDateString("pt-BR"); // Formato dd/mm/yyyy
      console.log(yesterdayString);

      console.log("------jogos de ontem------");

      // Filtra as partidas cuja data_realizacao é igual à data de ontem
      const yesterdayMatches = allMatches.filter(
        (match) => match.dia === yesterdayString
      );

      console.log(yesterdayMatches);

      return yesterdayMatches;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
  }

  async getLiveMatches(): Promise<MatchInfo[]> {
    return this.mock.getYesterdayMatches();
    try {
      const response = await axios.get(`http://localhost:4000/futebol/ao-vivo`);

      const partidas: Partida[] = response.data;

      return ApiDataMapper.getPartidasToMatchInfo_(partidas);
    } catch (error) {
      console.error("Erro ao buscar partidas ao vivo:", error);
      return [];
    }
  }

  async getTomorrowMatches(): Promise<MatchInfo[]> {
    return this.mock.getYesterdayMatches();
    try {
      const allMatches = await this.getPartidas();

      // Obtém a data de amanhã no formato dd/mm/yyyy
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1); // Avança para o próximo dia
      var tomorrowString = tomorrow.toLocaleDateString("pt-BR"); // Formato dd/mm/yyyy
      console.log(tomorrowString);

      console.log("------jogos de amanhã------");

      // Filtra as partidas cuja data_realizacao é igual à data de amanhã
      const tomorrowMatches = allMatches.filter(
        (match) => match.dia === tomorrowString
      );

      console.log(tomorrowMatches);

      return tomorrowMatches;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
  }
}
