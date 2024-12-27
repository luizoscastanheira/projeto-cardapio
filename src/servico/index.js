// Este é a arquivo da camada de serviço
// Seu objetivo é fornecer funções a serem consumidas

// Importando a base de dados
import { produtos } from "../data/dataProdutos.js";

// Retornando todos os produtos
export const retornaProdutos = () => {
    return produtos;
};

// Filtrando por categoria
export const produtosFiltrados = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria);
};

