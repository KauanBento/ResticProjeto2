import { Component, Input } from '@angular/core';
import { ProdutoInterface } from '../Interface/produto-interface';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  @Input() ProdutoData!:ProdutoInterface;
}
