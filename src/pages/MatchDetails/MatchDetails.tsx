import { useEffect, useState } from "react";
import { MatchServiceImpl } from "../../services/impl/MatchServiceImpl";
import { MatchInfo } from "../../data/types/MatchInfo";
import "./MatchDetails.css";
export function MatchDetails() {
  const matchService = new MatchServiceImpl();

  const idReceived = "123";

  const [matchDetails, setMatchDetails] = useState<MatchInfo | undefined>(
    undefined
  );

  useEffect(() => {
    setMatchDetails(matchService.findMatchInfoById(idReceived));
  }, []);

  return (
    <div className="match-details">
      <article>
        <h1 className="title">
          Yokohama F. Marinos X Buriram United: Saiba onde assistir o jogo ao
          vivo.
        </h1>
        <h2>
          Onde assistir Yokohama F. Marinos X Buriram United ao vivo na TV e
          Internet?
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
            <p>League Stage - 4</p>
          </div>
        </header>

        <div className="details-row">
          <div className="time-container">
            <div className="img-container">
              <img alt="time principal" src={matchDetails?.time_a.logo_url} />
            </div>

            <h1>{matchDetails?.time_a.nome}</h1>
          </div>
          <div>
            <h1>{matchDetails?.horario}</h1>
            <h2>quarta, 06/11</h2>
          </div>
          <div className="time-container">
            <div className="img-container">
              <img alt="time principal" src={matchDetails?.time_b.logo_url} />
            </div>

            <h1>{matchDetails?.time_b.nome}</h1>
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
          As equipes entram em campo nesta segunda às 18:30H pelo Brasileirão
          Série B, veja agora como acompanhar ao vivo na TV e na internet.
        </p>
        <p>
          Vila Nova enfrenta o Ponte Preta pela Rodada 36 do Brasileirão Série
          B, o jogo será transmitido por SPORTV, PREMIERE.
        </p>
        <p>
          aiba agora onde assistir o jogo de futebol Ao vivo entre Vila Nova X
          Ponte Preta pelo Brasileirão Série B, o jogo será às 18:30, do dia
          11/11/2024, e será transmitido por SPORTV, PREMIERE.
        </p>
      </section>
    </div>
  );
}
