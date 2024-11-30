import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { MatchInfo } from "../data/types/MatchInfo";
import { ApiFutebolDataImpl } from "../services/impl/ApiFutebolDataImpl";

interface ApiContextInterface {
  lastMatchesList: MatchInfo[];
  todayMatchesList: MatchInfo[];
  nextMatchesList: MatchInfo[];
  liveMatchesList: MatchInfo[];
  tomorrowMatchesList: MatchInfo[];
  loadedAll: boolean;
  getTomorrowMatches(): Promise<void>;
  getTodayMatches(): Promise<void>;
  getLastMatches(): Promise<void>;
  getNextMatches(): Promise<void>;
  getLiveMatches(): Promise<void>;
  setLoadedAll: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContext: ApiContextInterface = {
  lastMatchesList: [],
  todayMatchesList: [],
  nextMatchesList: [],
  liveMatchesList: [],
  tomorrowMatchesList: [],
  loadedAll: false,

  getTomorrowMatches: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  getTodayMatches: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  getLastMatches: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },

  getLiveMatches: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  getNextMatches: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },

  setLoadedAll: function (_value: SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  },
};

const ApiContext = createContext(defaultContext);

export function useApiContext() {
  return useContext(ApiContext);
}

interface ApiContextProps {
  children: ReactNode;
}

export function ApiContextProvider({ children }: ApiContextProps) {
  const [lastMatchesList, setLastMatches] = useState<MatchInfo[]>([]);
  const [todayMatchesList, setTodayMatches] = useState<MatchInfo[]>([]);
  const [nextMatchesList, setNextMatches] = useState<MatchInfo[]>([]);
  const [liveMatchesList, setLiveMatches] = useState<MatchInfo[]>([]);
  const [tomorrowMatchesList, setTomorowMatches] = useState<MatchInfo[]>([]);

  const [loadedAll, setLoadedAll] = useState(false);

  const matchService = new ApiFutebolDataImpl();

  async function getLiveMatches(): Promise<void> {
    setLiveMatches(await matchService.getLiveMatches());
  }

  async function getTomorrowMatches(): Promise<void> {
    setTomorowMatches(await matchService.getTomorrowMatches());
  }

  async function getTodayMatches(): Promise<void> {
    setTodayMatches(await matchService.getTodayMatches());
  }

  async function getLastMatches(): Promise<void> {
    setLastMatches(await matchService.getLastMatches());
  }

  async function getNextMatches(): Promise<void> {
    setNextMatches(await matchService.getNextMatches());
  }

  return (
    <ApiContext.Provider
      value={{
        lastMatchesList,
        todayMatchesList,
        nextMatchesList,
        liveMatchesList,
        tomorrowMatchesList,
        getLastMatches,
        getLiveMatches,
        getNextMatches,
        getTodayMatches,
        getTomorrowMatches,
        loadedAll,
        setLoadedAll,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
