import { Component, Input } from '@angular/core';
import { ProdutoInterface } from '../Interface/produto-interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  @Input() ProdutoData!:ProdutoInterface;
}
