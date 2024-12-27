import Image from "next/image";
import estilos from "./Cards.module.css";

export default function Cards(props){
    return(
        <div className={estilos.card}>
            <figure className={estilos.containerFigure}>
                <Image className={estilos.imgCard} src={props.imagem} alt="props.nome"/>
            </figure>
            <div className={estilos.containerTextos}>
                <div className={estilos.boxTextos}>
                    <h3>{props.nome}</h3>
                    <small className={estilos.categoria}>{props.categoria}</small>
                    <p>{props.descricao}</p>
                    <span>R$ {props.preco}</span>
                </div>
            </div>
        </div>
    )
;}