import Image from "next/image";
import estilos from "./CampoDeBusca.module.css";
// Importando imagem
import Lupa from "../../../public/lupa.png";

export default function CampoDeBusca(){
    return(
        <div className={estilos.containerBusca}>
            <input className={estilos.inputBusca}
            type="text"
            placeholder="Pesquise aqui um dos pratos de nosso cardápio."
            />
        </div>
    );
}