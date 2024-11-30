import axios from "axios";
import { MatchInfo } from "../../data/types/MatchInfo";
import { MatchService } from "../MatchService";
import { ApiDataMapper } from "../../data/mapper/ApiDataMapper";
import { Partida } from "../../data/types/Partida";
import { RetornoPartidasApi } from "../../data/types/RetornoPartidasApi";

export class ApiFutebolDataImpl implements MatchService {
  private idBrasileiraoA = 10;

  async findMatchById(id: string): Promise<MatchInfo | undefined> {
    try {
      const response = await axios.get(
        `http://localhost:4000/futebol/partidas/${id}`
      );

      const partida: any = response.data;
      console.log("matche------");
      console.log(partida);

      return ApiDataMapper.getPartidaToMatchInfo(partida);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return undefined;
    }
  }

  async getPartidas(): Promise<MatchInfo[]> {
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
        // Itera pelas rodadas dentro de cada fase
        for (const [rodada, partidas] of Object.entries(fase)) {
          // Adiciona as partidas com a chave 'rodada'
          partidas.forEach((partida) => {
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
    throw new Error("Method not implemented.");
  }

  async getTomorrowMatches(): Promise<MatchInfo[]> {
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
