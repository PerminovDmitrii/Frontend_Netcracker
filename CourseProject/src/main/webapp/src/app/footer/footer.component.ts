import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { contacts, Item } from './models/contacts';
import { socialNetworks } from './models/social-networks';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  contactsElements: Item[];
  socialNetworksElements: Item[];

  constructor() {
    this.contactsElements = contacts;
    this.socialNetworksElements = socialNetworks;
  }

  ngOnInit(): void {
  }

}
