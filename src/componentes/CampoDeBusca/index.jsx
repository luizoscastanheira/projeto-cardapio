import estilos from "./CampoDeBusca.module.css";
// Importando as funções
import { retornaProdutos, produtosFiltrados, buscaTexto } from "@/servico/index";

export default function CampoDeBusca({setValorDoFiltro, setExibeTodosProdutos}){

// Criando um função para buscar produto
const handleBuscarProduto = (textoDigitado) => {
    setValorDoFiltro(textoDigitado)
    setExibeTodosProdutos(buscaTexto(textoDigitado))
    console.log(textoDigitado)
}

    return(
        <div className={estilos.containerBusca}>
            <input className={estilos.inputBusca}
            type="text"
            onChange={(event) => handleBuscarProduto(event.target.value)}
            placeholder="Pesquise aqui um dos pratos de nosso cardápio."
            />
        </div>
    );
}