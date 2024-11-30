import { useEffect, useState } from "react";
import { MatchInfo } from "../../data/types/MatchInfo";
import { ApiFutebolDataImpl as MatchServiceImpl } from "../../services/impl/ApiFutebolDataImpl";
import { MatchCard } from "../../components/MatchCard/MatchCard";
import { useLocation } from "react-router-dom";
import ReactLoading from "react-loading";

export function MatchList() {
  const matchService = new MatchServiceImpl();

  const [matchesList, setMatchesList] = useState<MatchInfo[]>([]);

  const location = useLocation();

  const [containsHoje, setContainsHoje] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentRouteName = location.pathname.split("/").pop();

    if (currentRouteName?.includes("hoje")) setContainsHoje(true);
    else setContainsHoje(false);

    async function loadMatches() {
      if (currentRouteName?.includes("hoje")) {
        setMatchesList(await matchService.getTodayMatches());
        setLoading(false);
      } else {
        setMatchesList(await matchService.getTomorrowMatches());
        setLoading(false);
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
            : "Mostrando próximos jogos"}
        </h3>

        {loading ? (
          <div>
            <ReactLoading
              type={"balls"}
              color={"green"}
              height={667}
              width={105}
            />
          </div>
        ) : matchesList.length == 0 ? (
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
