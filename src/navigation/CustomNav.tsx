import { Linha } from "./Linha";

interface CustomNavProps {
  titulo: string;
  isActive: boolean;
  onClick?: () => void;
}

export function CustomNav(props: CustomNavProps) {
  return (
    <div onClick={props.onClick}>
      <p
        style={{
          color: props.isActive ? "rgb(28, 196, 81) " : "black",
        }}
      >
        {props.titulo}
      </p>

      {props.isActive && <Linha borderBottomColor={"rgb(28, 196, 81) "} />}
    </div>
  );
}
