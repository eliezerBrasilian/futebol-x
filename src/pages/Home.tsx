import "../App.css";
//import { MatchServiceImpl } from "../services/impl/MatchServiceImpl";
import { MatchCard } from "../components/MatchCard/MatchCard";
import { useEffect, useMemo, useState } from "react";
import { MatchInfo } from "../data/types/MatchInfo";
import ReactLoading from "react-loading";
import { MockData } from "../data/mock/MockData";

export function Home() {
  // const matchService = new MatchServiceImpl();
  const [optionSelected, setOptionSelected] = useState(3);
  const [matchesList, setMatchesList] = useState<MatchInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const mock = new MockData();

  useEffect(() => {
    async function loadMatches() {
      //setMatchesList(await matchService.getLiveMatches());
      setMatchesList(mock.findLiveMatches());
      setLoading(false);
    }

    loadMatches();
  }, []);

  const optionClicked = async (id: string) => {
    setOptionSelected(Number(id));
    setMatchesList([]);
    if (id == "0") {
      //setMatchesList(await matchService.getYesterdayMatches());
      setMatchesList(mock.getYesterdayMatches());
    } else if (id == "1") {
      // setMatchesList(await matchService.getTodayMatches());
      setMatchesList(mock.getTodayMatches());
    } else if (id == "2") {
      //setMatchesList(await matchService.getTomorrowMatches());
      setMatchesList(mock.getTomorrowMatches());
    } else if (id == "3") {
      // setMatchesList(await matchService.getLiveMatches());
      setMatchesList(mock.findLiveMatches());
    }
  };

  const titleOver = useMemo(() => {
    if (optionSelected == 0) {
      return "Alguns jogos de ontem";
    } else if (optionSelected == 1) {
      return "Alguns jogos de hoje";
    } else if (optionSelected == 2) {
      return "Alguns jogos que ainda vão acontecer";
    }

    return "Exibindo jogos Ao Vivo";
  }, [optionSelected]);

  return (
    <div className="home-container">
      <section className="home-column">
        <article className="description-card">
          <p className="text-content">
            Veja como assistir o seu futebol ao vivo com o Futebol na TV, a
            principal plataforma para os amantes do futebol que buscam
            informações sobre jogos transmitidos ao vivo na televisão e
            internet.
          </p>
          <footer>
            <div
              onClick={() => optionClicked("0")}
              className="option"
              style={{
                borderColor:
                  optionSelected == 0
                    ? "rgb(28, 196, 81) "
                    : "rgba(154, 159, 156, 0.575)",
              }}
            >
              <p>ÚLTIMOS</p>
            </div>
            <div
              onClick={() => optionClicked("1")}
              className="option"
              style={{
                borderColor:
                  optionSelected == 1
                    ? "rgb(28, 196, 81) "
                    : "rgba(154, 159, 156, 0.575)",
              }}
            >
              <p>HOJE</p>
            </div>
            <div
              onClick={() => optionClicked("2")}
              className="option"
              style={{
                borderColor:
                  optionSelected == 2
                    ? "rgb(28, 196, 81) "
                    : "rgba(154, 159, 156, 0.575)",
              }}
            >
              <p>PRÓXIMOS</p>
            </div>
            <div
              onClick={() => optionClicked("3")}
              className="option"
              style={{
                borderColor:
                  optionSelected == 3
                    ? "rgb(28, 196, 81) "
                    : "rgba(154, 159, 156, 0.575)",
              }}
            >
              <p>AO VIVO</p>
            </div>
          </footer>
        </article>

        <h3>{titleOver}</h3>
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
