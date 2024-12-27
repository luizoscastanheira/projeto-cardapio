//'use client'
//import { useState } from "react";

// Importações Gerais
import Image from "next/image";

// Componente Categorias
import estilos from "./Categorias.module.css";
// Importando imagens
import Entrada from "../../../public/entrada.png";
import Massa from "../../../public/massa.png";
import Carne from "../../../public/carne.png";
import Bebida from "../../../public/bebidas.png";
import Salada from "../../../public/salada.png";
import Sobremesa from "../../../public/sobremesa.png";

// Importando funçoes
import {retornaProdutos, filtrarProdutos, produtosFiltrados} from "../../servico/index.js";

// Recebendo como props à partir do Home e repassadas ao componente atual as funções "set" para ajuste das variáveis de estado que estão em Home
export default function Categorias({setValorDoFiltro, setExibeTodosProdutos}){

// Atualizando as variáveis de estado do componente Home
const atualizarEstado = (categoria) =>{
    setValorDoFiltro(categoria)
    setExibeTodosProdutos(produtosFiltrados(categoria))
};

    return(
        <section className={estilos.containerSecao}>
            <button onClick={() => atualizarEstado("Entradas")} className={estilos.botao}><Image src={Entrada} alt="Imagem prato de entrada" className={estilos.imgBotoes}/><span>Entradas</span></button>
            <button onClick={() => atualizarEstado("Massas")} className={estilos.botao}><Image src={Massa} alt="Imagem prato de Massas" className={estilos.imgBotoes}/><span>Massas</span></button>
            <button onClick={() => atualizarEstado("Carnes")} className={estilos.botao}><Image src={Carne} alt="Imagem prato de Carnes" className={estilos.imgBotoes}/><span>Carnes</span></button>
            <button onClick={() => atualizarEstado("Bebidas")} className={estilos.botao}><Image src={Bebida} alt="Imagem Canecas de Bebidas" className={estilos.imgBotoes}/><span>Bebidas</span></button>
            <button onClick={() => atualizarEstado("Saladas")} className={estilos.botao}><Image src={Salada} alt="Imagem prato de Salada" className={estilos.imgBotoes}/><span>Saladas</span></button>
            <button onClick={() => atualizarEstado("Sobremesas")} className={estilos.botao}><Image src={Sobremesa} alt="Imagem taça de Sobremesa" className={estilos.imgBotoes}/><span>Sobremesas</span></button>
        </section>
    );
};