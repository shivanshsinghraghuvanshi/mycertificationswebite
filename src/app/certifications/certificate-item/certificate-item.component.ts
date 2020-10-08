import { Component, Input, OnInit } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-certificate-item',
  templateUrl: './certificate-item.component.html',
  styleUrls: ['./certificate-item.component.scss']
})
export class CertificateItemComponent implements OnInit {

  @Input() items: Item[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.items.length);
  }

}


