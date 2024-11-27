import axios from "axios";
import { MatchInfo, MatchInfoStatus } from "../../data/types/MatchInfo";
import { MatchService } from "../MatchService";
import { ApiDataToMatchInfoMapper } from "../../data/mapper/ApiDataToMatchInfoMapper";
import { AppUtils } from "../../data/utils/AppUtils";

export class MatchServiceImpl implements MatchService {
  findMatchInfoById(id: string): MatchInfo {
    return {
      campeonato: {
        logo_url:
          "https://logodownload.org/wp-content/uploads/2018/10/campeonato-brasileiro-logo-brasileirao-logo.png",
        nome: "Campeonato Brasileiro",
      },
      horario: "08:00",
      time_a: {
        logo_url:
          "https://logodownload.org/wp-content/uploads/2016/10/atletico-mineiro-logo-0.png",
        nome: "Atletico MG",
        placar: 0,
      },
      time_b: {
        logo_url:
          "https://logodetimes.com/times/cruzeiro/logo-cruzeiro-4096.png",
        nome: "Cruzeiro",
        placar: 0,
      },

      dia: "",
      emissoras: [
        {
          nome: "Globo",
          logo_url:
            "https://logodownload.org/wp-content/uploads/2013/12/rede-globo-logo-0.png",
          isCanalAberto: true,
        },
      ],
      rodada: "",
      status: MatchInfoStatus.FINISHED,
      tempo: null,
      utcDate: "",
    };
  }

  async getTodayMatches(): Promise<MatchInfo[]> {
    try {
      const response = await axios.get("http://localhost:4000/proxy/matches", {
        params: {
          competitions: "2013,2015,2002,2019,2187,2152,2001,2014,2000,2011",
        },
      });

      const matches: any[] = response.data.matches;
      console.log(matches);

      const todayMatches = ApiDataToMatchInfoMapper(matches);

      return todayMatches;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
  }

  async getYesterdayMatches(): Promise<MatchInfo[]> {
    try {
      const response = await axios.get("http://localhost:4000/proxy/matches", {
        params: {
          competitions: "2013,2015,2002,2019,2187,2152,2001,2014,2000,2011",
          dateFrom: AppUtils.getDayBeforeYesterdayDate(),
          dateTo: AppUtils.getYesterdayDate(),
        },
      });

      const matches: any[] = response.data.matches;

      const yesterdayMatches = ApiDataToMatchInfoMapper(matches);

      return yesterdayMatches;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
  }

  async getLiveMatches(): Promise<MatchInfo[]> {
    try {
      const response = await axios.get("http://localhost:4000/proxy/matches", {
        params: {
          competitions: "2013,2015,2002,2019,2187,2152,2001,2014,2000,2011",
          status: "LIVE",
        },
      });

      const matches: any[] = response.data.matches;

      return ApiDataToMatchInfoMapper(matches);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
  }

  async getTomorrowMatches(): Promise<MatchInfo[]> {
    try {
      const response = await axios.get("http://localhost:4000/proxy/matches", {
        params: {
          competitions: "2013,2015,2002,2019,2187,2152,2001,2014,2000,2011",
          dateFrom: AppUtils.getTomorrowDate(),
          dateTo: AppUtils.getDayAfterTomorrowDate(),
        },
      });

      const matches: any[] = response.data.matches;

      return ApiDataToMatchInfoMapper(matches);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
  }
}
