import { useNavigate } from "react-router-dom";
import { MatchInfo, MatchInfoStatus } from "../../data/types/MatchInfo";
import { Rotas } from "../../navigation/Rotas";
import "./MatchCard.css";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface MatchCardProps {
  data: MatchInfo;
}

export function MatchCard(props: MatchCardProps) {
  const nav = useNavigate();

  const [leftComp, setLeftComp] = useState<JSX.Element | null>(null);

  useEffect(() => {
    console.log("tempo: " + props.data.tempo);
    if (
      props.data.status == MatchInfoStatus.FINISHED ||
      props.data.status == "finalizado"
    ) {
      setLeftComp(
        <p style={{ color: "red", fontSize: 11, fontStyle: "italic" }}>
          Já encerrado
        </p>
      );
    } else if (
      props.data.status == MatchInfoStatus.IN_PLAY ||
      props.data.status == "andamento"
    ) {
      setLeftComp(<p className="match-status">AO VIVO</p>);
    } else if (
      props.data.status == MatchInfoStatus.CANCELLED ||
      props.data.status == "cancelado"
    ) {
      setLeftComp(
        <p style={{ color: "red", fontSize: 11, fontStyle: "italic" }}>
          Jogo cancelado
        </p>
      );
    } else if (
      props.data.status == MatchInfoStatus.TIMED ||
      props.data.status == "agendado"
    ) {
      setLeftComp(
        <p style={{ color: "green", fontSize: 11, fontStyle: "italic" }}>
          Agendado
        </p>
      );
    }
  }, [props.data.status]);

  return (
    <article
      className="match-card"
      onClick={function () {
        nav(`${Rotas.DETAILS}/${props.data.id}`);
      }}
    >
      <header>
        <div className="left">
          <img
            className="profile-image"
            src={props.data.campeonato.logo_url}
            alt="logo do campeonato"
          />
          <p>{props.data.campeonato.nome}</p>
        </div>
        <p>Rodada {props.data.rodada}</p>
      </header>

      <div className="match-info">
        <div className="left">{leftComp}</div>
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
              <p>{props.data.time_a.placar}</p>
              <p>x</p>
              <p>{props.data.time_b.placar}</p>
            </div>

            <div className="club">
              <img
                className="profile-image"
                src={props.data.time_b.logo_url}
                alt="time b"
                style={{ width: 30, height: 30 }}
              />
              <p>{props.data.time_b.nome}</p>
            </div>
          </div>

          <footer>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
              size="small"
            >
              Detalhes da Partida
            </Button>
          </footer>
        </div>
      </div>
    </article>
  );
}
