import { MatchInfo } from "../data/types/MatchInfo";

export interface MatchService {
  //getTomorrowMatches(): Promise<MatchInfo[]>;
  getTomorrowMatches(): Promise<MatchInfo[]>;
  getTodayMatches(): Promise<MatchInfo[]>;
  getYesterdayMatches(): Promise<MatchInfo[]>;
  getLiveMatches(): Promise<MatchInfo[]>;
  findMatchInfoById(id: string): MatchInfo;
}
