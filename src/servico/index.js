// Este é a arquivo da camada de serviço
// Seu objetivo é fornecer funções a serem consumidas

// Importando a base de dados
import { produtos } from "../data/dataProdutos.js";

// Retornando todos os produtos
export const retornaProdutos = () => {
    return produtos;
};

// Filtrando por categoria
export const produtosFiltrados = (item) => {
    return produtos.filter((produto) => produto.categoria === item);
};

// Filtrando busca por categoria ou nome
export const buscaTexto = (item) => {
    return produtos.filter((produto) =>  
        produto.nome.toLowerCase().includes(item.toLowerCase()) ||  
        produto.categoria.toLowerCase().includes(item.toLowerCase()) );
};

// Filtrando busca por categoria ou nome
//export const buscaTexto = (item) => {
//    return produtos.filter((produto) =>  produto.nome === item ||  produto.categoria === item);
//};
