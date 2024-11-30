import { useEffect, useState } from "react";
//import { ApiFutebolDataImpl as MatchServiceImpl } from "../../services/impl/ApiFutebolDataImpl";
import { MatchInfo } from "../../data/types/MatchInfo";
import "./MatchDetails.css";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { MockData } from "../../data/mock/MockData";

enum MatchStatus {
  IDLE,
}

export function MatchDetails() {
  // const matchService = new MatchServiceImpl();
  const mock = new MockData();

  const { id } = useParams();

  console.log(id);

  const [matchDetails, setMatchDetails] = useState<
    MatchInfo | undefined | MatchStatus
  >(MatchStatus.IDLE);

  useEffect(() => {
    async function findMatchById() {
      if (id != undefined)
        //setMatchDetails(await matchService.findMatchById(id));
        setMatchDetails(mock.findOneMatch());
      else setMatchDetails(undefined);
    }
    findMatchById();
  }, []);

  if (matchDetails == MatchStatus.IDLE)
    return (
      <div
        className="match-details"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 200,
        }}
      >
        <ReactLoading type={"balls"} color={"green"} height={667} width={105} />
      </div>
    );
  else if (matchDetails == undefined)
    return (
      <div
        className="match-details"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 200,
        }}
      >
        <h1>A partida selecionada não foi encontrada</h1>
      </div>
    );

  if (matchDetails)
    return (
      <div className="match-details">
        <article>
          <h1 className="title">
            Futebol X 👌 {matchDetails?.time_a.nome} X{" "}
            {matchDetails?.time_b.nome}: Saiba onde assistir o jogo ao vivo.
          </h1>
          <h2>
            Onde assistir {matchDetails?.time_a.nome} X{" "}
            {matchDetails?.time_b.nome} ao vivo na TV e Internet?
          </h2>
        </article>

        <section className="main-section">
          <header className="campeonato-div">
            <img
              className="campeonato-logo"
              alt="campeonato"
              src={matchDetails?.campeonato.logo_url}
            />
            <div>
              <h3>{matchDetails?.campeonato.nome}</h3>
              <p>
                {matchDetails?.campeonato.nome} - {matchDetails?.rodada}
              </p>
            </div>
          </header>

          <div className="details-row">
            <div className="time-container">
              <div className="img-container">
                <img alt="time principal" src={matchDetails?.time_a.logo_url} />
              </div>

              <div>
                <h1>{matchDetails?.time_a.nome}</h1>
                <h1>{matchDetails.time_a.placar}</h1>
              </div>
            </div>

            <h1>X</h1>

            <div className="time-container">
              <div className="img-container">
                <img alt="time principal" src={matchDetails?.time_b.logo_url} />
              </div>
              <div>
                <h1>{matchDetails?.time_b.nome}</h1>
                <h1>{matchDetails.time_b.placar}</h1>
              </div>
            </div>
          </div>

          <p>
            Onde assistir {matchDetails?.time_a.nome} X{" "}
            {matchDetails?.time_b.nome}?
          </p>
        </section>

        <section className="about">
          <h1>Sobre a partida</h1>
          <p style={{ fontWeight: "bold" }}>
            As equipes entram em campo nesta segunda às {matchDetails?.horario}{" "}
            pelo {matchDetails?.campeonato.nome}, veja agora como acompanhar ao
            vivo na TV e na internet.
          </p>
          <p>
            {matchDetails?.time_a.nome} enfrenta o {matchDetails?.time_b.nome}{" "}
            pela Rodada {matchDetails?.rodada} do{" "}
            {matchDetails?.campeonato.nome}.
          </p>
          <p>
            Saiba agora onde assistir o jogo de futebol Ao vivo entre{" "}
            {matchDetails?.time_a.nome} X{matchDetails?.time_b.nome} pelo{" "}
            {matchDetails?.campeonato.nome}, o jogo será às{" "}
            {matchDetails?.horario.toString()}, do dia {matchDetails?.dia}.
          </p>
        </section>
      </div>
    );
}
