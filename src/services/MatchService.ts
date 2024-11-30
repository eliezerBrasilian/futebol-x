import { MatchInfo } from "../data/types/MatchInfo";

export interface MatchService {
  getTomorrowMatches(): Promise<MatchInfo[]>;
  getTodayMatches(): Promise<MatchInfo[]>;
  getLastMatches(): Promise<MatchInfo[]>;
  getNextMatches(): Promise<MatchInfo[]>;
  getYesterdayMatches(): Promise<MatchInfo[]>;
  getLiveMatches(): Promise<MatchInfo[]>;
  findMatchById(id: string): Promise<MatchInfo | undefined>;
}
