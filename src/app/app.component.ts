import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoInterface } from './Interface/produto-interface';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { CommonModule } from '@angular/common';
import { ProdutoService } from './produto/service/produto.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProdutoComponent, CommonModule, ProdutoDetalheComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P2U5';
  produtoList: ProdutoInterface[] = [];
  produtoService: ProdutoService = inject(ProdutoService);

  constructor() {
    this.produtoList = this.produtoService.getAllProduto();
  }

}
