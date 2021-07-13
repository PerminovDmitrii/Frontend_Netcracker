import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization-success',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './authorization-success.component.html',
  styleUrls: ['./authorization-success.component.less']
})
export class AuthorizationSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
