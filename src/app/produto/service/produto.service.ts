import { Injectable } from '@angular/core';
import { ProdutoInterface } from '../../Interface/produto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtoList: ProdutoInterface[] = [
    {
      id: 1,
      imagem: "assets/Base.jpeg",
      nome: "Base Líquida Perfect - Fenzza",
      preco: "R$ 27,65",
      descricao: "Para quem busca uma base de Média a Alta Cobertura, com aquele acabamento Natural e toque macio, a Fenzza lançou a opção perfeita! A base Perfect da Fenzza Make Up possui em sua composição Vitamina E que nutre e hidrata a pele, além de ser oil free e ter textura leve. São 6 tons que atendem os mais diferenciados tons de pele.",
      conteudo: "65g",
      unidade: "36 unidades",
      cores: ["bege", "marrom claro", "bege claro", "marrom escuro", "caramelo", "porcelain"]
    },
    {
      id: 2,
      imagem: "assets/Batom.jpeg",
      nome: "Baton Líquido Glitter Booster - Dapop",
      preco: "R$ 25,50",
      descricao: "Prepare-se para um brilho fascinante com o Batom Líquido Meu Brilho Secreto - Glitter Boost! Este batom inovador oferece mais do que apenas cor; ele proporciona um efeito glamouroso e luminoso que transforma seus lábios com um toque mágico.",
      conteudo: "4ml",
      unidade: "48 unidades",
      cores: ["vermelho", "rosado", "dourado", "prata"]
    },
    {
      id: 3,
      imagem: "assets/Batom2.jpeg",
      nome: "Baton Líquido Nude 24Hs - Max love",
      preco: "R$ 23,70",
      descricao: "O Batom Líquido 24 horas Nude Max Love tem textura suave e cremosa e ainda não transfere, não borra e não sai. Acabamento matte.",
      conteudo: "4ml",
      unidade: "52 unidades",
      cores: ["nude"]
    },
    {
      id: 4,
      imagem: "assets/Corretivo.jpeg",
      nome: "Corretivo Líquido Vegano Tons Médios Cores - Adversa",
      preco: "R$ 30,00",
      descricao: "Sem parabenos + efeito matte. Com vitamina E + Ácido Hialurônico + Manteiga de Karité + Extrato de Rosas Brancas + Extrato de Aveia.",
      conteudo: "3,7ml",
      unidade: "32 unidades",
      cores: ["bege claro", "bege escuro", "caramelo"]
    },
    {
      id: 5,
      imagem: "assets/Duo.jpeg",
      nome: "Duo Para Sobrancelha Fiore - Fenzza",
      preco: "R$ 28,10",
      descricao: "O DUO PARA SOBRANCELHAS FIORE é perfeito para deixar suas sobrancelhas alinhadas e lindas. Fácil de aplicar e super pigmentada.",
      conteudo: "80g",
      unidade: "36 unidades",
      cores: ["castanho", "loiro"]
    },
    {
      id: 6,
      imagem: "assets/Esponja.jpeg",
      nome: "Esponja Coxinha Para Maquiagem - Sabrina Sato",
      preco: "R$ 17,75",
      descricao: "Um kit de esponja maravilhoso para levar a todos os lugares, com forma de coxinha com curva você conseguirá aplicar produtos cremosos, em pó e líquidos, podendo alcançar os produtos nas extremidades de mais difícil acesso. São três unidades de esponjas.",
      conteudo: "180g",
      unidade: "58 unidades",
      cores: ["rosa"]
    },
    {
      id: 7,
      imagem: "assets/Gloss.jpeg",
      nome: "Gloss Latex - Max Love",
      preco: "R$ 22,30",
      descricao: "Lip Gloss Látex Max Love translúcido- cor 07 com uma cobertura excelente e um acabamento brilhante, esse batom gloss translúcido adere perfeitamente aos lábios, garantindo um visual deslumbrante e confortável. Possui embalagem transparente e aplicador.",
      conteudo: "5ml",
      unidade: "30 unidades",
      cores: ["translúcido", "vermelho"]
    },
    {
      id: 8,
      imagem: "assets/Gloss2.jpeg",
      nome: "Gloss Lip Volumoso Mágico Love - Max Love",
      preco: "R$ 23,50",
      descricao: "Auxilia na melhora da hidratação e no aumento do volume dos lábios e ainda proporciona um efeito mágico, mudando a cor após a aplicação, variando entre um tom rosado mais claro ou mais escuro dependendo do PH da pele.",
      conteudo: "5ml",
      unidade: "48 unidades",
      cores: ["nude", "pêssego"]
    },
    {
      id: 9,
      imagem: "assets/Mascara.jpeg",
      nome: "Máscara de Cílios Power Fiber Eyelash Mask - Derma Chem",
      preco: "R$ 38,65",
      descricao: "Quer cílios mais encorpados e com curvatura perfeita? A Dermachem criou a máscara “Power Fiber++” que possui um aplicador específico para aumentar a curvatura dos cílios ao mesmo tempo que deposita homogeneamente o produto com fibras aumentando o volume.",
      conteudo: "3,8ml",
      unidade: "32 unidades",
      cores: ["preto"]
    },
    {
      id: 10,
      imagem: "assets/Sombra.jpeg",
      nome: "Paleta De Sombras The Nude - Amor Anjo",
      preco: "R$ 30,50",
      descricao: "Paleta de sombras em tons nude.",
      conteudo: "1120g",
      unidade: "37 unidades",
      cores: ["nude", "marrom", "bege"]
    },
    {
      id: 11,
      imagem: "assets/Po.jpeg",
      nome: "Pó Compacto Matte A Prova D’Água - Max Love",
      preco: "R$ 22,25",
      descricao: "O Pó Compacto Matte à Prova D'Água Max Love sela a maquiagem proporcionando proteção contra umidade e aumentando a durabilidade da maquiagem. Sua textura ultrafina promove um toque aveludado e acabamento matte. Fórmula enriquecida com Vitamina E, que tem ação antioxidante e hidratante.",
      conteudo: "10g",
      unidade: "42 unidades",
      cores: ["translúcido", "bege"]
    }
  ];

  constructor() { }

  getAllProduto(): ProdutoInterface[]{
      return this.produtoList
  }

  getProdutoId(id: number): ProdutoInterface | undefined {
    return this.produtoList.find(produto => produto.id === id)
  }
}
