import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoInterface } from './Interface/produto-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProdutoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P2U5';
  produtoList: ProdutoInterface[] = [
    {
      "id": 1,
      "imagem": "assets/Base.jpeg",
      "nome": "Base Líquida Perfect - Fenzza",
      "preco": "R$ 27,65"
    },
    {
      "id": 2,
      "imagem": "assets/Batom.jpeg",
      "nome": "Baton Líquido Glitter Booster - Dapop",
      "preco": "R$ 25,50"
    },
    {
      "id": 3,
      "imagem": "assets/Batom2.jpeg",
      "nome": "Baton Líquido Nude 24Hs - Max love",
      "preco": "R$ 23,70"
    },
    {
      "id": 4,
      "imagem": "assets/Corretivo.jpeg",
      "nome": "Corretivo Líquido Vegano Tons Médios Cores - Adversa",
      "preco": "R$ 30,00"
    },
    {
      "id": 5,
      "imagem": "assets/Duo.jpeg",
      "nome": "Duo Para Sobrancelha Fiore - Fenzza",
      "preco": "R$ 28,10"
    },
    {
      "id": 6,
      "imagem": "assets/Esponja.jpeg",
      "nome": "Esponja Coxinha Para Maquiagem - Sabrina Sato",
      "preco": "R$ 17,75"
    },
    {
      "id": 7,
      "imagem": "assets/Gloss.jpeg",
      "nome": "Gloss Latex - Max Love",
      "preco": "R$ 22,30"
    },
    {
      "id": 8,
      "imagem": "assets/Gloss2.jpeg",
      "nome": "Gloss Lip Volumoso Mágico Love - Max Love",
      "preco": "R$ 23,50"
    },
    {
      "id": 9,
      "imagem": "assets/Mascara.jpeg",
      "nome": "Máscara de Cílios Power Fiber Eyelash Mask - Derma Chem",
      "preco": "R$ 38,65"
    },
    {
      "id": 10,
      "imagem": "assets/Sombra.jpeg",
      "nome": "Paleta De Sombras The Nude - Amor Anjo",
      "preco": "R$ 30,50"
    },
    {
      "id": 11,
      "imagem": "assets/Po.jpeg",
      "nome": "Pó Compacto Matte A Prova D’Agua - Max Love",
      "preco": "R$ 22,25"
    }
  ]
}
