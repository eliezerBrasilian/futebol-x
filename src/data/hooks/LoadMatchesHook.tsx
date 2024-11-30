import { useState, useEffect, useCallback } from "react";
import { MatchInfo } from "../../data/types/MatchInfo";
import { useApiContext } from "../../context/ApiContext";

export function useLoadMatchesHook() {
  const [matchesList, setMatchesList] = useState<MatchInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const {
    getLiveMatches,
    getLastMatches,
    getNextMatches,
    getTodayMatches,
    getTomorrowMatches,
    liveMatchesList,
    loadedAll,
    setLoadedAll,
  } = useApiContext();

  const loadMatches = useCallback(async () => {
    if (!loadedAll) {
      setLoading(true);

      await Promise.all([
        getLiveMatches(),
        getLastMatches(),
        getNextMatches(),
        getTodayMatches(),
        getTomorrowMatches(),
      ]);

      setLoadedAll(true); // Marca que todos os dados foram carregados.
    }

    setMatchesList(liveMatchesList);
    setLoading(false);
  }, [
    getLiveMatches,
    getLastMatches,
    getNextMatches,
    getTodayMatches,
    getTomorrowMatches,
    liveMatchesList,
    loadedAll,
    setLoadedAll,
  ]);

  useEffect(() => {
    loadMatches(); // Chamado apenas uma vez no carregamento inicial.
  }, [loadMatches]);

  return { matchesList, setMatchesList, loading, setLoading };
}
