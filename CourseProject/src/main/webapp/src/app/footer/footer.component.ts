import { Component, OnInit } from '@angular/core';
import { Contacts, Item } from './models/contacts';
import { SocialNetworks } from './models/social-networks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  contactsElements: Item[];
  socialNetworksElements: Item[];

  constructor(private contacts: Contacts, private socialNetworks: SocialNetworks) {
    this.contactsElements = contacts.items;
    this.socialNetworksElements = socialNetworks.items;
  }

  ngOnInit(): void {
  }

}
