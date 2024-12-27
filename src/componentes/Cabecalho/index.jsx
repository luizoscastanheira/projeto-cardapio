import estilos from "./Cabecalho.module.css";

export default function Cabecalho(){
    return(
        <header className={estilos.containerHeader}>
            <div className={estilos.boxBanner}>
                <h1>RESTAURANT</h1>
                <p>
                    De pratos clássicos a criações supreendentes nosso cardápio é um requinte de sabores refinados.
                </p>
            </div>
        </header>
    );
}