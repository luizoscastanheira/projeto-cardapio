import Image from "next/image";
import estilos from "./page.module.css";

// Importando Componentes
import Categorias from "@/componentes/Categorias";
import CampoDeBusca from "@/componentes/CampoDeBusca";
import Cards from "@/componentes/Cards";

export default function Home() {
  return (
    <>
      <header className={estilos.containerHeader}>
        <div className={estilos.boxBanner}>
          <h1>RESTAURANT</h1>
          <p>
            De pratos clássicos a criações supreendentes nosso cardápio é um requinte de sabores refinados.
          </p>
        </div>
      </header>

      <main className={estilos.containerMain}>
        <Categorias />
        <CampoDeBusca/>
        <section className={estilos.boxCardapio}>
          <h2>Cardápio</h2>
          <div className={estilos.boxCards}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            
            
            <Cards />
          </div>
        </section>
      </main>
    </>
  );
}
