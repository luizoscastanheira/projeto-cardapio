import estilos from "./Cards.module.css";

export default function Cards(){
    return(
        <div className={estilos.card}>
            <figure></figure>
            <div className={estilos.containerTextos}>
                <div className={estilos.boxTextos}>
                    <h3>Prato</h3>
                    <small className={estilos.categoria}>Categoria</small>
                    <p>Descrição do prato</p>
                    <span>R$ 50.00</span>
                </div>
            </div>
        </div>
    )
;}