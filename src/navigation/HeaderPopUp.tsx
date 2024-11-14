import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ProjectTag } from "../data/enums/ProjectTag";
import { Rotas } from "./Rotas";

interface HeaderPopUpProps {
  turnPopUpVisisibleOff: () => void;
}

export function HeaderPopUp({ turnPopUpVisisibleOff }: HeaderPopUpProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: 70,
        right: 45,
        backgroundColor: "#252323",
        height: 200,
        width: 200,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        rowGap: 10,
      }}
      onMouseLeave={turnPopUpVisisibleOff}
    >
      <HeaderPopUpItem
        turnPopUpVisisibleOff={turnPopUpVisisibleOff}
        text="Aplicativos (Kotlin)"
        tag={ProjectTag.APP}
      />
      <HeaderPopUpItem
        turnPopUpVisisibleOff={turnPopUpVisisibleOff}
        text="Executáveis (Shell-Java)"
        tag={ProjectTag.EXE}
      />
      <HeaderPopUpItem
        turnPopUpVisisibleOff={turnPopUpVisisibleOff}
        text="Sites (React)"
        tag={ProjectTag.SITE}
      />
      <HeaderPopUpItem
        turnPopUpVisisibleOff={turnPopUpVisisibleOff}
        text="APIs (SpringBoot)"
        tag={ProjectTag.API}
      />
      <HeaderPopUpItem
        turnPopUpVisisibleOff={turnPopUpVisisibleOff}
        text="Bibliotecas Android"
        tag={ProjectTag.LIB}
      />
    </div>
  );
}

interface HeaderPopUpItemProps {
  text: string;
  tag: string;
  turnPopUpVisisibleOff: () => void;
}
function HeaderPopUpItem({
  text,
  tag,
  turnPopUpVisisibleOff,
}: HeaderPopUpItemProps) {
  const [currentColor, setCurrentColor] = useState("#fff");
  return (
    <NavLink to={Rotas.PROJETOS + "/" + tag} onClick={turnPopUpVisisibleOff}>
      <p
        style={{ color: currentColor, cursor: "pointer" }}
        onMouseEnter={() => {
          setCurrentColor("yellow");
        }}
        onMouseLeave={() => {
          setCurrentColor("#fff");
        }}
      >
        {text}
      </p>
    </NavLink>
  );
}
