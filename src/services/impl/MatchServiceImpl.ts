import axios from "axios";
import { MatchInfo } from "../../data/types/MatchInfo";
import { MatchService } from "../MatchService";
import { ApiDataToMatchInfoMapper } from "../../data/mapper/ApiDataToMatchInfoMapper";
import { AppUtils } from "../../data/utils/AppUtils";

export class MatchServiceImpl implements MatchService {
  async findMatchById(id: string): Promise<MatchInfo | undefined> {
    try {
      const response = await axios.get(
        "http://localhost:4000/proxy/matches/" + id
      );

      const matche: any = response.data;
      console.log("matche------");
      console.log(matche);

      const todayMatches = ApiDataToMatchInfoMapper.getMatch(matche);

      return todayMatches;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return undefined;
    }
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

      const todayMatches = ApiDataToMatchInfoMapper.getMatchList(matches);

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

      const yesterdayMatches = ApiDataToMatchInfoMapper.getMatchList(matches);

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

      return ApiDataToMatchInfoMapper.getMatchList(matches);
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

      return ApiDataToMatchInfoMapper.getMatchList(matches);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
  }
}
