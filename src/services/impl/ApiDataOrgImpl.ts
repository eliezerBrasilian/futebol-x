import { MatchInfo } from "../../data/types/MatchInfo";
import { MatchService } from "../MatchService";

export class ApiDataOrgImpl implements MatchService {
  async getYesterdayMatches(): Promise<MatchInfo[]> {
    throw new Error("Method not implemented.");
  }

  findMatchById(id: string): Promise<MatchInfo | undefined> {
    console.log(id);
    throw new Error("Method not implemented.");
  }

  async getLiveMatches(): Promise<MatchInfo[]> {
    // try {
    //   const response = await axios.get("http://localhost:4000/proxy/matches", {
    //     params: {
    //       competitions: "2013,2015,2002,2019,2187,2152,2001,2014,2000,2011",
    //       status: "LIVE",
    //     },
    //   });

    //   //const matches: any[] = response.data.matches;
    //   const todayMatches: MatchInfo[] = [];

    //   //  return ApiDataMapper.getMatchListFromApiDataOrg(matches);

    //   return todayMatches;
    // } catch (error) {
    //   console.error("Erro ao buscar dados:", error);
    //   return [];
    // }

    throw new Error("Method not implemented.");
  }

  async getTomorrowMatches(): Promise<MatchInfo[]> {
    throw new Error("Method not implemented.");
  }

  async getTodayMatches(): Promise<MatchInfo[]> {
    throw new Error("Method not implemented.");
  }
}
