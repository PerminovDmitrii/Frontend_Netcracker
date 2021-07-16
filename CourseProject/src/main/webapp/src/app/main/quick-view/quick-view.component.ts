import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/state/product.model';

@Component({
  selector: 'app-quick-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.less']
})
export class QuickViewComponent implements OnInit {

  @Input() product: any;

  ngOnInit(): void {
  }

}
