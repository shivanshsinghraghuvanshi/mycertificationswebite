import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificate-placehlder',
  templateUrl: './certificate-placehlder.component.html',
  styleUrls: ['./certificate-placehlder.component.scss']
})
export class CertificatePlacehlderComponent implements OnInit {

  data: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.data = params.get('id');
    });
  }

}
