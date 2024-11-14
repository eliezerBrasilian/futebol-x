import { useNavigate } from "react-router-dom";
import { MatchInfo, MatchInfoType } from "../../data/types/MatchInfo";
import { Rotas } from "../../navigation/Rotas";
import "./MatchCard.css";
import { useEffect, useState } from "react";

interface MatchCardProps {
  data: MatchInfo;
}

export function MatchCard(props: MatchCardProps) {
  const nav = useNavigate();

  const [leftComp, setLeftComp] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (props.data.status == MatchInfoType.FINISHED) {
      setLeftComp(
        <p style={{ color: "red", fontSize: 11, fontStyle: "italic" }}>
          Já encerrado
        </p>
      );
    } else if (props.data.status == MatchInfoType.IN_PLAY) {
      setLeftComp(<p>rodada {props.data.rodada}</p>);
    } else if (props.data.status == MatchInfoType.CANCELLED) {
      setLeftComp(
        <p style={{ color: "red", fontSize: 11, fontStyle: "italic" }}>
          Jogo cancelado
        </p>
      );
    }
  }, [props.data.status]);

  return (
    <article
      className="match-card"
      onClick={function () {
        nav(Rotas.DETAILS + "/id");
      }}
    >
      <header>
        <img
          className="profile-image"
          src={props.data.campeonato.logo_url}
          alt="logo do campeonato"
        />
        <h4>{props.data.campeonato.nome}</h4>
      </header>

      <div className="match-info">
        <div className="left">
          {/* <h3>Status</h3> */}

          {leftComp}
        </div>

        <div className="linha-em-pe" />

        <div className="right">
          <div className="clubs">
            <div className="club">
              <img
                className="profile-image"
                src={props.data.time_a.logo_url}
                alt="time a"
                style={{ width: 30, height: 30 }}
              />
              <p>{props.data.time_a.nome}</p>
            </div>

            <div className="placar">
              <p>0</p>
              <p>x</p>
              <p>0</p>
            </div>

            <div className="club">
              <img
                className="profile-image"
                src={props.data.time_b.logo_url}
                alt="time a"
                style={{ width: 30, height: 30 }}
              />
              <p>{props.data.time_b.nome}</p>
            </div>
          </div>

          <footer>
            {props.data.emissoras.map((value, index) => (
              <div className="emissora" key={index}>
                <p>{value.nome}</p>
              </div>
            ))}
          </footer>
        </div>
      </div>
    </article>
  );
}
