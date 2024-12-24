// Componente Categorias
import estilos from "./Categorias.module.css";

export default function Categorias(){
    return(
        <section className={estilos.containerSecao}>
            <button className={estilos.botao}><span>Entradas</span></button>
            <button className={estilos.botao}><span>Massas</span></button>
            <button className={estilos.botao}><span>Carnes</span></button>
            <button className={estilos.botao}><span>Bebidas</span></button>
            <button className={estilos.botao}><span>Saladas</span></button>
            <button className={estilos.botao}><span>Sobremesas</span></button>
        </section>
    );
};