'use client'
import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";

// Importando Componentes
import Categorias from "@/componentes/Categorias";
import CampoDeBusca from "@/componentes/CampoDeBusca";
import Cards from "@/componentes/Cards";
import Cabecalho from "@/componentes/Cabecalho";

// Importando as funções
import { retornaProdutos, produtosFiltrados } from "@/servico/index";

export default function Home() {

const [valorDoFiltro, setValorDoFiltro] = useState("Entradas")

// Variável de Estado que busca uma função para exibir todos os produtos
// Para teste - Trocando entre as funções retornaProdutos e produtosFiltrados nós mudamos os cards listados
const [exibeTodosProdutos, setExibeTodosProdutos] = useState(produtosFiltrados(valorDoFiltro)); 

return (
    <>
      <Cabecalho />
      <main className={estilos.containerMain}>

        {/* Passando para o componente Categorias as funcoes de troca de estado das variáveis */}
        <Categorias setValorDoFiltro={setValorDoFiltro} setExibeTodosProdutos={setExibeTodosProdutos} />
        
        <p>{valorDoFiltro}</p>
        
        <CampoDeBusca setValorDoFiltro={setValorDoFiltro} setExibeTodosProdutos={setExibeTodosProdutos}/>
        
        <section className={estilos.boxCardapio}>
          <h2>Cardápio - {valorDoFiltro}</h2>
          <div className={estilos.boxCards}>
          
            {
                exibeTodosProdutos.map((produto) => (
                    <Cards key={produto.id} nome={produto.nome} categoria={produto.categoria} descricao={produto.descricao} preco={produto.preco} imagem={produto.imagem}/>
                ))
            }
          

          </div>
        </section>
      </main>
    </>
  );
}
