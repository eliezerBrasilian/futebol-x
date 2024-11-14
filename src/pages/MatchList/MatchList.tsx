import { useEffect, useState } from "react";
import { MatchInfo } from "../../data/types/MatchInfo";
import { MatchServiceImpl } from "../../services/impl/MatchServiceImpl";
import { MatchCard } from "../../components/MatchCard/MatchCard";
import { useLocation } from "react-router-dom";

export function MatchList() {
  const matchService = new MatchServiceImpl();

  const [matchesList, setMatchesList] = useState<MatchInfo[]>([]);

  const location = useLocation();

  const [containsHoje, setContainsHoje] = useState(true);

  useEffect(() => {
    const currentRouteName = location.pathname.split("/").pop();

    if (currentRouteName?.includes("hoje")) setContainsHoje(true);
    else setContainsHoje(false);

    async function loadMatches() {
      if (currentRouteName?.includes("hoje"))
        setMatchesList(await matchService.getTodayMatches());
      else {
        setMatchesList(await matchService.getTomorrowMatches());
      }
    }

    loadMatches();
  }, [location]);

  return (
    <div className="home-container">
      <section className="home-column">
        <h3>
          {containsHoje
            ? "Mostrando todos jogos de hoje"
            : "Mostrando jogos de amanhã"}
        </h3>

        {matchesList.length == 0 ? (
          <div>
            <h4>Não há nenhum jogo :(</h4>
          </div>
        ) : (
          matchesList.map((value, index) => (
            <MatchCard data={value} key={index} />
          ))
        )}
      </section>
    </div>
  );
}
