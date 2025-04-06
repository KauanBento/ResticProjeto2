import { Component, inject } from '@angular/core';
import { ProdutoInterface } from '../Interface/produto-interface';
import { ProdutoService } from '../produto/service/produto.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './produto-detalhe.component.html',
  styleUrl: './produto-detalhe.component.css'
})
export class ProdutoDetalheComponent {
  Produto: ProdutoInterface | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  ProdutoService: ProdutoService = inject(ProdutoService);

  constructor() {
    const id = Number(this.route.snapshot.params['id']);
  }
}
