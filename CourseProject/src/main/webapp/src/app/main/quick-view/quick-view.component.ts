import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.less']
})
export class QuickViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
